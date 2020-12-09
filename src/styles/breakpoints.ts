import styledBreakpoint from "@humblebee/styled-components-breakpoint";

/**
 * Breakpoints values
 */
enum Breakpoint {
  xxs = 0,
  xs = 320,
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
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
