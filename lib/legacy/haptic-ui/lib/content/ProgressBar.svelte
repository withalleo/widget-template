<script lang="ts">
  import { getColor } from "../../lib/Color";
  import type { Color } from "../../lib/Color";

  export let text: string;
  export let percent: number;
  export let percentText: undefined | string = undefined;
  export let active = false;
  export let activeColor: Color = "alleoBlue";
</script>

<p
  style="--percent: {percent}%; --activeColor: {getColor(activeColor)}"
  class:active
>
  <span class="text">{text}</span>
  <span class="percent">{percentText ? percentText : `${percent}%`}</span>
</p>

<style>
  p {
    display: flex;
    --primary-color: var(--uiLayer5);
    background: var(--uiLayer7);
    color: var(--alleoGrey);
    background-image: linear-gradient(
      to right,
      var(--primary-color),
      var(--primary-color) var(--percent),
      transparent var(--percent)
    );
    padding: 5px 10px;
    border-radius: 5px;
    border: 2px solid var(--primary-color);
    margin: 8px 0;
  }

  p.active {
    --primary-color: var(--activeColor);
    box-shadow: 0 0 5px 0px var(--primary-color),
      inset 0 0 5px 0px var(--primary-color);
  }

  .percent {
    margin-left: auto;
  }
</style>
