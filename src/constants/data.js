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
    subtitle: "poskytuje konzultace, ale nemá podporující produkt",
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

export const pricingPackages = [
  {
    title: "VIBE",
    availableSpots: 5,
    serviceType: "konzultace",
    price: "2 900 Kč",
    description: "Pro ženy, které chtějí pochopit<br />a rozhodnout se",
    features: [
      "2x 1 hodina",
      "Jak vibecoding funguje a co všechno můžete vytvořit",
      "Které nástroje potřebujete a proč",
      "7 kroků k aplikaci – podrobně vysvětlených",
      "Analýza vašeho konkrétního záměru",
      "Roadmapa: co dělat krok za krokem",
      "Q&A – prostor na vaše otázky"
    ],
    resultTitle: "Výsledek:",
    resultDescription: "Jasná roadmapa, víte přesně co a jak – a jestli je to pro vás.<br />Vyhnete se bloudění.",
    testimonials: [
      {
        quote: '„Za 2 hodiny jsem pochopila víc než za měsíc googlování."',
        author: "Petra, koučka"
      },
    ],
    bonuses: [
      "Osobní roadmapa v PDF"
    ],
    discount: "300 Kč na další 2hod. konzultaci",
    buttonText: "Chci VIBE",
    isPopular: false
  },
  {
    title: "VIBE+CODING",
    availableSpots: 3,
    serviceType: "mentoring",
    price: "9 900 Kč",
    description: "Pro ženy, které chtějí pochopit<br />a rovnou začít",
    features: [
      "<span class='font-semibold'>6x 1 hodina</span>",
      "<span class='font-semibold'>Všechno z VIBE (2h)</span>",
      "<strong>Praktické nastavení:</strong> Společně nainstalujeme a rozběhneme všechny nástroje (1h)",
      "<strong>Zadání projektu:</strong> Sepíšeme, co má vaše aplikace umět (1h)",
      "<strong>První kroky:</strong> Rozjedeme projekt a napíšeme první funkce (1h)",
      "<strong>Další kroky:</strong> Prostor na vaše otázky a řešení konkrétních funkcí (1h)"
    ],
    resultTitle: "Výsledek:",
    resultDescription: "Rozumíte, PLUS máte kus hotovo - nástroje běží, projekt existuje, první kód je napsaný.<br />Ušetříte desítky hodin zkoušení.",
    testimonials: [
      {
        quote: '„Konečně mi někdo vysvětlil, o co go."',
        author: "Martina, terapeutka"
      }
    ],
    bonuses: [
      "Všechny z VIBE",
      "Kompletní dokumentace",
      "6 návodů krok za krokem",
      "Nahrávky",
      "2 týdny e-mail podpora"
    ],
    discount: "600 Kč na další 2hod. konzultaci",
    buttonText: "Chci mentoring",
    badgeText: "OBLÍBENĚJŠÍ",
    isPopular: true
  },
  {
    title: "VIBECODING",
    availableSpots: 1,
    serviceType: "VIP mentoring",
    price: "24 900 Kč",
    description: "Pro ženy, které chtějí pochopit,<br />začít a dokončit",
    features: [
      "<span class='font-semibold'>10x 1 hodina</span>",
      "<span class='font-semibold'>Všechno z VIBE+CODE (6h) +</span>",
      "<strong>Společné co-working sessions (4h)</strong> – Pracujeme spolu v reálném čase.",
      "<strong>Dokud to neběží</strong> – Žádné &bdquo;hodně štěstí&ldquo;. Dotáhneme funkční apku.",
      "<strong>30 dní přímý přístup ke mně (WhatsApp)</strong> – Zaseknete se, napíšete, odpovím do 24 hodin."
    ],
    resultTitle: "Výsledek:",
    resultDescription: "<ul class='list-disc pl-5 space-y-2'><li>Funkční aplikace. Rozumíte jí a umíte ji rozvíjet.</li><li>Přímá linka k mentorce</li><li>Garantovaný výsledek.</li><li>Osobní vztah</li></ul>",
    testimonials: [
      {
        quote: '„Přišla jsem s nápadem, odcházela s rozjetým projektem. Nejlepší investice do podnikání, co jsem kdy udělala."',
        author: "Katka, mentorka"
      }
    ],
    bonuses: [
      "Všechny z VIBE+CODE",
      "Check-in call (30 min) – po 2 týdnech zkontrolujeme pokrok"
    ],
    discount: "1 000 Kč na další 2hod. konzultaci",
    buttonText: "Chci VIP",
    badgeText: "EXKLUZIVNÍ",
    isExclusive: true,
    isPopular: false
  }
]
