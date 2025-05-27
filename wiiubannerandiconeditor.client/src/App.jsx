import * as React from 'react';
import { Stage, Layer, Image, Rect, Transformer } from 'react-konva'; // Added Transformer
import useImage from 'use-image';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function App() {
    const [iconOverlay] = useImage('/templates/wii_u_icon_template.png');
    const [bannerOverlay] = useImage('/templates/wii_u_banner_template.png');

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

    const fileInputRef = React.useRef(null);

    const iconStageRef = React.useRef(null);
    const bannerStageRef = React.useRef(null);

    // Refs for Konva Image and Transformer nodes
    const iconImageKonvaRef = React.useRef(null);
    const iconTransformerKonvaRef = React.useRef(null);
    const bannerImageKonvaRef = React.useRef(null);
    const bannerTransformerKonvaRef = React.useRef(null);

    // Display and export dimensions for banner
    const displayWidth = 854;
    const displayHeight = 480;
    const exportWidth = 1280;
    const exportHeight = 720;
    const scaleRatioX = displayWidth / exportWidth;
    const scaleRatioY = displayHeight / exportHeight;

    // Effect to attach/detach transformer for icon
    React.useEffect(() => {
        if (selectedIconShape && iconTransformerKonvaRef.current) {
            iconTransformerKonvaRef.current.nodes([selectedIconShape]);
            iconTransformerKonvaRef.current.getLayer().batchDraw();
        } else if (iconTransformerKonvaRef.current) {
            iconTransformerKonvaRef.current.nodes([]);
            iconTransformerKonvaRef.current.getLayer()?.batchDraw();
        }
    }, [selectedIconShape]);

    // Effect to attach/detach transformer for banner
    React.useEffect(() => {
        if (selectedBannerShape && bannerTransformerKonvaRef.current) {
            bannerTransformerKonvaRef.current.nodes([selectedBannerShape]);
            bannerTransformerKonvaRef.current.getLayer().batchDraw();
        } else if (bannerTransformerKonvaRef.current) {
            bannerTransformerKonvaRef.current.nodes([]);
            bannerTransformerKonvaRef.current.getLayer()?.batchDraw();
        }
    }, [selectedBannerShape]);

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

    const triggerIconFileUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = null;
            fileInputRef.current.onchange = handleIconUpload;
            fileInputRef.current.click();
        }
    };

    const triggerBannerFileUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = null;
            fileInputRef.current.onchange = handleBannerUpload;
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

    const handleIconDragEnd = (e) => {
        const node = iconImageKonvaRef.current;
        if (node) {
            setIconImageProps(prevProps => ({
                ...prevProps,
                x: node.x(),
                y: node.y(),
            }));
        }
    };

    const handleBannerDragEnd = (e) => {
        const node = bannerImageKonvaRef.current;
        if (node) {
            setBannerImageProps(prevProps => ({
                ...prevProps,
                x: node.x() / scaleRatioX, // Convert display x to export x
                y: node.y() / scaleRatioY, // Convert display y to export y
            }));
        }
    };

    const handleIconTransformEnd = (e) => {
        const node = iconImageKonvaRef.current;
        if (node) {
            setIconImageProps(prevProps => ({
                ...prevProps,
                x: node.x(),
                y: node.y(),
                scaleX: node.scaleX(),
                scaleY: node.scaleY(),
                rotation: node.rotation(),
            }));
        }
    };

    const handleBannerTransformEnd = (e) => {
        const node = bannerImageKonvaRef.current;
        if (node) {
            setBannerImageProps(prevProps => ({
                ...prevProps,
                x: node.x() / scaleRatioX, // Convert display x to export x
                y: node.y() / scaleRatioY, // Convert display y to export y
                scaleX: node.scaleX() / scaleRatioX, // Convert display scaleX to export scaleX
                scaleY: node.scaleY() / scaleRatioY, // Convert display scaleY to export scaleY
                rotation: node.rotation(),
            }));
        }
    };

    const handleStageMouseDown = (e) => {
        const target = e.target;
        // Deselect if clicked on empty area of the stage or the background rect
        const clickedOnEmpty = target === target.getStage() || target.hasName('background-rect');
        if (clickedOnEmpty) {
            setSelectedIconShape(null);
            setSelectedBannerShape(null);
        }
    };


    return (
        <Stack direction="row" spacing={2} className="w-full h-auto" sx={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Stack spacing={2} sx={{ alignItems: 'center' }}>
                    <Stage
                        ref={iconStageRef}
                        width={128}
                        height={128}
                        className="border border-gray-500 shadow-xl"
                        onMouseDown={handleStageMouseDown}
                        onTap={handleStageMouseDown} // For touch devices
                    >
                        <Layer>
                            <Rect
                                name="background-rect" // Name for easier identification in event handling
                                width={128}
                                height={128}
                                fill="white"
                            />
                            {iconImage && (
                                <Image
                                    ref={iconImageKonvaRef}
                                    image={iconImage}
                                    {...iconImageProps}
                                    draggable
                                    onDragEnd={handleIconDragEnd}
                                    onTransformEnd={handleIconTransformEnd}
                                    onClick={(e) => {
                                        e.cancelBubble = true; // Prevent stage click
                                        setSelectedIconShape(iconImageKonvaRef.current);
                                        setSelectedBannerShape(null);
                                    }}
                                    onTap={(e) => { // For touch devices
                                        e.cancelBubble = true;
                                        setSelectedIconShape(iconImageKonvaRef.current);
                                        setSelectedBannerShape(null);
                                    }}
                                />
                            )}
                            {selectedIconShape && (
                                <Transformer
                                    ref={iconTransformerKonvaRef}
                                    boundBoxFunc={(oldBox, newBox) => {
                                        if (newBox.width < 10 || newBox.height < 10) {
                                            return oldBox;
                                        }
                                        return newBox;
                                    }}
                                    keepRatio={true}
                                />
                            )}
                            <Image
                                image={iconOverlay}
                                width={128}
                                height={128}
                                x={0}
                                y={0}
                                listening={false} // Overlay should not interfere with interaction
                            />
                        </Layer>
                    </Stage>
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                    />
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                        <Button onClick={triggerIconFileUpload}>Upload Image</Button>
                        <Button onClick={handleIconDownload}>Download Wii U Icon</Button>
                    </ButtonGroup>
                </Stack>
            <Stack spacing={2} sx={{
                    alignItems: 'center'
                }}>
                    <Stage
                        ref={bannerStageRef}
                        width={displayWidth} // Use display dimensions
                        height={displayHeight} // Use display dimensions
                        // Removed Stage scaling props
                        className="border border-gray-500 shadow-xl"
                        onMouseDown={handleStageMouseDown}
                        onTap={handleStageMouseDown} // For touch devices
                    >
                        <Layer // Removed Layer scaling props
                        >
                            <Rect
                                name="background-rect"
                                width={displayWidth} // Use display dimensions
                                height={displayHeight} // Use display dimensions
                                fill="white"
                            />
                            {bannerImage && (
                                <Image
                                    ref={bannerImageKonvaRef}
                                    image={bannerImage}
                                    // Apply scaling for display
                                    x={bannerImageProps.x * scaleRatioX}
                                    y={bannerImageProps.y * scaleRatioY}
                                    width={bannerImageProps.width} // Base width from props (export dimensions)
                                    height={bannerImageProps.height} // Base height from props (export dimensions)
                                    scaleX={bannerImageProps.scaleX * scaleRatioX}
                                    scaleY={bannerImageProps.scaleY * scaleRatioY}
                                    rotation={bannerImageProps.rotation}
                                    draggable
                                    onDragEnd={handleBannerDragEnd}
                                    onTransformEnd={handleBannerTransformEnd}
                                    onClick={(e) => {
                                        e.cancelBubble = true;
                                        setSelectedBannerShape(bannerImageKonvaRef.current);
                                        setSelectedIconShape(null);
                                    }}
                                    onTap={(e) => { // For touch devices
                                        e.cancelBubble = true;
                                        setSelectedBannerShape(bannerImageKonvaRef.current);
                                        setSelectedIconShape(null);
                                    }}
                                />
                            )}
                            {selectedBannerShape && (
                                <Transformer
                                    ref={bannerTransformerKonvaRef}
                                    boundBoxFunc={(oldBox, newBox) => {
                                        // These bounds are in display pixels
                                        if (newBox.width < 20 || newBox.height < 20) {
                                            return oldBox;
                                        }
                                        return newBox;
                                    }}
                                    keepRatio={true}
                                />
                            )}
                            <Image
                                image={bannerOverlay}
                                width={displayWidth} // Use display dimensions
                                height={displayHeight} // Use display dimensions
                                x={0}
                                y={0}
                                listening={false}
                            />
                        </Layer>
                    </Stage>
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                        <Button onClick={triggerBannerFileUpload}>Upload Image</Button>
                        <Button onClick={handleBannerDownload}>Download Wii U Banner</Button>
                    </ButtonGroup>
                </Stack>
        </Stack>
    );
}

export default App;