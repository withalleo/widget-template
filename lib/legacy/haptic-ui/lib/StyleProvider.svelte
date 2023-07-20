<script lang="ts" >
  import { onMount } from "svelte";
  import { colorMap } from "./Color";
  import {get_current_component} from "svelte/internal";

  const component = get_current_component();

  export let host: HTMLElement = null;

  onMount(() => {
    const hostNode = host ?? component.$$.root;

    for (const [k,v] of Object.entries(colorMap)) {
      hostNode.style.setProperty(`--${k}`,v);
    }

    hostNode.style.setProperty(`--colorPickerZ`,'10');
  });
</script>