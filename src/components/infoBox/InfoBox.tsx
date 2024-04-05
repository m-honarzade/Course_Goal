import { ReactNode } from "react";
import HintBox from "./HintBox";
import WarningBox from "./WarningBox";

type hintModeBox = {
  mode: "hint";
  children: ReactNode;
};
type warningModeBox = {
  mode: "warning";
  severity: "high" | "low";
  children: ReactNode;
};

type InfoBoxProp = hintModeBox | warningModeBox;

const InfoBox = (props: InfoBoxProp) => {
  const { mode, children } = props;
  if (mode === "hint") return <HintBox>{children}</HintBox>;
  const { severity } = props;
  return <WarningBox severity={severity}>{children}</WarningBox>;
};

export default InfoBox;
