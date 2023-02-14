<script context="module">
  // import svelteLogo from './assets/svelte.svg' //Används inte.
  // import Counter from "./lib/Counter.svelte"; //Används inte.

  // import { frameworks } from "../data/index";

  // import { onMount } from "svelte";
  // import Router from "svelte-spa-router";
  import {Router, Route, Link} from "svelte-navigator"
  import Awareness from "./Awareness.svelte";
  import Interest from "./Interest.svelte";
  import Retention from "./Retention.svelte";
  import Usage from "./Usage.svelte";
  // let routes = {
  //   "/retention": Retention,
  //   "/interest": Interest,
  //   "/usage": Usage,
  //   "/awareness": Awareness,
  // };


  // onMount(() => {
  //   window.history.pushState({}, "", "/retention");
  // });

  // const url = "/retention";
  // window.history.replaceState(null, "", url);
</script>

<header>
  <h1>State of Javascript</h1>
</header>


<main>
  <Router>
    <Route path="interest">
      <Interest/>
    </Route>
    <Route path="usage">
      <Usage/>
    </Route>
    <Route path="awareness">
      <Awareness/>
    </Route>
    <Route>
      <Retention/>
    </Route>
  </Router>
</main>

  <!-- FOOTER --------------------------------------------------------------------------------------------------------------->
  <footer>
    <a href="/retention"><button>Retention</button></a>
    <a href="/interest"><button>Interest</button></a>
    <a href="/usage"> <button>Usage</button></a>
    <a href="/awareness"><button>Awareness</button></a>
  </footer>

<!-- STYLE ---------------------------------------------------------------------------------------------------------------->
<style>
  * {
    box-sizing: border-box;
  }

  main {
    overflow-x: scroll;
    min-width: 500px;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  /* HEADER CSS --------------------------------------------------------------------- */
  h1 {
    text-align: center;
    background-color: rgb(20, 20, 20);
    margin: 0;
    padding: 1rem;
  }

  /* FOOTER ---------------------------------------------------------------------- */
  footer {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  footer button {
    color: white;
    background-color: rgb(34, 34, 34);
    padding: 8px 16px;
    cursor: pointer;
  }
</style>
