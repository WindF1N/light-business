import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import image from "../assets/image.jpeg";
import image6 from "../assets/image6.jpg";
import image1 from "../assets/motorcycle.jpeg";
import image2 from "../assets/dom-na-kolesah.jpeg";

export default function Home() {
    const navigate = useNavigate();
    const [ category, setCategory ] = React.useState<String>("transports");
    const [ subCategory, setSubCategory ] = React.useState<String>("line");
    return (
        <div className="w-full flex flex-col gap-[10px] pb-[10vh]">
            <div className="overflow-x-auto flex gap-[10px] no-scrollbar px-[10px] pt-[10px]">
                <Button variant="secondary" 
                        onClick={() => setCategory("transports")}
                        className={`font-light text-left p-[10px] h-auto hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] ${ category === "transports" && "bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"}`}>
                            Транспорт<br/>для путешествий
                </Button>
                <Button variant="secondary" 
                        onClick={() => setCategory("guide")}
                        className={`font-light text-left p-[10px] h-auto hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] ${ category === "guide" && "bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"}`}>
                            Гид по<br/>Краснодарскому краю
                </Button>
                <Button variant="secondary" 
                        onClick={() => setCategory("client-route")}
                        className={`font-light text-left p-[10px] h-auto hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] ${ category === "client-route" && "bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"}`}>
                            Выбрать<br/>свой маршрут
                </Button>
                <Button variant="secondary" 
                        onClick={() => setCategory("popular-routes")}
                        className={`font-light text-left p-[10px] h-auto hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] ${ category === "popular-routes" && "bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"}`}>
                            Популярные<br/>направления
                </Button>
                <Button variant="secondary" 
                        onClick={() => setCategory("hotels")}
                        className={`font-light text-left p-[10px] h-auto hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] ${ category === "hotels" && "bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"}`}>
                            Отели, кепминги,<br/>гостиницы
                </Button>
                <Button variant="secondary" 
                        onClick={() => setCategory("unique-route")}
                        className={`font-light text-left p-[10px] h-auto hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] ${ category === "unique-route" && "bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"}`}>
                            Индивидуальный<br/>маршрут
                </Button>
                <Button variant="secondary" 
                        onClick={() => setCategory("caravaning")}
                        className={`font-light text-left p-[10px] h-auto hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] ${ category === "caravaning" && "bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"}`}>
                            Караванинг
                </Button>
                <Button variant="secondary" 
                        onClick={() => setCategory("autostop")}
                        className={`font-light text-left p-[10px] h-auto hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] ${ category === "autostop" && "bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"}`}>
                            Автостопом
                </Button>
            </div>
            <div className="overflow-x-auto flex gap-[10px] no-scrollbar px-[10px]">
                <Button variant="secondary" 
                        onClick={() => setSubCategory("line")}
                        className={`font-light hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] ${ subCategory === "line" && "bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"}`}>
                            Лента
                </Button>
                <Button variant="secondary" 
                        onClick={() => setSubCategory("autos")}
                        className={`font-light hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] ${ subCategory === "autos" && "bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"}`}>
                            Автомобили
                </Button>
                <Button variant="secondary" 
                        onClick={() => setSubCategory("motorcycles")}
                        className={`font-light hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] ${ subCategory === "motorcycles" && "bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"}`}>
                            Мотоциклы
                </Button>
                <Button variant="secondary" 
                        onClick={() => setSubCategory("autohouse")}
                        className={`font-light hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] ${ subCategory === "autohouse" && "bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"}`}>
                            Автодома
                </Button>
                <Button variant="secondary" 
                        onClick={() => setSubCategory("trailer")}
                        className={`font-light hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] ${ subCategory === "trailer" && "bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"}`}>
                            Прицеп-дача
                </Button>
            </div>
            <div className="text-[28px] px-[10px] pt-[10px]">
                {subCategory === "line" && "Лента"}
                {subCategory === "autos" && "Автомобили"}
                {subCategory === "motorcycles" && "Мотоциклы"}
                {subCategory === "autohouse" && "Автодома"}
                {subCategory === "trailer" && "Прицеп-дача"}
            </div>
            {subCategory === "line" &&
            <div className="flex flex-wrap px-[10px] gap-[5px]">
                <div className="relative w-[calc(50%-2.5px)] h-[35vw] max-h-[150px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[32%] w-full bottom-0 left-0 bg-[rgba(24,24,26,0.5)] py-[5px] px-[10px] backdrop-blur-[3px] rounded-[8px]">
                        <div className="text-white text-[11px]">от 2 500 ₽/сутки</div>
                        <div className="text-white text-[13px] text-nowrap truncate overflow-hidden">Ford Mustang 2020</div>
                    </div>
                </div>
                <div className="relative w-[calc(50%-2.5px)] h-[35vw] max-h-[150px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image6} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[32%] w-full bottom-0 left-0 bg-[rgba(24,24,26,0.5)] py-[5px] px-[10px] backdrop-blur-[3px] rounded-[8px]">
                        <div className="text-white text-[11px]">от 2 500 ₽/сутки</div>
                        <div className="text-white text-[13px] text-nowrap truncate overflow-hidden">Hobi Siesta a70 GM 2.5 AT, 2022</div>
                    </div>
                </div>
                <div className="relative w-[100%] h-[66vw] max-h-[300px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image6} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[40%] w-full bottom-0 left-0 p-[10px] rounded-[8px] flex flex-col justify-end"
                         style={{background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 1) 100%)"}}>
                        <div className="text-white text-[14px]">от 50 000 ₽/сутки</div>
                        <div className="text-white text-[18px] text-nowrap truncate overflow-hidden">Hobi Siesta a70 GM 2.5 AT, 2022</div>
                    </div>
                </div>
                <div className="relative w-[calc(50%-2.5px)] h-[35vw] max-h-[150px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[32%] w-full bottom-0 left-0 bg-[rgba(24,24,26,0.5)] py-[5px] px-[10px] backdrop-blur-[3px] rounded-[8px]">
                        <div className="text-white text-[11px]">от 2 500 ₽/сутки</div>
                        <div className="text-white text-[13px] text-nowrap truncate overflow-hidden">Jeep Wrangler</div>
                    </div>
                </div>
                <div className="relative w-[calc(50%-2.5px)] h-[35vw] max-h-[150px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[32%] w-full bottom-0 left-0 bg-[rgba(24,24,26,0.5)] py-[5px] px-[10px] backdrop-blur-[3px] rounded-[8px]">
                        <div className="text-white text-[11px]">от 2 500 ₽/сутки</div>
                        <div className="text-white text-[13px] text-nowrap truncate overflow-hidden">BMW X5</div>
                    </div>
                </div>
            </div>}
            {subCategory === "autos" &&
            <div className="flex flex-wrap px-[10px] gap-[5px]">
                <div className="relative w-[calc(50%-2.5px)] h-[35vw] max-h-[150px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[32%] w-full bottom-0 left-0 bg-[rgba(24,24,26,0.5)] py-[5px] px-[10px] backdrop-blur-[3px] rounded-[8px]">
                        <div className="text-white text-[11px]">от 2 500 ₽/сутки</div>
                        <div className="text-white text-[13px] text-nowrap truncate overflow-hidden">Ford Mustang 2020</div>
                    </div>
                </div>
                <div className="relative w-[calc(50%-2.5px)] h-[35vw] max-h-[150px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[32%] w-full bottom-0 left-0 bg-[rgba(24,24,26,0.5)] py-[5px] px-[10px] backdrop-blur-[3px] rounded-[8px]">
                        <div className="text-white text-[11px]">от 2 500 ₽/сутки</div>
                        <div className="text-white text-[13px] text-nowrap truncate overflow-hidden">Hobi Siesta a70 GM 2.5 AT, 2022</div>
                    </div>
                </div>
                <div className="relative w-[100%] h-[66vw] max-h-[300px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[40%] w-full bottom-0 left-0 p-[10px] rounded-[8px] flex flex-col justify-end"
                         style={{background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 1) 100%)"}}>
                        <div className="text-white text-[14px]">от 50 000 ₽/сутки</div>
                        <div className="text-white text-[18px] text-nowrap truncate overflow-hidden">Hobi Siesta a70 GM 2.5 AT, 2022</div>
                    </div>
                </div>
                <div className="relative w-[calc(50%-2.5px)] h-[35vw] max-h-[150px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[32%] w-full bottom-0 left-0 bg-[rgba(24,24,26,0.5)] py-[5px] px-[10px] backdrop-blur-[3px] rounded-[8px]">
                        <div className="text-white text-[11px]">от 2 500 ₽/сутки</div>
                        <div className="text-white text-[13px] text-nowrap truncate overflow-hidden">Jeep Wrangler</div>
                    </div>
                </div>
                <div className="relative w-[calc(50%-2.5px)] h-[35vw] max-h-[150px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[32%] w-full bottom-0 left-0 bg-[rgba(24,24,26,0.5)] py-[5px] px-[10px] backdrop-blur-[3px] rounded-[8px]">
                        <div className="text-white text-[11px]">от 2 500 ₽/сутки</div>
                        <div className="text-white text-[13px] text-nowrap truncate overflow-hidden">BMW X5</div>
                    </div>
                </div>
            </div>}
            {subCategory === "motorcycles" &&
            <div className="flex flex-wrap px-[10px] gap-[5px]">
                <div className="relative w-[calc(50%-2.5px)] h-[35vw] max-h-[150px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image1} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[32%] w-full bottom-0 left-0 bg-[rgba(24,24,26,0.5)] py-[5px] px-[10px] backdrop-blur-[3px] rounded-[8px]">
                        <div className="text-white text-[11px]">от 2 500 ₽/сутки</div>
                        <div className="text-white text-[13px] text-nowrap truncate overflow-hidden">Harley Devidson</div>
                    </div>
                </div>
                <div className="relative w-[calc(50%-2.5px)] h-[35vw] max-h-[150px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image1} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[32%] w-full bottom-0 left-0 bg-[rgba(24,24,26,0.5)] py-[5px] px-[10px] backdrop-blur-[3px] rounded-[8px]">
                        <div className="text-white text-[11px]">от 2 500 ₽/сутки</div>
                        <div className="text-white text-[13px] text-nowrap truncate overflow-hidden">Harley Devidson</div>
                    </div>
                </div>
                <div className="relative w-[100%] h-[66vw] max-h-[300px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image1} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[40%] w-full bottom-0 left-0 p-[10px] rounded-[8px] flex flex-col justify-end"
                         style={{background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 1) 100%)"}}>
                        <div className="text-white text-[14px]">от 50 000 ₽/сутки</div>
                        <div className="text-white text-[18px] text-nowrap truncate overflow-hidden">Harley Devidson</div>
                    </div>
                </div>
                <div className="relative w-[calc(50%-2.5px)] h-[35vw] max-h-[150px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image1} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[32%] w-full bottom-0 left-0 bg-[rgba(24,24,26,0.5)] py-[5px] px-[10px] backdrop-blur-[3px] rounded-[8px]">
                        <div className="text-white text-[11px]">от 2 500 ₽/сутки</div>
                        <div className="text-white text-[13px] text-nowrap truncate overflow-hidden">Harley Devidson</div>
                    </div>
                </div>
                <div className="relative w-[calc(50%-2.5px)] h-[35vw] max-h-[150px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image1} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[32%] w-full bottom-0 left-0 bg-[rgba(24,24,26,0.5)] py-[5px] px-[10px] backdrop-blur-[3px] rounded-[8px]">
                        <div className="text-white text-[11px]">от 2 500 ₽/сутки</div>
                        <div className="text-white text-[13px] text-nowrap truncate overflow-hidden">Harley Devidson</div>
                    </div>
                </div>
            </div>}
            {subCategory === "autohouse" &&
            <div className="flex flex-wrap px-[10px] gap-[5px]">
                <div className="relative w-[calc(50%-2.5px)] h-[35vw] max-h-[150px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image6} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[32%] w-full bottom-0 left-0 bg-[rgba(24,24,26,0.5)] py-[5px] px-[10px] backdrop-blur-[3px] rounded-[8px]">
                        <div className="text-white text-[11px]">от 2 500 ₽/сутки</div>
                        <div className="text-white text-[13px] text-nowrap truncate overflow-hidden">Автодом Sunlight A</div>
                    </div>
                </div>
                <div className="relative w-[calc(50%-2.5px)] h-[35vw] max-h-[150px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image6} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[32%] w-full bottom-0 left-0 bg-[rgba(24,24,26,0.5)] py-[5px] px-[10px] backdrop-blur-[3px] rounded-[8px]">
                        <div className="text-white text-[11px]">от 2 500 ₽/сутки</div>
                        <div className="text-white text-[13px] text-nowrap truncate overflow-hidden">Автодом Sunlight A</div>
                    </div>
                </div>
                <div className="relative w-[100%] h-[66vw] max-h-[300px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image6} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[40%] w-full bottom-0 left-0 p-[10px] rounded-[8px] flex flex-col justify-end"
                         style={{background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 1) 100%)"}}>
                        <div className="text-white text-[14px]">от 50 000 ₽/сутки</div>
                        <div className="text-white text-[18px] text-nowrap truncate overflow-hidden">Автодом Sunlight A</div>
                    </div>
                </div>
                <div className="relative w-[calc(50%-2.5px)] h-[35vw] max-h-[150px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image6} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[32%] w-full bottom-0 left-0 bg-[rgba(24,24,26,0.5)] py-[5px] px-[10px] backdrop-blur-[3px] rounded-[8px]">
                        <div className="text-white text-[11px]">от 2 500 ₽/сутки</div>
                        <div className="text-white text-[13px] text-nowrap truncate overflow-hidden">Автодом Sunlight A</div>
                    </div>
                </div>
                <div className="relative w-[calc(50%-2.5px)] h-[35vw] max-h-[150px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image6} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[32%] w-full bottom-0 left-0 bg-[rgba(24,24,26,0.5)] py-[5px] px-[10px] backdrop-blur-[3px] rounded-[8px]">
                        <div className="text-white text-[11px]">от 2 500 ₽/сутки</div>
                        <div className="text-white text-[13px] text-nowrap truncate overflow-hidden">Автодом Sunlight A</div>
                    </div>
                </div>
            </div>}
            {subCategory === "trailer" &&
            <div className="flex flex-wrap px-[10px] gap-[5px]">
                <div className="relative w-[calc(50%-2.5px)] h-[35vw] max-h-[150px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image2} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[32%] w-full bottom-0 left-0 bg-[rgba(24,24,26,0.5)] py-[5px] px-[10px] backdrop-blur-[3px] rounded-[8px]">
                        <div className="text-white text-[11px]">от 2 500 ₽/сутки</div>
                        <div className="text-white text-[13px] text-nowrap truncate overflow-hidden">Прицеп дача</div>
                    </div>
                </div>
                <div className="relative w-[calc(50%-2.5px)] h-[35vw] max-h-[150px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image2} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[32%] w-full bottom-0 left-0 bg-[rgba(24,24,26,0.5)] py-[5px] px-[10px] backdrop-blur-[3px] rounded-[8px]">
                        <div className="text-white text-[11px]">от 2 500 ₽/сутки</div>
                        <div className="text-white text-[13px] text-nowrap truncate overflow-hidden">Прицеп дача</div>
                    </div>
                </div>
                <div className="relative w-[100%] h-[66vw] max-h-[300px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image2} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[40%] w-full bottom-0 left-0 p-[10px] rounded-[8px] flex flex-col justify-end"
                         style={{background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 1) 100%)"}}>
                        <div className="text-white text-[14px]">от 50 000 ₽/сутки</div>
                        <div className="text-white text-[18px] text-nowrap truncate overflow-hidden">Прицеп дача</div>
                    </div>
                </div>
                <div className="relative w-[calc(50%-2.5px)] h-[35vw] max-h-[150px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image2} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[32%] w-full bottom-0 left-0 bg-[rgba(24,24,26,0.5)] py-[5px] px-[10px] backdrop-blur-[3px] rounded-[8px]">
                        <div className="text-white text-[11px]">от 2 500 ₽/сутки</div>
                        <div className="text-white text-[13px] text-nowrap truncate overflow-hidden">Прицеп дача</div>
                    </div>
                </div>
                <div className="relative w-[calc(50%-2.5px)] h-[35vw] max-h-[150px] rounded-[8px] overflow-hidden" onClick={() => navigate('/cars/1')}>
                    <img src={image2} alt="image" className="w-full h-full rounded-[8px]" style={{objectFit: "cover"}} />
                    <div className="absolute h-[32%] w-full bottom-0 left-0 bg-[rgba(24,24,26,0.5)] py-[5px] px-[10px] backdrop-blur-[3px] rounded-[8px]">
                        <div className="text-white text-[11px]">от 2 500 ₽/сутки</div>
                        <div className="text-white text-[13px] text-nowrap truncate overflow-hidden">Прицеп дача</div>
                    </div>
                </div>
            </div>}
            <div className="px-[10px] pt-[10px]">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-[18px] font-light no-underline hover:no-underline">Правила аренды</AccordionTrigger>
                        <AccordionContent className="font-light">
                            <span className="font-normal">Перечень документов необходимых для заключения договора:</span><br/>
                            - Действующий гражданский паспорт;<br/>
                            - Действующе водительское удостоверение РФ категории "B";<br/><br/>
                            <span className="font-normal">Требования к арендаторам, допускаемым к управлению автомобилей всех классов, кроме бизнес:</span><br/>
                            - Возраст не менее 23 лет;<br/>
                            - Водительский стаж (по в/у) не менее 5 лет;<br/>
                            - Наличие именной банковской карты;<br/><br/>
                            Информация в мобильном приложении носит исключительно ознакомительный характер и не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса РФ
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-[18px] font-light no-underline hover:no-underline">О компании</AccordionTrigger>
                        <AccordionContent className="font-light">
                            Компания АвтоЛАЙТ является лидером в сфере проката легкового транспорта по Краснодарскому краю.<br/><br/>
                            <span className="font-normal">Качественный сервис и высокий уровень надёжности - Работаем для вас!</span><br/><br/>
                            Телефон: <a href="tel:+7 966 77 57 966" className="underline font-normal">+7 966 77 57 966</a>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}