# TODO: Light Mode Design Vylepšení

> Vytvořeno: 2025-12-31
> Priorita: Střední
> Cíl: Zlepšit vizuální atraktivitu light mode designu

## 🎨 Problémy k vyřešení

- [ ] Příliš plochý design - jen bílá a světle šedá (#f2f2f2)
- [ ] Pouze jedna barevnost - jen modrý accent (#0000CD)
- [ ] Slabá vizuální hierarchie - sekce splývají
- [ ] Glassmorphism blur efekt není vidět na světlém pozadí
- [ ] Slabé stíny - karty vypadají ploše
- [ ] Chladný pocit - tvrdé šedé na bílé

---

## 📋 Implementační Checklist

### 1️⃣ Jemné Gradienty (Priorita: VYSOKÁ)

**Soubory k úpravě:**
- `src/components/layout/Section.jsx`
- `src/index.css`

**Úkoly:**
- [ ] Nahradit čistě bílou za světle modrošedý → bílý gradient
- [ ] Přidat jemné barevné přechody do pozadí sekcí
- [ ] Implementovat gradient overlay pro `background="light"` sekce
- [ ] Otestovat na všech sekcích (Hero, FAQ, CTA, Phases, atd.)

**Příklad kódu:**
```css
background: linear-gradient(180deg, #f8f9fb 0%, #ffffff 100%);
```

---

### 2️⃣ Sekundární Teplá Barva (Priorita: VYSOKÁ)

**Soubory k úpravě:**
- `tailwind.config.js`
- `src/index.css`
- `src/components/ui/Button.jsx`
- Komponenty s CTAs

**Úkoly:**
- [ ] Definovat sekundární barvu (např. měkká oranžová/koralová/růžová)
- [ ] Přidat do Tailwind config jako `accent-warm` nebo `secondary`
- [ ] Použít pro CTAs a zvýraznění
- [ ] Barevná rozmanitost v kartách (střídání accent/secondary)

**Doporučené barvy:**
- `#ff6b6b` - Coral red
- `#ffa94d` - Warm orange
- `#ff8787` - Salmon pink

---

### 3️⃣ Výraznější Stíny a Hloubka (Priorita: STŘEDNÍ)

**Soubory k úpravě:**
- `src/components/ui/Card.jsx`
- `src/components/ui/PricingCard.jsx`
- Tailwind config pro custom shadows

**Úkoly:**
- [ ] Implementovat vícevrstvé stíny pro karty
- [ ] Přidat barevné stíny (ne jen černá/šedá)
- [ ] Vytvořit shadow-accent-light pro light mode
- [ ] Zvýšit opacity stínů pro lepší viditelnost

**Příklad:**
```css
box-shadow:
  0 4px 6px -1px rgba(0, 0, 205, 0.1),
  0 2px 4px -1px rgba(0, 0, 205, 0.06);
```

---

### 4️⃣ Teplé Neutrály (Priorita: STŘEDNÍ)

**Soubory k úpravě:**
- `src/index.css` - CSS variables
- Tailwind config

**Úkoly:**
- [ ] Nahradit chladnou šedou (#f2f2f2) za teplou béžovou/taupe
- [ ] Aktualizovat `--color-bg-light` na teplejší tón
- [ ] Přidat warm-gray-50, warm-gray-100 do Tailwind
- [ ] Otestovat čitelnost textu

**Doporučené barvy:**
- `#faf9f7` - Warm white
- `#f5f3f0` - Light beige
- `#ebe8e4` - Taupe

---

### 5️⃣ Jemné Textury/Vzory (Priorita: NÍZKÁ)

**Soubory k úpravě:**
- `src/components/layout/Section.jsx`
- Nový soubor: `src/components/ui/BackgroundPattern.jsx`

**Úkoly:**
- [ ] Vytvořit komponenty s SVG patterny (dots, grid, noise)
- [ ] Implementovat bodíkový pattern v pozadí sekcí
- [ ] Přidat šum/noise overlay pro hloubku (opacity 0.03-0.05)
- [ ] Zajistit, aby nevyrušoval od obsahu

**Pattern příklady:**
- Dot grid pattern
- Subtle noise texture
- Mesh gradient overlay

---

### 6️⃣ Zlepšení Glassmorphism Efektu (Priorita: NÍZKÁ)

**Soubory k úpravě:**
- `src/components/ui/Card.jsx`

**Úkoly:**
- [ ] Vylepšit backdrop-blur pro light mode
- [ ] Přidat barevný tint do pozadí karet (light blue/purple)
- [ ] Zvýšit border opacity pro lepší viditelnost
- [ ] Otestovat na různých pozadích

---

## 📂 Ovlivněné Komponenty

### Vysoká priorita (implementovat první):
- ✅ `Section.jsx` - Gradient backgrounds
- ✅ `Button.jsx` - Sekundární barva
- ✅ `Card.jsx` - Lepší stíny
- ✅ `index.css` - Barevné proměnné

### Střední priorita:
- `PricingCard.jsx`
- `StatCard.jsx`
- `Badge.jsx`
- Všechny sekce s `background="light"`

### Nízká priorita:
- Background patterns
- Texture overlays

---

## 🎯 Výsledek

Po implementaci všech vylepšení by light mode měl:
- ✨ Být vizuálně zajímavější a bohatší
- 🎨 Mít lepší barevnou hierarchii
- 🌟 Vytvářet pocit hloubky a profesionality
- 💫 Být teplý a přívětivý (ne studený)
- 🎭 Odlišovat se od konkurence

---

## 📝 Poznámky

- Začít postupně - nejdřív gradienty a sekundární barva
- Testovat na mobilních zařízeních
- Zachovat přístupnost (WCAG contrast ratios)
- Neztratit čitelnost a čistotu designu
- Inspirace: Moderní SaaS weby (Linear, Notion, Stripe)

---

## ✅ Progress Tracking

**Celkem úkolů:** 0/24
**Hotovo:** 0%
**Začato:** -
**Deadline:** TBD
