import { useState } from 'react';

function ThemeButton() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
    else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }

  return (
    <button onClick={toggleDarkMode}>
      <span class="material-symbols-outlined"> light_mode </span>
    </button>
  )
}

export default ThemeButton