<!--
    @component 

    # Control

    ## Usage
    ```
        <Control let:id direction="row">
            <ControlLabel paddingSide="right" for={id}>Example Label</ControlLabel>
            <Input {id} bind:value placeholder="Enter Text" />
        </Control>
    ```
-->

<script context="module">
  let _id = 0;
</script>

<script lang="ts">
  export let direction: "row" | "column" = "column";
  let id = `HAPTIC-UI--CONTROL-ID-${_id++}`;

  $: row = direction === "row";
  $: column = direction === "column";
</script>

<div class="control" style="flex-direction: {direction}" class:row class:column>
  <slot {id} />
</div>

<style>
  .control {
    padding: 10px 0;
    display: flex;
  }

  .row {
      align-items: center;
  }
</style>
