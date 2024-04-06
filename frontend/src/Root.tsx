import { Outlet, useNavigate } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";

import logoImage from "./assets/logo.svg";
import logoWhiteImage from "./assets/logo-white.svg";

import { useTheme } from "@/components/theme-provider";
import { LightMenu } from "@/components/light-menu";

export default function Root() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center w-[100vw] max-w-[480px] m-auto">
      <div className="w-full flex justify-between align-items p-[15px] border-b sticky top-0 left-0 bg-[hsl(var(--background))] z-[1]">
        <div className="relative flex items-center" onClick={() => navigate("/")}>
          <img src={theme === "light" ? logoImage : logoWhiteImage} alt="" className="h-[80%]" />
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
      <Outlet />
      <div className="p-[30px] text-[12px] text-[hsl(var(--foreground))] font-light mt-auto">
        powered by <b>LIGHT Business</b> © 2024
      </div>
      <LightMenu />
    </div>
  )
}

