import s from "./SettingsBar.module.scss";

export const SettingsBar = () => {
  return (
    <div className={s.settings}>
      <div className={s.lineWidth}>
        <label htmlFor="line-width">
          <span>Толщина линии</span>
        </label>
        <input type="number" id="line-width" />
      </div>
    </div>
  );
};
