<script>
  import Button from "~/lib/form/Button.svelte";
import Control from "~/lib/form/Control.svelte";
import ControlLabel from "~/lib/form/ControlLabel.svelte";
import Dialog from "~/lib/form/Dialog.svelte";
import ArrayField from "~/lib/form/inputs/ArrayField.svelte";
import Input from "~/lib/form/inputs/Input.svelte";
  import StyleProvider from "~/lib/StyleProvider.svelte";

  let open = false;

  let items = []

  $: console.log(open)
</script>

<StyleProvider />
<Button
  on:click={() => {
    open = true;
  }}>Open</Button
>

<Dialog bind:open={open} title="Example 3" valid={true} on:cancel>
    <ArrayField let:index items={items} on:add={() => {
        items = [...items,""]
    }} on:delete={(e) => {
        items = items.filter((_,i) => i !== e.detail.index)
    }}>
        <Control let:id>
            <ControlLabel for={id}>Name</ControlLabel>
            <Input id={id} bind:value={items[index]} placeholder="" />
        </Control>
    </ArrayField>
</Dialog>