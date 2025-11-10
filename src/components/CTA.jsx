export default function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Ready to launch your AI calling agent?</h2>
        <p className="mt-3 text-slate-600">Tell us about your goals and we’ll send a custom proposal within 24 hours.</p>
        <form className="mt-8 grid gap-4 text-left">
          <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-md ring-1 ring-slate-900/10 focus:ring-2 focus:ring-slate-900 outline-none" required />
          <input type="email" placeholder="Work email" className="w-full px-4 py-3 rounded-md ring-1 ring-slate-900/10 focus:ring-2 focus:ring-slate-900 outline-none" required />
          <input type="text" placeholder="Company" className="w-full px-4 py-3 rounded-md ring-1 ring-slate-900/10 focus:ring-2 focus:ring-slate-900 outline-none" />
          <textarea placeholder="What problem are you trying to solve?" className="w-full px-4 py-3 rounded-md ring-1 ring-slate-900/10 focus:ring-2 focus:ring-slate-900 outline-none min-h-[120px]" />
          <button type="submit" className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-colors">
            Get my proposal
          </button>
        </form>
        <p className="mt-3 text-xs text-slate-500">By submitting, you agree to receive emails about this inquiry.</p>
      </div>
    </section>
  );
}
