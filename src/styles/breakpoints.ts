import styledBreakpoint from "@humblebee/styled-components-breakpoint";

/**
 * Breakpoints values
 */
enum Breakpoint {
  xxs = 0,
  xs = 375,
  sm = 768,
  md = 1280,
  lg = 1440,
  xl = 1680,
}

/**
 * Media query generator function set
 * Breakpoints: xxs, xs, sm, md, lg, xl
 */
const breakpoint = styledBreakpoint({
  xxs: Breakpoint.xxs,
  xs: Breakpoint.xs,
  sm: Breakpoint.sm,
  md: Breakpoint.md,
  lg: Breakpoint.lg,
  xl: Breakpoint.xl,
});

export { breakpoint, Breakpoint };
