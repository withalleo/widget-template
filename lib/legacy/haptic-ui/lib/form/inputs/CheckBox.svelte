<script context="module">
  let _id = 0;
</script>

<script lang="ts">
  import { colorMap } from "../../Color";

  export let checked: boolean;

  console.log(colorMap["alleoGrey"]);

  export let id = `HAPTIC-UI--CHECK-BOX-${_id++}`;
</script>

<input type="checkbox" bind:checked {id} />
<label for={id} />

<style>
  input {
    opacity: 0;
    cursor: pointer;
    display: none;
  }

  label {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid var(--alleoGrey);
    position: relative;
    cursor: pointer;
    z-index: 1;
  }

  input + label::after,
  input + label::before {
    background: transparent;
    width: 12px;
    height: 4px;
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(calc(-50% + var(--xMove)), -50%)
      rotate(var(--rotateAngle));
    transform-origin: center center;
    transition-duration: 200ms;
    border-radius: 5px;
  }

  input:checked + label::after,
  input:checked + label::before {
    background-color: #f9fff6;
  }

  input + label::before {
    --rotateAngle: 45deg;
    --xMove: -20%;
    --extraLength: 0px;
  }

  input + label::after {
    --rotateAngle: -45deg;
    --xMove: 20%;
    width: 20px;
    left: calc(50% + 2px);
    top: calc(50% - 3px);
  }
</style>
