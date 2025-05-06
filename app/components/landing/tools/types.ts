import { Dispatch, SetStateAction, RefObject } from "react";

export type ToolMode = "pen" | "eraser";

export interface ToolSettings {
  toolMode: ToolMode;
  setToolMode: Dispatch<SetStateAction<ToolMode>>;
  strokeColor: string;
  setStrokeColor: Dispatch<SetStateAction<string>>;
  strokeWidth: number;
  setStrokeWidth: Dispatch<SetStateAction<number>>;
  canvasRef?: RefObject<HTMLCanvasElement | null>; // ✅ Add this line
}
