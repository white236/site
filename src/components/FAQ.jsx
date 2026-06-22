import { useState } from 'react'

const faqs = [
  {
    q: "Victor a 18 ans — est-ce sérieux ?",
    a: "Oui. J'ai travaillé en restauration et animé un camping — j'ai géré des clients, des imprévus et des exigences de qualité depuis mes 16 ans. L'âge ne définit pas le sérieux. Mes engagements, si.",
  },
  {
    q: "Je garde mon compte Airbnb ?",
    a: "Toujours. Votre compte reste le vôtre — vous voyez chaque réservation et chaque revenu en temps réel. Je ne gère que l'opérationnel.",
  },
  {
    q: "Et si un voyageur casse quelque chose ?",
    a: "Je signale immédiatement avec photos à l'appui. La garantie dommages Airbnb couvre jusqu'à 3 millions €. Vous êtes prévenus le jour même.",
  },
  {
    q: "Combien je touche vraiment ?",
    a: "80 % des revenus directement sur votre compte. Ma commission de 20 % n'est prélevée qu'une fois le séjour confirmé. Pas de réservation, pas de commission.",
  },
  {
    q: "Je suis engagé sur combien de temps ?",
    a: "Aucun engagement longue durée. On travaille ensemble tant que vous êtes satisfait. Un appel suffit pour commencer — ou pour arrêter.",
  },
  {
    q: "Vous gérez quelles plateformes ?",
    a: "Airbnb principalement, avec une gestion optimisée de l'annonce et des tarifs. D'autres plateformes selon votre logement — on en parle lors du premier appel.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="pt-10 sm:pt-20 pb-0 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-noir">
            Questions fréquentes
          </h2>
        </div>

        {/* Desktop: grille horizontale */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-cream-deeper shadow-card">
              <p className="font-heading font-bold text-noir text-sm mb-2 leading-snug">{faq.q}</p>
              <p className="font-body text-noir/55 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* Mobile: accordéon compact */}
        <div className="sm:hidden border border-cream-deeper rounded-2xl overflow-hidden bg-white divide-y divide-cream-deeper">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full text-left px-4 py-3.5 flex items-center justify-between gap-3"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-heading font-bold text-noir text-sm leading-snug flex-1">{faq.q}</span>
                <svg
                  className="w-4 h-4 text-noir/30 flex-shrink-0 transition-transform duration-300"
                  style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-4 pb-3.5 bg-cream">
                  <p className="font-body text-noir/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Wave transition → CTAFinal (brand-orange #7D8CFF) */}
      <div className="mt-10 sm:mt-16 -mb-px">
        <svg
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-[72px] block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 72V42 C240 6 480 72 720 42 C960 12 1200 68 1440 42 V72Z"
            fill="#7D8CFF"
          />
        </svg>
      </div>
    </section>
  )
}
