import { ArrowUp, Send } from "lucide-react";

type ChatInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
};

export default function ChatInput({
  value,
  onChange,
  onSend,
  isLoading,
}: ChatInputProps) {
  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  }

  const isEmpty = value.trim().length === 0;

  return (
    <div className="border-t p-4">
      <div className="relative">
        <textarea
          rows={2}
          className="w-full text-color resize-none p-1 px-2  shadow-[var(--shadow-brutal)] border p-2 pr-14 outline-none"
          placeholder="Ask me anything about me..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />

        <button
          type="button"
          onClick={() => onSend()}
          disabled={isLoading || isEmpty}
          className="absolute bottom-4 right-3 flex h-9 w-9 shadow-[var(--shadow-brutal)]  hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none items-center justify-center bg-blue-600 text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </div>
  );
}