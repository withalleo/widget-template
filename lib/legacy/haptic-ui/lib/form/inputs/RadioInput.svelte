<script lang="ts" context="module">
  let index = 0;
</script>

<script lang="ts">
  import { getColor } from "../../Color";
  import type { Color } from "../../Color";

  export let text: string;
  export let name: string;
  export let group: any;
  export let value: any;
  export let activeColor: Color = "alleoBlue";

  let id = `STYLED-RADIO-INPUT-${index++}`;
</script>

<input type="radio" bind:group {name} {id} {value} />
<label style="--activeColor: {getColor(activeColor)}" for={id}>
  <span class="text">{text}</span>
</label>

<style>
  label {
    display: flex;
    --primary-color: var(--uiLayer5);
    background: var(--uiLayer7);
    color: var(--alleoGrey);
    padding: 5px 10px;
    border-radius: 5px;
    border: 2px solid var(--primary-color);
    margin: 8px 0;
    transition-duration: 0.5s;
    cursor: pointer;
  }

  input:checked + label {
    --primary-color: var(--activeColor);
    background: var(--activeColor);
    box-shadow: 0 0 10px 0 var(--primary-color);
  }

  input {
    display: none;
  }
</style>
