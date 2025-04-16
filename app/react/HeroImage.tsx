"use client";

import { useEffect, useRef, useState } from "react";

type Item = {
  type: "car" | "tree" | "person";
  x: number;
  y: number;
  selected: boolean;
};

export default function HeroImage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [items, setItems] = useState<Item[]>([
    { type: "car", x: 100, y: 150, selected: false },
    { type: "tree", x: 300, y: 160, selected: false },
    { type: "person", x: 200, y: 160, selected: false },
  ]);

  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, 600, 200);

    // Background
    ctx.fillStyle = "#d1fae5"; // light green
    ctx.fillRect(0, 0, 600, 200);

    // Road
    ctx.fillStyle = "#9ca3af"; // gray
    ctx.fillRect(0, 160, 600, 40);

    // Items
    for (const item of items) {
      switch (item.type) {
        case "car":
          ctx.fillStyle = "#ef4444"; // red
          ctx.fillRect(item.x, item.y, 40, 20);
          break;
        case "tree":
          ctx.fillStyle = "#10b981"; // green
          ctx.beginPath();
          ctx.arc(item.x + 10, item.y, 12, 0, Math.PI * 2);
          ctx.fill();
          break;
        case "person":
          ctx.fillStyle = "#3b82f6"; // blue
          ctx.beginPath();
          ctx.arc(item.x + 8, item.y + 8, 8, 0, Math.PI * 2);
          ctx.fill();
          break;
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    for (let i = items.length - 1; i >= 0; i--) {
      const item = items[i];
      const withinX = mx > item.x && mx < item.x + 40;
      const withinY = my > item.y && my < item.y + 20;
      if (withinX && withinY) {
        setDragIndex(i);
        return;
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (dragIndex === null) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    setItems((prev) =>
      prev.map((item, i) =>
        i === dragIndex
          ? { ...item, x: mx - 20, y: my - 10 }
          : item
      )
    );
  };

  const handleMouseUp = () => {
    setDragIndex(null);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    draw(ctx);
  }, [items]);

  return (
    <div className="relative w-full h-[250px] overflow-hidden border-b border-gray-200 bg-white">
      <canvas
        ref={canvasRef}
        width={600}
        height={200}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="block mx-auto mt-4 rounded shadow"
      />
    </div>
  );
}
