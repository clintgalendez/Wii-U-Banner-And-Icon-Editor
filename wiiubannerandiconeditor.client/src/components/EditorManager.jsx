import * as React from 'react';
import { useEditorLogic } from '../../hooks/useEditorLogic.jsx';
import App from './App.jsx'; // Path to your App component
import ButtonControlSection from './ButtonControlSection.jsx'; // Path to your ButtonControlSection

export default function EditorManager() {
    const {
        // State for App
        iconImage, bannerImage, iconImageProps, bannerImageProps,
        setIconImageProps, setBannerImageProps,
        selectedIconShape, setSelectedIconShape, // Assuming App might still need to set these via callbacks
        selectedBannerShape, setSelectedBannerShape,

        // Refs for App (and file input)
        iconStageRef, bannerStageRef, fileInputRef,

        // Functions for ButtonControlSection
        triggerIconFileUpload, triggerBannerFileUpload,
        handleIconDownload, handleBannerDownload,
        handleFileChange, // Import the new unified handler
    } = useEditorLogic();

    return (
        <>
            <ButtonControlSection
                onUploadIcon={triggerIconFileUpload}
                onDownloadIcon={handleIconDownload}
                onUploadBanner={triggerBannerFileUpload}
                onDownloadBanner={handleBannerDownload}
            />
            <App
                // Pass all necessary props that App now needs
                iconImage={iconImage}
                bannerImage={bannerImage}
                iconImageProps={iconImageProps}
                bannerImageProps={bannerImageProps}
                selectedIconShape={selectedIconShape}
                setSelectedIconShape={setSelectedIconShape}
                selectedBannerShape={selectedBannerShape}
                setSelectedBannerShape={setSelectedBannerShape}
                iconStageRef={iconStageRef}
                bannerStageRef={bannerStageRef}

                // Pass handlers for Konva events
                setIconImageProps={setIconImageProps}
                setBannerImageProps={setBannerImageProps}
            />
            {/* Hidden file input, controlled by the hook via fileInputRef */}
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange} // Assign the new static handler here
            />
        </>
    );
}
