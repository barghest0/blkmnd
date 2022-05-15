const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 1400,
};

const breakpoint = (breakpoint: keyof typeof breakpoints) => {
  return `(max-width: ${breakpoints[breakpoint]}px)`;
};
export { breakpoint };
