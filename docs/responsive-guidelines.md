# Diretrizes de Responsividade - Wiser Corporate LP

## Filosofia Mobile First

**Princípio Fundamental**: Desenvolver primeiro para dispositivos móveis (mobile first) e progressivamente melhorar a experiência para telas maiores.

### Vantagens da Abordagem Mobile First
1. **Performance**: Código mais leve e otimizado por padrão
2. **Priorização**: Foco no conteúdo essencial desde o início
3. **Progressive Enhancement**: Adicionar recursos gradualmente para telas maiores
4. **SEO**: Google prioriza sites mobile-friendly
5. **Acessibilidade**: Força decisões de design mais acessíveis

---

## Breakpoints

### Sistema de Breakpoints

| Breakpoint | Min Width | Max Width | Dispositivos | Uso Tailwind |
|------------|-----------|-----------|--------------|--------------|
| **Mobile** | 320px | 767px | Smartphones | (default - sem prefixo) |
| **Tablet** | 768px | 1023px | Tablets, iPad | `md:` |
| **Desktop** | 1024px | 1439px | Laptops, Desktop | `lg:` |
| **Ultrawide** | 1440px+ | ∞ | Desktop Grande, 4K | `xl:` ou `2xl:` |

### Breakpoints Detalhados

#### Mobile (320px - 767px)
```css
/* Base styles - Mobile First */
@media (min-width: 320px) {
  /* Estilos padrão */
}
```

**Dispositivos Comuns**:
- iPhone SE: 375x667
- iPhone 12/13: 390x844
- iPhone 14 Pro Max: 430x932
- Samsung Galaxy S21: 360x800
- Google Pixel 6: 393x851

**Características**:
- Layout de coluna única
- Navegação hamburger
- CTAs full-width ou centralizados
- Cards empilhados verticalmente
- Imagens responsivas 100% width

---

#### Tablet (768px - 1023px)
```css
@media (min-width: 768px) {
  /* Tablet styles */
}
```

**Dispositivos Comuns**:
- iPad: 768x1024
- iPad Air: 820x1180
- iPad Pro 11": 834x1194
- Samsung Galaxy Tab: 800x1280
- Microsoft Surface: 912x1368

**Características**:
- Layout de 2 colunas para cards
- Navegação horizontal (opcional)
- CTAs side-by-side
- Grid 2x2 ou 2x3
- Sidebar opcional

---

#### Desktop (1024px - 1439px)
```css
@media (min-width: 1024px) {
  /* Desktop styles */
}
```

**Resoluções Comuns**:
- MacBook Air: 1280x800
- MacBook Pro 13": 1440x900
- HD: 1366x768
- Full HD: 1920x1080

**Características**:
- Layout de 3-4 colunas
- Navegação completa horizontal
- Hover effects
- Grid 3x3 ou 4x2
- Sidebar + conteúdo principal

---

#### Ultrawide (1440px+)
```css
@media (min-width: 1440px) {
  /* Ultrawide styles */
}

@media (min-width: 1920px) {
  /* Full HD+ styles */
}

@media (min-width: 2560px) {
  /* 2K/4K styles */
}
```

**Resoluções Comuns**:
- MacBook Pro 16": 1728x1117
- iMac 27": 2560x1440
- 4K: 3840x2160
- Ultrawide: 3440x1440

**Características**:
- Layout de 4-6 colunas
- Conteúdo centralizado com max-width
- Espaçamento generoso
- Elementos decorativos adicionais
- Animações mais elaboradas

---

## Container e Layout

### Container Widths

```css
/* Mobile First Approach */
.container {
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    padding-left: 24px;
    padding-right: 24px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
    padding-left: 32px;
    padding-right: 32px;
  }
}

/* Ultrawide */
@media (min-width: 1440px) {
  .container {
    max-width: 1280px;
    padding-left: 40px;
    padding-right: 40px;
  }
}

/* 4K */
@media (min-width: 1920px) {
  .container {
    max-width: 1440px;
  }
}
```

### Tailwind Container Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',    // 16px - Mobile
        sm: '1rem',         // 16px
        md: '1.5rem',       // 24px - Tablet
        lg: '2rem',         // 32px - Desktop
        xl: '2.5rem',       // 40px - Ultrawide
        '2xl': '3rem',      // 48px - 4K
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
}
```

---

## Grid System

### Grid Responsivo Mobile First

#### Mobile (1 coluna)
```html
<div class="grid grid-cols-1 gap-4">
  <!-- Cards empilhados verticalmente -->
</div>
```

#### Tablet (2 colunas)
```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
  <!-- 1 coluna mobile, 2 colunas tablet -->
</div>
```

#### Desktop (3-4 colunas)
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
  <!-- 1 col mobile, 2 cols tablet, 3 cols desktop -->
</div>
```

#### Ultrawide (4-6 colunas)
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
  <!-- Progressão: 1 → 2 → 4 → 6 colunas -->
</div>
```

### Grid com Auto-fit (Fluido)
```css
.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
```

---

## Spacing Responsivo

### Padding e Margin

| Elemento | Mobile | Tablet | Desktop | Ultrawide |
|----------|--------|--------|---------|-----------|
| Section Padding Y | 40px | 60px | 80px | 120px |
| Section Padding X | 16px | 24px | 32px | 40px |
| Card Padding | 16px | 20px | 24px | 32px |
| Element Margin Bottom | 24px | 32px | 40px | 48px |
| Grid Gap | 16px | 24px | 32px | 40px |

### Implementação Tailwind

```html
<!-- Section Spacing -->
<section class="py-10 px-4 md:py-15 md:px-6 lg:py-20 lg:px-8 xl:py-30 xl:px-10">

<!-- Card Spacing -->
<div class="p-4 md:p-5 lg:p-6 xl:p-8">

<!-- Element Spacing -->
<div class="mb-6 md:mb-8 lg:mb-10 xl:mb-12">

<!-- Grid Gap -->
<div class="grid gap-4 md:gap-6 lg:gap-8 xl:gap-10">
```

---

## Componentes Responsivos

### Hero Section

```html
<section class="
  bg-[#040609]
  py-12 md:py-16 lg:py-24 xl:py-32
  px-4 md:px-6 lg:px-8
">
  <div class="container mx-auto max-w-7xl">
    <!-- Headline -->
    <h1 class="
      font-headings font-bold
      text-[32px] leading-[38px]
      md:text-[48px] md:leading-[56px]
      lg:text-[56px] lg:leading-[64px]
      xl:text-[64px] xl:leading-[72px]
      text-white
      mb-4 md:mb-5 lg:mb-6
      max-w-4xl
    ">
      Conectamos canais. Automatizamos resultados.
    </h1>

    <!-- Subheadline -->
    <p class="
      font-body
      text-base md:text-lg lg:text-xl xl:text-2xl
      leading-relaxed
      text-white/90
      mb-8 md:mb-10 lg:mb-12
      max-w-2xl
    ">
      A Wiser Corporate transforma como sua empresa se comunica com clientes.
    </p>

    <!-- CTA -->
    <div class="
      flex flex-col sm:flex-row
      gap-4
      items-center sm:items-start
    ">
      <button class="
        w-full sm:w-auto
        px-6 py-3 md:px-8 md:py-4
        bg-[#3B82F6] hover:bg-[#2563EB]
        text-white font-body font-semibold
        rounded-lg
        transition-all
      ">
        Quero uma consultoria gratuita
      </button>
    </div>
  </div>
</section>
```

### Card Grid de Soluções

```html
<section class="py-12 md:py-16 lg:py-20 xl:py-24 px-4 md:px-6 lg:px-8">
  <div class="container mx-auto max-w-7xl">
    <!-- Grid Responsivo -->
    <div class="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-2
      xl:grid-cols-4
      gap-4 md:gap-6 lg:gap-8
    ">
      <!-- Card -->
      <div class="
        bg-gradient-to-br from-[#1E2735] to-[#040506]
        border border-[#374151]
        rounded-xl md:rounded-2xl
        p-5 md:p-6 lg:p-8
        hover:border-white/30
        transition-all
      ">
        <h3 class="
          font-headings font-semibold
          text-xl md:text-2xl lg:text-3xl
          text-white
          mb-3 md:mb-4
        ">
          Título da Solução
        </h3>
        <p class="
          font-body
          text-sm md:text-base lg:text-lg
          text-white/80
          leading-relaxed
        ">
          Descrição da solução...
        </p>
      </div>
    </div>
  </div>
</section>
```

### Navegação Responsiva

```html
<nav class="
  fixed top-0 left-0 right-0
  bg-[#040609]/95 backdrop-blur-md
  border-b border-white/10
  z-50
">
  <div class="container mx-auto max-w-7xl">
    <div class="
      flex items-center justify-between
      px-4 md:px-6 lg:px-8
      py-4 md:py-5
    ">
      <!-- Logo -->
      <div class="text-white font-headings font-bold text-xl md:text-2xl">
        Wiser Corporate
      </div>

      <!-- Desktop Menu (hidden mobile) -->
      <div class="hidden lg:flex items-center gap-8">
        <a href="#sobre" class="text-white/80 hover:text-white transition-colors">
          Sobre
        </a>
        <a href="#solucoes" class="text-white/80 hover:text-white transition-colors">
          Soluções
        </a>
        <a href="#casos" class="text-white/80 hover:text-white transition-colors">
          Casos
        </a>
        <button class="
          px-6 py-2.5
          bg-[#3B82F6] hover:bg-[#2563EB]
          text-white font-semibold
          rounded-lg
          transition-all
        ">
          Falar com Especialista
        </button>
      </div>

      <!-- Mobile Hamburger (visible mobile only) -->
      <button class="lg:hidden text-white">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu (hidden by default) -->
    <div class="lg:hidden border-t border-white/10">
      <div class="flex flex-col gap-4 p-4">
        <a href="#sobre" class="text-white/80 py-2">Sobre</a>
        <a href="#solucoes" class="text-white/80 py-2">Soluções</a>
        <a href="#casos" class="text-white/80 py-2">Casos</a>
        <button class="
          w-full
          px-6 py-3
          bg-[#3B82F6]
          text-white font-semibold
          rounded-lg
        ">
          Falar com Especialista
        </button>
      </div>
    </div>
  </div>
</nav>
```

---

## Imagens Responsivas

### Picture Element (Recomendado)

```html
<picture>
  <!-- Mobile -->
  <source
    media="(max-width: 767px)"
    srcset="/images/hero-mobile.webp"
  />

  <!-- Tablet -->
  <source
    media="(min-width: 768px) and (max-width: 1023px)"
    srcset="/images/hero-tablet.webp"
  />

  <!-- Desktop -->
  <source
    media="(min-width: 1024px)"
    srcset="/images/hero-desktop.webp"
  />

  <!-- Fallback -->
  <img
    src="/images/hero-desktop.webp"
    alt="Hero image"
    class="w-full h-auto object-cover"
    loading="lazy"
  />
</picture>
```

### Aspect Ratio Responsivo

```html
<!-- 16:9 mobile, 21:9 desktop -->
<div class="
  aspect-video
  lg:aspect-[21/9]
  w-full
  overflow-hidden
  rounded-xl
">
  <img src="/image.jpg" alt="" class="w-full h-full object-cover" />
</div>
```

---

## Typography Responsivo

### Implementação Mobile First

```css
/* Mobile (base) */
h1 {
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.02em;
}

/* Tablet */
@media (min-width: 768px) {
  h1 {
    font-size: 48px;
    line-height: 56px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  h1 {
    font-size: 56px;
    line-height: 64px;
  }
}

/* Ultrawide */
@media (min-width: 1440px) {
  h1 {
    font-size: 64px;
    line-height: 72px;
  }
}
```

### Tailwind Typography

```html
<h1 class="
  text-[32px] leading-[38px]
  md:text-[48px] md:leading-[56px]
  lg:text-[56px] lg:leading-[64px]
  xl:text-[64px] xl:leading-[72px]
  tracking-tight
  font-headings font-bold
">
  Headline Responsivo
</h1>
```

---

## Flexbox Responsivo

### Direção Flex

```html
<!-- Coluna mobile, row desktop -->
<div class="flex flex-col lg:flex-row gap-6">
  <!-- Content -->
</div>

<!-- Row mobile, coluna desktop (incomum, mas possível) -->
<div class="flex flex-row lg:flex-col gap-4">
  <!-- Content -->
</div>
```

### Alinhamento Responsivo

```html
<div class="
  flex
  flex-col md:flex-row
  items-center md:items-start
  justify-center md:justify-between
  gap-4 md:gap-6
">
  <!-- Content -->
</div>
```

---

## Display Responsivo

### Mostrar/Esconder Elementos

```html
<!-- Visible only on mobile -->
<div class="block md:hidden">
  Conteúdo Mobile
</div>

<!-- Hidden on mobile, visible on tablet+ -->
<div class="hidden md:block">
  Conteúdo Tablet/Desktop
</div>

<!-- Visible only on desktop -->
<div class="hidden lg:block">
  Conteúdo Desktop
</div>

<!-- Different layouts per breakpoint -->
<div class="block md:hidden lg:block xl:hidden">
  Complexo mas possível
</div>
```

---

## Touch e Hover

### Tailwind Hover States

```html
<!-- Hover apenas em dispositivos com suporte (desktop) -->
<button class="
  bg-[#3B82F6]
  hover:bg-[#2563EB]
  active:bg-[#1D4ED8]
  transition-colors

  /* Aumenta área de toque no mobile */
  min-h-[44px]
  px-6 py-3
">
  Button
</button>

<!-- Conditional hover -->
<div class="
  border border-[#374151]
  md:hover:border-white/30
  transition-colors
">
  Hover apenas desktop
</div>
```

### Área de Toque (Mobile)

```css
/* Mínimo 44x44px para touch targets */
.touch-target {
  min-width: 44px;
  min-height: 44px;
  padding: 12px;
}
```

---

## Performance Mobile

### Lazy Loading

```html
<!-- Imagens lazy load -->
<img src="image.jpg" loading="lazy" alt="" />

<!-- Iframes lazy load -->
<iframe src="video.html" loading="lazy"></iframe>
```

### Intersection Observer (Animações)

```javascript
// Animar apenas quando visível
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

---

## Viewport e Meta Tags

### Meta Tags Essenciais

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <!-- Viewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">

  <!-- Mobile Web App -->
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

  <!-- Theme Color -->
  <meta name="theme-color" content="#040609">

  <!-- Preconnect Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
</head>
```

---

## Acessibilidade Responsiva

### Focus Visível

```css
/* Focus ring visível em todos os breakpoints */
button:focus-visible {
  outline: 2px solid rgba(59, 130, 246, 0.8);
  outline-offset: 2px;
}
```

### Texto Redimensionável

```css
/* Permitir zoom até 200% sem quebrar layout */
@media (min-width: 320px) {
  html {
    font-size: 16px;
  }
}
```

### Skip Links

```html
<!-- Skip to main content -->
<a href="#main-content" class="
  sr-only
  focus:not-sr-only
  focus:absolute
  focus:top-4
  focus:left-4
  focus:z-50
  focus:bg-[#3B82F6]
  focus:text-white
  focus:px-4
  focus:py-2
  focus:rounded
">
  Pular para conteúdo principal
</a>
```

---

## Testing Responsivo

### Dispositivos para Testar

**Mobile**:
- iPhone SE (375x667)
- iPhone 12/13/14 (390x844)
- iPhone 14 Pro Max (430x932)
- Samsung Galaxy S21 (360x800)
- Google Pixel 6 (393x851)

**Tablet**:
- iPad (768x1024)
- iPad Air (820x1180)
- iPad Pro 11" (834x1194)

**Desktop**:
- 1366x768 (HD comum)
- 1920x1080 (Full HD)
- 2560x1440 (2K)

### Ferramentas

1. **Chrome DevTools**: Device emulation
2. **Firefox Responsive Design Mode**
3. **BrowserStack**: Testes em dispositivos reais
4. **Responsively App**: Visualizar múltiplos breakpoints
5. **LambdaTest**: Cross-browser testing

---

## Checklist Responsivo

### Mobile First ✅
- [ ] Código começa mobile por padrão
- [ ] Media queries usam `min-width`
- [ ] Performance otimizada para 3G/4G
- [ ] Touch targets mínimo 44x44px
- [ ] Navegação funcional com polegar
- [ ] Imagens otimizadas (WebP, lazy load)
- [ ] Formulários mobile-friendly
- [ ] Modais e popups acessíveis no mobile

### Tablet ✅
- [ ] Layout de 2 colunas funcional
- [ ] Navegação horizontal implementada
- [ ] Espaçamento adequado entre elementos
- [ ] Imagens proporcionais

### Desktop ✅
- [ ] Layout de 3-4 colunas
- [ ] Hover effects implementados
- [ ] Navegação completa
- [ ] Max-width para leitura confortável

### Ultrawide ✅
- [ ] Conteúdo centralizado
- [ ] Max-width mantém legibilidade
- [ ] Espaçamento generoso
- [ ] Sem elementos esticados

### Geral ✅
- [ ] Testes em dispositivos reais
- [ ] Sem scroll horizontal
- [ ] Performance 90+ no Lighthouse (mobile)
- [ ] Acessibilidade WCAG 2.1 AA
- [ ] SEO otimizado
- [ ] Cross-browser compatível

---

## Exemplo Completo: Card Responsivo

```html
<div class="
  /* Layout */
  w-full
  max-w-sm md:max-w-md lg:max-w-lg
  mx-auto lg:mx-0

  /* Background & Border */
  bg-gradient-to-br from-[#1E2735] to-[#040506]
  border border-[#374151]
  hover:border-white/30

  /* Spacing */
  p-4 md:p-6 lg:p-8
  mb-4 md:mb-6 lg:mb-8

  /* Border Radius */
  rounded-xl md:rounded-2xl

  /* Transition */
  transition-all duration-300

  /* Hover Effects (desktop only) */
  md:hover:scale-105
  md:hover:shadow-xl
">
  <!-- Icon/Image -->
  <div class="
    w-12 h-12
    md:w-14 md:h-14
    lg:w-16 lg:h-16
    mb-4 md:mb-5 lg:mb-6
    rounded-lg
    bg-[#3B82F6]/10
    flex items-center justify-center
  ">
    <!-- Icon -->
  </div>

  <!-- Title -->
  <h3 class="
    font-headings font-semibold
    text-lg md:text-xl lg:text-2xl xl:text-3xl
    text-white
    mb-2 md:mb-3 lg:mb-4
  ">
    Título do Card
  </h3>

  <!-- Description -->
  <p class="
    font-body
    text-sm md:text-base lg:text-lg
    text-white/80
    leading-relaxed
    mb-4 md:mb-5 lg:mb-6
  ">
    Descrição do card com texto responsivo que se adapta a diferentes tamanhos de tela.
  </p>

  <!-- CTA -->
  <button class="
    w-full sm:w-auto
    px-4 md:px-6
    py-2.5 md:py-3
    bg-[#3B82F6]
    hover:bg-[#2563EB]
    text-white
    font-body font-semibold
    text-sm md:text-base
    rounded-lg
    transition-colors
    min-h-[44px]
  ">
    Saiba Mais
  </button>
</div>
```
