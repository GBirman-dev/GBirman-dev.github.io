export function RecentExperience() {
  return (
    <section id="recent-experience" className="py-20 px-6 md:px-20 bg-[#141A1A] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-6">
              Recent Experience
            </p>
            <div className="mb-6">
              <img
                src="/assets/project-thumbnails/keyscout-bright-logo-original.svg"
                alt="KeyScout"
                className="h-10 md:h-12 w-auto"
              />
            </div>
            <p className="text-sm font-semibold tracking-wide text-gray-400 uppercase mb-4">
              Role: Co-Creator, Product Lead
            </p>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Architected the brand and growth strategy for KeyScout's entry
              into the Dutch rental market, growing the platform from zero to
              500 users in seven months. By leading a strategic pivot and
              platform relaunch, I doubled the user acquisition rate,
              outperforming all previous marketing efforts and securing a
              sustainable competitive advantage.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">KPIs</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#A0C8B1] mt-1">•</span>
                <span>
                  Increased overall user conversion through UX improvements and
                  funnel optimization.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A0C8B1] mt-1">•</span>
                <span>
                  Deployed a new onboarding experience that delivered 2x higher
                  lead conversion.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A0C8B1] mt-1">•</span>
                <span>
                  Established a clear brand presence and recognition within a
                  competitive market.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A0C8B1] mt-1">•</span>
                <span>
                  Achieved a 2x increase in performance compared to the previous
                  product iteration.
                </span>
              </li>
            </ul>
            <a
              href="https://keyscout.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-6 py-3 border border-white text-white rounded-xl hover:bg-white/10 transition-colors font-medium"
            >
              View Project Outcome
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
