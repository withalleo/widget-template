<script lang="ts">
  import ExampleHapticModal from "./ExampleHapticModal.svelte";
  import HapticModalRenderer from "../HapticModalRenderer.svelte";

  let open = false;
</script>

<button on:click={() => (open = true)}>Open</button>

<HapticModalRenderer bind:open Component={ExampleHapticModal} />
