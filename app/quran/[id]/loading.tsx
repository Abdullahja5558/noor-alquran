export default function Loading() {
  return (
    <div className="fixed inset-0 w-full h-[100dvh] font-sans text-white overflow-hidden flex flex-col justify-between pt-[max(0.4rem,env(safe-area-inset-top))] pb-[max(0.4rem,env(safe-area-inset-bottom))] px-3 sm:px-6 md:px-8 z-10 bg-black">
      <div className="fixed inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/65 -z-10 pointer-events-none" />
      <header className="shrink-0 flex-none z-30 w-full flex items-center justify-between py-1.5 sm:py-2.5 max-w-7xl mx-auto">
        <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/70">
          Surahs
        </div>
        <div className="text-center px-2">
          <div className="h-4 w-28 bg-white/10 rounded-full animate-pulse mx-auto" />
          <div className="h-2 w-16 bg-white/5 rounded-full animate-pulse mx-auto mt-1.5" />
        </div>
        <div className="w-16" />
      </header>
      <main className="flex-1 min-h-0 w-full flex flex-col items-center justify-center px-4 max-w-4xl mx-auto text-center z-20">
        <p
          dir="rtl"
          className="font-arabic text-2xl sm:text-3xl md:text-4xl text-blue-200/90 font-normal text-center leading-loose animate-pulse"
        >
          بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>
      </main>
      <footer className="shrink-0 flex-none z-30 w-full flex flex-col items-center max-w-xl mx-auto pb-1 sm:pb-2">
        <div className="w-full rounded-full bg-black/50 border border-white/20 px-4 py-2.5 flex items-center justify-between text-xs text-white/50">
          <span>Loading Surah...</span>
        </div>
      </footer>
    </div>
  );
}
