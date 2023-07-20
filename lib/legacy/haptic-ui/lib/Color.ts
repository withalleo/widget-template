export const colors = [
  "white",
  "black",
  "uiLayer2",
  "uiLayer3",
  "uiLayer4",
  "uiLayer5",
  "uiLayer7",
  "alleoBlue",
  "alleoBlue10Percent",
  "alleoBlue30Percent",
  "red",
  "uiPaletteOrange",
  "secondaryPalettePurple",
  "secondaryPaletteBlue",
  "green",
  "yellow",
  "babyBlue",
  "alleoOlive",
  "fuschia100",
  "alleoGrey",
  "uiPaletteDarkOrange",
  "uiPaletteGold",
  "transparent",
] as const;

export type RawColor = typeof colors[number];
export type Color = RawColor | { custom: true; value: string };
export type ColorOrImage =
  | Color
  | { custom: false; background: true; url: string };

export const colorMap: { [k in RawColor]: string } = {
  white: "#ffffff",
  black: "#000000",
  uiLayer2: "#4E7DBE",
  uiLayer3: "#436EA8",
  uiLayer4: "#396092",
  uiLayer5: "#2f527c",
  uiLayer7: "#1a3551",
  alleoBlue: "#6da8ff",
  alleoBlue10Percent: "rgba(109, 168, 255, 0.1)",
  alleoBlue30Percent: "rgba(109, 168, 255, 0.3)",
  red: "#ff6363",
  uiPaletteOrange: "#fec24e",
  secondaryPalettePurple: "#8f98f0",
  secondaryPaletteBlue: "#43a5ff",
  green: "#31c992",
  yellow: "#fff975",
  babyBlue: "#8fcaff",
  alleoOlive: "#278a90",
  fuschia100: "#ef5da8",
  alleoGrey: "#f9fff6",
  uiPaletteDarkOrange: "#FE634E",
  uiPaletteGold: "#FEC24E",
  transparent: "transparent",
};

export const getColor = (color: Color): string => {
  if (typeof color === "string") {
    return colorMap[color];
  }

  return color.value;
};

export const isImage = (color: ColorOrImage): color is { custom: false; background: true; url: string } => {
  return typeof color === "object" && color.custom === false && color.background === true;
}
