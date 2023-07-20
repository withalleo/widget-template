<script lang="ts">
  import { getColor, isImage } from "../Color";
  import type { ColorOrImage } from "../Color";
  import { createEventDispatcher } from "svelte";

  export let color: ColorOrImage;
  export let activeColor: ColorOrImage | undefined;
  export let id: string | undefined = undefined;
  export let size: string = "10px";
  export let picker: boolean = false;

  const transparentImage = `url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='ban' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='svg-inline--fa fa-ban fa-w-16'%3E%3Cpath fill='white' d='M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z' class=''%3E%3C/path%3E%3C/svg%3E");`;
  const pickerImage = `radial-gradient(var(--uiLayer4), var(--uiLayer4) 4px, transparent 4px), conic-gradient(lightblue, green, yellow, orange, red);`;
  const imageImage = `url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='far' data-icon='image' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='svg-inline--fa fa-image fa-w-16'%3E%3Cpath fill='currentColor' d='M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z' class=''%3E%3C/path%3E%3C/svg%3E");`;

  const dispatch = createEventDispatcher();

  const handleCustomClick = (e: any) => {
    dispatch("click", {
      value: e.target.value,
      custom: true,
    });
  };

  $: colorStyle =
    color === "transparent"
      ? `--image: ${transparentImage}; --color: transparent;`
      : isImage(color)
      ? `--image: ${imageImage};`
      : typeof color === "object" && picker
      ? `--image: ${pickerImage};`
      : `--color: ${getColor(color)};`;
  $: colorClass =
    color === "transparent"
      ? "image color"
      : isImage(color)
      ? "image"
      : typeof color === "object" && picker
      ? "image"
      : "color";
</script>

{#if typeof color === "string" || !picker}
  <button
    type="button"
    on:click={() => {
      dispatch("click", color);
    }}
    style="{colorStyle} --size: {size}"
    class={colorClass}
    {id}
  />
{:else}
  <label class="image" style={`--size: ${size}; --image: ${pickerImage};`}>
    <input
      type="color"
      on:change={handleCustomClick}
      value={activeColor
        ? getColor(isImage(activeColor) ? "black" : activeColor)
        : getColor(isImage(color) ? "black" : color)}
    />
  </label>
{/if}

<style>
  input {
    width: 0;
    height: 0;
  }
  button,
  label {
    display: inline-block;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;

    padding: 0px;
    border: 0px;
    cursor: pointer;
  }

  .image {
    background-image: var(--image);
    background-size: cover;
  }

  .color {
    background-color: var(--color);
  }

  * {
    line-height: 1.2;
  }
</style>
