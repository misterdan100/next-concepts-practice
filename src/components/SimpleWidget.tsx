import Link from "next/link";
import { IoCafeOutline } from "react-icons/io5";

interface SimpleWidgetProps {
  title: string;
  subTitle?: string;
  label?: string;
  icon?: React.ReactNode;
  href?: string;
}

export const SimpleWidget = ({
  title,
  href = '',
  icon = <IoCafeOutline />,
  label = '',
  subTitle = '',
}: SimpleWidgetProps) => {
  return (
    <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2 my-2">
      <div className="flex flex-col">
        <div>
          <h2 className="font-bold text-center text-gray-600">{label}</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            <div id="icon">
              {/* Icono irá aquí */}
              {/* <IoCafeOutline size={50} className="text-blue-500" /> */}
              {icon}
            </div>
            <div id="temp" className="text-center">
              <Link href={href} className="text-4xl">{title}</Link>
              <p className="text-xs text-gray-500">{subTitle}</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-2 text-right border-t-2 border-gray-100 place-items-end">
          <Link href={href} className="text-xs font-medium text-indigo-600">
            More...
          </Link>
        </div>
      </div>
    </div>
  );
};
