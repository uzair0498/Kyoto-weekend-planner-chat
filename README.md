# Kyoto Trip Planner

A chat-style planner for a Kyoto weekend. Sending a message shows a typing indicator, then renders mock stay, experience, and food cards.

![Chat showing a stay, an experience, and a food card](docs/three-cards.png)

## Run locally

Requires Node 20.9+. Run `npm install && npm run dev`, then open http://localhost:3000.

## Placeholder fields

These card fields are filler, not real data:

- **Stay card:** the image area at the top ("Image placeholder").
- **Experience card:** the image strip on the left ("Image placeholder").
- **Food card:** the round thumbnail at the top left ("Photo").

All other fields come from `src/data/mockResponse.ts`.
