<script>
  import Button from './Button.svelte';

  let someText = `Frontend Developer at Platzi`;
  let count = 0;
  let styles = { darkMode: false };

  function handleClick() {
    count++;
  }

  function toggle() {
    styles.darkMode = !styles.darkMode;
    document.body.classList.toggle('dark-mode', styles.darkMode);
  }
</script>

<div class="About">
  {#if !styles.darkMode}
    <p>{someText}</p>
  {:else}
    <p>Hello, DarkMode</p>
  {/if}

  <Button text="Click: " {count} on:click={handleClick} />
  <Button text="Dark Mode" on:click={toggle} />
  <button on:click={handleClick}>Click: {count === 0 ? '' : count}</button>
  <button on:click={toggle}>DarkMode</button>
</div>

<style>
  p {
    color: var(--theme-color);
  }
</style>
