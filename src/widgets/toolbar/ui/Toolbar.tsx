import s from "./Toolbar.module.scss";

export const Toolbar = () => {
  return (
    <div className={s.toolbar}>
      <div>
        <button
          className={s.brush}
          onClick={() => {
            console.log("brush");
          }}
        />
        <button
          className={s.rect}
          onClick={() => {
            console.log("rect");
          }}
        />
        <button
          className={s.circle}
          onClick={() => {
            console.log("circle");
          }}
        />
        <button
          className={s.eraser}
          onClick={() => {
            console.log("eraser");
          }}
        />
        <button
          className={s.line}
          onClick={() => {
            console.log("line");
          }}
        />
      </div>
      <div>
        <button
          className={s.undo}
          onClick={() => {
            console.log("undo");
          }}
        />
        <button
          className={s.redo}
          onClick={() => {
            console.log("redo");
          }}
        />
        <button
          className={s.save}
          onClick={() => {
            console.log("save");
          }}
        />
      </div>
    </div>
  );
};
