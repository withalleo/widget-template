<script lang="ts">
  import ExampleHapticModal from "./ExampleDialog.svelte";
  import StyleProvider from "../../lib/StyleProvider.svelte";
  import Card from "../../lib/content/Card.svelte";
  import ProgressBar from "../../lib/content/ProgressBar.svelte";
  import type { Color, ColorOrImage } from "../../lib/Color";
  import SettingsButton from "../../lib/form/SettingsButton.svelte";
  import App from "./App.svelte";
  import ExampleDialog from "./ExampleDialog.svelte";
  import Surface from "~/lib/layout-helpers/Surface.svelte";

  let open = false;

  let example = true;
  let color: ColorOrImage = {custom: false, url: "",background: true};
  let fontSize = 3;
  let example3 = "";
  let value = "";
  let color2: Color | undefined = undefined;
  let items = [];
</script>

<StyleProvider />

<Surface>
  <Card
    width="500px"
    title="Hi there! How are you doing?"
    subtitle="A Friendly greeting! This sentence just gets longer and longer."
    buttonText="Open Modal"
    on:click={() => (open = true)}
    buttonBg="uiPaletteDarkOrange"
    buttonStyle="underlined"
  >
    <ProgressBar text="Stupidity" percent={50} />
    <ProgressBar text="Helpfulness" percent={30} active={true} />
    <ProgressBar text="Uncertainty" percent={10} />
    <ProgressBar text="Stinkyness" percent={0} />

    <div class="settings-button-wrapper">
      <SettingsButton
        --HAPTIC-UI-SETTINGS-BUTTON_width="30px"
        --HAPTIC-UI-SETTINGS-BUTTON_height="30px"
        on:click={() => {
          open = true;
        }}
      />
    </div>
  </Card>
</Surface>

<ExampleDialog
  bind:open
  bind:example
  bind:color
  bind:fontSize
  bind:example3
  bind:value
  bind:color2
  bind:items
/>

<style>
  :global(body) {
    margin: 0;
    background: black;
  }

  :global(*) {
    box-sizing: border-box;
  }

  .settings-button-wrapper {
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>
