"use client";

import { createContext, useCallback, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({ theme: "dark", toggleTheme: () => {} });

function getThemeSnapshot(): Theme {
  return (localStorage.getItem("theme") as Theme) || "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

function subscribeToTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.classList.toggle("light", theme === "light");
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
    window.dispatchEvent(new StorageEvent("storage"));
  }, [theme]);

  if (typeof window !== "undefined") {
    applyTheme(theme);
  }

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext>
  );
}
