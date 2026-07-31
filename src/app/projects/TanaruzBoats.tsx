import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowDown, Anchor, Award, Globe } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Footer } from "../components/Footer";

const IMG = "/assets/project-tanaruz-boats";

export default function TanaruzBoats() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-6 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-sm font-bold tracking-wider uppercase text-[#1A2A22] hover:opacity-70 transition-opacity"
          >
            GEORGI BIRMAN
          </Link>
          <div className="flex gap-3">
            <a
              href="/Resume-Georgi-Birman.pdf"
              download
              className="px-5 py-2 text-sm bg-white border border-[#1A2A22] text-[#1A2A22] rounded-xl hover:bg-gray-50 transition-colors font-medium"
            >
              Resume
            </a>
            <a
              href="mailto:birmangeorgi@gmail.com"
              className="px-5 py-2 text-sm bg-[#1A2A22] text-white rounded-xl hover:bg-[#0f1814] transition-colors font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Back link */}
      <div className="px-6 md:px-20">
        <div className="max-w-7xl mx-auto pt-2 pb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#1A2A22]/60 hover:text-[#1A2A22] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all projects
          </Link>
        </div>
      </div>

      {/* ── Section 1: Title + Hook ── */}
      <section className="px-6 md:px-20 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-[56px] font-bold leading-[1.1] text-[#1A2A22] mb-5">
              Tanaruz Boats
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
              Designing a digital ecosystem<br className="md:hidden" />
              {" "}for a new category of<br className="md:hidden" />
              {" "}3D-printed electric boats.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Role", value: "UX Consultant → UX Lead" },
                { label: "Timeline", value: "2021, 2023–2024" },
                { label: "Scope", value: "Website, iOS app, configurator, rebrand" },
                { label: "Outcome", value: "5+ boats sold, product validated in-market" },
              ].map((fact) => (
                <div key={fact.label}>
                  <p className="text-xs font-semibold tracking-wider uppercase text-[#1A2A22]/40 mb-1">
                    {fact.label}
                  </p>
                  <p className="text-sm font-medium text-[#1A2A22]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="#overview"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A2A22] text-white rounded-xl hover:bg-[#0f1814] transition-colors font-medium text-sm"
            >
              View full case
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Section 2: Hero Image ── */}
      <section className="px-6 md:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden bg-[#F8F9FA]">
            <ImageWithFallback
              src={`${IMG}/intro-tanaruz-boats-combo.webp`}
              alt="Tanaruz Boats – Premium 3D-printed electric boats"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Section 3: Overview ── */}
      <section id="overview" className="px-6 md:px-20 py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#A0C8B1] mb-2">
                Overview
              </p>
              <h2 className="text-3xl md:text-[40px] font-bold leading-tight text-[#1A2A22]">
                Innovation meets craft
              </h2>
            </div>
            <div className="md:col-span-8 space-y-5">
              <p className="text-base text-gray-600 leading-relaxed">
                Tanaruz is an emerging manufacturer of fully 3D-printed, electric
                boats, positioning itself at the intersection of sustainability,
                engineering, and design.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                I joined initially in 2021 as a UX Consultant, focusing on
                improving how complex product configurations were communicated to
                customers. In 2023, I returned as UX Lead to drive a full redesign
                of the digital experience, aligning the product, brand, and user
                journey into a cohesive ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: My Role ── */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#A0C8B1] mb-2">
                My Role
              </p>
              <h2 className="text-3xl md:text-[40px] font-bold leading-tight text-[#1A2A22] mb-8">
                Leading by design
              </h2>
              <ul className="space-y-4">
                {[
                  "Led UX across web and mobile platforms as UX Lead",
                  "Managed and mentored a team of 2 designers and 1 intern",
                  "Defined product direction for configurator and application flows",
                  "Bridged design, development, and engineering by translating complex marine and manufacturing data into intuitive, production-ready user experiences",
                  "Bridged product, design, and business to support sales and growth",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-gray-600 leading-relaxed"
                  >
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#A0C8B1] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#F8F9FA]">
              <ImageWithFallback
                src={`${IMG}/Website-mobile-first.webp`}
                alt="Tanaruz mobile-first website design"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: The Problem ── */}
      <section className="px-6 md:px-20 py-20 bg-[#1A2A22]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#A0C8B1] mb-2">
              The Problem
            </p>
            <h2 className="text-3xl md:text-[40px] font-bold leading-tight text-white mb-4">
              Innovative product, unclear digital experience
            </h2>
            <p className="text-base text-white/60 leading-relaxed">
              Despite a groundbreaking physical product, the digital touchpoints
              failed to communicate its value, quality, and innovation to
              potential buyers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Complex product, poor communication",
                text: "Users struggled to understand configuration options, customization, and value before purchase.",
              },
              {
                number: "02",
                title: "Outdated and inconsistent UI",
                text: "The existing experience lacked cohesion, clarity, and modern interaction standards.",
              },
              {
                number: "03",
                title: "Limited product storytelling",
                text: "The craftsmanship, engineering, and innovation were not effectively communicated.",
              },
              {
                number: "04",
                title: "Inefficient design-to-development flow",
                text: "Lack of structured documentation created friction with developers and slowed delivery.",
              },
            ].map((problem) => (
              <div
                key={problem.number}
                className="rounded-2xl border border-white/10 p-6 space-y-3"
              >
                <span className="text-sm font-bold text-[#A0C8B1]">
                  {problem.number}
                </span>
                <p className="text-sm font-semibold text-white mb-1">
                  {problem.title}
                </p>
                <p className="text-sm text-white/80 leading-relaxed">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Approach ── */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#A0C8B1] mb-2">
              Approach
            </p>
            <h2 className="text-3xl md:text-[40px] font-bold leading-tight text-[#1A2A22]">
              Clarity, craft, delivery
            </h2>
          </div>

          {/* Approach block 1: Product Strategy */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-xl font-bold text-[#1A2A22] mb-4">
                Product Strategy
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Clarify the product and its value
              </p>
              <ul className="space-y-3">
                {[
                  "Focused on simplifying the boat configuration experience",
                  "Positioned the product as premium, sustainable, and design-driven",
                  "Shifted messaging toward global scalability (EU → AU / JP markets)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-gray-600 leading-relaxed"
                  >
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#A0C8B1] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#F8F9FA]">
              <ImageWithFallback
                src={`${IMG}/Old-new-changes-UI.webp`}
                alt="Old versus new UI comparison"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Approach block 2: UX & Structure */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="md:order-2">
              <h3 className="text-xl font-bold text-[#1A2A22] mb-4">
                UX &amp; Structure
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Rebuild the experience end-to-end
              </p>
              <ul className="space-y-3">
                {[
                  "Redesigned the configurator into a clear, step-by-step journey",
                  "Introduced intuitive customization (colors, features, layouts)",
                  "Created consistency across web and mobile platforms",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-gray-600 leading-relaxed"
                  >
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#A0C8B1] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:order-1 rounded-2xl overflow-hidden bg-[#F8F9FA]">
              <ImageWithFallback
                src={`${IMG}/configurator-app-tanaruz.webp`}
                alt="Tanaruz configurator app redesign"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Approach block 3: Execution */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-bold text-[#1A2A22] mb-4">
                Execution
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Design for delivery, not just visuals
              </p>
              <ul className="space-y-3">
                {[
                  "Delivered structured flows and documentation for developers",
                  "Reduced back-and-forth by clarifying edge cases and interactions",
                  "Enabled faster implementation with fewer dependencies",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-gray-600 leading-relaxed"
                  >
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#A0C8B1] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#F8F9FA]">
              <ImageWithFallback
                src={`${IMG}/intro-application-configurator.webp`}
                alt="Introduction to the configurator application"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Product Evolution ── */}
      <section className="px-6 md:px-20 py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#A0C8B1] mb-2">
                Product Evolution
              </p>
              <h2 className="text-3xl md:text-[40px] font-bold leading-tight text-[#1A2A22] mb-6">
                From static tool to interactive configurator
              </h2>
              <ul className="space-y-3">
                {[
                  "Replaced a limited, single-view configurator",
                  "Introduced dynamic, multi-step customization flows",
                  "Improved decision-making through visual feedback and clarity",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-gray-600 leading-relaxed"
                  >
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#A0C8B1] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden bg-white">
              <ImageWithFallback
                src={`${IMG}/old-app-configurator.webp`}
                alt="Old configurator vs new configurator comparison"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: Growth & Extra Impact ── */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="md:order-2">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#A0C8B1] mb-2">
                Growth &amp; Extra Impact
              </p>
              <h2 className="text-3xl md:text-[40px] font-bold leading-tight text-[#1A2A22] mb-6">
                Beyond the interface
              </h2>
              <ul className="space-y-3">
                {[
                  "Supported brand repositioning toward a premium, Tesla-like identity on water",
                  "Helped align product experience with a bold, future-facing vision",
                  "Contributed to a full UI rebrand across platforms",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-gray-600 leading-relaxed"
                  >
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#A0C8B1] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:order-1 rounded-2xl overflow-hidden bg-[#F8F9FA]">
              <ImageWithFallback
                src={`${IMG}/desktop-promotion-app.webp`}
                alt="Tanaruz desktop promotion application"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Impact metrics */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Anchor className="w-6 h-6" />,
                metric: "5+",
                label: "Boats sold, product validated in-market",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                metric: "EU → Global",
                label: "Enabled expansion beyond the Dutch market into EU and global opportunities",
              },
              {
                icon: <Award className="w-6 h-6" />,
                metric: "HISWA",
                label: "Positioned the brand as a standout at HISWA Boat Show through a premium, design-led experience",
              },
            ].map((item) => (
              <div
                key={item.metric}
                className="rounded-2xl bg-[#F8F9FA] p-8 space-y-3 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
              >
                <div className="w-12 h-12 bg-[#E8F0EA] rounded-xl flex items-center justify-center text-[#1A2A22]">
                  {item.icon}
                </div>
                <p className="text-2xl font-bold text-[#1A2A22]">
                  {item.metric}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 9: Outcomes ── */}
      <section className="px-6 md:px-20 py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#A0C8B1] mb-2">
              Outcomes
            </p>
            <h2 className="text-3xl md:text-[40px] font-bold leading-tight text-[#1A2A22] mb-10">
              What we delivered
            </h2>

            <ul className="space-y-4 mb-10">
              {[
                "Contributed to the successful sale of 5+ boats",
                "Enabled real-world product presence, with boats active in Amsterdam",
                "Strengthened market perception through a sleek, interaction-driven digital experience, aligning the brand with its certified product quality",
                "Established a scalable digital foundation for future product iterations",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-gray-600 leading-relaxed"
                >
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#A0C8B1] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-base text-gray-500 italic leading-relaxed">
              Tanaruz evolved from an experimental product into a market-ready,
              design-driven offering with a clear identity and growing demand.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 10: Final Visual ── */}
      <section className="px-6 md:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden bg-[#F8F9FA]">
            <ImageWithFallback
              src={`${IMG}/new-ui-ios-app-tanaruz.webp`}
              alt="Tanaruz – New iOS app UI design"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="py-24 px-6 md:px-20 bg-[#E8F0EA]">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A2A22]">
            Open for cooperation,
          </h2>
          <p className="text-lg text-gray-600">
            Ready to take on new challenges.
            <br />
            Let's discuss how I can contribute to your team.
          </p>
          <div className="pt-4">
            <a
              href="mailto:birmangeorgi@gmail.com"
              className="inline-block px-8 py-3 bg-[#1A2A22] text-white rounded-xl hover:bg-[#0f1814] transition-colors font-medium"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
