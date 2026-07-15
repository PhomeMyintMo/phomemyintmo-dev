export default function BackgroundDoodles() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[8%] top-[12%] text-3xl rotate-12">✦</div>

      <div className="absolute right-[10%] top-[25%] text-2xl">○</div>

      <div className="absolute left-[15%] bottom-[18%] text-3xl">✚</div>

      <div className="absolute right-[18%] bottom-[12%] text-2xl rotate-45">
        ★
      </div>
    </div>
  );
}