import { Target, Wrench, MessageSquare, FileText, Rocket, RefreshCw, Package } from 'lucide-react'

export const phases = [
  {
    number: "01",
    title: "Vize a příprava",
    description: "Definujeme, co chcete postavit a pro koho. Vytvoříme jasnou vizi vaší aplikace.",
    Icon: Target
  },
  {
    number: "02",
    title: "Technické zázemí",
    description: "Nastavíme všechny potřebné nástroje - Claude Code, GitHub, Supabase, Vercel.",
    Icon: Wrench
  },
  {
    number: "03",
    title: "Komunikace s AI",
    description: "Naučíme vás mluvit s Claude Code efektivně - správné prompty, kontext, iterace.",
    Icon: MessageSquare
  },
  {
    number: "04",
    title: "Startovací dokumenty",
    description: "Připravíme product brief, user stories a wireframes - základ úspěchu.",
    Icon: FileText
  },
  {
    number: "05",
    title: "První kroky",
    description: "Inicializace projektu, základní struktura a první komponenty.",
    Icon: Rocket
  },
  {
    number: "06",
    title: "Workflow a iterace",
    description: "Nastavíme denní rutinu, testování a správné verzování kódu.",
    Icon: RefreshCw
  },
  {
    number: "07",
    title: "Dokončení a spuštění",
    description: "Testování, deploy na Vercel a spuštění vaší aplikace do světa.",
    Icon: Package
  }
]

export const benefits = [
  { value: "60%", label: "Úspora času" },
  { value: "3x", label: "Více klientů" },
  { value: "24/7", label: "Dostupnost" },
  { value: "∞", label: "Škálovatelnost" }
]

export const comparisonData = {
  martina: {
    name: "Martina",
    subtitle: "poskytuje konzultace",
    type: "negative",
    features: [
      { text: "<strong>7 konzultací denně</strong> - jede jako drak a skoro se nestihne ani nadechnout" },
      { text: "<strong>Opakuje stejné rady</strong> dokola - to už ji mentálně unavuje a brzdí její kreativitu" },
      { text: "<strong>Odmítá 3-4 nové klientky týdně</strong> - nemá energetickou kapacitu" },
      { text: "<strong>Večer je vyčerpaná</strong> - na rodinu jí zbývá jen zlomek energie" },
      { text: "<strong>Jede na dovolenou</strong> - ale klientky ji potřebují pořád" },
      { text: "<strong>Příjem je omezený</strong> - vydělá jen aktivní prací" }
    ],
    quote: "Cítím se jako na běžícím pásu. Pomáhám lidem mít energii, ale sama jsem vyčerpaná."
  },
  julie: {
    name: "Julie",
    subtitle: "vytvořila aplikaci a poskytuje prémiové konzultace",
    type: "positive",
    features: [
      { text: "<strong>Aplikace pomáhá 300+ ženám</strong> - najdou tam spánkové tracky, meditace, personalizované tipy 24/7" },
      { text: "<strong>Klientky jsou nadšené</strong> - mají podporu kdykoliv, vidí pokrok, cítí se méně samy" },
      { text: "<strong>2-3 premium konzultace týdně</strong> - za vyšší cenu, s klientkami které jsou už připravené" },
      { text: "<strong>Má energii i čas</strong> - na běhání, rodinu, koníčky" },
      { text: "<strong>Měsíc na Bali?</strong> - aplikace běží sama, pečuje o klientky" },
      { text: "<strong>Příjem se stává pasivním</strong> - stále roste i díky VIP konzultacím" }
    ],
    quote: "Konečně žiju. Pomáhám víc lidem než kdy předtím - a sama se cítím naplněná."
  }
}
