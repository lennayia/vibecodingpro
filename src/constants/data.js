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
    description: 'Sepíšeme, jak má ta „vaše digi věc" vypadat a fungovat.',
    Icon: FileText
  },
  {
    number: "05",
    title: "První kroky",
    description: "A jedeme! První verze vzniká před vašima očima.",
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
    description: "Otestujete, spustíte a vaše dílo jde do světa pomáhat!",
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
    name: "koučka Martina",
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
    name: "lektorka Julie",
    subtitle: "vytvořila aplikaci a poskytuje prémiové konzultace",
    type: "positive",
    features: [
      { text: "<strong>200+ žen má podporu.</strong> Spánkové tracky, meditace, personalizované tipy 24/7" },
      { text: "<strong>Klientky jsou nadšené.</strong> Píšou díky, vidí pokrok, cítí se opečované" },
      { text: "<strong>2-3 premium konzultace týdně</strong> – za vyšší cenu a  s klientkami, které jsou už připravené" },
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
      "Pochopíte, jak vibecoding funguje",
      "Zjistíte, jestli je to pro vás",
      "Uvidíte, co všechno můžete vytvořit",
      "Rozebereme konkrétní záměr",
      "Dostanete jasný plán, co dělat dá",
      "Prostor na vaše otázky"
    ],
    resultTitle: "Výsledek:",
    resultDescription: "Jasná roadmapa, víte přesně co a jak – a jestli je to pro vás.<br />Vyhnete se bloudění.",
    testimonials: [
      {
        quote: '„Za 2 hodiny jsem pochopila víc než za měsíc googlování."',
        author: ""
      },
    ],
    bonuses: [
      "Osobní roadmapa v PDF"
    ],
    discount: "300 Kč na další 2h spolupráci",
    buttonText: "Chci VIBE",
    buttonLink: "https://online-byznys.cz/vibecoding-objednavka-vibe/",
    isPopular: false
  },
  {
    title: "VIBE+CODING",
    availableSpots: 3,
    serviceType: "mentoring",
    price: "8 900 Kč",
    description: "Pro ženy, které chtějí pochopit<br />a rovnou začít",
    features: [
      "<span class='font-semibold'>6x 1 hodina</span>",
      "<span class='font-semibold'>Všechno z VIBE (2h)</span>",
      "Nastavíme externí nástroje (1h)",
      "Vytvoříme základy vašeho produktu (1h)",
      "Napíšeme první funkce (1h)",
      "Vyřešíme, co vás brzdí (1h)"
    ],
    resultTitle: "Výsledek:",
    resultDescription: "Rozumíte, PLUS máte kus hotovo - nástroje běží, projekt existuje, první kód je napsaný.<br />Ušetříte desítky hodin zkoušení.",
    testimonials: [
      {
        quote: '„Konečně mi někdo vysvětlil, o co go."',
        author: ""
      }
    ],
    bonuses: [
      "Všechny z VIBE",
      "Kompletní dokumentace",
      "6 návodů krok za krokem",
      "Nahrávky",
      "2 týdny e-mail podpora"
    ],
    discount: "600 Kč na další 2h spolupráci",
    buttonText: "Chci mentoring",
    buttonLink: "https://online-byznys.cz/vibecoding-objednavka-vibecoding/",
    badgeText: "OBLÍBENĚJŠÍ",
    isPopular: true
  },
  {
    title: "VIBECODING",
    availableSpots: 1,
    serviceType: "VIP mentoring",
    price: "19 900 Kč",
    description: "Pro ženy, které chtějí pochopit,<br />začít a dokončit",
    features: [
      "<span class='font-semibold'>10x 1 hodina</span>",
      "<span class='font-semibold'>Všechno z VIBE+CODING (6h) +</span>",
      "Co-working sessions (4h)",
      "Dotáhneme na produkční verzi",
      "30 dní přístup ke mně (WhatsApp)"
    ],
    resultTitle: "Výsledek:",
    resultDescription: "<ul class='list-disc pl-5 space-y-2'><li>Funkční produkt. Rozumíte mu a umíte ho rozvíjet.</li><li>Přímá linka k mentorce</li><li>Garantovaný výsledek.</li><li>Osobní vztah</li></ul>",
    testimonials: [
      {
        quote: '„Přišla jsem s nápadem, odcházela s rozjetým projektem. Nejlepší investice do podnikání, co jsem kdy udělala."',
        author: ""
      }
    ],
    bonuses: [
      "Všechny z VIBE+CODING",
      "Check-in call (30 min) po 2 týdnech"
    ],
    discount: "1 000 Kč na další 2h spolupráci",
    buttonText: "Chci VIP",
    buttonLink: "https://online-byznys.cz/vibecoding-objednavka-vibecoding-vip/",
    badgeText: "EXKLUZIVNÍ",
    isExclusive: true,
    isPopular: false
  }
]

export const faqCategories = [
  {
    title: "Strach z vlastních schopností",
    questions: [
      {
        question: "Co když jsem na to prostě moc blbá?",
        answer: "Nejste. Pokud umíte napsat e-mail, zvládnete i tohle. Vibecoding není programování – je to komunikace s AI."
      },
      {
        question: "Nikdy jsem nic technického nedotáhla. Proč by to teď mělo být jinak?",
        answer: "Protože teď nebudete sama. A protože AI dělá těžkou práci za vás."
      }
    ]
  },
  {
    title: "Strach z nejistoty",
    questions: [
      {
        question: "Co když ještě nevím, jaký nástroj chci vytvořit?",
        answer: "To je v pohodě. První hodinu strávíme právě tímhle – vyjasníme to společně, odejdete s vizí."
      },
      {
        question: "Co když zjistím, že můj nápad je blbost?",
        answer: "Lepší to vědět za 2 hodiny se mnou než za 3 měsíce práce. I to je výsledek."
      },
      {
        question: "Co když zjistím, že to není pro mě?",
        answer: "Máte garanci. Pokud vám spolupráce nedá jasno, vrátím vám peníze."
      }
    ]
  },
  {
    title: "Strach z peněz",
    questions: [
      {
        question: "Kolik mě to bude stát celkově? Nejsou tam skryté náklady?",
        answer: "Nástroje jsou zdarma i placené. Je dobré zainvestovat do rozumné verze AI - od 500 Kč do 2 500 Kč. Řeknu vám, co budete po dobu tvorby potřebovat."
      },
      {
        question: "Co když mi to nevydělá?",
        answer: "Každý nástroj je jen nástroj. Jestli vydělá, záleží na vašem byznysu. Já vám pomůžu postavit nástroj – byznys model je na vás."
      }
    ]
  },
  {
    title: "Strach z času",
    questions: [
      {
        question: "Mám malé děti / rozjetý byznys. Kolik času tomu musím reálně dávat?",
        answer: "Mezi našimi sezeními? Záleží na velikosti projektu, který chceme vyvinout. Malý projekt – málo času. Velký projekt – hodně času. Čím víc dáte, tím rychleji to bude."
      },
      {
        question: "Za jak dlouho budu mít něco, co můžu ukázat klientkám?",
        answer: "Záleží na složitosti. Základní verzi? Za cca 2–4 týdny, pokud budete pracovat. Složitější za cca 4 měsíce, podle času, který do toho investujete."
      },
      {
        question: "Za jak dlouho budu mít hotovou aplikaci?",
        answer: "Jednoduchá aplikace může běžet za 2–3 měsíce. Složitější za 6 měsíců."
      }
    ]
  },
  {
    title: "Strach z budoucnosti",
    questions: [
      {
        question: "Co když se něco rozbije a nikdo na mě nebude mít čas?",
        answer: "Naučím vás, jak řešit základní problémy. A na WhatsApp jsem vždycky."
      },
      {
        question: "Budu na někom závislá, nebo to zvládnu sama?",
        answer: "Cíl je vaše samostatnost. Já jsem průvodce, ne berlička."
      },
      {
        question: "Můžu aplikaci pak rozvíjet sama?",
        answer: "Přesně to je cíl. Naučíte se vibecoding a pofrčíte."
      }
    ]
  },
  {
    title: "Praktické",
    questions: [
      {
        question: "Potřebuju drahý počítač?",
        answer: "Ne. Stačí normální notebook, který funguje na běžné věci. Mac nebo Windows, je to jedno."
      },
      {
        question: "Můžu to dělat odkudkoli?",
        answer: "Ano. Potřebujete jen internet, ale pokud možno stabilní."
      },
      {
        question: "Jak probíhá spolupráce?",
        answer: "Online, přes video hovory. Pracujeme společně, sdílíme obrazovku, já vás vedu krok za krokem tak, jak potřebujete."
      }
    ]
  }
]
