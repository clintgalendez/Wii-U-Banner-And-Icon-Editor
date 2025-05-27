# Wii U Icon and Banner Editor

Create custom icons and banners for your Wii U applications with ease! This tool provides a simple interface to upload your images, adjust their position and scale, and download them perfectly formatted for the Wii U, complete with the standard overlay templates.

## Features

*   **Icon Editor (128x128):** Upload an image and transform it into a Wii U compatible icon.
*   **Banner Editor (1280x720):** Craft the perfect banner for your application.
*   **Image Manipulation:**
    *   Drag and drop to position your image.
    *   Resize and rotate your image with intuitive controls.
    *   Maintain aspect ratio during transformations.
*   **Template Overlays:** Visual guides ensure your creations align with Wii U standards.
*   **Instant Download:** Get your `wii_u_icon.png` and `wii_u_banner.png` files directly from the browser.
*   **Built with Modern Tech:** Developed using React, Vite, Konva for canvas manipulation, and Material UI for a clean user interface.

## How to Use

1.  **Upload Image:**
    *   Click the "Upload Image" button below either the Icon or Banner preview area.
    *   Select an image file from your computer.
2.  **Adjust Image:**
    *   Click on the uploaded image within the preview area to select it.
    *   Transformation controls will appear.
    *   **Drag** the image to position it.
    *   **Drag the corner anchors** to resize the image (aspect ratio is maintained).
    *   **Drag the top anchor** to rotate the image.
3.  **Download:**
    *   Once you are satisfied with the preview, click the "Download Wii U Icon" or "Download Wii U Banner" button.
    *   The image will be downloaded in the correct dimensions and format.

## Getting Started (Development)

This project was bootstrapped with `create-vite`.

### Prerequisites

*   Node.js (LTS version recommended)
*   npm (comes with Node.js)
*   .NET SDK (for HTTPS certificate generation, as configured in `vite.config.js`)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd wiiubannerandiconeditor.client
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Development Server:**
    The `vite.config.js` is set up to use ASP.NET Core developer certificates for HTTPS.
    *   If you haven't already, ensure you have .NET SDK installed.
    *   The first time you run the dev server, it might attempt to generate these certificates. Follow any prompts.
    *   Start the development server:
        ```bash
        npm run dev
        ```
    *   Open your browser and navigate to the local URL provided by Vite (usually `https://localhost:1863` or similar).

### Available Scripts

*   `npm run dev`: Runs the app in development mode with HMR.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run lint`: Lints the project files using ESLint.
*   `npm run preview`: Serves the production build locally for preview.

## Technologies Used

*   **Frontend:** React, Vite
*   **Image Manipulation:** React Konva, use-image
*   **UI Components:** Material UI
*   **Styling:** Tailwind CSS (via `@tailwindcss/vite`)
*   **Linting:** ESLint

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.
