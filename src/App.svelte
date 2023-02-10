<script context="module">
  // import svelteLogo from './assets/svelte.svg' //Används inte.
  // import Counter from "./lib/Counter.svelte"; //Används inte.
  import { frameworks } from "../data/index";
</script>

<main>
  <header>
    <h1>State of Javascript</h1>
  </header>

  <!-- YEAR CONTAINER --------------------------------------------------------------------------------------------------------->
  <div class="year-container" data-cy="chart-header">
    <div class="empty-year-cell" />
    {#each frameworks[0].surveys as survey}
      <div class="year-cell">{survey.year}</div>
    {/each}
    <div class="empty-year-cell" />
  </div>

  <!-- ALL FRAMEWORK CONTAINERS ------------------------------------------------------------------------------------------------>
  {#each frameworks as framework}
    <div data-cy="chart-row" class="framework-container">
      <!-- LEFT FRAMEWORK NAME -->
      <p class="framework-name framework-name-left" style="color: {framework.color};">
        {framework.name}
      </p>
      <!-- EMPTY FRAMEWORK CELLS -->
      {#each Array.from({ length: 7 - framework.surveys.length }) as i}
        <div class="empty-chart-cell" data-cy="chart-cell" />
      {/each}

      <!-- FRAMEWORK CELLS -->
      {#each framework.surveys as survey}
        <div
          class="chart-cell"
          style="color: {framework.color}; border: 2px solid {framework.color};"
        >
          {survey.retention}%
        </div>
      {/each}
      <!-- RIGHT FRAMEWORK NAME -->
      <p class="framework-name framework-name-right" style="color: {framework.color};">
        {framework.name}
      </p>
      <!-- LINE -->
      <div style="background-color: {framework.color};" class="line" />
    </div>
  {/each}
  <!-- FOOTER --------------------------------------------------------------------------------------------------------------->

  <footer>hej hej</footer>

  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
  </div>
</main>


<!-- STYLE ---------------------------------------------------------------------------------------------------------------->
<style>
  * {
    box-sizing: border-box;
  }
  /* HEADER CSS --------------------------------------------------------------------- */
  h1 {
    text-align: center;
    background-color: rgb(20, 20, 20);
    margin: 0;
    padding: 1rem;
  }

  /* YEAR CONTAINTER --------------------------------------------------------------- */

  .year-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    min-width: 500px;
    margin: 1rem auto 0 auto;
    border: 3px solid green;
  }

  .year-cell {
    text-align: center;
    font-size: 1.25rem;
  }

  .empty-year-cell {
    border: 2px solid red;
    width: 80px;
  }

  /* FRAMEWORK CONTAINER ---------------------------------------------------------- */

  .framework-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 800px;
    min-width: 500px;
    width: 100%;
    margin: 0 auto;
    border: 1px solid white;
  }

  .framework-name-left {
    text-align: right;
    width: 80px;
    border: 1px solid orange;
  }
  .framework-name-right {
    width: 80px;

    border: 1px solid orange;
  }

  /* Line ------------------------------------ */

  .line {
    position: absolute;
    width: calc(100% - 170px);
    height: 4px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 9999999rem;
    z-index: -10;
  }

  .empty-chart-cell {
    width: 40px;
    height: 40px;
  }

  .chart-cell {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #242424;
    width: 40px;
    height: 40px;
    border-radius: 99999999rem;
  }
</style>
