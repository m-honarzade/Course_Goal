import { ReactNode } from "react";

type WarningBoxProp = {
  children: ReactNode;
  severity: string;
};
const WarningBox = ({ children, severity }: WarningBoxProp) => {
  return (
    <aside
      className={`p-2 md:p-4 border ${
        severity === "low" ? "border-yellow-600" : ""
      } ${severity === "high" ? "border-red-600" : ""}
          
        flex flex-col items-center gap-4 rounded-sm`}
    >
      <h5
        className={` ${severity === "low" ? "text-yellow-500" : ""} ${
          severity === "high" ? "text-red-600" : ""
        } font-extrabold text-2xl tracking-wider`}
      >
        warning
      </h5>
      <p
        className={` ${severity === "low" ? "text-yellow-600" : ""} ${
          severity === "high" ? "text-red-600" : ""
        } text-sm font-semibold tracking-wide lg:text-nowrap`}
      >
        {children}
      </p>
    </aside>
  );
};

export default WarningBox;
