import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowDown, Users, TrendingUp, Layers } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Footer } from "../components/Footer";

const IMG = "/assets/project-hestiva-platforms";

export default function HestivaPlatforms() {
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
              Hestiva Platforms
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
              Scaling a community-driven<br className="md:hidden" />
              {" "}real estate platform from<br className="md:hidden" />
              {" "}social traction to product-market fit.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Role", value: "Product Owner" },
                { label: "Timeline", value: "2022–2023 & 2025–2026" },
                { label: "Scope", value: "End-to-end product, growth, partnerships" },
                { label: "Outcome", value: "16,000+ registered users & partnerships with HousingAnywhere and Kamernet" },
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
              src={`${IMG}/Facebook-intro-hestiva-platforms.webp`}
              alt="Hestiva Platforms – Facebook community introduction"
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
                From community to product
              </h2>
            </div>
            <div className="md:col-span-8 space-y-5">
              <p className="text-base text-gray-600 leading-relaxed">
                Hestiva began as a Facebook-driven community in 2019, later
                evolving into a product targeting the Dutch real estate market.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                I joined in 2022 during the development of the platform's second
                version, working under the Product Owner to translate business
                vision into a functional product experience.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                In 2025, I stepped into the Product Owner role, taking ownership
                of product direction and execution. Leading a small team of one
                designer and two developers, I initiated and delivered the next
                iteration of the platform (V3), focusing on scalability,
                structure, and growth.
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
                Ownership, not tasks
              </h2>
              <ul className="space-y-4">
                {[
                  "Led product and UX from early concept to execution",
                  "Defined platform structure, user flows, and feature roadmap",
                  "Aligned design, growth, and business strategy",
                  "Drove user acquisition and partner collaborations",
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
                src={`${IMG}/mobile-first-rent-search.webp`}
                alt="Mobile-first rent search interface"
                className="w-full h-auto object-cover"
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
              Ambitious scope, unstable foundation
            </h2>
            <p className="text-base text-white/60 leading-relaxed">
              As the platform evolved, product direction became fragmented.
              Multiple business goals were pursued simultaneously, resulting in
              a complex system that lacked focus, consistency, and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Overloaded product scope",
                text: "The platform attempted to cover listings, investments, rentals, and services at once, leading to a bloated and unfocused experience.",
              },
              {
                number: "02",
                title: "Inconsistent and fragile features",
                text: "Rapid feature expansion without clear prioritization caused parts of the platform to break or underperform.",
              },
              {
                number: "03",
                title: "Outdated UX and limited accessibility",
                text: "Design decisions were inconsistent and not aligned with modern usability or accessibility standards, reducing overall product quality.",
              },
              {
                number: "04",
                title: "Unclear platform strategy",
                text: "The product direction shifted between web, Facebook, and messaging platforms, creating confusion and lack of a unified user journey.",
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
                  {(problem as any).title}
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
              Strategy, structure, speed
            </h2>
          </div>

          {/* Approach block 1: Product Strategy */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-xl font-bold text-[#1A2A22] mb-4">
                Product Strategy
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Defined three clear pillars:
              </p>
              <ul className="space-y-3">
                {[
                  "Rental-focused property listings in the Benelux market",
                  "Partnerships and investor-driven growth",
                  "Free access for users and landlords, with a SaaS premium tier for monetization",
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
                src={`${IMG}/tenants-search-rent-benelux.webp`}
                alt="Tenant search and rent flow for Benelux market"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Approach block 2: UX & Structure */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="md:order-2">
              <h3 className="text-xl font-bold text-[#1A2A22] mb-4">
                UX &amp; Structure
              </h3>
              <ul className="space-y-3">
                {[
                  "Built clear navigation and categorization",
                  "Simplified onboarding and listing flows",
                  "Designed for trust and transparency",
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
                src={`${IMG}/agents-hestiva-accessible.webp`}
                alt="Hestiva agents accessibility interface"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Approach block 3: Iteration & Execution */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-bold text-[#1A2A22] mb-4">
                Iteration &amp; Execution
              </h3>
              <ul className="space-y-3">
                {[
                  "Rapid prototyping and validation cycles",
                  "Prioritized features based on user behavior",
                  "Balanced speed with usability",
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
                src={`${IMG}/Old-new-side-by-side.webp`}
                alt="Old versus new design comparison"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Growth & Impact ── */}
      <section className="px-6 md:px-20 py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#A0C8B1] mb-2">
                Growth &amp; Extra Moves
              </p>
              <h2 className="text-3xl md:text-[40px] font-bold leading-tight text-[#1A2A22] mb-6">
                Beyond screens
              </h2>
              <h3 className="text-lg font-bold text-[#1A2A22] mb-4">
                Growth Initiatives
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Built and managed a YouTube channel to drive awareness",
                  "Negotiated and closed affiliate partnerships with HousingAnywhere and Kamernet, creating a recurring revenue stream and expanding reach with high-intent traffic",
                  "Converted community engagement into product adoption",
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
                src={`${IMG}/Social-media-introduction-traffic.webp`}
                alt="Social media and traffic growth"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Impact metrics */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                metric: "10k → 16k",
                label: "Registered users in six months, a 60% increase through funnel optimization and repositioning",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                metric: "+45%",
                label: "Uplift in paid conversion on a multi-step paywall through structured A/B experimentation",
              },
              {
                icon: <Layers className="w-6 h-6" />,
                metric: "Community → Product",
                label: "Replaced manual, community-driven interactions with structured listings, defined user journeys, and automated core flows",
              },
            ].map((item) => (
              <div
                key={item.metric}
                className="rounded-2xl bg-white p-8 space-y-3 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
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

      {/* ── Section 8: Outcomes ── */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#A0C8B1] mb-2">
              Outcomes
            </p>
            <h2 className="text-3xl md:text-[40px] font-bold leading-tight text-[#1A2A22] mb-10">
              What we shipped
            </h2>

            <ul className="space-y-4 mb-10">
              {[
                "Validated product demand in the Dutch real estate market, establishing a foundation for expansion across Benelux",
                "Built a scalable platform, transitioning from a .nl to a .com domain to support broader reach",
                "Delivered a self-sustaining multi-service ecosystem beyond listings, enabling clear revenue generation",
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
              Hestiva evolved from a community experiment into a structured
              platform with measurable growth and a clear market position.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 8.5: Partners & Scaling image ── */}
      <section className="px-6 md:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden bg-[#F8F9FA]">
            <ImageWithFallback
              src={`${IMG}/onboarding-partners-scaling-hestiva.webp`}
              alt="Onboarding partners and scaling Hestiva"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Section 9: Final Visual ── */}
      <section className="px-6 md:px-20 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden bg-[#F8F9FA]">
            <ImageWithFallback
              src={`${IMG}/timeless-design-modern-young-professionals-free.webp`}
              alt="Hestiva – Modern design for young professionals"
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
