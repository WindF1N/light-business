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
    const scrollToLeft = (): void => {
        if (sliderRef.current) {
            const startTime = performance.now();
            const duration = 300; // Длительность анимации в миллисекундах
            const startPosition = sliderRef.current.scrollLeft;
            const endPosition = 0;

            const animateScroll = (currentTime :any) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentPosition = startPosition + (endPosition - startPosition) * progress;

            if (sliderRef.current) {
                sliderRef.current.scrollLeft = currentPosition;
            }

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
            };

            requestAnimationFrame(animateScroll);
        }
    }
    React.useEffect(() => {
        if (activeImageRef.current) {
            activeImageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        };
        if (slider.activeImage < 3 && sliderRef.current) {
            scrollToLeft();
        }
    }, [slider.activeImage, sliderRef])

    return (
        <div>
            <div className="flex flex-start w-full overflow-x-auto no-scrollbar gap-[5px] p-[5px]" ref={sliderRef}>
                {slider.images.map((image: any, index: number) => (
                    <div className={`w-[15vw] h-[10vw] shrink-0 rounded-[6px] ${slider.activeImage == index && "border-2 border-[hsl(var(--foreground))]"}`} key={index} ref={slider.activeImage == index ? activeImageRef : null} onClick={() => handleClick(index)}>
                        <img src={image} alt="" className="w-[100%] h-[100%] rounded-[4px]" style={{objectFit: "cover"}}/>
                    </div>
                ))}
            </div>
        </div>
    )
}