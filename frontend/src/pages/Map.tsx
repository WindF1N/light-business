import React from "react";
import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapComponentsProvider,
  YMapDefaultMarker
} from "ymap3-components";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface YMapLocationRequest {
    center: [number, number]; // Тип для center
    zoom: number;
    duration?: number;
}

export default function MapBox() {
    const navigate = useNavigate();
    const [ location ] = React.useState<YMapLocationRequest>({
        center: [38.73263, 44.404658],
        zoom: 8,
    });
    const [ transportLocation ] = React.useState<YMapLocationRequest>({
        center: [38.73263, 44.904658],
        zoom: 8,
    });
    return (
        <YMapComponentsProvider apiKey="6143cf97-91c6-4279-8468-312ef1e294fb" lang="ru_RU">
            <YMap location={location}>
                <YMapDefaultSchemeLayer />
                <YMapDefaultFeaturesLayer />
                {transportLocation?.center && (
                    <YMapDefaultMarker
                        coordinates={transportLocation.center}
                    />
                )}
            </YMap>
            <div className="fixed bottom-0 max-w-[480px] w-full bg-[hsl(var(--background))] p-[20px] pb-[40px] flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[10px]">
                    <Input type="text" placeholder="Ваше местоположение" value="Адлер, Аэропорт" className="text-[hsl(var(--primary-foreground)) bg-[hsl(var(--accent))]" />
                    <Input type="text" placeholder="Место возврата" className="text-[hsl(var(--primary-foreground)) bg-[hsl(var(--accent))]" />
                </div>
                <div className="flex justify-between">
                    <span className="text-[14px] font-light">Получение и Возврат</span>
                    <span className="text-[14px]">2 000 ₽</span>
                </div>
                <Button variant="secondary" 
                        onClick={() => navigate('/cars/1/booking')}
                        className={`font-light w-full  text-left p-[20px] h-auto bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--muted))]`}>
                            Продолжить
                </Button>
            </div>
        </YMapComponentsProvider>
    );
};
