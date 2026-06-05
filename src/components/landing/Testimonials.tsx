import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  { quote: "Crescimento absurdo em todos os perfis e sites. Engajamento, impressões e audiência foram às alturas no meio do contrato. Time profissional e respeitoso do nosso tempo.", name: "Amanda H.", role: "Diretora de Comunicação" },
  { quote: "Organização e comunicação são os pontos fortes deles. Tudo agendado com antecedência, sem stress de última hora. A operação flui.", name: "Júlia G.", role: "Gerente de Marketing" },
  { quote: "Saímos de 4 mil para 11 mil seguidores no Instagram. Lançaram nosso LinkedIn do zero — quase 6 mil em meses. Levamos um prêmio do setor.", name: "Jordana W.", role: "Head de Brand" },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-6xl text-graphite max-w-3xl text-balance leading-[1.05] mb-14"
        >
          O que <em className="text-gold">dizem</em> de nós.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-card border border-border flex flex-col"
            >
              <Quote className="text-gold" size={28} />
              <blockquote className="mt-5 text-darkbrown leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-display text-lg text-graphite">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
