import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center min-h-[80vh]">
            <div className="py-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur text-xs font-medium text-slate-700 ring-1 ring-slate-900/10">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400" />
                AI Voice Calling Agency
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                Close more deals with 24/7 AI voice agents
              </h1>
              <p className="mt-5 text-slate-700 text-base sm:text-lg max-w-xl">
                We build and run custom AI calling agents that book appointments, qualify leads, and handle customer calls at scale — powered by cutting-edge voice AI.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-colors">
                  Get a proposal
                </a>
                <a href="#work" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/70 backdrop-blur ring-1 ring-slate-900/10 hover:bg-white">
                  Hear sample calls
                </a>
              </div>
            </div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90" />
    </section>
  );
}
