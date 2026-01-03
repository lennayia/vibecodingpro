import { Target, Wrench, MessageSquare, FileText, Rocket, RefreshCw, Package, BookOpen, Lightbulb, Route, Tag } from 'lucide-react'

export const phases = [
  {
    number: "01",
    title: "Vize a příprava",
    yourAction: "Ujasníte si, co chcete vytvořit a pro koho.",
    mySupport: "Formulujeme jasnou vizi a identifikujeme vaši cílovou skupinu.",
    supportLabel: "Společně",
    Icon: Target
  },
  {
    number: "02",
    title: "Uživatelská cesta",
    yourAction: "Popíšete, jak si představujete ideální cestu uživatelky.",
    mySupport: "Pomůžu najít místa, kde by se mohla ztratit nebo vzdát.",
    Icon: Target
  },
  {
    number: "03",
    title: "Technické zázemí",
    yourAction: "Připravíte si nástroje a prostředí pro práci.",
    mySupport: "S tím vám pomůžu.",
    Icon: Wrench
  },
  {
    number: "04",
    title: "Komunikace s AI",
    yourAction: "Naučíte se mluvit s AI tak, aby vás pochopila.",
    mySupport: "Ukážu vám osvědčené techniky a vzory, jak z ní dostat to, co potřebujete.",
    Icon: MessageSquare
  },
  {
    number: "05",
    title: "Startovací dokumenty",
    yourAction: "Rozmyslíte, jak má vaše digi věc vypadat a fungovat.",
    mySupport: "Dám vám strukturu a pomůžu s formulacemi.",
    Icon: FileText
  },
  {
    number: "06",
    title: "Struktura a funkce",
    yourAction: "Rozhodnete, které funkce jsou nutné a které počkají.",
    mySupport: "Pomůžu rozlišit 'must have' od 'nice to have'.",
    Icon: FileText
  },
  {
    number: "07",
    title: "Design a vzhled",
    yourAction: "Vyberete vizuální styl, který sedí vaší značce.",
    mySupport: "Ukážu možnosti a pomůžu s rozhodnutím.",
    Icon: FileText
  },
  {
    number: "08",
    title: "První kroky",
    yourAction: "A rozjíždíme to! První verze vzniká před vašima očima.",
    mySupport: "Jsem při tom s vámi, řeším překážky a hlídám směr.",
    Icon: Rocket
  },
  {
    number: "09",
    title: "Obsah a texty",
    yourAction: "Připravíte texty, které uživatelky uvidí v aplikaci.",
    mySupport: "Poradím, jak psát jasně a stručně.",
    Icon: Rocket
  },
  {
    number: "10",
    title: "Workflow a iterace",
    yourAction: "Nastavíte si rutinu a proces pro pokračování.",
    mySupport: "Dám vám jistotu pro samostatnou práci.",
    Icon: RefreshCw
  },
  {
    number: "11",
    title: "Cenová strategie",
    yourAction: "Rozhodnete, jak chcete na nástroji vydělávat.",
    mySupport: "Projdeme možnosti a vybereme model pro vaše podnikání.",
    supportLabel: "Společně",
    Icon: RefreshCw
  },
  {
    number: "12",
    title: "Dokončení a spuštění",
    yourAction: "Otestujete a pustíte svoje dílo do světa.",
    mySupport: "Pomůžu s finálními úpravami.",
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
  heading: "Dobré nástroje posouvají",
  subheading: "Dvě ženy, jeden obor, dvě cesty.",
  intro: {
    line1: "Martina a Julie: obě učí klientky zdravě spát.",
    line2: "Stejné znalosti, stejná vášeň pomáhat.",
    line3: "Ale jejich podnikání funguje naprosto odlišně."
  },
  martina: {
    name: "Koučka Martina",
    subtitle: "konzultace bez podporujících nástrojů",
    type: "negative",
    features: [
      { text: "7 konzultací denně, jede jako drak, co sotva dýchá." },
      { text: "Stejné rady dokola, s pocitem, že se točí v kruhu." },
      { text: "Říká NE ženám, kterým by chtěla pomoct." },
      { text: "Večer padne – a na rodinu zbývá to, co zbylo z ní." }
    ],
    quote: "Pomáhám lidem s energií a sama jsem vyčerpaná."
  },
  julie: {
    name: "Lektorka Julie",
    subtitle: "vlastní nástroje + prémiové konzultace",
    type: "positive",
    features: [
      { text: "200+ žen má její podporu – spánkové tracky, meditace, tipy. Kdykoliv." },
      { text: "Klientky píšou díky. Vidí pokrok, cítí se opečované." },
      { text: "2-3 konzultace týdně s těmi, které si vybere." },
      { text: "Měsíc na Bali? Aplikace běží, klientky jsou spokojené, příjem roste." }
    ],
    quote: "Konečně můžu pomoct víc lidem – a přitom žiju svůj život."
  }
}

export const pricingPackages = [
  {
    title: "VIBE",
    availableSpots: 5,
    serviceType: "3x 55 min konzultace",
    price: "3 900 Kč",
    description: "Pro 5 žen, které chtějí pochopit<br />a rozhodnout se",
    resultTitle: "Výsledek:",
    resultDescription: "Jasná roadmapa, víte přesně, co a jak – a jestli je to pro vás.<br />Vyhnete se bloudění.",
    testimonials: [
      {
        quote: '„Za 3 hodiny jsem pochopila víc než za měsíc googlování."',
        author: ""
      },
    ],
    bonuses: [
      "Osobní roadmapa v PDF"
    ],
    discount: "300 Kč na další 2h spolupráci",
    buttonText: "Chci VIBE",
    buttonLink: "/vibe",
    isPopular: false
  },
  {
    title: "VIBE+CODING",
    availableSpots: 3,
    serviceType: "6x 55 min mentoring",
    price: "8 900 Kč",
    description: "Pro 3 ženy, které chtějí pochopit<br />a rovnou začít",
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
    buttonLink: "/vibecoding",
    badgeText: "OBLÍBENĚJŠÍ",
    isPopular: true
  },
  {
    title: "VIBECODING VIP",
    availableSpots: 1,
    serviceType: "10x 55 min VIP mentoring",
    price: "19 900 Kč",
    description: "Pro 1 ženu, která chce pochopit,<br />začít a dokončit",
    resultTitle: "Výsledek:",
    resultDescription: "Funkční produkt. Rozumíte mu, umíte ho rozvíjet. Garantovaný výsledek. Přímá linka k mentorce. Osobní vztah.",
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
    discount: "900 Kč na další 2h spolupráci",
    buttonText: "Chci VIP",
    buttonLink: "/vipvibecoding",
    badgeText: "EXKLUZIVNÍ",
    isExclusive: true,
    isPopular: false
  }
]

export const whatIsVibecodingContent = {
  heading: "Vibecoding",
  subheading: "Co to je a pro koho",
  definition: "Vibecoding = dovednost popsat vizi, aby ji AI správně pochopila.",
  summary: "Vy máte vizi, AI to odmaká.",
  intro: "Využijete, pokud jste",
  targetGroups: [
    "Koučky a mentorky",
    "Terapeutky a poradkyně",
    "Lektorky a učitelky",
    "Online podnikatelky",
    "Tvůrkyně kurzů a programů"
  ],
  commonGoals: {
    heading: "Všechny chceme totéž",
    goals: [
      "Pomoct víc lidem",
      "Pracovat míň hodin"
    ]
  }
}

export const portfolioHolographicContent = {
  heading: "Tohle postavila žena, která neumí programovat.",
  subheading: "Praktické aplikace, moduly, weby. Ani řádek kódu – jen vize, strategie a AI.",
  dragInstruction: "← Potáhněte do strany →",
  projects: [
    { name: "CoachPro", image: "/coachpro.webp" },
    { name: "ContentPro", image: "/content-pro.webp" },
    { name: "DigiPro", image: "/digipro.webp" },
    { name: "Koučovací karty", image: "/koucovaci-karty.webp" },
    { name: "LifePro", image: "/liffepro.webp" },
    { name: "PaymentsPro", image: "/paymentspro.webp" },
    { name: "PianoPro", image: "/pianopro.webp" },
    { name: "StudyPro", image: "/studypro.webp" }
  ],
  closingText: [
    "Od jednoduchých nástrojů po komplexní aplikace, tempo určujeme sami.",
    "Začněte třeba jednodušší webovkou.",
    "Zajímá vás, jak?"
  ]
}

export const faqCategories = [
  {
    title: "O vibecodingu a AI",
    questions: [
      {
        question: "Vibecoding pro koučky a podnikatelky – co to je a jak mi pomůže vytvořit aplikaci?",
        answer: "Vibecoding je metoda tvorby aplikací pro ženy, které nemají technické vzdělání. Vy popíšete, co vaše klientky potřebují, a AI to za vás naprogramuje. Nemusíte rozumět kódu – stačí umět vysvětlit svou vizi. Jako když vysvětlujete klientce, co má dělat."
      },
      {
        question: "Můžu si jako koučka vytvořit vlastní aplikaci s AI, i když se bojím všeho technického?",
        answer: "Ano. Vibecoding je přesně pro ženy, které se technologií bojí, ale chtějí být nezávislé. Pokud umíte popsat, co vaše klientky potřebují, AI to dokáže přeložit do funkční aplikace. Nebudete sama – já vás tím provedu krok za krokem."
      },
      {
        question: "Proč by koučka měla používat vibecoding místo Wix, Canvy nebo jiných no-code nástrojů?",
        answer: "Wix a Canva jsou fajn na začátek, ale rychle narazíte na limity. S vibecodingem vytvoříte přesně to, co vaše klientky potřebují – bez omezení šablon. A naučíte se to, takže nejste závislá na platformě, která vám zítra zdraží."
      },
      {
        question: "Jaké aplikace může vytvořit koučka nebo online podnikatelka pomocí vibecodingu?",
        answer: "Rezervační systémy pro klientky, online kvízy a diagnostiky, kalkulačky (třeba na cenu služby), členské sekce s materiály, automatický onboarding nových klientek, progress trackery – prostě cokoliv, co vám ušetří čas a pomůže klientkám."
      },
      {
        question: "Musím se naučit programovat, nebo to zvládnu jen s AI jako běžná podnikatelka?",
        answer: "Programovat se učit nemusíte. Naučíte se vibecoding – mluvit s AI tak, aby vám rozuměla. Je to o komunikaci, ne o kódování. Konzultace vést umíte, proto zvládnete i tohle."
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
        question: "Co když zjistím, že mi spolupráce nevyhovuje?",
        answer: "Máte garanci. Pokud vám spolupráce nesedne, vrátím vám peníze."
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
        answer: "Mezi našimi sezeními? Záleží na velikosti projektu, který chcete vyvinout. Malý projekt – málo času. Velký projekt – hodně času. Čím víc dáte, tím rychleji to bude."
      },
      {
        question: "Za jak dlouho budu mít něco, co můžu ukázat klientkám?",
        answer: "Záleží na složitosti. Jednoduchou webovou stránku? Za pár desítek minut. Základní verzi aplikace? Za cca 2–4 týdny, pokud budete pracovat. Složitější za cca 4 měsíce, podle času, který do toho investujete."
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
    title: "Strach z vlastních schopností",
    questions: [
      {
        question: "Co když jsem na tohle prostě 'hloupá'?",
        answer: "Nejste. Pokud umíte napsat e-mail, zvládnete i tohle. Vibecoding není programování – je to komunikace s AI."
      },
      {
        question: "Nikdy jsem nic technického nedotáhla. Proč by to teď mělo být jinak?",
        answer: "Protože teď nebudete sama. A protože AI dělá těžkou práci za vás."
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
      },
      {
        question: "Můžu jako koučka vytvořit mobilní aplikaci pro Android a iOS, nebo jen web?",
        answer: "Ano, s vibecodingem vytvoříte i mobilní aplikace. Obvykle začneme webovou verzí, protože ta je rychlejší a levnější na testování s klientkami. Pak ji můžeme rozšířit na mobily, pokud to vaše klientky budou potřebovat."
      },
      {
        question: "Kolik reálně stojí koučce nebo podnikatelce vytvořit si vlastní digitální nástroj s AI?",
        answer: "Spolupráce se mnou stojí od 3 900 Kč + AI nástroje cca 500–2 500 Kč/měsíc. Neplatíte vývojáře za 50 000 Kč, žádné předplatné platforem za velké tisíce ročně. Hlavně – naučíte se to. Další nástroje už vytvoříte sama, s AI, která vám sedne a postačí."
      },
      {
        question: "Budu pak závislá na nějaké platformě, nebo si aplikaci opravdu vlastním?",
        answer: "Aplikace je vaše a můžete s ní dělat, co chcete – hostovat kdekoli, upravovat, prodávat. Nejste zavřená v žádné platformě, která vám zítra zdraží nebo změní podmínky. Máte kontrolu."
      }
    ]
  }
]

// Navigation anchor links for SlideOutMenu
export const anchorLinks = [
  { id: 'what-you-can-create', label: 'Co vytvoříte', icon: Lightbulb },
  { id: 'story', label: 'Příběh', icon: BookOpen },
  { id: 'process', label: 'Proces', icon: Route },
  { id: 'pricing-section', label: 'Ceník', icon: Tag }
]
