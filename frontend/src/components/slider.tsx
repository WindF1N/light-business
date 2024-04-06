import React from "react";
import useSlider from "../hooks/useSlider";

export default function Slider() {
    const imagesDivRef = React.createRef<HTMLDivElement>();
    const imagesCountDivRef = React.createRef<HTMLDivElement>();
    const imagesScrollBarDivRef = React.createRef<HTMLDivElement>();
    const slider = useSlider();
    const handleScroll = (): void => {
        if (imagesDivRef.current) {
            const scrollLeft: number = imagesDivRef.current.scrollLeft;
            const offsetWidth: number = window.innerWidth;
            const scrollPosition: number = Math.max(0, Math.floor(scrollLeft / offsetWidth)) + 1;
            if (imagesCountDivRef.current) {
                imagesCountDivRef.current.innerHTML = `${scrollPosition}/${slider.images.length}`;
            };
            slider.update("sliderPosition", scrollLeft / imagesDivRef.current.scrollWidth * 100);
            if (imagesScrollBarDivRef.current) {
                imagesScrollBarDivRef.current.style.width = `${100/slider.images.length}%`;
                imagesScrollBarDivRef.current.style.marginLeft = `${scrollLeft / imagesDivRef.current.scrollWidth * 100}%`;
            };
            for (var i in slider.images) {
                if (Number(i) + 1 == scrollPosition) {
                    slider.update("activeImage", Number(i));
                };
            };
        };
    };
    React.useEffect(() => {
        if (imagesDivRef.current && slider.images.length > 0) {
            imagesDivRef.current.addEventListener('scroll', handleScroll);
        };
        if (imagesCountDivRef.current) {
            const text: string = imagesCountDivRef.current.innerHTML;
            const slashIndex: number = text.indexOf('/');

            if (slashIndex !== -1) {
                const firstPart: string = text.slice(0, slashIndex + 1);
                const secondPart: string = `${slider.images.length}`;
                imagesCountDivRef.current.innerHTML = firstPart + secondPart;
            }
        };
        if (imagesScrollBarDivRef.current) {
            imagesScrollBarDivRef.current.style.width = `${100/slider.images.length}%`;
            imagesScrollBarDivRef.current.style.marginLeft = `${slider.sliderPosition}%`;
        };
        return (): void => {
            if (imagesDivRef.current && slider.images.length > 0) {
                imagesDivRef.current.removeEventListener('scroll', handleScroll);
            };
        };
    }, [imagesDivRef, slider.images]);
    React.useEffect(() => {
        slider.clear();
        slider.update("id", "slider1");
    }, [slider.id])
    return (
        <div className="relative w-full">
            <div className="flex flex-start w-full overflow-x-auto no-scrollbar" ref={imagesDivRef} id="slider1">
                {slider.images.map((image: any, index: number) => (
                    <div className="w-[100%] h-[70vw] max-h-[300px] shrink-0" key={index}>
                        <img src={image} alt="" className="w-[100%] h-[100%]" style={{objectFit: "cover"}}/>
                    </div>
                ))}
            </div>
            <div className="absolute top-[2.5vw] left-0 w-full flex justify-center items-center">
                <div ref={imagesCountDivRef} className="bg-[rgba(17,17,17,0.9)] py-[2px] px-[5px] rounded-[4px] text-[11px] text-white">1/{slider.images.length}</div>
            </div>
            <div className="absolute bottom-[10px] mx-[10px] h-[3px] rounded-[3px] overflow-hidden bg-[rgba(51,51,51,0.5)]" style={{width: "calc(100% - 20px)"}}>
                <div ref={imagesScrollBarDivRef} className="h-full w-[33.333%] bg-white rounded-[3px]"></div>
            </div>
        </div>
    )
}