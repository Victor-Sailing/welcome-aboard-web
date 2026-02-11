export default function ComingSoon() {
    return (
      <main className="min-h-screen bg-[#063954] flex flex-col items-center justify-center p-8">
        <div className="max-w-2xl text-center space-y-8">
          <h2 className="text-[#27A8BE] uppercase tracking-[0.3em] text-sm font-sans">
            Welcome Aboard
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif italic text-[#F5F2E9] tracking-tighter">
            The Horizon is Near
          </h1>
          <p className="text-[#F5F2E9]/60 font-sans tracking-widest uppercase text-xs leading-relaxed max-w-md mx-auto">
            Our digital experience is currently being prepared. 
            Luxury vessel management, redefined.
          </p>
          <div className="pt-8">
            <div className="w-12 h-[1px] bg-[#27A8BE] mx-auto opacity-50"></div>
          </div>
        </div>
      </main>
    );
  }