import { motion } from "framer-motion";
import { TrendingDown, Compass, BarChart3, Camera } from "lucide-react";

const pains = [
  { icon: TrendingDown, title: "Poucos leads vindos do social?", body: "Audiência cresce, mas o caixa não sente. Tratamos cada post como uma engrenagem do funil." },
  { icon: Compass, title: "Perdido entre tendências e plataformas?", body: "Cuidamos do que muda toda semana — você cuida do seu negócio." },
  { icon: BarChart3, title: "Sem clareza do ROI?", body: "Dashboards e relatórios honestos, ligados às métricas que pagam o boleto." },
  { icon: Camera, title: "Produção criativa engasgada?", body: "Estúdio próprio com diretor, fotógrafo e editor — conteúdo no ritmo das plataformas." },
];

export function Pains() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-display text-graphite max-w-3xl text-balance leading-[1.05]"
        >
          Cansado de esforço em social que <em className="text-gold">não entrega</em>?
        </motion.h2>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group p-7 rounded-2xl bg-card border border-border hover:border-gold/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-beige-light flex items-center justify-center mb-5 group-hover:bg-gold/30 transition-colors">
                <p.icon size={22} className="text-darkbrown" />
              </div>
              <h3 className="font-display text-xl text-graphite leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
