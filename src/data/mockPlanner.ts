import { mockResponse, TripCard } from "@/data/mockResponse";

// Typing this exact phrase makes the first request fail (see docs/error-message-guideline.md).
export const FAIL_TRIGGER_PHRASE = "Break the planner";

export const MOCK_DELAY_MS = 1500;

// Stands in for the trip-planning request. Resolves with the mock cards,
// or rejects to exercise the error path.
export function fetchMockPlan(shouldFail: boolean): Promise<TripCard[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Mock planner failed"));
      } else {
        resolve(mockResponse);
      }
    }, MOCK_DELAY_MS);
  });
}
