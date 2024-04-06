import { create } from 'zustand';

import image6 from "../assets/image6.jpg";
import image from "../assets/image.jpeg";

interface Store {
    sliderPosition: number;
    activeImage: number;
    images: any[];
    id: string;
    update: (item: string, value: any) => void;
    clear: () => void;
}

const useSlider = create<Store>((set) => ({
    sliderPosition: 0,
    activeImage: 0,
    images: [image, image6, image, image6, image, image6, image, image6, image, image6, image, image6, image, image6, image, image6],
    id: "",
    update: (item: string, value: any) => set({
        [item]: value
    }),
    clear: () => set({
        sliderPosition: 0,
        activeImage: 0,
        images: [image, image6, image, image6, image, image6, image, image6, image, image6, image, image6, image, image6, image, image6],
        id: "",
    })
}))

export default useSlider;