# Error Message Guideline: Kyoto Trip Planner

Source: "Kyoto Trip Planner: Card and Error-State Spec" (artifact H3ZUxoy64w3uMWktWbRGrb, Error bubble and Forced-failure trigger sections, rev 27).

## Error bubble

The error bubble replaces the cards when the Kyoto weekend plan fails to load, and offers one retry.

### Layout

```text
Assistant
+-----------------------------------------------+
|  Oops, something went wrong while planning    |
|  your Kyoto weekend. Want to give it another  |
|  try?                          [ Try again ]  |
+-----------------------------------------------+
```

### Parts

| Part | Value |
| --- | --- |
| Message | Oops, something went wrong while planning your Kyoto weekend. Want to give it another try? |
| Button label | Try again |
| Button position | Inside the assistant's chat bubble, bottom right. |
| What the button does | Sends the same trip request again. On success, the stay, experience and food cards appear in that order. |

## Forced-failure trigger

Typing one exact phrase makes the next request return the broken mock response, so the error bubble can be tested on demand.

**Trigger phrase:** `Break the planner`

### Steps to fire it

1. Type "Break the planner" in the chat box.
2. Press Enter.
3. The thinking animation plays, then the error bubble appears.
4. Tap **Try again**. The stay, experience and food cards appear in that order.

### Fail-once rule

- The phrase fails only the first time it is typed, as the old `?fail=once` address trigger did.
- Later attempts work normally.
- A page reload resets the flag, because it lives in component state. A fresh page always fails the first time the trigger phrase is typed, so each test run is repeatable.
