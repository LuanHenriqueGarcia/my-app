import { Circle } from "./Circle";
import { Square } from "./Square";

export const GeoForm = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold">Formas geométricas</h3>
      <div className="flex gap-2 border-2 p-3">
        <Square />
        <Circle />
      </div>
    </div>
  );
};
