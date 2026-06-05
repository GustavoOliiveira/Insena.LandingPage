const brands = [
  "Solène","Vértex","Carmim","Lumiar","Norden","Atlas",
  "Bossa","Marés","Áurea","Pampa","Cobalto","Aurora",
];

export function Marquee() {
  const row = [...brands, ...brands];
  return (
    <section aria-label="Marcas que confiam" className="py-14 border-y border-border bg-beige-light/40">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
        Confiado por marcas que vivem do detalhe
      </p>
      <div className="overflow-hidden">
        <div className="flex gap-16 whitespace-nowrap animate-marquee w-max">
          {row.map((b, i) => (
            <span
              key={i}
              className="font-display text-3xl md:text-4xl text-darkbrown/60 hover:text-graphite transition-colors"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
