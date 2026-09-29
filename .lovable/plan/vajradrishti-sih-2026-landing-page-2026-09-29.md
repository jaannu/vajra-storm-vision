# VajraDrishti SIH 2026 Landing Page

## Goal
Build a polished, responsive one-page presentation for SIH judges and public-sector stakeholders, centered on credible meteorological intelligence rather than generic startup styling.

## Experience
- Create a full-viewport opening scene using the generated India storm map, live arrival countdown, animated radar sweep, storm trajectory, status readouts, and two clear actions.
- Use a restrained deep-charcoal interface with electric cyan for intelligence signals and orange/red only for active hazards.
- Present the problem, dual software/device solution, six innovations, architecture pipeline, and quantified impact in a dense but highly scannable technical narrative.
- Add a compact anchored navigation and a simple team/event footer with the requested links.
- Make all key layouts and controls adapt cleanly across phones, tablets, and desktops, with reduced-motion support.

## Functional details
- Run the storm countdown live from `00:42:15`, resetting when it reaches zero.
- Make “View Live Demo” scroll to the storm intelligence display and “Read Technical Paper” open a technical brief section on the page.
- Add subtle interactive states to innovation tiles and live telemetry indicators without over-animating the interface.

## Technical details
- Implement the page in the existing TanStack Start home route and preserve the existing application shell.
- Define the complete semantic color and typography system in the global Tailwind v4 stylesheet.
- Use the generated storm image as a bundled asset and draw interface overlays with CSS and lightweight React.
- Add route-specific title, description, Open Graph, and Twitter metadata.
- Record the visual/structural decision in `AGENTS.md`, then validate compilation and the rendered page at desktop and mobile sizes.
