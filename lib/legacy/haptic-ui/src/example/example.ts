import { writable } from 'svelte/store';
import type { Color } from "lib/Color";

export const example = writable("example");
export const example3 = writable("example2");
export const color = writable<Color>("alleoBlue");
export const fontSize = writable<number>(16);
