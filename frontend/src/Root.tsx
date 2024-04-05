import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex flex-col gap-[20px] items-center w-[100vw]">
      <div className="text-[32px]">Hello, World!</div>
      <Link to="/page"><div className="text-[18px]">Go to page!</div></Link>
      <Outlet />
    </div>
  )
}

