# Kyoto Trip Planner

**Live link:** https://kyoto-weekend-planner-chat.vercel.app

A chat-style planner for a Kyoto weekend. Sending a message shows a typing indicator, then renders mock stay, experience, and food cards.

![Chat showing a stay, an experience, and a food card](docs/three-cards-laptop.png)

> **Team note:** This link opens the Kyoto Trip Planner chat in any browser, with no install, login, or setup. All trips are **sample data**; nothing is booked or saved. To try both paths: (1) **Normal:** type any trip request, for example `Plan a weekend in Kyoto`, to see a thinking animation and then a stay, an experience, and a food card. (2) **Failure:** type `Break the planner` and press Enter to see a friendly error with **Try again**, then click it to bring the three cards back. The failure fires once per page load, so refresh to repeat it.

## Run locally

Requires Node 20.9+. Run `npm install && npm run dev`, then open http://localhost:3000.

To fire the error bubble, type `Break the planner` and press Enter. It fails the first time only: the fail flag is a `useRef` inside the chat component, so a page reload clears it and the next try fails again. Click **Try again** to see the three cards.

## Checklist before sharing

| Check | Phone | Laptop |
| --- | --- | --- |
| 3 of 3 cards (thinking state, then stay, experience, food; each looks different) | ✅ | ✅ |
| 0 blank-chat moments (failure, Try again pressed, and after) | ✅ | ✅ |
| No login (private/incognito window, no install or setup) | ✅ | ✅ |
| Mocked data note (page says sample data, nothing is booked) | ✅ | ✅ |

### Screenshots

| Screen | Phone | Laptop |
| --- | --- | --- |
| Three cards | <img src="docs/three-cards-phone.png" width="200" alt="Phone: three cards"> | <img src="docs/three-cards-laptop.png" width="380" alt="Laptop: three cards"> |
| Error bubble | <img src="docs/error-bubble-phone.png" width="200" alt="Phone: error bubble"> | <img src="docs/error-bubble-laptop.png" width="380" alt="Laptop: error bubble"> |
| After Try again | <img src="docs/three-cards-after-retry-phone.png" width="200" alt="Phone: after Try again"> | <img src="docs/three-cards-after-retry-laptop.png" width="380" alt="Laptop: after Try again"> |

## Placeholder fields

These card fields are filler, not real data:

- **Stay card:** the image area at the top ("Image placeholder").
- **Experience card:** the image strip on the left ("Image placeholder").
- **Food card:** the round thumbnail at the top left ("Photo").

All other fields come from `src/data/mockResponse.ts`.
