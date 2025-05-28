# Wii U Banner and Icon Editor

This project is a web-based tool for creating and editing custom banners and icons for the Wii U console. It allows users to upload images, position and scale them, and then export them in the correct dimensions for use on the Wii U.

## Features

*   **Icon Editor:** Upload and edit 128x128 pixel icons.
*   **Banner Editor:** Upload and edit 1280x720 pixel banners (displayed at 854x480 in the editor).
*   **Image Manipulation:** Drag, resize, and rotate images within the editor.
*   **Template Overlays:** Visual guides to help with placement.
*   **Download Functionality:** Export your creations as image files.

## Project Setup

This project was bootstrapped with `create-vite`.

### Prerequisites

*   Node.js and npm (or yarn)
*   .NET SDK (for development certificate generation, if not already set up)

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd wiiubannerandiconeditor.client
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `yarn dev`

Runs the app in development mode. Open your browser and navigate to the local development server URL provided in the console (typically `https://localhost:1863` or similar).

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build` or `yarn build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run lint` or `yarn lint`

Lints the project files for any code style issues or errors.

### `npm run preview` or `yarn preview`

Serves the production build locally for previewing before deployment.

## Technologies Used

*   React
*   Vite
*   Konva.js (for 2D canvas rendering)
*   Tailwind CSS
*   Lucide React (for icons)

## How to Use

1.  Launch the application using `npm run dev`.
2.  Use the "Upload Icon" or "Upload Banner" buttons to select an image from your computer.
3.  The image will appear in the respective editor (Icon on the left, Banner on the right).
4.  Click on an image to select it. A transformer tool will appear, allowing you to:
    *   Drag the image to reposition it.
    *   Drag the corner anchors to resize the image (aspect ratio is maintained).
    *   Drag the top anchor to rotate the image.
5.  Once you are satisfied with the placement and size, click the "Download Icon" or "Download Banner" button to save the image.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.
