<script context="module">
  // import svelteLogo from './assets/svelte.svg' //Används inte.
  import Counter from "./lib/Counter.svelte";
  import { frameworks } from "../data/index";
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
  </div>

  <div class="card">
    <Counter />
  </div>

  <h1>Hej {frameworks[0].name}</h1>
</main>

<style>
</style>
