import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/useTheme";

function ThemeToggle() {
  const { theme, handleToggleTheme, themes } = useTheme();

  return (
    <div>
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          className="theme-controller"
          onChange={handleToggleTheme}
          checked={theme === themes.light}
        />
        <Sun className="swap-off h-8 w-8 hover:scale-110" />
        <Moon className="swap-on h-8 w-8 hover:scale-110" />
      </label>
    </div>
  );
}

export default ThemeToggle;
