<script lang="ts">
  import type { IdType } from "~/lib/IdType";

  export let placeholder: string;
  export let value: string;
  export let disabled: boolean = false;
  export let id: IdType = undefined;
</script>

<div>
  <textarea {placeholder} bind:value {disabled} {id} />
</div>

<style>
  div {
    background: #396092;
    color: #f9fff6;
    font-size: 10px;
    padding: 7px;
    border: 0px;
    border-radius: 5px;
    width: 100%;
    border: 1px solid transparent;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.3, 0.16, 0, 0.93);
    height: 92px;
    resize: none;
  }

  textarea {
    resize: none;
    overflow: auto;
    background: transparent;
    border: 0px;
    width: 100%;
    height: 100%;
    color: inherit;
  }

  textarea::placeholder {
    opacity: 0.4;
    color: #f9fff6;
  }

  div:focus-within {
    border-color: currentColor;
    transform: scale(1.01);
  }

  textarea:focus {
    outline: 0;
  }

  textarea::-webkit-scrollbar {
    width: 6px;
    cursor: pointer;
    border-radius: 5px;
  }

  textarea::-webkit-scrollbar-track-piece {
    background: var(--uiLayer3);
    border-radius: 5px;
  }

  textarea::-webkit-scrollbar-thumb {
    background: var(--alleoGrey);
    border-radius: 5px;
  }
</style>
