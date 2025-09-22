import React, { useRef, useState } from "react";
import "./ImageGenerator.css";
import default_image from "../Assets/Robot.png";

function ImageGenerator() {
  const [imageUrl, setImageUrl] = useState("/");
  const [loading, setLoading] = useState(false);
  let inputRef = useRef(null);

  const imageGenerator = async () => {
    if (!inputRef.current.value) return;

    setLoading(true);

    try {
      const HUGGING_FACE_API_KEY = process.env.REACT_APP_HF_API_TOKEN;
      const HUGGING_FACE_MODEL = process.env.REACT_APP_HF_MODEL;
      const response = await fetch(`https://api-inference.huggingface.co/models/${HUGGING_FACE_MODEL}`,
      {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
          Authorization : `Bearer ${HUGGING_FACE_API_KEY}`,
          "User-Agent": "Chrome",
        },
        body: JSON.stringify(
          {
            inputs: inputRef.current.value,
          }
        )
      }
    );
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setImageUrl(imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'generated_image.png'; // Suggest a default name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReset = () => {
    setImageUrl("/");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="image-generator">
      <h2>AI Image Generator</h2>
      <p>Let’s explore the magic of art with the power of AI!</p>

      <img
        src={imageUrl === "/" ? default_image : imageUrl}
        alt="Generated"
        className="default-image"
      />

      <div className="input-container">
        <input
          type="text"
          ref={inputRef}
          placeholder="Describe what you want to see..."
          className="prompt-input"
        />
        <button className="generate-button" onClick={imageGenerator}>
          {loading ? "Generating..." : "Generate Image"}
        </button>
        {imageUrl !== "/" && !loading && (
          <button className="download-button" onClick={handleDownload}>
            Download Image
          </button>
        )}
        {imageUrl !== "/" && !loading && (
          <button className="reset-button" onClick={handleReset}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

export default ImageGenerator;
