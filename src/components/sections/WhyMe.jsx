import { motion } from 'framer-motion'
import { useMemo } from 'react'
import Section from '../layout/Section'
import AnimatedPhotoWithParticles from '../ui/AnimatedPhotoWithParticles'
import { fadeIn, slideUp } from '../../constants/animations'

export default function WhyMeSeo() {
  const credentials = useMemo(() => [
    {
      title: "8+ složitých aplikací",
      description: "Apka pro koučky a jejich klientky, Správa plateb, výuka hry na piano pro začátečníky, prezentační web jako např. tento... To jsou reálné projekty pro reálné lidi."
    },
    {
      title: "100+ modulů",
      description: "Notifikační systém, přihlašovací systém, e-mailingový nástroj, objednávací a platební modul, správa barevných schémat, systém pro online feedback... A mnoho dalšího."
    },
    {
      title: "2 500+ hodin praxe",
      description: "Rok 2025: chyby, pokusy, průlomy. Předám vám je, a vy to zvládnete rychleji. A nebojte, o chyby nepřijdete, uděláte si svoje :)"
    },
    {
      title: "Na začátku byla 0",
      description: "Dneska chápu pasti vibecodingu. Sama jsem do nich šlapala a zjišťovala, kudy vede cesta."
    },
    {
      title: "Učím, co sama dělám",
      description: "Nepřebírám informace, zkouším a ověřuju na vlastní kůži. Učím z toho, co funguje."
    }
  ], [])

  return (
    <Section
      background="dark"
      centered={true}
      showScrollIndicator={true}
      backgroundElement={<AnimatedPhotoWithParticles />}
    >
      <motion.div {...fadeIn}>
        <h2 className="font-display font-bold text-center mb-4 md:mb-fluid-whyme-sm leading-tight">
          Proč zrovna se mnou?
        </h2>

        <p className="text-xl text-center mb-6 md:mb-fluid-whyme-md">
          Pomáhám podnikatelkám, které chtějí zhmotnit svoji vizi – ale nechtějí se učit programovat.
        </p>

        <div className="flex flex-col gap-4 md:gap-fluid-whyme-sm pt-6 md:pt-fluid-whyme-md">
          {credentials.map((item, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-700 last:border-b-0 pb-6 md:pb-fluid-whyme-md"
              {...slideUp}
              transition={{ delay: index * 0.1 }}
            >
              <div className="grid md:grid-cols-2 items-start gap-4 md:gap-fluid-whyme-xs">
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