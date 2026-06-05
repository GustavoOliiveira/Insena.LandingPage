import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-beige-light/60 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-gold/20 blur-3xl" />
      </div>

      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/60 backdrop-blur text-xs uppercase tracking-[0.18em] text-darkbrown"
          >
            <Sparkles size={14} className="text-gold" />
            Agência de social marketing
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-graphite text-balance"
          >
            Crescimento real,{" "}
            <span className="relative inline-block">
              <span className="italic text-darkbrown">mensurável</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.9, duration: 1 }}
                  d="M2 8 Q 150 -2 298 6"
                  stroke="var(--gold)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            para sua marca nas redes.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-8 text-lg lg:text-xl text-muted-foreground max-w-xl text-balance"
          >
            Estratégia, conteúdo e mídia paga executados com obsessão pelos
            números que importam. Pare de tentar adivinhar — comece a escalar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-graphite text-offwhite font-medium hover:bg-darkbrown transition-all shadow-soft"
            >
              Vamos crescer juntos
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#cases"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-graphite/20 text-graphite font-medium hover:bg-card transition-colors"
            >
              Ver cases
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex items-center gap-8 text-sm text-muted-foreground"
          >
            <div>
              <div className="font-display text-3xl text-graphite">+200</div>
              <div>marcas atendidas</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl text-graphite">12 anos</div>
              <div>de social-first</div>
            </div>
            <div className="h-10 w-px bg-border hidden sm:block" />
            <div className="hidden sm:block">
              <div className="font-display text-3xl text-graphite">R$ 80M+</div>
              <div>em mídia gerida</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-gold/30 to-beige/40 rounded-[2.5rem] blur-2xl" />
          <div className="relative animate-float">
            <img
              src={heroImg}
              alt="Social marketing inspirado em estética editorial"
              width={1024}
              height={1024}
              className="rounded-[2rem] shadow-soft w-full aspect-square object-cover"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-soft border border-border w-48"
            >
              <div className="text-xs text-muted-foreground">Engajamento</div>
              <div className="font-display text-2xl text-graphite">+318%</div>
              <div className="h-1.5 bg-beige-light rounded-full mt-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ delay: 1.4, duration: 1 }}
                  className="h-full bg-gold rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
