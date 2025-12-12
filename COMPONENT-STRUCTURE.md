# 🏗️ Struktura Komponent

Projekt byl refaktorován pro **škálovatelný vývoj** plnohodnotné webové prezentace.

## 📁 Adresářová struktura

```
src/
├── components/
│   ├── layout/              # Layout komponenty
│   │   ├── Navigation.jsx   # Hlavní navigace + dark mode toggle
│   │   ├── Footer.jsx       # Patička
│   │   └── Section.jsx      # Obalový wrapper pro sekce
│   │
│   ├── sections/            # Sekce stránky
│   │   ├── Hero.jsx         # Úvodní hero sekce
│   │   ├── JulieVsMartina.jsx  # Porovnání dvou cest
│   │   ├── BenefitsStats.jsx   # Statistiky (60%, 3x, 24/7, ∞)
│   │   ├── Phases.jsx       # 7 fází k aplikaci
│   │   └── CTA.jsx          # Finální call-to-action
│   │
│   └── ui/                  # Znovupoužitelné UI komponenty
│       ├── Button.jsx       # Tlačítka (.btn, .btn-primary, .btn-lg)
│       ├── Card.jsx         # Univerzální karty
│       ├── Badge.jsx        # Odznaky/štítky
│       ├── StatCard.jsx     # Statistické karty
│       └── PhaseCard.jsx    # Karty fází
│
├── constants/
│   ├── animations.js        # Framer Motion animace
│   └── data.js              # Data (phases, benefits)
│
├── index.css                # Globální styly + typografie
└── App.jsx                  # Hlavní aplikace (čistá, 50 řádků!)
```

## 🎨 Design System

### Typography (index.css)
- **H1**: 60-96px, Manrope Bold
- **H2**: 48-60px, Manrope Bold
- **H3**: 30-36px, Manrope Bold
- **Subtitle**: 20-24px, gray-600
- **Body**: 16px, line-height 1.75

### Colors
- **Light mode accent**: `#0000CD` (modrá)
- **Dark mode accent**: `#0DDD0D` (zelená)
- Automatické přepínání přes `.text-accent`

### Buttons
```jsx
<Button>Standardní</Button>
<Button size="lg">Velké</Button>
<Button className="w-full">Plná šířka</Button>
```

## 🧩 Jak používat komponenty

### Layout wrapper
```jsx
import Section from './components/layout/Section'

<Section background="light">  {/* nebo "dark" */}
  <div className="max-w-6xl mx-auto">
    {/* Obsah */}
  </div>
</Section>
```

### UI komponenty
```jsx
import Card from './components/ui/Card'
import Button from './components/ui/Button'
import Badge from './components/ui/Badge'

<Card background="light" animate={true} delay={0.2}>
  <h3>Nadpis</h3>
  <p>Text</p>
  <Button>Akce</Button>
</Card>

<Badge>NEJOBLÍBENĚJŠÍ</Badge>
```

### Statistiky
```jsx
import StatCard from './components/ui/StatCard'

<StatCard value="3x" label="Více klientů" delay={0.1} />
```

## ✅ Co je hotovo

- ✅ Adresářová struktura
- ✅ Layout komponenty (Navigation, Footer, Section)
- ✅ UI komponenty (Button, Card, Badge, StatCard, PhaseCard)
- ✅ 5 section komponent (Hero, JulieVsMartina, BenefitsStats, Phases, CTA)
- ✅ Konstanty (animations, data)
- ✅ Globální typografie a design system

## 🚧 TODO: Dotvořit zbylé sekce

Vytvoř tyto komponenty podle stejného vzoru:

```
src/components/sections/
├── CaseStudy.jsx          # Příběh úspěchu (Jana)
├── ImagineSection.jsx     # "Představte si..."
├── Pricing.jsx            # Balíčky konzultací
└── WhyConsultation.jsx    # Proč konzultace?
```

## 🎯 Výhody této struktury

1. **Škálovatelnost** - snadno přidáš nové stránky/sekce
2. **Znovupoužitelnost** - UI komponenty použiješ kdekoliv
3. **Údržba** - změny na jednom místě
4. **Čistota** - App.jsx má jen 50 řádků místo 770
5. **Týmová práce** - každý může pracovat na jiné komponentě

## 🚀 Budoucí rozšíření

Tato struktura je připravená pro:
- ✨ Více stránek (About, Blog, Contact)
- ✨ Routing (React Router)
- ✨ CMS integrace
- ✨ Vícejazyčnost (i18n)
- ✨ A/B testing různých variant sekcí
