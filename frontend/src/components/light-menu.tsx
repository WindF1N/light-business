import lightLogo from "../assets/light-logo.svg";
import lightBlackLogo from "../assets/light-logo-black.svg";
import { useTheme } from "@/components/theme-provider";

export function LightMenu() {
    const { theme } = useTheme();
    return (
        <div className="fixed bottom-[20px] right-[20px]">
            <div className="z-[3] w-[54px] h-[54px] flex justify-center items-center rounded-[50%] bg-black transition duration-300 ease-in-out backdrop-blur-[5px]"
                style={ theme === "dark" ? 
                        {background: "linear-gradient(180deg, rgba(102, 102, 102, 0.35) 0%, rgba(51, 51, 51, 0.50) 100%)"}
                        : {background: "hsl(var(--secondary))"} }>
                <img src={theme === "dark" ? lightLogo : lightBlackLogo} alt="" className="w-[34px] h-[34px] mt-[-5px]" />
            </div>
        </div>
    )
}
