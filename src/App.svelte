<script>
  // import svelteLogo from './assets/svelte.svg' //Används inte.
  // import Counter from "./lib/Counter.svelte"; //Används inte.

  import { onMount } from "svelte";
  import { Route, Router } from "svelte-navigator";
  import Awareness from "./Awareness.svelte";
  import Interest from "./Interest.svelte";
  import Retention from "./Retention.svelte";
  import Usage from "./Usage.svelte";

  onMount(() => {
    if (window.location.pathname === "/") {
      window.history.replaceState(null, null, "/retention");
    }
  });
</script>

<header>
  <h1>State of Javascript</h1>
</header>

<main>
  <Router>
    <Route path="interest">
      <Interest />
    </Route>
    <Route path="usage">
      <Usage />
    </Route>
    <Route path="awareness">
      <Awareness />
    </Route>
    <Route>
      <Retention />
    </Route>
  </Router>
</main>

<!-- FOOTER --------------------------------------------------------------------------------------------------------------->
<footer>
  <nav>
    <a href="/retention"><button>Retention</button></a>
    <a href="/interest"><button>Interest</button></a>
    <a href="/usage"> <button>Usage</button></a>
    <a href="/awareness"><button>Awareness</button></a>
  </nav>
</footer>

<!-- STYLE ---------------------------------------------------------------------------------------------------------------->
<style>
  * {
    box-sizing: border-box;
  }

  main {
    overflow-x: scroll;
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
  footer nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  footer button {
    color: white;
    background-color: rgb(34, 34, 34);
    text-decoration: none;
    padding: 8px 16px;
    border: 1px dashed;
    cursor: pointer;
    transition: all 300ms ease-out 0s;
  }

  footer button:hover{
    border-style: solid;
    color: rgb(81, 242, 203);
  }

  @media (max-width: 500px) {
    footer nav {
      gap: 10px;
    }
    footer button {
      font-size: 0.75rem;
      padding: 6px 12px;
    }
  }
</style>
