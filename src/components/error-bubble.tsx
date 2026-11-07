type ErrorBubbleProps = {
  onRetry: () => void;
  disabled?: boolean;
};

export default function ErrorBubble({ onRetry, disabled = false }: ErrorBubbleProps) {
  return (
    <div
      role="alert"
      className="w-full rounded-2xl rounded-bl-sm bg-white px-4 py-4 shadow-sm dark:bg-zinc-800"
    >
      <p className="text-sm">
        Oops, something went wrong while planning your Kyoto weekend. Want to
        give it another try?
      </p>
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={onRetry}
          disabled={disabled}
          className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
