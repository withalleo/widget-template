<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import Portal from "./Portal.svelte";
  import { fade } from "svelte/transition";
  import Button from "../form/Button.svelte";
  import Spacer from "../layout-helpers/Spacer.svelte";
  import Surface from "../layout-helpers/Surface.svelte";

  export let open: boolean;
  export let valid: boolean;
  export let title: string;
  export let zIndex = 10;
  export let clickClose = false;

  const dispatch = createEventDispatcher();

  type T = $$Generic<object>;
</script>

<Portal target="body">
  {#if open}
    <Surface
      {zIndex}
      width="100vw"
      height="100vh"
      backgroundColor={{ custom: true, value: "rgb(0,0,0,0.32)" }}
      position="fixed"
      top="0"
      left="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
      on:click={(e) => {
        if (e.target === e.currentTarget && clickClose) {
          open = false;
        }
      }}
    >
      <Surface
        margin="20px"
        borderRadius="5px;"
        boxShadow="0px 11px 15px -7px rgb(0 0 0 / 20%),
          0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)"
        width="350px"
        height="min-content"
        padding="25px"
        overflowY="visible"
        overflowX="auto"
        maxHeight="90vh"
        fontFamily="sans-serif"
        fontSize="10px"
      >
        <h1>{title}</h1>

        <slot />

        <div class="bottom">
          <Button style="outlined" on:click={() => {
            open = false;
            dispatch("cancel");
          }}>
            Cancel
          </Button>
          <Spacer flexGrow="1" />
          <Button
            disabled={!valid}
            on:click={() => {
              if (valid) {
                open = false;
                dispatch("save");
              }
            }}
          >
            Save
          </Button>
        </div>
      </Surface>
    </Surface>
  {/if}
</Portal>

<style>
  .bottom {
    display: flex;
    margin-top: 20px;
  }

  h1 {
    margin: 0px;
    margin-bottom: 16px;
    font-size: 16px;
  }
</style>
