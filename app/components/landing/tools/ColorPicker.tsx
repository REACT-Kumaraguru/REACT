"use client";
import { FC } from "react";

type Props = {
  strokeColor: string;
  setStrokeColor: (color: string) => void;
};

const ColorPicker: FC<Props> = ({ strokeColor, setStrokeColor }) => (
  <input
    type="color"
    value={strokeColor}
    onChange={(e) => setStrokeColor(e.target.value)}
    title="Pick Pen Color"
    className="w-8 h-8 bg-transparent"
  />
);

export default ColorPicker;
