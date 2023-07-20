<script lang="ts">
  import { fade } from "svelte/transition";
  import CircleButton from "../CircleButton.svelte";

  import type { Color, ColorOrImage } from "../../Color";
  import { createEventDispatcher } from "svelte";

  export let color: Color = "red";
  export let colorOrImage: ColorOrImage | null = null;

  export let availableColors: Color[];
  export let open = false;
  export let id: string | undefined = undefined;
  export let size: string = "15px";

  $: columns = Math.ceil(availableColors.length / 2);

  const dispatch = createEventDispatcher();
</script>

<div class="wrapper">
  <CircleButton
    color={colorOrImage ?? color}
    on:click={() => (open = !open)}
    {id}
    {size}
    activeColor={colorOrImage ?? color}
  />

  {#if open}
    <div
      class="picker"
      style="--columns: {columns}"
      transition:fade={{ duration: 200 }}
    >
      {#each availableColors as availableColor}
        <CircleButton
          size="15px"
          activeColor={colorOrImage ?? color}
          picker={true}
          color={availableColor}
          on:click={(e) => {
            if (colorOrImage) {
              colorOrImage = e.detail;
            } else {
              color = e.detail;
            }
            open = false;
          }}
        />
      {/each}

      {#if colorOrImage}
        <button
          class="upload-image"
          on:click={() => {
            dispatch("uploadImage");
          }}>Upload Image</button
        >
      {/if}

      <div class="triangle" transition:fade={{ duration: 200 }} />
    </div>
  {/if}
</div>

<style>
  * {
    line-height: 1.2;
  }
  .wrapper {
    position: relative;
    width: min-content;
    display: inline-block;
  }
  .picker {
    display: grid;
    --item-gap: 6px;
    grid-template-columns: repeat(var(--columns), 15px);
    grid-template-rows: 15px 15px;
    gap: var(--item-gap);
    padding: calc(var(--item-gap) * 2) var(--item-gap);
    background: var(--uiLayer4);
    position: absolute;
    align-items: center;
    justify-items: center;
    border-radius: 5px;
    left: 50%;
    bottom: -12px;
    transform: translateX(-50%) translateY(100%);
    box-shadow: 0px 0 20px rgba(0, 0, 0, 1);
    z-index: var(--colorPickerZ);
  }

  .triangle {
    position: absolute;
    box-sizing: content-box;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-bottom-color: var(--uiLayer4);
    top: 0px;
    left: 50%;
    transform: translateX(-50%) translateY(-100%);
    z-index: var(--colorPickerZ);
  }

  .upload-image {
    width: 100%;
    grid-column-start: 1;
    grid-column-end: final-column;
    margin-top: 8px;
    color: var(--alleoGrey);
    background: rgba(255,255,255,0.2);
    border: none;
    border-radius: 4px;
    margin-bottom: 4px;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
