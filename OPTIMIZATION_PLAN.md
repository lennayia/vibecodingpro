# 🎯 Optimalizační plán - Header & CSS struktura

## ✅ HOTOVO

1. ✅ **Theme Context** - Odstranění duplicity theme state
   - Vytvořen `src/contexts/ThemeContext.jsx`
   - Upraveny `ThemeToggle.jsx` a `Navigation.jsx`
   - Odstraněno ~30 řádků duplicitního kódu
   - Opraveno problikávání ikony při refresh

## 🔄 PRÁVĚ TEĎ

2. **Přesunout inline CSS z Navigation.jsx**
   - Vytvořit `src/styles/animations.css`
   - Přesunout marquee @keyframes
   - Odstranit `<style>` tag z Navigation.jsx

## 📋 DALŠÍ ÚKOLY (Priorita 2)

3. ✅ **Vytvořit reusable Tooltip komponent** - HOTOVO
   - Odstranit duplicitu v SlideOutMenu (2× stejný kód)
   - Vytvořit `src/components/ui/Tooltip.jsx`

4. ✅ **Přesunout anchorLinks do constants** - HOTOVO
   - Z `SlideOutMenu.jsx` → `src/constants/data.js`
   - Lepší údržba, reusabilita

## 🔄 DRUHÁ VLNA OPTIMALIZACÍ

### PRIORITA 1 - Rychlé výhry
1. **Navigation.jsx - Inline callbacks** (řádky 56-57)
   - Problém: `onOpen={() => setIsMenuOpen(true)}`
   - Řešení: useCallback nebo přímé předání setIsMenuOpen

2. **SlideOutMenu - Sections duplicita** (řádek 14)
   - Problém: `const sections = ['what-you-can-create', ...]`
   - Řešení: Derive z anchorLinks: `anchorLinks.map(l => l.id)`

3. **SlideOutMenu - useCallback pro handleLinkClick**
   - Problém: Nová funkce při každém renderu
   - Řešení: `useCallback(() => { ... }, [onClose])`

### PRIORITA 2 - Konstanty
4. **Magic numbers do konstant**
   - threshold: [0, 0.1, 0.2, ...]
   - deltaX/Y > 30
   - offset.x > 100, velocity > 500

5. **Section IDs do constants**
   - 'pricing-section' → importovat z constants

### PRIORITA 3 - Lazy Loading
6. **Logo obrázky - native lazy loading**
   - Přidat `loading="lazy"` attribute

7. **Lucide ikony - lazy import** (volitelné)
   - Minimální přínos, malé soubory

### PRIORITA 4 - Komponenty
8. **GlassmorphismOverlay komponent**
   - Extrahovat gradient overlays z Navigation

## 🚀 BUDOUCNOST (Škálování)

5. **Modulární CSS struktura** (když budete přidávat další stránky)
   ```
   src/styles/
   ├── global/
   │   ├── variables.css
   │   ├── reset.css
   │   └── typography.css
   ├── animations/
   │   └── marquee.css
   ├── components/
   │   ├── navigation.css
   │   ├── hero.css
   │   └── holographic.css
   └── utilities/
       └── spacing.css
   ```

6. **Lazy loading optimalizace**
   - Logo obrázky v Navigation
   - Lucide ikony (volitelné)

---

## 📝 POZNÁMKY

- Dark mode je výchozí režim ✓
- Všechno musí zůstat funkční při každé změně ✓
- Postupovat pomalu a opatrně ✓
