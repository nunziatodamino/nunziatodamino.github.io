# Homepage backgrounds

The homepage uses two local assets. Neither requires a hosted image service, subscription, API call, or additional deployment workflow.

- `quartz/static/home/painter.webp` — a decorative background generated using the built-in image generation tool, then encoded as WebP at quality 84 (1024 × 1536, approximately 509 KB). This is not an artwork by Nunziato Damino and is not included in the portfolio.
- `quartz/static/home/physicist.svg` — a locally authored, repeating isometric lattice. The pattern is vector geometry and stays crisp at any size.

These files are copied to `public/static/home/` by Quartz. Their references are in `quartz/components/pages/PersonalPage.tsx`. Appearance and focus/hover effects are in `quartz/components/styles/personal.scss`; mouse tracking is in `quartz/components/scripts/home.inline.ts`.

The homepage keeps an equal left/right split on screens wider than 650px and stacks the images on smaller screens. Both entire panels are links. Keyboard focus highlights the selected panel. Touch devices navigate with a single tap. Reduced-motion preferences disable zoom, movement, and the cursor spotlight.

## Final painter-background prompt

Tool: built-in `image_gen`, generation mode. No CLI or paid API fallback was used.

> Use case: stylized-concept. Asset type: decorative full-bleed background image for the left half of a personal website split-screen homepage, Painter on the left and Physicist on the right. Generate only the painter background, NOT a screenshot, website mockup, framed painting, or diptych. Primary request: a richly colourful abstract painting texture. Close-up of expressive layered brushstrokes and broad flowing fields of saturated vermilion, cobalt blue, warm yellow, turquoise and magenta; tactile pigment, subtle canvas grain, strong movement. Artful, sophisticated and luminous, not clip art. Portrait composition approximately 1024x1536, edge-to-edge colour, works when cropped to fill a tall half-screen. Keep visual detail balanced across the image so large white text can be overlaid later. No text, letters, signature, watermark, people, brushes or frames. This is a decorative generated website background, not presented as the owner's artwork.
