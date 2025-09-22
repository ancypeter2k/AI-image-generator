# AI Image Generator App

This is a React-based AI Image Generator application that allows users to generate images from text prompts using the Hugging Face Inference API.

## Features

*   **Text-to-Image Generation**: Input a text prompt and generate a corresponding image.
*   **Hugging Face Integration**: Utilizes the Hugging Face Inference API for AI image generation.
*   **Secure API Key Management**: Uses `.env` file for storing sensitive API keys.
*   **Dynamic Background**: Interactive animated gradient background.
*   **Responsive Design**: Input container adjusts to screen size.
*   **Enhanced UI**: Improved font styling and an interactive generate button.

## Setup and Installation

Follow these steps to get the project up and running on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/ancypeter2k/AI-image-generator.git
cd image-generator-ai
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory of your project (same level as `package.json`) and add your Hugging Face API token and model name:

```env
REACT_APP_HF_API_TOKEN=YOUR_HUGGING_FACE_API_KEY
REACT_APP_HF_MODEL=black-forest-labs/FLUX.1-dev
```

Replace `YOUR_HUGGING_FACE_API_KEY` with your actual API token obtained from Hugging Face.

### 4. Run the Application

```bash
npm start
```

The application will typically run on `http://localhost:3000`. If port 3000 is already in use, you will be prompted to run it on a different port.

## Usage

1.  Enter a descriptive text prompt into the input field.
2.  Click the "Generate Image" button.
3.  The generated image will be displayed on the screen.

## Project Structure

*   `public/`: Contains public assets like `index.html` and `manifest.json`.
*   `src/`: Contains the main React application code.
    *   `src/App.js`: Main application component.
    *   `src/Components/ImageGenerator/ImageGenerator.jsx`: Core component for image generation logic and UI.
    *   `src/Components/ImageGenerator/ImageGenerator.css`: Styling for the image generator component.

## Technologies Used

*   React
*   Hugging Face Inference API
*   CSS3 (Animations, Flexbox)

## Contributing

Feel free to fork the repository, open issues, or submit pull requests.