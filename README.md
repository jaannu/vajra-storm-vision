# VajraDrishti: Edge Storm Vision

Act as a senior UI/UX designer and full-stack developer. Create a modern, high-converting, responsive landing page for a Smart India Hackathon (SIH) 2026 project.

Project Details:
- Project Name: VajraDrishti (वज्र दृष्टि)
- Tagline: "Hyperlocal storm vision, even without the cloud."
- Problem Statement ID: SIH26084
- Core Concept: An edge-first, multi-source fusion nowcasting platform for 0–6 hour probabilistic warnings of Thunderstorms, Hail, and Cloudbursts at 1–3 km resolution.
- Target Audience: SIH Judges, MoES (Ministry of Earth Sciences) officials, Disaster Management Authorities (NDRF), and AgriTech stakeholders.

Visual Identity & UI/UX:
- Theme: Deep-tech, meteorological, disaster management, AI.
- Color Palette: Dark mode base (Deep Slate/Charcoal), Electric Cyan/Blue for primary accents (radar/tech vibe), and Warning Orange/Red for alerts/hazard indicators.
- Typography: Modern sans-serif (e.g., Inter, Roboto) with bold, large headings.
- Animations: Subtle radar sweeps, glowing nodes, and a live ticking countdown clock in the hero section.

Website Structure & Content:

1. Hero Section:
- Headline: "VajraDrishti: Edge-AI Nowcasting for Extreme Weather"
- Sub-headline: "0–6 hour probabilistic warnings for Thunderstorms, Hail, and Cloudbursts at 1–3 km resolution. Operating offline, when it matters most."
- CTAs: "View Live Demo" (Primary), "Read Technical Paper" (Secondary).
- Visual: An interactive, dark-themed GIS map background showing a simulated storm cell with a trajectory polygon and a "Storm Arrival Countdown: 00:42:15".

2. The Problem (The "Why"):
Use 4 bold bullet points with icons:
- Rapid Convective Initiation: Traditional NWP models are too slow.
- Lack of Hyperlocal Alerting: District-level warnings fail the last mile.
- Extreme Event Blindspot: Standard CNNs blur out cloudburst peaks.
- Connectivity Gaps: Remote areas lose radar and internet during storms.

3. The Solution (VajraDrishti & VajraBox):
- VajraDrishti Software: Multi-source fusion engine (Radar + INSAT-3D/3DR + Lightning + All-Sky Camera) running a Physics-Informed Diffusion Model.
- VajraBox Edge Device: A portable Jetson Orin Nano/RPi 5 unit that runs distilled AI locally. Triggers local sirens, LoRa mesh, and SMS without cloud dependency.

4. Core Innovations (Grid Layout with Hover Effects):
- Physics-Informed Diffusion: Preserves extreme amplitudes (Cloudbursts >100mm/hr).
- Cloudburst-Specific Head: Monitors rapid reflectivity spikes (>45 dBZ in <10 min) and VIL jumps.
- Explainable AI (XAI): Shows feature contribution breakdowns (Radar 34%, Cloud-top temp 22%, Lightning 18%).
- Graceful Degradation: Auto-reweights to satellite + camera if radar fails.
- Federated Learning: Edge nodes improve the global model without centralizing raw data.
- Multi-Channel Alerting: SMS, WhatsApp API, LoRa mesh, and local siren.

5. Technical Architecture (Visual Pipeline Diagram):
- Cloud Training: PyTorch/JAX, ERA5/IMDAA, NCUM/NEPS-G datasets.
- Edge Deployment: Knowledge Distillation → INT8 Quantization → TensorRT/ONNX Runtime.
- Alert Engine: WebSocket-driven dashboard + REST API + GPIO Siren/LoRa.

6. Impact & Benefits:
- Safer Disaster Response: Reduces deaths from localized cloudbursts.
- Rural Economy Protection: 3–10 day lead time for farmers to alter harvesting.
- Aviation & Railway Safety: Operational safety for transport sectors.
- Scalable Framework: Modular pipeline scales from VajraBox to state-wide deployment.

7. Footer:
- Team Name: DassandCo
- Event: Smart India Hackathon 2026
- Links: GitHub Repository | Demo Video | IMD/MOSDAC Data APIs | Contact Us.

Technical Requirements:
- Fully responsive (Mobile, Tablet, Desktop).
- Clean, semantic HTML5 and modern CSS (Tailwind CSS preferred).
- Ensure the design looks like a top-tier hackathon finalist project, not a generic template.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7c782568-c25b-40c3-ae58-2a8767a482d5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
