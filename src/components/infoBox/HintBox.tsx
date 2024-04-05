import { ReactNode } from "react";

type HintInfoBox = {
  children: ReactNode;
};
const HintBox = ({ children }: HintInfoBox) => {
  return (
    <aside className="p-4 border border-[#63D4D5] rounded-sm">
      <p className="text-[#63D4D5] font-semibold text-sm tracking-wide">
        {children}
      </p>
    </aside>
  );
};

export default HintBox;
