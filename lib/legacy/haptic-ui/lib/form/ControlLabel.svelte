<!--
    @component

    # ControlLabel

    ## CSS Variables
    - `--HAPTIC-UI-CONTROL-LABEL-padding`: the padding of the label this will default to '10px'
-->

<script lang="ts" context="module">
  export const NoLabelEl = Symbol('NoLabelEl');
</script>

<script lang="ts">
  let _for: string | typeof NoLabelEl;
  

  export { _for as for };
  export let paddingSide: "left" | "right" | "top" | "bottom" = "bottom";
</script>

{#if (_for === NoLabelEl)}
  <p class="{paddingSide} label">
    <slot />
  </p>
{:else}
  <label for={_for} class="{paddingSide} label">
    <slot />
  </label>
{/if}

<style>
  .label {
    display: block;
    --HAPTIC-UI-CONTROL-LABEL-paddingDefault: 10px;
    white-space: nowrap;
  }

  .label.left {
    padding-left: var(
      --HAPTIC-UI-CONTROL-LABEL-padding,
      var(--HAPTIC-UI-CONTROL-LABEL-paddingDefault)
    );
  }

  .label.right {
    padding-right: var(
      --HAPTIC-UI-CONTROL-LABEL-padding,
      var(--HAPTIC-UI-CONTROL-LABEL-paddingDefault)
    );
  }

  .label.top {
    padding-top: var(
      --HAPTIC-UI-CONTROL-LABEL-padding,
      var(--HAPTIC-UI-CONTROL-LABEL-paddingDefault)
    );
  }

  .label.bottom {
    padding-bottom: var(
      --HAPTIC-UI-CONTROL-LABEL-padding,
      var(--HAPTIC-UI-CONTROL-LABEL-paddingDefault)
    );
  }
</style>
