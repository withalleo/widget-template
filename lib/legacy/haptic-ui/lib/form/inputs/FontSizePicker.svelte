<script lang="ts">
  export let value: number;
  export let id: string | undefined = undefined;
</script>

<p>
  <input type="number" {id} bind:value />
  <span>px</span>
</p>

<style>
  p {
    background: var(--uiLayer4);
    flex-grow: 0;
    width: min-content;
    display: flex;
    align-items: center;
    color: var(--alleoGrey);
    border-radius: 5px;
    border: 1px solid transparent;
    transition-duration: 200ms;
    margin: 0;
  }

  p:focus-within {
    border: 1px solid var(--alleoGrey);
    transform: scale(1.01);
  }

  input {
    color: inherit;
    background: transparent;
    border: none;
    width: 50px;
    padding: 5px;
  }

  input:focus {
    outline: 0px;
  }

  span {
    padding: 5px;
  }
</style>
