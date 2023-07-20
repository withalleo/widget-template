<script lang="ts">
  import Example1 from "./Example1.svelte";
  import Example2 from "./Example2.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import "./styles.css";
  import Example3 from "./Example3.svelte";
</script>

<main>
  <Router>
    <nav>
      <Link to="/example1">Example 1</Link>
      <Link to="/example2">Example 2</Link>
      <Link to="/example3">Example 3</Link>
    </nav>

    <div class="path">
      <div>
        <Route path="/example1" component={Example1} />
        <Route path="/example2" component={Example2} />
        <Route path="/example3" component={Example3} />
      </div>
    </div>
  </Router>
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  nav {
    background: white;
    display: flex;
    padding: 16px;
    gap: 16px;
  }

  .path {
    padding: 16px;
    width: min-content;
    height: min-content;
    margin: auto;
  }
</style>
