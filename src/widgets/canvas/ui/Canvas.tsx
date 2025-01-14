import s from "./Canvas.module.scss";

export const Canvas = () => {
  return (
    <div className={s.canvasContainer}>
      <canvas className={s.canvas}></canvas>
    </div>
  );
};
