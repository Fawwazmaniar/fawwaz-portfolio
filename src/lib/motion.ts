const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** True when scroll-triggered animation is both possible and welcome. */
export const canAnimateOnScroll = () => typeof IntersectionObserver !== 'undefined' && !prefersReducedMotion()
