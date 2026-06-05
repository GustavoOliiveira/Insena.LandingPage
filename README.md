# Ateliê Social — Landing Page (Vite + React + TS + Tailwind v4)

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:5173

## Build de produção

```bash
npm run build
```

Os arquivos finais (`index.html` + pasta `assets/`) ficam em **`dist/`**.

## Deploy na Hostinger

1. Faça upload de **todo o conteúdo da pasta `dist/`** para `public_html/` no File Manager da Hostinger.
2. Como é uma SPA com apenas a rota `/`, não precisa de configuração extra de redirect.
3. Acesse seu domínio. Pronto.

> O `base: "./"` no `vite.config.ts` garante que funcione em qualquer subpasta também.
# Insena.LandingPage
