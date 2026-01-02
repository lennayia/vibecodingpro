import { Smartphone, BarChart3, GraduationCap, Globe, Bot, ShoppingBag } from 'lucide-react'

/**
 * WhatYouCanCreate section content
 * Centralized content for easy management and i18n readiness
 */

export const whatYouCanCreateContent = {
  heading: "Co můžete s vibecodingem vytvořit",

  categories: [
    {
      Icon: Smartphone,
      title: "Aplikace pro klientky",
      description: "Spánkový tracker, deník vděčnosti, habit tracker, meditační průvodce"
    },
    {
      Icon: BarChart3,
      title: "Nástroje pro podnikání",
      description: "Kalkulačky, kvízy, checklisty, onboarding pro klientky"
    },
    {
      Icon: GraduationCap,
      title: "Vzdělávací platformy",
      description: "Kurzy, členské sekce, interaktivní materiály"
    },
    {
      Icon: Globe,
      title: "Weby",
      description: "Moderní webové stránky pro váš byznys"
    },
    {
      Icon: Bot,
      title: "AI asistenty",
      description: "Chatboti, kteří odpovídají za vás 24/7"
    },
    {
      Icon: ShoppingBag,
      title: "Digitální produkty",
      description: "Aplikace, které prodáváte jako produkt"
    }
  ],

  closing: "A to je jen začátek. Co chcete vytvořit vy?"
}
