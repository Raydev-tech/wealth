import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"

const integrations = [
  { name: "Stripe", logo: "/stripe.svg" },
  { name: "PayPal", logo: "https://i.pinimg.com/236x/f4/22/30/f42230e621c19fea5815dde7a09ed83c.jpg" },
  { name: "Plaid", logo: "/plaid.svg" },
  { name: "QuickBooks", logo: "https://i.pinimg.com/474x/19/f9/8a/19f98aa7bbe5e2490371dbd913d199e4.jpg" },
  { name: "Xero", logo: "/xero.svg" },
  { name: "Yodlee", logo: "/yodlee.svg" },
]

const pricingPlans = [
  {
    name: "Basic",
    price: "$39",
    description: "For individuals and freelancers",
    features: [
      "Basic financial dashboard",
      "Up to 5 accounts linked",
      "Monthly reports",
      "Email support",
      "Basic analytics",
    ],
  },
  {
    name: "Pro",
    price: "$89",
    description: "For growing businesses",
    features: [
      "Advanced financial dashboard",
      "Unlimited accounts",
      "Real-time reports",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
      "Team collaboration",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom reporting",
      "SLA guarantees",
      "Advanced security features",
      "Custom training",
      "White-label options",
    ],
  },
]

const faqs = [
  {
    question: "What is Acera Money?",
    answer:
      "Acera is a comprehensive financial management platform that helps you track, manage, and optimize your wealth through advanced tools and analytics.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Yes, we use bank-level encryption and security measures to protect your sensitive financial information. Your security is our top priority.",
  },
  {
    question: "Can I connect multiple bank accounts?",
    answer:
      "Yes, you can connect multiple bank accounts, investment portfolios, and other financial accounts to get a complete view of your finances.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We offer flexible pricing plans starting at $39/month. You can choose the plan that best fits your needs and scale as you grow.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel your subscription at any time. We offer a 30-day money-back guarantee for all our plans.",
  },
]

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="pt-24">
      {/* Integrations */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">
            Seamless Integrations for
            <br />
            Effortless Finance Management
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-lg w-32 h-32 flex items-center justify-center">
                <img
                  src={integration.logo || "/placeholder.svg"}
                  alt={integration.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">
            Achieve Financial Freedom in 3<br />
            Simple Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Connect Your Accounts</h3>
              <p className="text-gray-400">Securely link your financial accounts for a complete overview</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Set Your Financial Goals</h3>
              <p className="text-gray-400">Define your objectives and create a personalized plan</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Optimize & Grow Your Wealth</h3>
              <p className="text-gray-400">Get insights and recommendations to maximize your returns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">
            Simple, Transparent
            <br />
            Pricing for Every Stage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-white/5 p-8 rounded-lg">
                <h3 className="text-white text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="text-white text-4xl font-bold mb-6">{plan.price}</div>
                <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 mb-8">
                  Choose {plan.name}
                </button>
                <ul className="space-y-4 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <Check className="h-5 w-5 text-purple-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked
            <br />
            Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 rounded-lg">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-white hover:text-purple-400"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 transform transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && <div className="px-6 pb-4 text-gray-400">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

