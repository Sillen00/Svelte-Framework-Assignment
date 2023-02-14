<script>
  import { frameworks } from "../data/index";
</script>

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
  <div data-cy="chart-row" class="framework-row">
    <!-- LEFT FRAMEWORK NAME -->
    <div
      data-cy="chart-cell"
      class="framework-name framework-name-left"
      style="color: {framework.color};"
    >
      {framework.name}
    </div>
    <!-- EMPTY FRAMEWORK CELLS -->
    {#each Array.from({ length: 7 - framework.surveys.length }) as i}
      <div class="empty-chart-cell" data-cy="chart-cell" />
    {/each}

    <!-- FRAMEWORK CELLS -->
    {#each framework.surveys as survey}
      <div data-cy="chart-cell">
        <div data-cy="chart-circle" class="chart-cell" style="border: 3px solid {framework.color};">
          {survey.awareness}%
        </div>
      </div>
    {/each}
    <!-- RIGHT FRAMEWORK NAME -->
    <div
      data-cy="chart-cell"
      class="framework-name framework-name-right"
      style="color: {framework.color};"
    >
      {framework.name}
    </div>
    <!-- LINE -->
    <div style="background-color: {framework.color};" class="line" data-cy="row-line" />
  </div>
{/each}

<!-- STYLE ---------------------------------------------------------------------------------------------------------------->
<style>
  * {
    box-sizing: border-box;
  }

  /* main {
    overflow-x: scroll;
    min-width: 500px;
  } */

  ::-webkit-scrollbar {
    display: none;
  }

  /* YEAR CONTAINTER --------------------------------------------------------------- */

  .year-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    min-width: 500px;
    margin: 2rem auto 1rem auto;
    /* border: 3px solid green; */
  }

  .year-cell {
    width: 40px;
    color: white;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 300;
    /* border: 1px solid pink; */
  }

  .empty-year-cell {
    width: 80px;
    /* border: 2px solid red; */
  }

  /* FRAMEWORK CONTAINER ---------------------------------------------------------- */

  .framework-row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 800px;
    min-width: 500px;
    /* width: 100%; */
    margin: 10px auto;
    /* border: 1px solid white; */
  }

  .framework-name-left {
    text-align: right;
    width: 80px;
    /* border: 1px solid orange; */
  }
  .framework-name-right {
    width: 80px;
    /* border: 1px solid orange; */
  }

  .empty-chart-cell {
    width: 40px;
    height: 40px;
  }

  .chart-cell {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #282828;
    width: 40px;
    height: 40px;
    border-radius: 99999999rem;
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

  /* FOOTER ---------------------------------------------------------------------- */
  /* Footer styling ligger  i app */
</style>
