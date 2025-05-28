import * as React from 'react';

import { Stage, Layer, Image, Rect, Transformer } from 'react-konva'; // Added Transformer
import useImage from 'use-image';

function App(props) {
    const {
        iconImage, bannerImage, iconImageProps, bannerImageProps,
        selectedIconShape, setSelectedIconShape,
        selectedBannerShape, setSelectedBannerShape,
        iconStageRef, bannerStageRef, setIconImageProps,
        setBannerImageProps
        // Note: fileInputRef is not directly used by App in this structure,
        // but managed by EditorManager and useEditorLogic.
        // If App needs to trigger file input, it would be via a callback prop.
    } = props;

    const [iconOverlay] = useImage(`${import.meta.env.BASE_URL}/templates/wii_u_icon_template.png`);
    const [bannerOverlay] = useImage(`${import.meta.env.BASE_URL}/templates/wii_u_banner_template.png`);

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
        <div className="w-full h-auto items-center justify-center inline-grid grid-cols-[max-content_max-content] gap-25">
            <Stage
                ref={iconStageRef}
                width={128}
                height={128}
                className="shadow-xl"
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
            <Stage
                ref={bannerStageRef}
                width={displayWidth} // Use display dimensions
                height={displayHeight} // Use display dimensions
                // Removed Stage scaling props
                className="shadow-xl"
                onMouseDown={handleStageMouseDown}
                onTap={handleStageMouseDown} // For touch devices
            >
                <Layer>
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
        </div>
    );
}

export default App;