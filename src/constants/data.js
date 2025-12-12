import { Target, Wrench, MessageSquare, FileText, Rocket, RefreshCw, Package } from 'lucide-react'

export const phases = [
  {
    number: "01",
    title: "Vize a příprava",
    description: "Ujasníte si, co chcete vytvořit a pro koho. Tohle je základ všeho.",
    Icon: Target
  },
  {
    number: "02",
    title: "Technické zázemí",
    description: "Připravíte si nástroje, které budete potřebovat. S tím vám pomůžu.",
    Icon: Wrench
  },
  {
    number: "03",
    title: "Komunikace s AI",
    description: "Naučíte se mluvit s AI tak, aby vás pochopila a udělala, co potřebujete.",
    Icon: MessageSquare
  },
  {
    number: "04",
    title: "Startovací dokumenty",
    description: "Sepíšeme, jak má aplikace vypadat a fungovat.",
    Icon: FileText
  },
  {
    number: "05",
    title: "První kroky",
    description: "A jedeme! První verze aplikace vzniká před vašima očima.",
    Icon: Rocket
  },
  {
    number: "06",
    title: "Workflow a iterace",
    description: "Nastavíte si rutinu pro pokračování. Pro vaši větší jistotu.",
    Icon: RefreshCw
  },
  {
    number: "07",
    title: "Dokončení a spuštění",
    description: "Otestujete, spustíte a vaše nová aplikace jde do světa pomáhat!",
    Icon: Package
  }
]

export const benefits = [
  { value: "4x", label: "víc klientek" },
  { value: "1 den", label: "týdně navíc" },
  { value: "2,8x", label: "vyšší příjem" },
  { value: "2x", label: "víc energie" }
]

export const comparisonData = {
  martina: {
    name: "Martina",
    subtitle: "poskytuje konzultace, ale nemá komplexně podporující produkt",
    type: "negative",
    features: [
      { text: "<strong></strong>7 konzultací denně. Páni, jede jako drak, co sotva dýchá" },
      { text: "<strong>Stejné rady</strong> pořád dokola. A mentální únava brzdí její kreativitu" },
      { text: "<strong>Odmítá nové klientky.</strong> Chce je, ale nemá energetickou kapacitu" },
      { text: "<strong>Večer padne</strong> a na rodinu zbývá jen to, co z ní zbylo" },
      { text: "<strong>Dovolená s tělem na pláži,</strong> ale s hlavou u klientek" },
      { text: "<strong>Když nepracuje, nevydělá.</strong> Cítí se v kleci" }
    ],
    quote: "Jako bych byla na běžícím pásu. Pomáhám lidem mít energii, ale sama jsem vyčerpaná."
  },
  julie: {
    name: "Julie",
    subtitle: "vytvořila aplikaci a poskytuje prémiové konzultace",
    type: "positive",
    features: [
      { text: "<strong>200+ žen má podporu.</strong> Spánkové tracky, meditace, personalizované tipy 24/7" },
      { text: "<strong>Klientky jsou nadšené.</strong> Píšou díky, vidí pokrok, cítí se opečované" },
      { text: "<strong>2-3 premium konzultace týdně</strong> – za vyšší cenu, s klientkami které jsou už připravené" },
      { text: "<strong>Žádné buď a nebo. Má energii i čas</strong> – na běhání, rodinu, koníčky" },
      { text: "<strong>Měsíc na Bali?</strong> – aplikace běží a klientky jsou spokojené" },
      { text: "<strong>Příjem se stává pasivním</strong> – pořád roste i díky VIP konzultacím" }
    ],
    quote: "Konečně můžu pomoct víc lidem, a přitom žiju svůj život. Cítím se naplněná."
  }
}
