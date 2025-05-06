// app/components/landing/tools/ToolPanel.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import ColorPicker from "./ColorPicker";
import ThicknessSlider from "./ThicknessSlider";
import { ToolSettings } from "./types";

type Props = ToolSettings;

export default function ToolPanel(props: Props) {
  const toolbarRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 30, y: 600 });
  const [dragging, setDragging] = useState(false);
  const [rel, setRel] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
      setPosition({ x: e.pageX - rel.x, y: e.pageY - rel.y });
    };
    const handleMouseUp = () => setDragging(false);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, rel]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target !== toolbarRef.current) return;
    setDragging(true);
    setRel({ x: e.pageX - position.x, y: e.pageY - position.y });
    e.preventDefault();
  };

  return (
    <div
      ref={toolbarRef}
      onMouseDown={handleMouseDown}
      style={{ left: position.x, top: position.y, cursor: "move" }}
      className="fixed z-50 flex gap-2 p-2 bg-white/90 text-black border border-gray-300 rounded-lg shadow-xl backdrop-blur-sm"
    >
      <button
        onClick={() => props.setToolMode(props.toolMode === "pen" ? null : "pen")}
        className={`p-2 rounded ${props.toolMode === "pen" ? "bg-white text-black" : "bg-black text-white"}`}
        title="Pen Tool"
      >
        🖊️
      </button>
      <button
        onClick={() => props.setToolMode(props.toolMode === "eraser" ? null : "eraser")}
        className={`p-2 rounded ${props.toolMode === "eraser" ? "bg-white text-black" : "bg-black text-white"}`}
        title="Eraser Tool"
      >
        🧽
      </button>
      <ColorPicker strokeColor={props.strokeColor} setStrokeColor={props.setStrokeColor} />
      {props.toolMode === "pen" && (
        <ThicknessSlider
          strokeWidth={props.strokeWidth}
          setStrokeWidth={props.setStrokeWidth}
        />
      )}
    </div>
  );
}
