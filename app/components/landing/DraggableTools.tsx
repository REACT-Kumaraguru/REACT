"use client";

import { useRef, useEffect } from "react";

type Props = {
  onToolChange: (tool: "chalk" | "eraser" | null) => void;
  currentTool: "chalk" | "eraser" | null;
  color: string;
  onColorChange: (c: string) => void;
  lineWidth: number;
  onLineWidthChange: (w: number) => void;
  dragHandleClass?: string; // ✅ Add this line
};


export default function DraggableTools({
  onToolChange,
  currentTool,
  color,
  onColorChange,
  lineWidth,
  onLineWidthChange,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let offsetX = 0, offsetY = 0, isDragging = false;

    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // ✅ Don't start drag if clicking on a slider
      if (target.closest("input[type=range]")) return;

      isDragging = true;
      offsetX = e.clientX - el.offsetLeft;
      offsetY = e.clientY - el.offsetTop;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      el.style.left = `${e.clientX - offsetX}px`;
      el.style.top = `${e.clientY - offsetY}px`;
    };

    const onMouseUp = () => {
      isDragging = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    el.addEventListener("mousedown", onMouseDown);
    return () => {
      el.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  const toggleTool = (tool: "chalk" | "eraser") => {
    onToolChange(currentTool === tool ? null : tool);
  };

  return (
    <div
      ref={ref}
      style={{ position: "fixed", left: "2%", top: "80%", zIndex: 50 }}
      className="bg-white text-black px-4 py-3 rounded shadow-lg space-y-2 cursor-move min-w-[160px]"
    >
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => toggleTool("chalk")}
          className={`text-xl px-3 py-2 rounded ${currentTool === "chalk" ? "bg-blue-300" : "bg-gray-200"}`}
          title="Pen"
        >
          🖊️
        </button>
        <button
          onClick={() => toggleTool("eraser")}
          className={`text-xl px-3 py-2 rounded ${currentTool === "eraser" ? "bg-yellow-300" : "bg-gray-200"}`}
          title="Eraser"
        >
          🧽
        </button>
        <input
          type="color"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
          className="w-8 h-8 p-0"
          title="Color"
        />
      </div>

      {currentTool === "chalk" && (
        <div className="text-sm text-center">
          <label className="block mb-1 text-gray-600">Thickness</label>
          <input
            type="range"
            min={1}
            max={30}
            value={lineWidth}
            onChange={(e) => onLineWidthChange(Number(e.target.value))}
            style={{
              width: "100%",
              cursor: "grab",
              appearance: "none",
              height: "6px",
              borderRadius: "4px",
              background: "#ddd",
              outline: "none",
            }}
            onMouseDown={(e) => (e.currentTarget.style.cursor = "grabbing")}
            onMouseUp={(e) => (e.currentTarget.style.cursor = "grab")}
          />
        </div>
      )}
    </div>
  );
}
