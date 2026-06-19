import { useState, useRef } from 'react'
import { useRevealChildren } from '../hooks/useIntersection'

const typeOptions = ['Appartement', 'Maison', 'Villa', 'Studio', 'Mas provençal', 'Autre']

export default function ContactForm() {
  const containerRef = useRef(null)
  useRevealChildren(containerRef)

  const [form, setForm] = useState({
    nom: '',
    telephone: '',
    email: '',
    ville: '',
    type: '',
    couchages: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, connect to a backend or form service (e.g. Formspree, Netlify Forms)
    console.log('Form submitted:', form)
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-cream" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left: info */}
          <div className="reveal">
            <span className="inline-block bg-brand-orange text-white font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-5 tracking-wide">
              Estimation gratuite
            </span>
            <h2 className="section-title mb-6 text-balance">
              Parlons de votre logement
            </h2>
            <p className="font-body text-lg text-noir/55 leading-relaxed mb-8">
              Remplissez ce formulaire et on vous recontacte rapidement pour une estimation personnalisée du potentiel de votre bien.
            </p>

            <div className="space-y-4">
              {[
                { icon: '📞', label: 'Réponse rapide', desc: 'On vous rappelle sous 24h ouvrées' },
                { icon: '🎯', label: 'Estimation personnalisée', desc: 'Basée sur votre logement et le marché local' },
                { icon: '🔓', label: 'Sans engagement', desc: 'Aucun contrat à signer pour obtenir votre estimation' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-noir text-sm">{item.label}</p>
                    <p className="text-noir/50 font-body text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-noir rounded-3xl p-6 reveal">
              <p className="text-white/60 font-body text-sm mb-1">Préférez WhatsApp ?</p>
              <a
                href="https://wa.me/33600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-white font-heading font-bold text-base hover:text-green-400 transition-colors"
              >
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contacter directement
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal reveal-delay-2">
            {sent ? (
              <div className="bg-white rounded-4xl p-10 shadow-card text-center border border-cream-deeper">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-heading font-black text-noir text-2xl mb-3">Message envoyé !</h3>
                <p className="text-noir/55 font-body text-base">
                  On vous recontacte sous 24h pour discuter du potentiel de votre logement.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-brand-orange font-heading font-bold text-sm hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-4xl p-7 sm:p-9 shadow-card border border-cream-deeper space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-heading font-bold text-noir text-sm mb-1.5">
                      Nom <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={form.nom}
                      onChange={handleChange}
                      required
                      placeholder="Jean Dupont"
                      className="w-full bg-cream border border-cream-deeper rounded-2xl px-4 py-3 font-body text-sm text-noir placeholder-noir/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-heading font-bold text-noir text-sm mb-1.5">
                      Téléphone <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={form.telephone}
                      onChange={handleChange}
                      required
                      placeholder="06 00 00 00 00"
                      className="w-full bg-cream border border-cream-deeper rounded-2xl px-4 py-3 font-body text-sm text-noir placeholder-noir/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-heading font-bold text-noir text-sm mb-1.5">
                    Email <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jean@exemple.fr"
                    className="w-full bg-cream border border-cream-deeper rounded-2xl px-4 py-3 font-body text-sm text-noir placeholder-noir/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all"
                  />
                </div>

                <div>
                  <label className="block font-heading font-bold text-noir text-sm mb-1.5">
                    Ville du logement <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="text"
                    name="ville"
                    value={form.ville}
                    onChange={handleChange}
                    required
                    placeholder="Bédoin, Malaucène, Carpentras..."
                    className="w-full bg-cream border border-cream-deeper rounded-2xl px-4 py-3 font-body text-sm text-noir placeholder-noir/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-heading font-bold text-noir text-sm mb-1.5">Type de bien</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full bg-cream border border-cream-deeper rounded-2xl px-4 py-3 font-body text-sm text-noir focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Sélectionner...</option>
                      {typeOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-heading font-bold text-noir text-sm mb-1.5">Nombre de couchages</label>
                    <input
                      type="number"
                      name="couchages"
                      value={form.couchages}
                      onChange={handleChange}
                      min="1"
                      max="20"
                      placeholder="Ex : 4"
                      className="w-full bg-cream border border-cream-deeper rounded-2xl px-4 py-3 font-body text-sm text-noir placeholder-noir/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-heading font-bold text-noir text-sm mb-1.5">Message (optionnel)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Décrivez brièvement votre logement, votre situation actuelle, vos questions..."
                    className="w-full bg-cream border border-cream-deeper rounded-2xl px-4 py-3 font-body text-sm text-noir placeholder-noir/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-orange justify-center py-4 text-base shadow-orange"
                >
                  Demander mon estimation gratuite
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <p className="text-center text-noir/35 font-body text-xs">
                  Sans engagement · Vos données sont confidentielles
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
