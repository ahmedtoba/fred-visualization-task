import {
  BarChartOutlined,
  AreaChartOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { Link } from "@tanstack/react-location";
import { ROUTES } from "../../Enums/routes";

export default function Navbar() {
  const commonClasses =
    "flex justify-center items-center gap-2 rounded hover:text-secondary transition py-1 px-2";
  const getActiveProps = () => ({
    className: "text-secondary",
  });

  const MainItems = () => (
    <>
      <Link
        to={ROUTES.LINE_AREA_CHART}
        className={commonClasses}
        getActiveProps={getActiveProps}
      >
        <AreaChartOutlined /> Area Chart
      </Link>
      <Link
        to={ROUTES.BAR_CHART}
        className={commonClasses}
        getActiveProps={getActiveProps}
      >
        <BarChartOutlined /> Bar Chart
      </Link>
      <Link
        to={ROUTES.LINE_CHART}
        className={commonClasses}
        getActiveProps={getActiveProps}
      >
        <LineChartOutlined /> Line Chart
      </Link>
    </>
  );

  return (
    <div className="relative">
      <nav className="flex bg-primary w-full z-10 justify-between items-center h-[70px] px-6 text-sm">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <Link
              to={ROUTES.LINE_AREA_CHART}
              className="text-neutral-50 font-bold text-lg hover:text-secondary transition-colors p-2"
            >
              Fred Visualization
            </Link>
          </div>
          <div className="hidden w-full md:block md:w-auto">
            <div className="flex gap-10 items-center ml-28 text-white font-medium">
              <MainItems />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
