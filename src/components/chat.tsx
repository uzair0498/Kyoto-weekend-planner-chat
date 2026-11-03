"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { mockResponse, TripCard } from "@/data/mockResponse";
import StayCard from "@/components/stay-card";
import ExperienceCard from "@/components/experience-card";
import FoodCard from "@/components/food-card";

type Message =
  | { id: number; kind: "user"; text: string }
  | { id: number; kind: "assistant"; card: TripCard };

const TYPING_DELAY_MS = 1500;

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [draft, setDraft] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const threadEndRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);

  function createId() {
    nextId.current += 1;
    return nextId.current;
  }

  // While the assistant is "typing", wait, then append every mock card in order.
  useEffect(() => {
    if (!isTyping) return;

    const timer = setTimeout(() => {
      const cards: Message[] = mockResponse.map((card) => ({
        id: createId(),
        kind: "assistant",
        card,
      }));
      setMessages((prev) => [...prev, ...cards]);
      setIsTyping(false);
    }, TYPING_DELAY_MS);

    return () => clearTimeout(timer);
  }, [isTyping]);

  useEffect(() => {
    threadEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text || isTyping) return;

    setMessages((prev) => [...prev, { id: createId(), kind: "user", text }]);
    setDraft("");
    setIsTyping(true);
  }

  const inputLocked = isTyping;

  return (
    <div className="flex h-dvh flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <header className="border-b border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
        <h1 className="text-lg font-semibold">Kyoto Trip Planner</h1>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mx-auto flex max-w-2xl flex-col gap-3">
          {messages.length === 0 && !isTyping ? (
            <p className="text-center text-sm text-zinc-500">
              Start planning your Kyoto weekend by sending a message below.
            </p>
          ) : (
            messages.map((message) =>
              message.kind === "user" ? (
                <div key={message.id} className="flex justify-end">
                  <div className="max-w-[80%] whitespace-pre-wrap break-words rounded-2xl rounded-br-sm bg-blue-600 px-4 py-2 text-white">
                    {message.text}
                  </div>
                </div>
              ) : (
                <div key={message.id} className="flex justify-start">
                  <div className="w-full max-w-[85%]">
                    <TripCardView card={message.card} />
                  </div>
                </div>
              )
            )
          )}

          {isTyping && <TypingBubble />}

          <div ref={threadEndRef} />
        </div>
      </main>

      <form
        onSubmit={handleSubmit}
        className="border-t border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="mx-auto flex max-w-2xl gap-2">
          <input
            type="text"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            disabled={inputLocked}
            placeholder="Type a message..."
            aria-label="Message"
            className="flex-1 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm outline-none focus:border-blue-500 disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-800"
          />
          <button
            type="submit"
            disabled={inputLocked || !draft.trim()}
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="flex justify-start">
      <div
        className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm dark:bg-zinc-800"
        aria-label="Assistant is typing"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-2 w-2 animate-pulse rounded-full bg-zinc-400"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function TripCardView({ card }: { card: TripCard }) {
  switch (card.cardType) {
    case "stay":
      return <StayCard details={card.details} />;

    case "experience":
      return <ExperienceCard details={card.details} />;

    case "food":
      return <FoodCard details={card.details} />;
  }
}
