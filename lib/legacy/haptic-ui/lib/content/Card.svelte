<script lang="ts">
  import type { Color } from "../Color";
  import type { ButtonStyle } from "../form/ButtonStyle";
  import DynamicHeading from "./DynamicHeading.svelte";
  import P from "./P.svelte";
  import Spacer from "../layout-helpers/Spacer.svelte";
  import Button from "../form/Button.svelte";

  export let width = "100%";
  export let height = "auto";
  export let title: string;
  export let subtitle: string;
  export let buttonText: string = "";
  export let buttonBg: Color = "uiPaletteDarkOrange";
  export let buttonStyle: ButtonStyle = "primary";
  export let disabled: boolean = false;
</script>

<section style="--width: {width}; --height: {height}">
  <DynamicHeading level={1}>{title}</DynamicHeading>
  <P --margin="0 0 16px 0">{subtitle}</P>
  <slot />

  {#if buttonText}
    <Spacer height={16} />
    <Button center primaryBg={buttonBg} on:click {disabled} style={buttonStyle}>
      {buttonText}
    </Button>
  {/if}
</section>

<style>
  section {
    background: var(--uiLayer7);
    color: var(--alleoGrey);
    width: var(--width);
    height: var(--height);
    padding: 32px;
    border-radius: 5px;
  }
</style>
