import React from "react";
import useSlider from "../hooks/useSlider";

export default function MiniSlider() {
    const activeImageRef = React.createRef<HTMLDivElement>();
    const sliderRef = React.createRef<HTMLDivElement>();
    const slider = useSlider();
    const handleClick = (i:number) => {
        const element: any = document.getElementById(slider.id);
        if (document.getElementById(slider.id)) {
            element.scrollLeft = window.innerWidth * i;
        };
    };
    React.useEffect(() => {
        if (activeImageRef.current) {
            activeImageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        };
    }, [slider.activeImage])
    return (
        <div>
            <div className="flex flex-start w-full overflow-x-auto no-scrollbar gap-[5px] p-[5px]" ref={sliderRef}>
                {slider.images.map((image: any, index: number) => (
                    <div className={`w-[65px] h-[45px] shrink-0 rounded-[6px] ${slider.activeImage == index && "border-2 border-[hsl(var(--foreground))]"}`} key={index} ref={slider.activeImage == index ? activeImageRef : null} onClick={() => handleClick(index)}>
                        <img src={image} alt="" className="w-[100%] h-[100%] rounded-[4px]" style={{objectFit: "cover"}}/>
                    </div>
                ))}
            </div>
        </div>
    )
}