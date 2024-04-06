import React from 'react';
import moment, { Moment } from 'moment';
import { Button } from "@/components/ui/button";
import 'moment/locale/ru';
import { useNavigate } from "react-router-dom";

moment.locale('ru');

export default function Calendar() {
    const navigate = useNavigate();
    const [selectedDate] = React.useState<Moment>(moment());
    const [startDate, setStartDate] = React.useState<Moment | null>(null);
    const [endDate, setEndDate] = React.useState<Moment | null>(null);

    const handleDateClick = (day: Moment) => {
        if (!startDate && !endDate) {
            setStartDate(day);
        } else if (startDate && !endDate) {
            if (day.isAfter(startDate)) {
                setEndDate(day);
            } else if (day.isBefore(startDate)) {
                setEndDate(startDate);
                setStartDate(day);
            }
        } else if (startDate && endDate) {
            setStartDate(day);
            setEndDate(null);
        }
    };

    const renderDays = () => {
        let days = [];

        for (let i = 0; i < 13; i++) {
        const startOfMonth = moment(selectedDate).add(i, 'months').startOf('month');
        const endOfMonth = moment(startOfMonth).endOf('month');

        let day = startOfMonth.clone();
        let day_index = 1;
        let monthDays = [];

        while (day <= endOfMonth) {
            if (day.day() === day_index) {
            const clonedDay = day.clone();
            let className = '';

            if (startDate && endDate) {
                if (clonedDay.isSame(startDate) || clonedDay.isSame(endDate)) {
                    className = clonedDay.isSame(startDate) ? 'text-[hsl(var(--primary-foreground))] bg-[hsl(var(--foreground))] rounded-l-[15px]' : 'text-[hsl(var(--primary-foreground))] bg-[hsl(var(--foreground))] rounded-r-[15px]';
                } else if (clonedDay.isBetween(startDate, endDate, 'day', '[]')) {
                    className = 'bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))]';
                }
            } else if (startDate || endDate) {
                if (clonedDay.isSame(startDate) || clonedDay.isSame(endDate)) {
                    className = 'text-[hsl(var(--primary-foreground))] bg-[hsl(var(--foreground))] rounded-[15px]';
                }
            }

            if (i < 12) {
                monthDays.push(
                <div
                    key={clonedDay.unix()}
                    onClick={() => {clonedDay.isSame(selectedDate, 'day') || !clonedDay.isBefore(moment()) ? handleDateClick(clonedDay) : null}}
                    className={`w-[14.2857143vw] h-[11.5vw] flex items-center justify-center font-light text-[16px] text-[#313131] mb-[2px] ${className} ${clonedDay.isSame(selectedDate, 'day') || !clonedDay.isBefore(moment()) ? 'text-[hsl(var(--primary))]' : ''}`}
                >
                    {clonedDay.format('D')}
                </div>
                );
            } else {
                monthDays.push(
                <div
                    key={clonedDay.unix()}
                    className="w-[14.2857143vw] h-[11.5vw] flex items-center justify-center font-light text-[16px] text-[#313131] mb-[2px]"
                ></div>
                );
            };
            day.add(1, 'day');
            } else {
            monthDays.push(
                <div
                key={day.unix()}
                className="w-[14.2857143vw] h-[11.5vw] flex items-center justify-center font-light text-[16px] text-[#313131] mb-[2px]"
                >
                </div>
            );
            };
            if (day_index !== 6) {
            day_index += 1;
            } else {
            day_index = 0;
            };
        }

        if (i < 12) {
            days.push(
            <>
                <div key={i} className="font-light text-[20px] p-[10px]">
                    {capitalizeFirstLetter(startOfMonth.format('MMMM YYYY'))}
                </div>
                <div className="flex flex-wrap">{monthDays}</div>
            </>
            );
        } else {
            days.push(
            <>
                <div className="flex flex-wrap">{monthDays}</div>
            </>
            );
        }
        }

    return days;
    };

    const capitalizeFirstLetter = (string: string): string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    React.useEffect(() => {
        let calendar: HTMLDivElement | null = document.querySelector('.Calendar > div:first-child');
        if (calendar) {
            let height: number = calendar.offsetHeight;
            let days: HTMLDivElement | null = document.querySelector('.Calendar > .days');
            if (days) {
                days.style.height = `calc(100% - ${height}px)`;
            }
        }
    }, []);

    return (
        <div className="">
            <div className="sticky left-0 top-[70px] bg-[hsl(var(--background))]">
                <div className="flex items-center justify-between">
                {['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].map((day) => (
                    <div key={day} className="w-[14.2857143vw] flex items-center justify-center border-b py-[2vw] text-[14px]">
                        {day}
                    </div>
                ))}
                </div>
            </div>
            <div className="days">
                {renderDays()}
            </div>
            <div className="flex flex-col gap-[10px] sticky bottom-0 left-0 p-[16.5px] bg-[hsl(var(--background))] border-t">
                <div className="flex items-center justify-around py-[1vw] gap-[10px]">
                    <div className="w-full py-[10px] px-[15px] border rounded-[8px]">
                        <span>{startDate !== null ? "с " + startDate.format('D MMM YYYY') : "Начало"}</span>
                    </div>
                    <div className="w-full py-[10px] px-[15px] border rounded-[8px]">
                        <span>{endDate !== null ? "по " + endDate.format('D MMM YYYY') : "Конец"}</span>
                    </div>
                </div>
                <Button variant="secondary" 
                        onClick={() => (startDate !== null && endDate !== null) && navigate("/map")}
                        className={`font-light w-full text-left p-[20px] h-auto ${(startDate !== null && endDate !== null) && "bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"} hover:bg-[hsl(var(--secondary))]`}>
                            Продолжить
                </Button>
            </div>
        </div>
    );
};
