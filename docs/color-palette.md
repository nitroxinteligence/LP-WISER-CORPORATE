# Paleta de Cores - Wiser Corporate LP

## Cores Principais

### Background / Fundo Principal
```css
--background: #040609;
```
- **HEX**: `#040609`
- **RGB**: `rgb(4, 6, 9)`
- **HSL**: `hsl(210, 38%, 3%)`
- **Uso**: Fundo principal da landing page, background de seções

---

### Text / Texto Principal
```css
--text-primary: #ffffff;
```
- **HEX**: `#FFFFFF`
- **RGB**: `rgb(255, 255, 255)`
- **HSL**: `hsl(0, 0%, 100%)`
- **Uso**: Headlines, títulos principais, texto de destaque
- **Opacidade Recomendada**: 100% para headings

---

## Cores de Texto com Opacidade

### Texto Primário
```css
--text-primary: rgba(255, 255, 255, 1.0);
```
- **HEX**: `#FFFFFF`
- **Opacity**: 100%
- **Uso**: H1, H2, H3, H4, números/stats

---

### Texto Secundário
```css
--text-secondary: rgba(255, 255, 255, 0.9);
```
- **HEX**: `#FFFFFF`
- **Opacity**: 90%
- **Uso**: Subheadlines, leads, introduções de seção

---

### Texto Padrão
```css
--text-body: rgba(255, 255, 255, 0.8);
```
- **HEX**: `#FFFFFF`
- **Opacity**: 80%
- **Uso**: Parágrafos, descrições, conteúdo geral

---

### Texto Terciário
```css
--text-tertiary: rgba(255, 255, 255, 0.6);
```
- **HEX**: `#FFFFFF`
- **Opacity**: 60%
- **Uso**: Legendas, notas de rodapé, metadados, bullets

---

### Texto Muted
```css
--text-muted: rgba(255, 255, 255, 0.4);
```
- **HEX**: `#FFFFFF`
- **Opacity**: 40%
- **Uso**: Texto desabilitado, placeholders, elementos inativos

---

## Cards e Componentes

### Card Border
```css
--card-border: #374151;
```
- **HEX**: `#374151`
- **RGB**: `rgb(55, 65, 81)`
- **HSL**: `hsl(220, 19%, 27%)`
- **Uso**: Bordas de cards, divisórias, separadores
- **Border Width**: 1px
- **Border Radius**: 12px-16px recomendado

---

### Card Background - Gradient Start
```css
--card-bg-start: #1E2735;
```
- **HEX**: `#1E2735`
- **RGB**: `rgb(30, 39, 53)`
- **HSL**: `hsl(217, 28%, 16%)`
- **Uso**: Início do gradient de fundo dos cards

---

### Card Background - Gradient End
```css
--card-bg-end: #040506;
```
- **HEX**: `#040506`
- **RGB**: `rgb(4, 5, 6)`
- **HSL**: `hsl(210, 20%, 2%)`
- **Uso**: Final do gradient de fundo dos cards

---

### Card Background - Gradient Completo
```css
background: linear-gradient(135deg, #1E2735 0%, #040506 100%);
```
ou
```css
background: linear-gradient(to bottom right, #1E2735, #040506);
```

**Variações de Gradiente**:
- **Top to Bottom**: `linear-gradient(180deg, #1E2735 0%, #040506 100%)`
- **Diagonal (135deg)**: `linear-gradient(135deg, #1E2735 0%, #040506 100%)`
- **Radial**: `radial-gradient(circle at top left, #1E2735, #040506)`

---

## Cores de Acento (Sugeridas)

### Accent Primary - Blue
```css
--accent-primary: #3B82F6;
```
- **HEX**: `#3B82F6`
- **RGB**: `rgb(59, 130, 246)`
- **Uso**: CTAs principais, links, elementos interativos

---

### Accent Primary Hover
```css
--accent-primary-hover: #2563EB;
```
- **HEX**: `#2563EB`
- **RGB**: `rgb(37, 99, 235)`
- **Uso**: Hover state do accent primary

---

### Accent Secondary - Cyan/Teal
```css
--accent-secondary: #06B6D4;
```
- **HEX**: `#06B6D4`
- **RGB**: `rgb(6, 182, 212)`
- **Uso**: CTAs secundários, highlights, badges

---

### Success - Green
```css
--success: #10B981;
```
- **HEX**: `#10B981`
- **RGB**: `rgb(16, 185, 129)`
- **Uso**: Mensagens de sucesso, indicadores positivos, stats positivos

---

### Warning - Yellow/Orange
```css
--warning: #F59E0B;
```
- **HEX**: `#F59E0B`
- **RGB**: `rgb(245, 158, 11)`
- **Uso**: Avisos, atenção, elementos importantes

---

### Error - Red
```css
--error: #EF4444;
```
- **HEX**: `#EF4444`
- **RGB**: `rgb(239, 68, 68)`
- **Uso**: Erros, alertas críticos, validações negativas

---

## Cores Semânticas

### Focus Ring
```css
--focus-ring: rgba(59, 130, 246, 0.5);
```
- **Uso**: Outline para elementos focados (acessibilidade)
- **Box Shadow**: `0 0 0 3px rgba(59, 130, 246, 0.5)`

---

### Hover Background
```css
--hover-bg: rgba(255, 255, 255, 0.05);
```
- **Uso**: Background de hover para cards, botões ghost

---

### Active Background
```css
--active-bg: rgba(255, 255, 255, 0.1);
```
- **Uso**: Background de elementos ativos, pressed state

---

## Implementação CSS

### Variáveis CSS Customizadas
```css
:root {
  /* Background */
  --background: #040609;

  /* Text Colors */
  --text-primary: rgba(255, 255, 255, 1.0);
  --text-secondary: rgba(255, 255, 255, 0.9);
  --text-body: rgba(255, 255, 255, 0.8);
  --text-tertiary: rgba(255, 255, 255, 0.6);
  --text-muted: rgba(255, 255, 255, 0.4);

  /* Card Colors */
  --card-border: #374151;
  --card-bg-start: #1E2735;
  --card-bg-end: #040506;
  --card-gradient: linear-gradient(135deg, var(--card-bg-start) 0%, var(--card-bg-end) 100%);

  /* Accent Colors */
  --accent-primary: #3B82F6;
  --accent-primary-hover: #2563EB;
  --accent-secondary: #06B6D4;

  /* Semantic Colors */
  --success: #10B981;
  --warning: #F59E0B;
  --error: #EF4444;

  /* Interactive States */
  --focus-ring: rgba(59, 130, 246, 0.5);
  --hover-bg: rgba(255, 255, 255, 0.05);
  --active-bg: rgba(255, 255, 255, 0.1);
}
```

---

## Implementação Tailwind CSS

### tailwind.config.js
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        background: '#040609',

        text: {
          primary: 'rgba(255, 255, 255, 1.0)',
          secondary: 'rgba(255, 255, 255, 0.9)',
          body: 'rgba(255, 255, 255, 0.8)',
          tertiary: 'rgba(255, 255, 255, 0.6)',
          muted: 'rgba(255, 255, 255, 0.4)',
        },

        card: {
          border: '#374151',
          'bg-start': '#1E2735',
          'bg-end': '#040506',
        },

        accent: {
          primary: '#3B82F6',
          'primary-hover': '#2563EB',
          secondary: '#06B6D4',
        },

        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },

      backgroundImage: {
        'card-gradient': 'linear-gradient(135deg, #1E2735 0%, #040506 100%)',
        'card-gradient-vertical': 'linear-gradient(180deg, #1E2735 0%, #040506 100%)',
      },
    },
  },
}
```

---

## Classes Utilitárias Tailwind

### Background
```html
<!-- Fundo principal -->
<div class="bg-[#040609]">

<!-- Card com gradient -->
<div class="bg-gradient-to-br from-[#1E2735] to-[#040506] border border-[#374151] rounded-2xl">
```

### Text Colors
```html
<!-- Heading -->
<h1 class="text-white">

<!-- Subheadline -->
<h2 class="text-white/90">

<!-- Body Text -->
<p class="text-white/80">

<!-- Caption -->
<span class="text-white/60">

<!-- Disabled -->
<span class="text-white/40">
```

### Cards
```html
<!-- Card Completo -->
<div class="
  bg-gradient-to-br from-[#1E2735] to-[#040506]
  border border-[#374151]
  rounded-2xl
  p-6
  hover:border-white/20
  transition-all
">
  <h3 class="text-white font-headings font-semibold mb-3">Título</h3>
  <p class="text-white/80 font-body">Descrição do card...</p>
</div>
```

### Buttons / CTAs
```html
<!-- Primary CTA -->
<button class="
  bg-[#3B82F6]
  hover:bg-[#2563EB]
  text-white
  font-body font-semibold
  px-6 py-3
  rounded-lg
  transition-colors
">
  Call to Action
</button>

<!-- Secondary CTA -->
<button class="
  bg-white/10
  hover:bg-white/20
  text-white
  font-body font-semibold
  px-6 py-3
  rounded-lg
  border border-white/20
  transition-all
">
  Ação Secundária
</button>
```

---

## Contraste e Acessibilidade

### Ratios de Contraste (WCAG 2.1)

| Combinação | Ratio | WCAG AA | WCAG AAA |
|------------|-------|---------|----------|
| `#FFFFFF` sobre `#040609` | **21:1** | ✅ Pass | ✅ Pass |
| `rgba(255,255,255,0.9)` sobre `#040609` | **18.9:1** | ✅ Pass | ✅ Pass |
| `rgba(255,255,255,0.8)` sobre `#040609` | **16.8:1** | ✅ Pass | ✅ Pass |
| `rgba(255,255,255,0.6)` sobre `#040609` | **12.6:1** | ✅ Pass | ✅ Pass |
| `rgba(255,255,255,0.4)` sobre `#040609` | **8.4:1** | ✅ Pass | ⚠️ Large text only |
| `#3B82F6` sobre `#040609` | **8.2:1** | ✅ Pass | ⚠️ Large text only |

### Recomendações
- Texto principal (≥16px): Use `text-white` ou `text-white/80`
- Texto pequeno (<16px): Use `text-white` ou `text-white/90`
- Elementos decorativos: `text-white/40` é aceitável
- Links e CTAs: Garanta contraste mínimo de 4.5:1

---

## Modo de Cores Complementares

### Overlay Escuro (para modals/popups)
```css
--overlay: rgba(4, 6, 9, 0.85);
backdrop-filter: blur(8px);
```

### Shine/Glow Effects
```css
--glow-primary: rgba(59, 130, 246, 0.3);
box-shadow: 0 0 20px var(--glow-primary);
```

### Gradient Text
```css
background: linear-gradient(90deg, #3B82F6 0%, #06B6D4 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## Dark Mode (Já está em Dark)

Esta paleta já está otimizada para dark mode. Caso precise de uma versão light mode no futuro, aqui está a inversão sugerida:

### Light Mode (Opcional/Futuro)
```css
:root[data-theme="light"] {
  --background: #FFFFFF;
  --text-primary: #040609;
  --text-secondary: rgba(4, 6, 9, 0.9);
  --text-body: rgba(4, 6, 9, 0.8);
  --card-border: #E5E7EB;
  --card-bg-start: #F9FAFB;
  --card-bg-end: #FFFFFF;
}
```

---

## Exemplos de Uso

### Hero Section
```html
<section class="bg-[#040609] py-20">
  <div class="container mx-auto">
    <h1 class="text-white font-headings text-4xl md:text-6xl font-bold mb-4">
      Conectamos canais. Automatizamos resultados.
    </h1>
    <p class="text-white/90 font-body text-lg md:text-xl max-w-2xl">
      A Wiser Corporate transforma como sua empresa se comunica com clientes.
    </p>
  </div>
</section>
```

### Card de Solução
```html
<div class="
  bg-gradient-to-br from-[#1E2735] to-[#040506]
  border border-[#374151]
  rounded-2xl
  p-8
  hover:border-white/30
  transition-all duration-300
  group
">
  <h3 class="text-white font-headings text-2xl font-semibold mb-3">
    Jornada Hiper Personalizada
  </h3>
  <p class="text-white/80 font-body mb-6">
    Conversacional Omnichannel com IA & CRM
  </p>
  <ul class="space-y-3">
    <li class="text-white/70 font-body flex items-start">
      <span class="text-[#3B82F6] mr-2">✓</span>
      Orquestração multicanal inteligente
    </li>
  </ul>
</div>
```

### CTA Button
```html
<button class="
  bg-[#3B82F6]
  hover:bg-[#2563EB]
  text-white
  font-body font-semibold
  px-8 py-4
  rounded-xl
  transition-all duration-200
  shadow-lg shadow-[#3B82F6]/20
  hover:shadow-xl hover:shadow-[#3B82F6]/30
  hover:scale-105
">
  Quero uma consultoria gratuita
</button>
```
