import { FC } from "react";
import { ToolSettings } from "./types";

const PenTool: FC<Pick<ToolSettings, "toolMode" | "setToolMode">> = ({ toolMode, setToolMode }) => {
  return (
    <button
      onClick={() => setToolMode("pen")}
      className={`p-2 rounded border ${toolMode === "pen" ? "bg-blue-500 text-white" : "bg-white text-black hover:bg-gray-200"}`}
    >
      🖊️
    </button>
  );
};

export default PenTool;
