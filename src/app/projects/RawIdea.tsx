import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowDown, Lightbulb, Globe, Layers } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Footer } from "../components/Footer";

const IMG = "/assets/project-raw-idea";

export default function RawIdea() {
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
              RAW IDEA
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
              Defining a parent brand and<br className="md:hidden" />
              {" "}digital foundation for a next-<br className="md:hidden" />
              generation manufacturing ecosystem.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Role", value: "Product Lead / Design Lead / Marketing Support" },
                { label: "Timeline", value: "2024" },
                { label: "Scope", value: "Brand identity, website, strategy, workshops" },
                { label: "Outcome", value: "Established Raw Idea as parent brand and foundation for future digital products" },
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
              src={`${IMG}/intro-rawidea-project.webp`}
              alt="Raw Idea – Brand identity and digital foundation"
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
                From product to platform
              </h2>
            </div>
            <div className="md:col-span-8 space-y-5">
              <p className="text-base text-gray-600 leading-relaxed">
                Raw Idea evolved as a strategic response to the growing complexity
                of Tanaruz Boats, creating a clearer separation between product
                innovation and market positioning.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                I contributed to shaping this direction early on, advocating for
                splitting the businesses into distinct entities. In 2024, we
                formalized Raw Idea as the parent brand, focusing on broader
                innovation, materials, and future-facing product concepts.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Working within a small team, I led product and design efforts,
                aligning brand, digital experience, and business vision into a
                cohesive foundation.
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
                Shaping the foundation
              </h2>
              <ul className="space-y-4">
                {[
                  "Led product and design direction across brand and digital platforms",
                  "Facilitated workshops with stakeholders to define vision and positioning",
                  "Translated business strategy into a clear digital and brand experience",
                  "Supported marketing through visual assets and communication alignment",
                  "Delivered production-ready designs and documentation for development",
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
                src={`${IMG}/mobile-what-business-does.webp`}
                alt="Raw Idea mobile experience – what the business does"
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
              One brand, multiple directions, no clarity
            </h2>
            <p className="text-base text-white/60 leading-relaxed">
              As the business grew, overlapping narratives and unclear
              positioning made it difficult to scale, communicate, or align
              around a shared direction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Unclear business structure",
                text: "Raw Idea and Tanaruz operated under overlapping narratives, creating confusion in positioning.",
              },
              {
                number: "02",
                title: "Lack of distinct identity",
                text: "The brand did not clearly communicate its role, vision, or future direction.",
              },
              {
                number: "03",
                title: "No scalable digital foundation",
                text: "The platform lacked structure to support future products and business expansion.",
              },
              {
                number: "04",
                title: "Misalignment across stakeholders",
                text: "Different expectations and directions slowed decision-making and execution.",
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
              Define, build, align
            </h2>
          </div>

          {/* Approach block 1: Strategy */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-xl font-bold text-[#1A2A22] mb-4">
                Strategy
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Define and separate the brand
              </p>
              <ul className="space-y-3">
                {[
                  "Positioned Raw Idea as the parent brand",
                  "Clarified its role in innovation, materials, and future products",
                  "Separated it from Tanaruz's product-specific focus",
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
                src={`${IMG}/about-business-materials.webp`}
                alt="Raw Idea business materials and brand positioning"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Approach block 2: Brand & Experience */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="md:order-2">
              <h3 className="text-xl font-bold text-[#1A2A22] mb-4">
                Brand &amp; Experience
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Build a clear and future-facing identity
              </p>
              <ul className="space-y-3">
                {[
                  "Developed a modern, minimal visual identity",
                  "Created a structured narrative across website and materials",
                  "Aligned messaging with long-term business vision",
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
                src={`${IMG}/about-tech-rawidea-revolutionary-industry.webp`}
                alt="Raw Idea technology and revolutionary industry approach"
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
                Design for scale and continuity
              </p>
              <ul className="space-y-3">
                {[
                  "Iterated through multiple design cycles to refine direction",
                  "Facilitated workshops to align stakeholders and teams",
                  "Delivered accessible, production-ready designs and documentation",
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
                src={`${IMG}/error-secondary-pages-rawidea.webp`}
                alt="Raw Idea secondary pages and error states"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Product Foundation ── */}
      <section className="px-6 md:px-20 py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#A0C8B1] mb-2">
                Product Foundation
              </p>
              <h2 className="text-3xl md:text-[40px] font-bold leading-tight text-[#1A2A22] mb-6">
                From concept to scalable platform
              </h2>
              <ul className="space-y-3">
                {[
                  "Established a flexible structure for future product integration",
                  "Designed reusable components and patterns",
                  "Created a base for future e-commerce and product expansion",
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
                src={`${IMG}/mobile-menu.webp`}
                alt="Raw Idea mobile menu and navigation structure"
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
                Beyond the brand
              </h2>
              <ul className="space-y-3">
                {[
                  "Supported marketing with branded assets and communication materials",
                  "Ensured consistency across product, brand, and promotional outputs",
                  "Helped translate vision into tangible outputs for stakeholders and audiences",
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
                src={`${IMG}/poster-marketing-advertisement.webp`}
                alt="Raw Idea marketing poster and advertisement"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Impact metrics */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Lightbulb className="w-6 h-6" />,
                metric: "Parent Brand",
                label: "Established Raw Idea as the foundation for future product ventures",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                metric: "Scalable",
                label: "Delivered a digital foundation adopted by future teams and products",
              },
              {
                icon: <Layers className="w-6 h-6" />,
                metric: "Shopify",
                label: "Enabled transition toward a print-on-demand Shopify-based business model",
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
                "Established Raw Idea as the parent brand for future product ventures",
                "Delivered a scalable digital foundation adopted by future teams",
                "Enabled transition toward a print-on-demand Shopify-based business model",
                "Created a clear brand direction supporting long-term growth",
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
              Raw Idea transformed from a concept into a defined brand with a
              clear identity, scalable digital foundation, and a direction that
              supports long-term product innovation.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 10: Final Visual ── */}
      <section className="px-6 md:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden bg-[#F8F9FA]">
            <ImageWithFallback
              src={`${IMG}/Laptop-showcase-rawidea.webp`}
              alt="Raw Idea – Laptop showcase of the brand platform"
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
