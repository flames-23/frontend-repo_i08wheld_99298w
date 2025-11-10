import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Discovery & script design',
    desc: 'Define objectives, voice, call flows, and success criteria. We map intent trees and edge cases.',
  },
  {
    title: 'Agent build & integrations',
    desc: 'We implement LLM prompts, knowledge, CRMs, calendars, and telephony for your stack.',
  },
  {
    title: 'Pilot & optimization',
    desc: 'Run controlled pilots, analyze call logs, and fine-tune prompts and automations.',
  },
  {
    title: 'Scale & monitor',
    desc: 'Roll out to full volume with dashboards, QA reviews, and continuous improvement.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our process</h2>
          <p className="mt-3 text-slate-600">A proven path from idea to production voice agent.</p>
        </div>

        <ol className="mt-12 grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-xl p-6 ring-1 ring-slate-900/10 bg-white">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Step {i + 1}</p>
                  <h3 className="font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
