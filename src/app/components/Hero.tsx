import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="bg-[#E8F0EA] py-14 md:py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
          <div className="flex-shrink-0">
            <div className="bg-white rounded-3xl p-1 shadow-sm">
              <ImageWithFallback
                src="/assets/hero-profile/George-Birman-profile-photo.webp"
                alt="Georgi Birman"
                className="w-60 md:w-[280px] h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="space-y-3 flex-1 min-w-0">
            <h1 className="text-3xl md:text-5xl font-bold leading-[1.12] text-[#1A2A22] max-w-lg">
              Turning product vision into scalable, high-performing systems
            </h1>
            <p className="text-sm font-semibold tracking-wide text-[#1A2A22]/60 uppercase">
              Product Owner &amp; Senior Product Designer
            </p>
            <p className="text-base text-gray-600 leading-relaxed max-w-lg">
              I help product teams eliminate friction that silently drains
              revenue, owning outcomes from the design decision to the funnel
              metric to the roadmap trade-off. 8 years in design, 4+ years
              leading product.
            </p>
            <div className="flex gap-4 pt-3">
              <a href="/Resume-Georgi-Birman.pdf" download className="px-6 py-3 bg-[#1A2A22] text-white rounded-xl hover:bg-[#0f1814] transition-colors font-medium">
                Download Resume
              </a>
              <a href="#recent-experience" className="px-6 py-3 border border-[#1A2A22] text-[#1A2A22] rounded-xl hover:bg-white/60 transition-colors font-medium">
                View Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
