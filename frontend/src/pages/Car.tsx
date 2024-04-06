import Slider from "@/components/slider";
import MiniSlider from "@/components/mini-slider";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Car() {
    const navigate = useNavigate();
    return (
        <div className="relative w-full flex flex-col">
            <Slider />
            <MiniSlider />
            <div className="p-[10px] flex flex-col gap-[20px]">
                <div>
                    <div className="text-[28px] font-light">от 50 000 ₽/сутки</div>
                    <div className="text-[18px] font-light">BMW X5, 130 000 КМ, 2024 г</div>
                </div>
                <div className="flex flex-col gap-[10px] px-[12px] py-[10px] bg-[hsl(var(--secondary))] rounded-[4px]">
                    <div className="flex justify-between items-center">
                        <div className="text-[14px] text-[#aaa] font-light">Цвет</div>
                        <div className="text-[14px] font-light">Чёрный</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-[14px] text-[#aaa] font-light">Год выпуска</div>
                        <div className="text-[14px] font-light">2020</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-[14px] text-[#aaa] font-light">Пробег</div>
                        <div className="text-[14px] font-light">130 000 км</div>
                    </div>
                </div>
                <div className="flex flex-col gap-[10px] px-[12px] py-[10px] bg-[hsl(var(--secondary))] rounded-[4px]">
                    <div className="flex justify-between flex-col">
                        <div className="text-[14px] text-[#aaa] font-light">Комментарий</div>
                        <textarea className="bg-inherit hover:outline-none resize-none"></textarea>
                    </div>
                </div>
            </div>
            <div className="flex gap-[10px] p-[10px] overflow-x-auto no-scrollbar">
                <div className="flex flex-col w-[250px] shrink-0 gap-[20px] p-[12px] bg-[hsl(var(--secondary))] rounded-[4px]">
                    <div className="flex flex-col">
                        <span className="text-[16px]">1-3 дней</span>
                        <span className="text-[14px] font-light">50 000 ₽/сутки</span>
                    </div>
                    <div className="text-[14px] font-light">
                        - Бесплатный доп.водитель<br/>
                        <span className="text-[#666] font-light">- Бесплатная мойка<br/>
                        - Бесплатная доставка<br/>
                        - Бесплатный возврат</span>
                    </div>
                </div>    
                <div className="flex flex-col w-[250px] shrink-0 gap-[20px] p-[12px] bg-[hsl(var(--secondary))] rounded-[4px]">
                    <div className="flex flex-col">
                        <span className="text-[16px]">4-6 дней</span>
                        <span className="text-[14px] font-light">45 000 ₽/сутки</span>
                    </div>
                    <div className="text-[14px] font-light">
                        - Бесплатный доп.водитель<br/>
                        - Бесплатная мойка<br/>
                        <span className="text-[#666] font-light">- Бесплатная доставка<br/>
                        - Бесплатный возврат</span>
                    </div>
                </div>
                <div className="flex flex-col w-[250px] shrink-0 gap-[20px] p-[12px] bg-[hsl(var(--secondary))] rounded-[4px]">
                    <div className="flex flex-col">
                        <span className="text-[16px]">7-14 дней</span>
                        <span className="text-[14px] font-light">40 000 ₽/сутки</span>
                    </div>
                    <div className="text-[14px] font-light">
                        - Бесплатный доп.водитель<br/>
                        - Бесплатная мойка<br/>
                        - Бесплатная доставка<br/>
                        <span className="text-[#666] font-light">- Бесплатный возврат</span>
                    </div>
                </div>
                <div className="flex flex-col w-[250px] shrink-0 gap-[20px] p-[12px] bg-[hsl(var(--secondary))] rounded-[4px]">
                    <div className="flex flex-col">
                        <span className="text-[16px]">от 15 дней</span>
                        <span className="text-[14px] font-light">35 000 ₽/сутки</span>
                    </div>
                    <div className="text-[14px] font-light">
                        - Бесплатный доп.водитель<br/>
                        - Бесплатная мойка<br/>
                        - Бесплатная доставка<br/>
                        - Бесплатный возврат
                    </div>
                </div>
            </div>
            <div className="p-[10px]">
                <Button variant="secondary" 
                        onClick={() => navigate('/calendar')}
                        className={`font-light w-full text-left p-[20px] h-auto bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--muted))]`}>
                            Продолжить
                </Button>
            </div>
        </div>
    )
}