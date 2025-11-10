import { Phone, Rocket, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Phone,
    title: 'Natural, human-like conversations',
    desc: 'Agents that understand context, remember details, and speak with lifelike intonation to build trust.',
  },
  {
    icon: Rocket,
    title: 'Turnkey deployment',
    desc: 'We handle prompts, integrations, numbers, and monitoring. Go live in days, not months.',
  },
  {
    icon: Shield,
    title: 'Compliance & safety',
    desc: 'Recording consent flows, DNC handling, and guardrails baked in for peace of mind.',
  },
  {
    icon: Sparkles,
    title: 'Your brand, your tone',
    desc: 'Custom voices and scripts that match your brand and goals across outbound and inbound calls.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Built to win more conversations</h2>
          <p className="mt-3 text-slate-600">Everything you need to launch reliable, revenue-driving voice agents.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl p-6 ring-1 ring-slate-900/10 bg-white hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-lg grid place-items-center bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
