import React from "react";
import Slider from "@/components/slider";
import MiniSlider from "@/components/mini-slider";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

export default function CarBooking() {
    const [ isCreateOrder, setIsCreateOrder ] = React.useState<Boolean>(false);
    return (
        <div className="relative w-full flex flex-col">
            <Slider />
            <MiniSlider />
            {!isCreateOrder &&
            <>
                <div className="px-[10px] pt-[10px] flex flex-col gap-[0]">
                    <div className="text-[14px] text-[#888] mb-[5px]">Требования</div>
                    <div className="flex flex-col gap-[10px] px-[12px] py-[10px] bg-[hsl(var(--secondary))] rounded-[4px] mb-[20px]">
                        <div className="flex justify-between items-center">
                            <div className="text-[14px] text-[#888] font-light">Минимальный возраст</div>
                            <div className="text-[14px] font-light">23 года</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-[14px] text-[#888] font-light">Минимальный стаж</div>
                            <div className="text-[14px] font-light">3 года</div>
                        </div>
                    </div>
                </div>
                <div className="px-[10px] flex flex-col gap-[0]">
                    <div className="text-[14px] text-[#888] mb-[5px]">Детали заказа</div>
                    <div className="flex flex-col gap-[10px] px-[12px] py-[10px] bg-[hsl(var(--secondary))] rounded-[4px] mb-[20px]">
                        <div className="flex justify-between items-center">
                            <div className="text-[14px] text-[#888] font-light">Аренда авто</div>
                            <div className="text-[14px] font-light">2 570 ₽</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-[14px] text-[#888] font-light">
                                Преиод аренды
                                <span className="block text-[12px] text-[hsl(var(--foreground))]">19 февраля, 12:00 - 21 февраля, 12:00</span>
                            </div>
                            <div className="text-[14px] font-light">1 сутки</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-[14px] text-[#888] font-light">
                                Получение
                                <span className="block text-[12px] text-[hsl(var(--foreground))]">Адлер, Аэропорт</span>
                            </div>
                            <div className="text-[14px] font-light">1 000 ₽</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-[14px] text-[#888] font-light">
                                Возврат
                                <span className="block text-[12px] text-[hsl(var(--foreground))]">Сочи, Невская 11</span>
                            </div>
                            <div className="text-[14px] font-light">1 000 ₽</div>
                        </div>
                    </div>
                </div>
                <div className="px-[10px] flex flex-col gap-[0]">
                    <div className="text-[14px] text-[#888] mb-[5px]">Среднесуточный пробег</div>
                    <div className="flex flex-col gap-[10px] px-[12px] py-[10px] bg-[hsl(var(--secondary))] rounded-[4px] mb-[20px]">
                        <div className="flex justify-between items-center">
                            <div className="text-[14px] text-[#888] font-light">200 км</div>
                            <div className="text-[14px] font-light">Бесплатно</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-[14px] text-[#888] font-light">300 км</div>
                            <div className="text-[14px] font-light">400 ₽/сутки</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-[14px] text-[#888] font-light">500 км</div>
                            <div className="text-[14px] font-light">800 ₽/сутки</div>
                        </div>
                    </div>
                </div>
                <div className="px-[10px] flex flex-col gap-[0]">
                    <div className="text-[14px] text-[#888] mb-[5px]">Страхование</div>
                    <div className="flex flex-col gap-[10px] px-[12px] py-[10px] bg-[hsl(var(--secondary))] rounded-[4px] mb-[20px]">
                        <div className="flex justify-between items-center">
                            <div className="text-[14px] text-[#888] font-light">С франшизой 12 000 ₽</div>
                            <div className="text-[14px] font-light">Бесплатно</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-[14px] text-[#888] font-light">Доп. страхование</div>
                            <div className="text-[14px] font-light">770 ₽/сутки</div>
                        </div>
                    </div>
                </div>
                <div className="px-[10px] flex flex-col gap-[0]">
                    <div className="text-[14px] text-[#888] mb-[5px]">Территория эксплуатации</div>
                    <div className="flex flex-col gap-[10px] px-[12px] py-[10px] bg-[hsl(var(--secondary))] rounded-[4px] mb-[20px]">
                        <div className="flex justify-between items-center">
                            <div className="text-[14px] text-[#888] font-light">
                                Детское кресло
                                <span className="block text-[12px] text-[hsl(var(--foreground))]">200 ₽/сутки</span>
                            </div>
                            <div className="flex items-center justify-center"><Switch /></div>
                        </div>
                    </div>
                </div>
                <div className="p-[10px]">
                    <Button variant="secondary" 
                            onClick={() => setIsCreateOrder(!isCreateOrder)}
                            className={`font-light w-full text-left p-[20px] h-auto bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:bg-[hsl(var(--secondary))] hover:text-[#888]`}>
                                Продолжить
                    </Button>
                </div>
            </>}
            {isCreateOrder &&
            <div className="px-[10px] pt-[10px] flex flex-col gap-[0]">
                <div className="flex flex-col gap-[10px] px-[12px] py-[12px] bg-[hsl(var(--accent))] rounded-[4px] mb-[20px]">
                    <div className="text-[16px] text-[hsl(var(--foreground))] mb-[5px]">Оформление заказа</div>
                    <div className="flex justify-between items-center">
                        <Input type="text" placeholder="Имя"/>
                    </div>
                    <div className="flex justify-between items-center">
                        <Input type="text" placeholder="Телефон" />
                    </div>
                    <div className="mt-[10px]">
                        <Button variant="secondary" 
                                onClick={() => setIsCreateOrder(!isCreateOrder)}
                                className={`font-light w-full text-left p-[15px] h-auto bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:bg-[hsl(var(--secondary))] hover:text-[#888]`}>
                                    Отправить заявку
                        </Button>
                    </div>
                </div>
            </div>}
            
        </div>
    )
}