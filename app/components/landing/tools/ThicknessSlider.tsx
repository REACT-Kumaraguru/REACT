"use client";
import { FC } from "react";

type Props = {
  strokeWidth: number;
  setStrokeWidth: (w: number) => void;
};

const ThicknessSlider: FC<Props> = ({ strokeWidth, setStrokeWidth }) => (
  <input
    type="range"
    min={1}
    max={20}
    value={strokeWidth}
    onChange={(e) => setStrokeWidth(Number(e.target.value))}
    className="w-24"
    title="Stroke Thickness"
  />
);

export default ThicknessSlider;
