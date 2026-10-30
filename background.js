import { mountWaves } from './waves.js';

// Selected Waves preset, with all pointer and click interaction disabled.
export const backgroundSettings = {
  lineColor: '#0053d6',
  spacing: 10,
  amplitude: 32,
  twist: 1,
  speed: 1,
  mouseRadius: 175,
  mouseStrength: 1,
  accentColor: '#0053d6',
  lineStyle: 'solid',
  lineWidth: 1,
  rotation: 0,
  scale: 1,
  variation: 0,
  bounce: 0.5,
  returnDuration: 1.4,
  fade: 0,
  opacity: 1,
  mouseInteraction: false,
  clickRipple: false,
  intro: true,
  lightMode: false
};

const container = document.querySelector('#waves-background');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
let dispose;
function startBackground() {
  dispose?.();
  // Keep a still, plain background when reduced motion is requested.
  dispose = undefined;
  container.hidden = motion.matches;
  if (!motion.matches) {
    try {
      dispose = mountWaves(container, backgroundSettings);
    } catch (error) {
      container.hidden = true;
      console.warn('Waves unavailable; using the plain background.', error);
    }
  }
}
if (container) {
  startBackground();
  motion.addEventListener('change', startBackground);
}
