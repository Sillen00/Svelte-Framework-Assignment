<script context="module">
  // import svelteLogo from './assets/svelte.svg' //Används inte.
  import Counter from "./lib/Counter.svelte";
  import { frameworks } from "../data/index";

  // let apa = function () {
  //   for (let framework of frameworks) {
  //     return framework.color;
  //   }
  // };
</script>

<main>
  <h1>State of Javascript</h1>
  {#each frameworks as framework}
    <div class="framework-container framework-container-{framework.name}">
      <p class="framework-name-left" style="color: {framework.color};">
        {framework.name}
      </p>
      <!-- <div class="line-container"> -->
      <div class="line" />
      <!-- <div class="circle-container"> -->

      {#each framework.surveys as survey}
        <div class="circle" style="color: {framework.color};">
          {survey.retention}%
        </div>
      {/each}

      <!-- {#each framework[0].surveys.length as survey}
        {#if 7 > framework.surveys.length}
          <div class="circle" style="color: {framework.color};">%</div>
        {/if}
      {/each} -->

      <!-- </div> -->
      <!-- </div> -->
      <p class="framework-name-right" style="color: {framework.color};">
        {framework.name}
      </p>
    </div>
  {/each}

  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
  </div>

  <div class="card">
    <Counter />
  </div>
</main>

<style>
  * {
    box-sizing: border-box;
  }
  h1 {
    text-align: center;
    background-color: rgb(20, 20, 20);
    margin: 0;
    padding: 1rem;
  }

  .framework-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 800px;
    min-width: 500px;
    margin: 0 auto;
    border: 1px solid white;
  }

  .framework-name-left {
    text-align: right;
    border: 1px solid orange;
  }

  .line-container {
    /* width: 500px; */
    /* width: 400px; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid red;
  }

  .line {
    position: absolute;
    top: 0;
    left: 0;
  }

  .circle {
    border: 2px solid red;
    /* width: 10px; */
  }

  .circle-container {
    border: 1px solid green;
  }
</style>
