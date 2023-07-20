import type { SvelteComponent } from "svelte";

export type ComponentProp = new (...args: any) => SvelteComponent;
