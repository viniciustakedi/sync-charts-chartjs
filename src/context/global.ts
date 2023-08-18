import { atom } from "jotai";

interface ChartPositionProps {
  x: number;
  y: number;
}

export const chartPositionAtom = atom<ChartPositionProps>({ x: 0, y: 0 });
