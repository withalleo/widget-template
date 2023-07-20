<script lang="ts">
  import Select from "svelte-select";
  import type { IdType } from "~/lib/IdType";

  export let placeholder: string = "";
  export let disabled: boolean = false;
  export let id: IdType = undefined;
  export let items: { value: string; label: string }[];
  export let value: { value: string; label: string };
</script>

<Select
  {id}
  isDisabled={disabled}
  {placeholder}
  {items}
  {value}
  on:select={(e) => {
    value = e.detail;
  }}
  containerClasses="HAPTIC-UI-SELECT"
/>

<style>
  :global(.HAPTIC-UI-SELECT) {
    background: var(--uiLayer4) !important;
    color: #f9fff6 !important;
    font-size: 10px !important;
    padding: 4px !important;
    border: 0px !important;
    border-radius: 5px !important;
    width: 100% !important;
    border: 1px solid transparent !important;
    transition-duration: 200ms !important;
    transition-timing-function: cubic-bezier(0.3, 0.16, 0, 0.93) !important;
    position: relative !important;
    margin: 0px 0px !important;
    height: 25px !important;
  }

  :global(.HAPTIC-UI-SELECT .selectedItem) {
    height: auto !important;
  }

  :global(.HAPTIC-UI-SELECT input::placeholder) {
    opacity: 0.4 !important;
    color: var(--alleoGrey) !important;
  }

  :global(.HAPTIC-UI-SELECT input) {
    cursor: text !important;
    padding: 0 5px !important;
    color: var(--alleoGrey) !important;
    font-size: 12px !important;
    height: 25px !important;
  }

  :global(.HAPTIC-UI-SELECT .listContainer) {
    background: var(--uiLayer4) !important;
    position: absolute !important;
    transform: translateY(-8px) !important;
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
    height: 10rem;
    left: 0 !important;
    margin: 0 !important;
    padding: 0px !important;
  }


  :global(.HAPTIC-UI-SELECT .item) {
    padding: 0 10px !important;
    --HAPTIC-UI-SELECT-ITEM-HEIGHT: 30px;
    height: var(--HAPTIC-UI-SELECT-ITEM-HEIGHT) !important;
    line-height: var(--HAPTIC-UI-SELECT-ITEM-HEIGHT) !important;
  }

  :global(.HAPTIC-UI-SELECT .item.hover) {
    background: var(--uiLayer2) !important;
    color: var(--alleoGrey) !important;
  }

  :global(.HAPTIC-UI-SELECT .item.active) {
    background: var(--uiLayer7) !important;
    color: var(--alleoGrey) !important;
  }

  :global(.HAPTIC-UI-SELECT .listContainer::-webkit-scrollbar) {
    width: 4px;
    cursor: pointer;
    border-radius: 5px;
  }

  :global(.HAPTIC-UI-SELECT .listContainer::-webkit-scrollbar-track-piece) {
    background-image: linear-gradient(to right, var(--uiLayer3) 0%, var(--uiLayer3) 60%, transparent 60%, transparent 100%);
    border-radius: 5px;
  }

  :global(.HAPTIC-UI-SELECT .listContainer::-webkit-scrollbar-thumb) {
    background: var(--alleoGrey);
    background-image: linear-gradient(to right, var(--alleoGrey) 0%, var(--alleoGrey) 60%, var(--uiLayer3) 60%, var(--uiLayer3) 100%);
    border-radius: 5px;
  }

  :global(.HAPTIC-UI-SELECT .clearSelect) {
    color: var(--alleoGrey) !important;
    cursor: pointer;
  }
</style>
