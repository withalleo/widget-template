<script lang="ts">
  import ExampleHapticModal from "./ExampleDialog.svelte";
  import StyleProvider from "../../lib/StyleProvider.svelte";
  import Card from "../../lib/content/Card.svelte";
  import ProgressBar from "../../lib/content/ProgressBar.svelte";
  import type { Color } from "../../lib/Color";
  import SettingsButton from "../../lib/form/SettingsButton.svelte";
import App from "./App.svelte";
import ExampleDialog from "./ExampleDialog.svelte";

  let open = false;

  let example = true;
  let color: Color = "red";
  let fontSize = 3;
  let example3 = "";
  let value = "";
  let color2: Color | undefined = undefined;
  let items=[]
</script>

<StyleProvider />

<div class="wrapper">
  <Card
    width="500px"
    title="Hi there! How are you doing for the second time?"
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
</div>

<ExampleDialog
  bind:open={open}

  bind:example={example}
  bind:color={color}
  bind:fontSize={fontSize}
  bind:example3={example3}
  bind:value={value}
  bind:color2={color2}
  bind:items={items}
/>

<style>
  :global(body) {
    margin: 0;
    background: black;
  }

  :global(*) {
    box-sizing: border-box;
  }

  .wrapper {
    position: relative;
  }

  .settings-button-wrapper {
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>
