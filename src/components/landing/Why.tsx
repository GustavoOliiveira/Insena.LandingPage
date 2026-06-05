import { motion } from "framer-motion";

const stats = [
  { k: "12 anos", v: "Foco exclusivo em social-first" },
  { k: "R$ 80M+", v: "Em mídia paga gerida" },
  { k: "200+", v: "Marcas atendidas globalmente" },
  { k: "4.9/5", v: "NPS médio dos clientes ativos" },
];

export function Why() {
  return (
    <section className="py-24 md:py-32 bg-darkbrown text-offwhite">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-16">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-gold">Por que nós</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            Décadas de dados. <em className="text-beige">Insights</em> que o Google não te dá.
          </h2>
          <p className="mt-6 text-beige-light/80 text-lg max-w-lg">
            Estratégia primeiro, resultado obsessão. Cada campanha começa em
            descoberta profunda e termina em otimização contínua — sem planos de
            prateleira.
          </p>

          <div className="mt-10 space-y-5">
            <div>
              <h3 className="font-display text-xl text-beige mb-2">Abordagem única, sem cookie-cutter</h3>
              <p className="text-beige-light/70">Estratégias customizadas, contínua otimização baseada em dados.</p>
            </div>
            <div>
              <h3 className="font-display text-xl text-beige mb-2">Time dedicado de especialistas</h3>
              <p className="text-beige-light/70">Estrategistas, criação e ads em comunicação proativa com você.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px bg-graphite rounded-3xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-darkbrown p-8 md:p-10"
            >
              <div className="font-display text-4xl md:text-5xl text-gold">{s.k}</div>
              <div className="mt-3 text-sm text-beige-light/80">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
