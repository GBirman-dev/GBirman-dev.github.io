export function Results() {
  const results = [
    {
      icon: "/assets/icons/impact.svg",
      title: "Impact",
      description:
        "Scaled Hestiva from 10,000 to 17,000 registered users in eight months and delivered a 45% uplift in paid conversion through structured A/B experimentation. Co-created KeyScout, growing it from zero to 500 users in seven months.",
    },
    {
      icon: "/assets/icons/scale.svg",
      title: "Scale",
      description:
        "Led and delivered 20+ digital products, building scalable foundations for early-stage and growing platforms. Created core product systems that enabled new market entries and long-term product evolution.",
    },
    {
      icon: "/assets/icons/leadership.svg",
      title: "Execution",
      description:
        "Defined clear product direction and led cross-functional execution, aligning design, product, and growth to deliver measurable outcomes. Turned strategy into shipped features and validated results, fast.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[40px] font-bold leading-tight mb-14 text-[#1A2A22] text-center">
          Product Leadership, Growth &amp; Execution
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-8 space-y-4 border border-white/40 bg-white/30 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(248,249,250,0.3) 100%)",
              }}
            >
              <div className="w-14 h-14 bg-[#E8F0EA] rounded-xl flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8"
                  style={{ filter: "brightness(0) saturate(100%)" }}
                />
              </div>
              <h3 className="text-xl font-bold text-[#1A2A22]">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
