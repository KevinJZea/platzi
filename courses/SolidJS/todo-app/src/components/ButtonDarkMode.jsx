import { createEffect, createSignal } from 'solid-js';

export function ButtonDarkMode() {
  const darkModeLocalStorage = JSON.parse(
    localStorage.getItem('dark_mode') ?? 'true',
  );
  const [darkMode, setDarkMode] = createSignal(darkModeLocalStorage);

  createEffect(() => {
    document.body.classList.toggle('dark', darkMode());
    localStorage.setItem('dark_mode', JSON.stringify(darkMode()));
  });

  function toggleDarkMode() {
    setDarkMode(!darkMode());
  }

  return (
    <button
      class="text-2xl fixed top-0 right-0 cursor-pointer"
      onClick={() => toggleDarkMode()}
    >
      {darkMode() ? '🌝' : '🌚'}
    </button>
  );
}
