import { SettingsBar, Toolbar } from "@/widgets";
import "./App.scss";

export function App() {
  return (
    <div className={"app"}>
      <Toolbar />
      <SettingsBar />
    </div>
  );
}
