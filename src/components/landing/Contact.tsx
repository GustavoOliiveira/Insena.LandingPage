import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send, Loader2, Check } from "lucide-react";

const budgets = ["R$ 30k–50k/mês", "R$ 50k–80k/mês", "R$ 80k–150k/mês", "R$ 150k+/mês"];

export function Contact() {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    setTimeout(() => setState("done"), 1200);
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-graphite text-offwhite relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] bg-gold/10 rounded-full blur-3xl" />

      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 relative">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-gold">Fale com a gente</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            Vamos transformar seu social em <em className="text-beige">crescimento</em>.
          </h2>
          <p className="mt-6 text-beige-light/80 text-lg max-w-md">
            Conta sobre seus objetivos. Em até 48h voltamos com uma proposta
            customizada — sem template, sem enrolação.
          </p>

          <a href="mailto:ola@Insena.social" className="mt-10 inline-flex items-center gap-3 text-beige hover:text-gold transition-colors">
            <Mail size={18} />
            ola@Insena.social
          </a>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-darkbrown/60 backdrop-blur p-8 md:p-10 rounded-3xl border border-darkbrown space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Nome" name="name" required />
            <Field label="Empresa" name="company" />
          </div>
          <Field label="E-mail" name="email" type="email" required />
          <Field label="Site / Landing" name="url" />

          <div>
            <label className="block text-xs uppercase tracking-wider text-beige-light/70 mb-2">Orçamento mensal</label>
            <div className="grid grid-cols-2 gap-2">
              {budgets.map((b) => (
                <label key={b} className="flex items-center gap-2 p-3 rounded-lg border border-darkbrown bg-graphite/40 cursor-pointer hover:border-gold transition-colors text-sm">
                  <input type="radio" name="budget" className="accent-gold" />
                  {b}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-beige-light/70 mb-2">Mensagem</label>
            <textarea
              rows={4}
              className="w-full bg-graphite/40 border border-darkbrown rounded-lg px-4 py-3 text-offwhite placeholder:text-beige-light/40 focus:border-gold focus:outline-none transition-colors resize-none"
              placeholder="Conta um pouco do projeto…"
            />
          </div>

          <button
            type="submit"
            disabled={state !== "idle"}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gold text-graphite font-medium hover:bg-beige transition-colors disabled:opacity-70"
          >
            {state === "idle" && (<>Solicitar proposta <Send size={16} /></>)}
            {state === "loading" && (<><Loader2 size={16} className="animate-spin" /> Enviando…</>)}
            {state === "done" && (<><Check size={16} /> Recebido! Falamos em breve.</>)}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-beige-light/70 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-graphite/40 border border-darkbrown rounded-lg px-4 py-3 text-offwhite placeholder:text-beige-light/40 focus:border-gold focus:outline-none transition-colors"
      />
    </div>
  );
}
