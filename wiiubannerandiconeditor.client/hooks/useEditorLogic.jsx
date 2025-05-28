import * as React from 'react';


export function useEditorLogic() {
    const [iconImage, setIconImage] = React.useState(null);
    const [bannerImage, setBannerImage] = React.useState(null);

    // New state for image properties (position, size, scale, rotation)
    const [iconImageProps, setIconImageProps] = React.useState({
        x: 0, y: 0, width: 128, height: 128, scaleX: 1, scaleY: 1, rotation: 0,
    });
    const [bannerImageProps, setBannerImageProps] = React.useState({
        x: 0, y: 0, width: 1280, height: 720, scaleX: 1, scaleY: 1, rotation: 0,
    });

    // State for selected shapes for transformation
    const [selectedIconShape, setSelectedIconShape] = React.useState(null);
    const [selectedBannerShape, setSelectedBannerShape] = React.useState(null);

    const [currentUploadType, setCurrentUploadType] = React.useState(null); // To track 'icon' or 'banner'
    const fileInputRef = React.useRef(null);

    const iconStageRef = React.useRef(null);
    const bannerStageRef = React.useRef(null);

    const handleIconUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const img = new window.Image();
                img.src = reader.result;
                img.onload = () => {
                    setIconImage(img);
                    const stageWidth = 128;
                    const stageHeight = 128;
                    const imgWidth = img.naturalWidth;
                    const imgHeight = img.naturalHeight;
                    const aspectRatio = imgWidth / imgHeight;

                    let newWidth = imgWidth;
                    let newHeight = imgHeight;

                    if (newWidth > stageWidth) {
                        newWidth = stageWidth;
                        newHeight = newWidth / aspectRatio;
                    }
                    if (newHeight > stageHeight) {
                        newHeight = stageHeight;
                        newWidth = newHeight * aspectRatio;
                    }
                    if (newWidth > stageWidth) { // Final check
                        newWidth = stageWidth;
                        newHeight = newWidth / aspectRatio;
                    }


                    setIconImageProps({
                        x: (stageWidth - newWidth) / 2,
                        y: (stageHeight - newHeight) / 2,
                        width: newWidth,
                        height: newHeight,
                        scaleX: 1,
                        scaleY: 1,
                        rotation: 0,
                    });
                    setSelectedIconShape(null);
                };
            };
            reader.readAsDataURL(file);
        }
    };

    const handleBannerUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const img = new window.Image();
                img.src = reader.result;
                img.onload = () => {
                    setBannerImage(img);
                    const stageWidth = 1280; // Keep using export dimensions for props calculation
                    const stageHeight = 720; // Keep using export dimensions for props calculation
                    const imgWidth = img.naturalWidth;
                    const imgHeight = img.naturalHeight;
                    const aspectRatio = imgWidth / imgHeight;

                    let newWidth = imgWidth;
                    let newHeight = imgHeight;

                    if (newWidth > stageWidth) {
                        newWidth = stageWidth;
                        newHeight = newWidth / aspectRatio;
                    }
                    if (newHeight > stageHeight) {
                        newHeight = stageHeight;
                        newWidth = newHeight * aspectRatio;
                    }
                    if (newWidth > stageWidth) { // Final check
                        newWidth = stageWidth;
                        newHeight = newWidth / aspectRatio;
                    }

                    setBannerImageProps({
                        x: (stageWidth - newWidth) / 2,
                        y: (stageHeight - newHeight) / 2,
                        width: newWidth,
                        height: newHeight,
                        scaleX: 1,
                        scaleY: 1,
                        rotation: 0,
                    });
                    setSelectedBannerShape(null);
                };
            };
            reader.readAsDataURL(file);
        }
    };

    // Unified file change handler to be attached to the input element
    const handleFileChange = (event) => {
        // Original handlers (handleIconUpload, handleBannerUpload) will get the file from the event
        if (currentUploadType === 'icon') {
            handleIconUpload(event);
        } else if (currentUploadType === 'banner') {
            handleBannerUpload(event);
        }
        setCurrentUploadType(null); // Reset upload type after handling
        if (fileInputRef.current) { // Clear the file input's value to allow re-selecting the same file
            fileInputRef.current.value = null;
        }
    };

    const triggerIconFileUpload = () => {
        setCurrentUploadType('icon');
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const triggerBannerFileUpload = () => {
        setCurrentUploadType('banner');
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleIconDownload = () => {
        if (iconStageRef.current) {
            // Deselect shape before export to hide transformer
            const previouslySelected = selectedIconShape;
            setSelectedIconShape(null);
            // Ensure deselection is rendered before exporting
            setTimeout(() => {
                const dataURL = iconStageRef.current.toDataURL({
                    mimeType: 'image/png',
                    width: 128,
                    height: 128,
                });
                const link = document.createElement('a');
                link.download = 'wii_u_icon.png';
                link.href = dataURL;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                if (previouslySelected) setSelectedIconShape(previouslySelected); // Reselect if was selected
            }, 50); // Small delay for re-render
        }
    };

    const handleBannerDownload = () => {
        if (bannerStageRef.current) {
            const previouslySelected = selectedBannerShape;
            setSelectedBannerShape(null);
            setTimeout(() => {
                const dataURL = bannerStageRef.current.toDataURL({
                    mimeType: 'image/png',
                    width: 1280, // Export at target resolution
                    height: 720, // Export at target resolution
                });
                const link = document.createElement('a');
                link.download = 'wii_u_banner.png';
                link.href = dataURL;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                if (previouslySelected) setSelectedBannerShape(previouslySelected);
            }, 50);
        }
    };

    return {
        iconImage,
        setIconImage,
        bannerImage,
        setBannerImage,
        iconImageProps,
        setIconImageProps,
        bannerImageProps,
        setBannerImageProps,
        selectedIconShape,
        setSelectedIconShape,
        selectedBannerShape,
        setSelectedBannerShape,
        fileInputRef,
        iconStageRef,
        bannerStageRef,
        triggerIconFileUpload, // Ensure key matches destructuring in EditorManager
        triggerBannerFileUpload, // Ensure key matches destructuring in EditorManager
        handleFileChange, // Export new unified handler
        handleIconDownload,
        handleBannerDownload,
    };
}