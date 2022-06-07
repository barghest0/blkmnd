const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 1400,
};

const breakpoint = (bp: keyof typeof breakpoints) =>
  `(max-width: ${breakpoints[bp]}px)`;

const breakpointUp = (bp: keyof typeof breakpoints) =>
  `(min-width: ${breakpoints[bp]}px)`;

export { breakpoint, breakpointUp };
