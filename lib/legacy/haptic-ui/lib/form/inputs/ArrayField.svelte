<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";
  import { getColor } from "../../Color";
  import Button from "../Button.svelte";
  import SortableList from "svelte-sortable-list";

  type T = $$Generic<{ id: string | number }>;

  export let items: T[];

  const dispatch = createEventDispatcher();
</script>

<div class="items">
  {#each items as item, index}
    <div class="item">
      <div class="top">
        <p class="index">
          #{index + 1}
        </p>
        <button
          class="trash"
          on:click={() => {
            dispatch("delete", { index });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill={getColor("red")}
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
            />
          </svg>
        </button>
      </div>

      <slot {item} {index} />
    </div>
  {/each}
</div>

<button
  on:click={() => {
    dispatch("add");
  }}
  class="add"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill={getColor("alleoGrey")}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
</button>

<style>
  .items {
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .item {
    background-color: var(--uiLayer5);
    border-radius: 10px;
    padding: 10px;
  }

  .top {
    display: flex;
    align-items: center;
  }

  .trash,
  .add {
    display: block;
    cursor: pointer;
    margin-left: auto;
  }

  .add {
    background: var(--uiLayer5);
    padding: 5px;
    border-radius: 50%;
    line-height: 1;
  }
</style>
