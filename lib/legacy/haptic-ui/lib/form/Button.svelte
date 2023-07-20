<script lang="ts">
  import type { ButtonStyle } from "./ButtonStyle";

  import { getColor } from "../Color";
  import type { Color } from "../Color";

  export let style: ButtonStyle = "primary";
  export let type: "button" | "submit" = "button";
  export let primaryBg: Color = "green";
  export let disabled: boolean = false;
  export let center: boolean = false;
  export let longpressDuration: number = 400;

  export function longpress(
    node: HTMLElement,
    duration: number
  ) {
    let timer: number;

    const handleMousedown = () => {
      console.log("mousedown");
      timer = window.setTimeout(() => {
        node.dispatchEvent(new CustomEvent("longpress"));
      }, duration);
    };

    const handleMouseup = () => {
      console.log("mouseup")
      clearTimeout(timer);
    };

    node.addEventListener("mousedown", handleMousedown);
    node.addEventListener("mouseup", handleMouseup);

    return {
      update(newDuration) {
        duration = newDuration;
      },
      destroy() {
        node.removeEventListener("mousedown", handleMousedown);
        node.removeEventListener("mouseup", handleMouseup);
      },
    };
  }
</script>

<button
  class:center
  class={style}
  {type}
  on:click
  {disabled}
  style="--primaryBg: {getColor(primaryBg)}"
  use:longpress={longpressDuration}
  on:longpress
>
  <slot />
</button>

<style>
  .center {
    margin: auto;
  }
  button {
    padding: 4.75px 12px;
    border: 0px;
    color: var(--alleoGrey);
    border-radius: 5px;
    font-weight: 700;
    font-size: 11px;
    cursor: pointer;

    transition: 200ms ease-out;
    --s-opacity: 0;
    box-shadow: inset 0 1000px rgb(0, 0, 0, var(--s-opacity));
    display: block;
  }
  button:active {
    --s-opacity: 0.2;
  }

  .outlined {
    background: transparent;
    border: 2px solid currentColor;
  }

  .underlined {
    background: transparent;
    border-bottom: 1px solid currentColor;
    border-radius: 0px;
    padding: 2px 0 2px 0;
  }

  .primary {
    background: var(--primaryBg);
    border: 2px solid var(--primaryBg);
  }

  .primary[disabled] {
    background: #757575;
    cursor: default;
    border: 2px solid #757575;
  }
</style>
