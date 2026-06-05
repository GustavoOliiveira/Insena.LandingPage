import { motion } from "framer-motion";
import { Lightbulb, Film, MessagesSquare, Megaphone, Users, Briefcase, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Lightbulb, title: "Estratégia & Consultoria", items: ["Roadmap de presença social", "Análise competitiva e de audiência", "Pilares de conteúdo e plataforma"] },
  { icon: Film, title: "Produção de Conteúdo", items: ["Visuais e copy que ressoam", "Vídeo, foto e motion in-house", "Conteúdo nativo por plataforma"] },
  { icon: MessagesSquare, title: "Gestão & Comunidade", items: ["Calendário e tom de voz", "Escuta e relacionamento ativo", "Monitoramento de reputação"] },
  { icon: Megaphone, title: "Mídia Paga Social", items: ["Campanhas para leads e vendas", "Criativos com A/B test contínuo", "Otimização e tracking de performance"] },
  { icon: Users, title: "Influência & Creators", items: ["Curadoria de vozes autênticas", "Estratégia e contratação de creators", "Mensuração e relatórios"] },
  { icon: Briefcase, title: "Social Selling", items: ["Geração direta de leads", "Prospecção e abordagem outbound", "Liderança executiva ativa"] },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-beige-light/30">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-6xl text-graphite max-w-3xl text-balance leading-[1.05]"
          >
            Serviços <em className="text-gold">completos</em> de social marketing.
          </motion.h2>
          <p className="text-muted-foreground max-w-md">
            Da estratégia ao último frame do reels — uma operação só, sob o mesmo teto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group bg-offwhite p-8 md:p-10 hover:bg-card transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-graphite text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-graphite transition-colors">
                  <s.icon size={24} />
                </div>
                <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-graphite group-hover:rotate-12 transition-all" />
              </div>
              <h3 className="font-display text-2xl text-graphite leading-tight">{s.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {s.items.map((it) => (
                  <li key={it} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-gold mt-1.5">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-graphite font-medium border-b-2 border-gold pb-1 hover:text-darkbrown transition-colors"
          >
            Ver todos os serviços
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
