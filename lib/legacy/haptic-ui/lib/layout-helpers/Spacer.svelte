<script lang="ts">
  export let width: string | number = 0;
  export let height: string | number = 0;
  export let flexGrow: string = "unset";

  $: _width = typeof width === "number" ? `${width}px` : width;
  $: _height = typeof height === "number" ? `${height}px` : height;
</script>

<div style="width: {_width}; height: {_height}; flex-grow: {flexGrow};" />
