import OrderPageTemplate from '../components/templates/OrderPageTemplate'
import { Crown } from 'lucide-react'

export default function VipVibecodingOrderPage() {
  return (
    <OrderPageTemplate
      packageName="VIBECODING VIP"
      consultationInfo="10x 55 min VIP mentoring"
      price="19 900 Kč"
      capacity="Pro 1 ženu, která chce pochopit, začít a dokončit"
      resultText="Funkční produkt. Rozumíte mu, umíte ho rozvíjet. Garantovaný výsledek. Přímá linka k mentorce. Osobní vztah."
      simpleShopFormId="Jm9Gy"
      pageTitle="Objednávka VIBECODING VIP | Vibecoding"
      badge={
        <div className="relative inline-block mb-4">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
            EXKLUZIVNÍ
          </div>
          <div className="absolute -top-1 -right-1">
            <Crown className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
        </div>
      }
    />
  )
}
