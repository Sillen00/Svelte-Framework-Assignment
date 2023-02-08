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
  {#each frameworks as framework}
    <div class="framework-container framework-container-{framework.name}">
      <p>{framework.name}</p>
      <div class="line-container">
        <div class="line" />
        <div class="circle-container">
          {#each framework.surveys as survey}
            {survey.retention}%
          {/each}
        </div>
      </div>
      <p>{framework.name}</p>
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

  <h1>Hej {frameworks[0].surveys[0].year}</h1>
</main>

<style>
  .framework-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    width: 500px;
    /* color: red; */
  }
  .framework-container-React {
    top: 50px;
  }
  .framework-container-Vue {
    top: 100px;
  }
  .framework-container-Angular {
    top: 150px;
  }
  .framework-container-Ember {
    top: 200px;
  }
  .framework-container-Preact {
    top: 250px;
  }
  .framework-container-Svelte {
    top: 300px;
  }
  .framework-container-Alpine {
    top: 350px;
  }
  .framework-container-Lit {
    top: 400px;
  }
  .framework-container-Solid {
    top: 450px;
  }
  .framework-container-Qwik {
    top: 500px;
  }
  .framework-container-Stencil {
    top: 550px;
  }
</style>
