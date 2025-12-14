import { motion } from 'framer-motion'
import Section from '../layout/Section'

export default function WhyMeSeo() {
  const credentials = [
    {
      title: "Ani řádek kódu",
      description: "Dneska chápu pasti vibecodingu. Sama jsem do nich šlapala a zjišťovala, kudy vede cesta."
    },
    {
      title: "8 aplikací",
      description: "CoachPro, PaymentsPro, PianoPro... To jsou reálné projekty pro reálné lidi."
    },
    {
      title: "2 500+ hodin praxe",
      description: "Chyby, pokusy, průlomy. Předám vám je, a vy to zvládnete rychleji. A nebojte, chyby si uděláte i svoje."
    },
    {
      title: "Učím, co sama dělám",
      description: "Nepřebírám informace, zkouším a ověřuju na vlastní kůži. Učím z toho, co funguje."
    }
  ]

  const backgroundImage = (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-y-0 right-0 w-1/2">
        <img
          src="/lenka.webp"
          alt=""
          className="h-full w-full object-cover object-[center_-120px] opacity-15"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#f2f2f2] via-[#f2f2f2]/80 to-transparent dark:from-[#05050f] dark:via-[#05050f]/80 dark:to-transparent" />
    </div>
  )

  return (
    <Section 
      background="dark" 
      className="min-h-screen flex items-center justify-center !pt-4 !pb-8 md:!pt-4 md:!pb-8 lg:!pt-8 lg:!pb-16" 
      showScrollIndicator={true}
      backgroundElement={backgroundImage}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display font-bold mb-16 text-center" style={{ lineHeight: '1.3' }}>
          Proč zrovna se mnou?
        </h2>

        <div className="space-y-8">
          {credentials.map((item, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-700 pb-8 last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <h3 className="font-display font-bold">
                  {item.title}
                </h3>
                <p>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}