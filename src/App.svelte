<script context="module">
  // import svelteLogo from './assets/svelte.svg' //Används inte.
  import Counter from "./lib/Counter.svelte";
  import { frameworks } from "../data/index";

  let emptyCell = function () {
    for (let i = 0; i < frameworks[0].surveys.length; i++) {
      // return framework.color;
    }
  };
</script>

<main>
  <header>
    <h1>State of Javascript</h1>
  </header>

  <!-- YEAR CONTAINER ---------------------------------------------------------------->
  <div class="year-container" data-cy="chart-header">
    <div class="empty-cell"></div>
    <div class="year-cell">
      {#each frameworks[0].surveys as survey}
      <div>{survey.year}</div>
      {/each}
    </div>
    <div class="empty-cell"></div>
  </div>
  <!-- YEAR CONTAINER ---------------------------------------------------------------->
  <!-- ALL FRAMEWORK CONTAINERS ------------------------------------------------------>
  {#each frameworks as framework}
    <div data-cy="chart-row" class="framework-container framework-container-{framework.name}">
      <div class="line-container">
        <p class="framework-name-left" style="color: {framework.color};">
          {framework.name}
        </p>
        <div class="circle-container">
          <div style="background-color: {framework.color};" class="line" />

          {#each framework.surveys as survey}
            <div class="circle" style="color: {framework.color};">
              {survey.retention}%
            </div>
          {/each}
        </div>
        <p class="framework-name-right" style="color: {framework.color};">
          {framework.name}
        </p>
      </div>
    </div>
  {/each}
  <!-- ALL FRAMEWORK CONTAINERS ------------------------------------------------------>

  <footer>hej hej</footer>

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

  .year-container{
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    max-width: 800px;
    min-width: 500px;
    margin: 0 auto;
    border: 3px solid green;
  }

  .year-cell{
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding: 0 20px 0 20px;
    border: 2px solid blue;
  }

  .empty-cell{
    width: 10%;
    border: 2px solid red;

  }

  .framework-container {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    max-width: 800px;
    min-width: 500px;
    width: 100%;
    margin: 0 auto;
    border: 1px solid white;
  }

  .framework-name-left {
    text-align: right;
    width: 10%;
    border: 1px solid orange;
  }
  .framework-name-right {
    width: 10%;

    border: 1px solid orange;
  }

  .line-container {
    /* width: 500px; */
    /* width: 400px; */
    width: 100%;
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    border: 1px solid yellow;
  }

  .line {
    position: absolute;
    width: 97%;
    height: 4px;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    z-index: -10;
  }

  .circle {
    border: 2px solid red;
    /* width: 10px; */
    background-color: #242424;
  }

  .circle-container {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 80%;
    border: 2px solid green;
    padding: 0 20px 0 20px;
  }

</style>
