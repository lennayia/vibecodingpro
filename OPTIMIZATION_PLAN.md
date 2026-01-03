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

3. **Vytvořit reusable Tooltip komponent**
   - Odstranit duplicitu v SlideOutMenu (2× stejný kód)
   - Vytvořit `src/components/ui/Tooltip.jsx`

4. **Přesunout anchorLinks do constants**
   - Z `SlideOutMenu.jsx` → `src/constants/data.js`
   - Lepší údržba, reusabilita

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
