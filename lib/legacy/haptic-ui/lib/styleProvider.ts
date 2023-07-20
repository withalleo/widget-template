import { colorMap } from "./Color";

export function styleProvider(node) {
    for (const [k,v] of Object.entries(colorMap)) {
      node.style.setProperty(`--${k}`,v);
    }

    node.style.setProperty(`--colorPickerZ`,'10');

	return {
		destroy() {
            for (const [k,v] of Object.entries(colorMap)) {
              node.style.removeProperty(`--${k}`,v);
            }

            node.style.removeProperty(`--colorPickerZ`,'10');
		},
	};
}