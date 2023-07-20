<script lang="ts">
  import type { IdType } from "~/lib/IdType";

  export let placeholder: string;
  export let value: number;
  export let disabled: boolean = false;
  export let id: IdType = undefined;
</script>

<input {placeholder} bind:value {disabled} {id} type="number" />

<style>
  input {
    background: #396092;
    color: #f9fff6;
    font-size: 10px;
    padding: 4px 7px;
    border: 0px;
    border-radius: 5px;
    width: 100%;
    border: 1px solid transparent;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.3, 0.16, 0, 0.93);
  }

  input::placeholder {
    opacity: 0.4;
    color: #f9fff6;
  }

  input:focus {
    outline: 0;
    border-color: currentColor;
    transform: scale(1.01);
  }
</style>
