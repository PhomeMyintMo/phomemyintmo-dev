import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeButton = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.dataset.theme = savedTheme
        }
    }, []);
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem("theme", newTheme)
    }
    return (
        <button
  onClick={toggleTheme}
  className="relative w-10 h-6 bg-background rounded-xl  transition-colors"
>
  <div
    className={`absolute top-1 left-1 w-4 h-4 bg-primary text-text rounded-xl flex items-center justify-center text-black transition-transform duration-300 ${
      theme === "dark" ? "translate-x-4" : ""
    }`}
  >
    {theme === "light" ? <FaMoon size={8} /> : <FaSun size={8} />}
  </div>
</button>
    )
}

export default ThemeButton;