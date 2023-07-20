<script lang="ts">
  import { getColor } from "../Color";
  import type { Color } from "../Color";
  import type * as CSS from "csstype";

  export let backgroundColor: Color | undefined = "uiLayer7";
  export let borderRadius: CSS.Properties["borderRadius"] = "5px";
  export let fontFamily: CSS.Properties["fontFamily"] = undefined;

  export let padding: CSS.Properties["padding"] = "10px";
  export let fontSize: CSS.Properties["fontSize"] = "16px";
  export let color: Color | undefined = "alleoGrey";

  export let overflowX: CSS.Properties["overflowX"] = undefined;
  export let overflowY: CSS.Properties["overflowY"] = undefined;
  export let alignItems: CSS.Properties["alignItems"] = undefined;
  export let animation: CSS.Properties["animation"] = undefined;
  export let animationDelay: CSS.Properties["animationDelay"] = undefined;
  export let animationDirection: CSS.Properties["animationDirection"] = undefined
  export let animationDuration: CSS.Properties["animationDuration"] = undefined;
  export let animationFillMode: CSS.Properties["animationFillMode"] = undefined;
  export let animationIterationCount: CSS.Properties["animationIterationCount"] = undefined;
  export let animationName: CSS.Properties["animationName"] = undefined;
  export let animationPlayState: CSS.Properties["animationPlayState"] = undefined
  export let animationTimingFunction: CSS.Properties["animationTimingFunction"] = undefined
  export let appearance: CSS.Properties["appearance"] = undefined;
  export let backfaceVisibility: CSS.Properties["backfaceVisibility"] = undefined
  export let background: CSS.Properties["background"] = undefined;
  export let bottom: CSS.Properties["bottom"] = undefined;
  export let boxShadow: CSS.Properties["boxShadow"] = undefined;
  export let cursor: CSS.Properties["cursor"] = undefined;
  export let display: CSS.Properties["display"] = undefined;
  export let flex: CSS.Properties["flex"] = undefined;
  export let flexBasis: CSS.Properties["flexBasis"] = undefined;
  export let flexDirection: CSS.Properties["flexDirection"] = undefined;
  export let flexFlow: CSS.Properties["flexFlow"] = undefined;
  export let height: CSS.Properties["height"] = undefined;
  export let justifyContent: CSS.Properties["justifyContent"] = undefined;
  export let left: CSS.Properties["left"] = undefined;
  export let letterSpacing: CSS.Properties["letterSpacing"] = undefined;
  export let margin: CSS.Properties["margin"] = undefined;
  export let maxHeight: CSS.Properties["maxHeight"] = undefined;
  export let maxWidth: CSS.Properties["maxWidth"] = undefined;
  export let minHeight: CSS.Properties["minHeight"] = undefined;
  export let minWidth: CSS.Properties["minWidth"] = undefined;
  export let overflow: CSS.Properties["overflow"] = undefined;
  export let perspective: CSS.Properties["perspective"] = undefined;
  export let perspectiveOrigin: CSS.Properties["perspectiveOrigin"] = undefined;
  export let position: CSS.Properties["position"] = undefined;
  export let right: CSS.Properties["right"] = undefined;
  export let textAlign: CSS.Properties["textAlign"] = undefined;
  export let textDecoration: CSS.Properties["textDecoration"] = undefined;
  export let textTransform: CSS.Properties["textTransform"] = undefined;
  export let top: CSS.Properties["top"] = undefined;
  export let transform: CSS.Properties["transform"] = undefined;
  export let transformBox: CSS.Properties["transformBox"] = undefined;
  export let transformOrigin: CSS.Properties["transformOrigin"] = undefined;
  export let transformStyle: CSS.Properties["transformStyle"] = undefined;
  export let transition: CSS.Properties["transition"] = undefined;
  export let transitionDelay: CSS.Properties["transitionDelay"] = undefined;
  export let transitionDuration: CSS.Properties["transitionDuration"] =
    undefined;
  export let transitionProperty: CSS.Properties["transitionProperty"] =
    undefined;
  export let transitionTimingFunction: CSS.Properties["transitionTimingFunction"] =
    "ease";
  export let userSelect: CSS.Properties["userSelect"] = undefined;
  export let verticalAlign: CSS.Properties["verticalAlign"] = undefined;
  export let whiteSpace: CSS.Properties["whiteSpace"] = undefined;
  export let width: CSS.Properties["width"] = undefined;
  export let willChange: CSS.Properties["willChange"] = undefined;
  export let wordBreak: CSS.Properties["wordBreak"] = undefined;
  export let wordSpacing: CSS.Properties["wordSpacing"] = undefined;
  export let wordWrap: CSS.Properties["wordWrap"] = undefined;
  export let zIndex: CSS.Properties["zIndex"] = undefined;
  export let border: CSS.Properties["border"] = undefined;
  export let borderBottom: CSS.Properties["borderBottom"] = undefined;
  export let borderBottomColor: undefined | Color = undefined;
  export let borderBottomLeftRadius: CSS.Properties["borderBottomLeftRadius"] =
    "5px";
  export let borderBottomRightRadius: CSS.Properties["borderBottomRightRadius"] =
    "5px";
  export let borderBottomStyle: CSS.Properties["borderBottomStyle"] = undefined;
  export let borderBottomWidth: CSS.Properties["borderBottomWidth"] = undefined;
  export let borderColor: undefined | Color = undefined;
  export let borderImage: CSS.Properties["borderImage"] = undefined;
  export let borderImageOutset: CSS.Properties["borderImageOutset"] = undefined;
  export let borderImageRepeat: CSS.Properties["borderImageRepeat"] = undefined;
  export let borderImageSlice: CSS.Properties["borderImageSlice"] = undefined;
  export let borderImageSource: CSS.Properties["borderImageSource"] = undefined;
  export let borderImageWidth: CSS.Properties["borderImageWidth"] = undefined;
  export let borderLeft: CSS.Properties["borderLeft"] = undefined;
  export let borderLeftColor: undefined | Color = undefined;
  export let borderLeftStyle: CSS.Properties["borderLeftStyle"] = undefined;
  export let borderLeftWidth: CSS.Properties["borderLeftWidth"] = undefined;
  export let borderRight: CSS.Properties["borderRight"] = undefined;
  export let borderRightColor: undefined | Color = undefined;
  export let borderRightStyle: CSS.Properties["borderRightStyle"] = undefined;
  export let borderRightWidth: CSS.Properties["borderRightWidth"] = undefined;
  export let borderSpacing: CSS.Properties["borderSpacing"] = undefined;
  export let borderStyle: CSS.Properties["borderStyle"] = undefined;
  export let borderTop: CSS.Properties["borderTop"] = undefined;
  export let borderTopColor: undefined | Color = undefined;
  export let borderTopLeftRadius: CSS.Properties["borderTopLeftRadius"] =
    undefined;
  export let borderTopRightRadius: CSS.Properties["borderTopRightRadius"] =
    "5px";
  export let borderTopStyle: CSS.Properties["borderTopStyle"] = undefined;
  export let borderTopWidth: CSS.Properties["borderTopWidth"] = undefined;
  export let borderWidth: CSS.Properties["borderWidth"] = undefined;
  export let gap: CSS.Properties["gap"] = undefined;
  export let flexWrap: CSS.Properties["flexWrap"] = undefined;
  export let boxSizing: CSS.Properties["boxSizing"] = undefined;

  // create an object with all the above style properties
  $: style = Object.entries({
    alignItems,
    animation,
    animationDelay,
    animationDirection,
    animationDuration,
    animationFillMode,
    animationIterationCount,
    animationName,
    animationPlayState,
    animationTimingFunction,
    appearance,
    backfaceVisibility,
    backgroundColor,
    borderRadius,
    bottom,
    boxShadow,
    color,
    cursor,
    display,
    flex,
    flexBasis,
    flexDirection,
    flexFlow,
    fontFamily,
    fontSize,
    height,
    justifyContent,
    left,
    letterSpacing,
    margin,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    overflow,
    padding,
    perspective,
    perspectiveOrigin,
    position,
    right,
    textAlign,
    textDecoration,
    textTransform,
    top,
    transform,
    transformBox,
    transformOrigin,
    transformStyle,
    transition,
    transitionDelay,
    transitionDuration,
    transitionProperty,
    transitionTimingFunction,
    userSelect,
    verticalAlign,
    whiteSpace,
    width,
    willChange,
    wordBreak,
    wordSpacing,
    wordWrap,
    zIndex,
    border,
    borderBottom,
    borderBottomColor,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderBottomStyle,
    borderBottomWidth,
    borderColor,
    borderImage,
    borderImageOutset,
    borderImageRepeat,
    borderImageSlice,
    borderImageSource,
    borderImageWidth,
    borderLeft,
    borderLeftColor,
    borderLeftStyle,
    borderLeftWidth,
    borderRight,
    borderRightColor,
    borderRightStyle,
    borderRightWidth,
    borderSpacing,
    borderStyle,
    borderTop,
    borderTopColor,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderTopStyle,
    borderTopWidth,
    borderWidth,
    gap,
    flexWrap,
    background,
    overflowX,
    overflowY,
    boxSizing
  })
    .filter(([key, value]) => value !== undefined)
    .map(([key, value]) => {
      const dashedKey = key.replace(
        /([A-Z])/g,
        (g) => `-${g[0].toLowerCase()}`
      );

      return `${dashedKey}: ${
        dashedKey.includes("color") ? getColor(value as Color) : value
      };`;
    })
    .join("\n");

  export let clientWidth = 0;
  export let clientHeight = 0;
</script>

<div bind:clientHeight bind:clientWidth {style}>
  <slot />
</div>

<style>
  div::-webkit-scrollbar {
    width: 5px;
  }
  div::-webkit-scrollbar-thumb {
    background: var(--alleoGrey);
  }
  div::-webkit-scrollbar-track {
    background: var(--uiLayer7);
  }
  div::-webkit-scrollbar-track-piece {
    background: var(--uiLayer7);
  }
</style>
