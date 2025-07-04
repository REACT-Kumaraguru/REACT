"use client";
import { FC } from "react";
import { ToolSettings } from "./types";


type Props = {
  toolMode: string;
  setToolMode: (mode: string) => void;
};

const EraserTool: FC<Pick<ToolSettings, "toolMode" | "setToolMode">> = ({ toolMode, setToolMode }) => {
  return (
    <button
      onClick={() => setToolMode("eraser")}
      className={`p-2 rounded border ${toolMode === "eraser" ? "bg-blue-500 text-white" : "bg-white text-black hover:bg-gray-200"}`}
    >
      🧽
    </button>
  );
};

export default EraserTool;
