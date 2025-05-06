"use client";

import { useRef, useState, useEffect } from "react";
import ToolPanel from "./ToolPanel";
import { ToolMode } from "./types";

export default function DrawingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [toolMode, setToolMode] = useState<ToolMode>(null);
  const [strokeColor, setStrokeColor] = useState("#ffffff");
  const [strokeWidth, setStrokeWidth] = useState(4);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fill background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add text drawings
    ctx.font = "bold 9vw 'Caveat', cursive";
    ctx.fillStyle = "white";
    const text = "REACT";
    const textWidth = ctx.measureText(text).width;
    ctx.fillText(text, canvas.width / 2 - textWidth / 2, canvas.height / 3);

    ctx.font = "28px 'Caveat', cursive";
    ctx.fillText("Apply Now", canvas.width / 2 - 110, canvas.height / 2 + 60);
    ctx.fillText("Know More", canvas.width / 2 + 60, canvas.height / 2 + 60);

    ctx.font = "20px 'Caveat', cursive";
    ctx.fillText("You can write and erase here. Try it!", canvas.width / 2 - 140, 40);


    
    const menu = ["Themes", "Team", "Credit Structure", "Contact Us", "Blogs"];
    ctx.font = "20px 'Caveat', cursive";
    menu.forEach((item, i) => {
      ctx.fillText(item, canvas.width - 160, 60 + i * 40);
    });
  }, []);

  // 🔥 Toggle button interactivity based on tool
  useEffect(() => {
    const canvasLinks = document.getElementById("canvas-links");
    if (!canvasLinks) return;
    canvasLinks.style.pointerEvents = toolMode ? "none" : "auto";
  }, [toolMode]);

  // ✅ Touch support for mobile
useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const rect = canvas.getBoundingClientRect();

  const startTouch = (e: TouchEvent) => {
    if (!toolMode || e.touches.length !== 1) return;
    e.preventDefault(); // prevent scroll
    const touch = e.touches[0];
    ctx.beginPath();
    ctx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top);
    setIsDrawing(true);
  };

  const moveTouch = (e: TouchEvent) => {
    if (!isDrawing || !toolMode || e.touches.length !== 1) return;
    e.preventDefault();
    const touch = e.touches[0];
    ctx.lineTo(touch.clientX - rect.left, touch.clientY - rect.top);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = "round";
    ctx.globalCompositeOperation =
      toolMode === "eraser" ? "destination-out" : "source-over";
    ctx.stroke();
  };

  const endTouch = () => {
    ctx.closePath();
    setIsDrawing(false);
  };

  canvas.addEventListener("touchstart", startTouch, { passive: false });
  canvas.addEventListener("touchmove", moveTouch, { passive: false });
  canvas.addEventListener("touchend", endTouch);

  return () => {
    canvas.removeEventListener("touchstart", startTouch);
    canvas.removeEventListener("touchmove", moveTouch);
    canvas.removeEventListener("touchend", endTouch);
  };
}, [toolMode, strokeColor, strokeWidth, isDrawing]);

  const getContext = () => {
    const canvas = canvasRef.current;
    return canvas ? canvas.getContext("2d") : null;
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!toolMode) return;
    const ctx = getContext();
    if (!ctx) return;
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !toolMode) return;
    const ctx = getContext();
    if (!ctx) return;

    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = "round";
    ctx.globalCompositeOperation = toolMode === "eraser" ? "destination-out" : "source-over";
    ctx.stroke();
  };

  const stopDrawing = () => {
    const ctx = getContext();
    if (!ctx) return;
    ctx.closePath();
    setIsDrawing(false);
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        className={`absolute top-0 left-0 w-full h-full z-0 touch-none ${
          toolMode === "pen"
            ? "cursor-pencil"
            : toolMode === "eraser"
            ? "cursor-crosshair"
            : "cursor-auto"
        }`}
      />
      

      <ToolPanel
        toolMode={toolMode}
        setToolMode={setToolMode}
        strokeColor={strokeColor}
        setStrokeColor={setStrokeColor}
        strokeWidth={strokeWidth}
        setStrokeWidth={setStrokeWidth}
        canvasRef={canvasRef}
      />
    </>
    
  );
}
