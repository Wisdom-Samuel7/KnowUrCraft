"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery",
    desc: "Understanding intent, goals, and creative direction.",
  },
  {
    title: "Strategy",
    desc: "Designing structure, tools, and execution flow.",
  },
  {
    title: "Production",
    desc: "Composing, building, and crafting the core work.",
  },
  {
    title: "Iteration",
    desc: "Refining details through feedback and testing.",
  },
  {
    title: "Delivery",
    desc: "Final polish, deployment, and presentation.",
  },
  {
    title: "Support",
    desc: "Ongoing care, growth, and collaboration.",
  },
];

export default function ProjectLifecycle() {
  return (
    <section className="relative py-4 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-extrabold tracking-tight text-black"
        >
          Project Lifecycle
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-8 max-w-2xl text-lg text-zinc-600"
        >
          A deliberate process where creativity meets precision.
        </motion.p>

        {/* Timeline */}
        <div className="relative mt-32">
          {/* Spine */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="hidden md:block absolute top-8 left-0 right-0 h-[2px] bg-black origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-24 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group text-center"
              >
                {/* Anchor */}
                <div className="relative flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-black" />
                  <div className="absolute w-6 h-6 rounded-full border border-black opacity-20 group-hover:scale-125 transition" />
                </div>

                {/* Content */}
                <h3 className="mt-10 text-xl font-semibold text-black">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-700">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
