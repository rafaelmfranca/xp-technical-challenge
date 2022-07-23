import { LoginForm } from '@components';

export default function Hero() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="hero max-w-[800px]">
        <div className="flex-col md:gap-10 hero-content lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Acesse sua conta!</h1>
            <div className="max-w-[310px] mt-6 mockup-code bg-base-100 border border-base-300 text-base-content">
              <pre data-prefix=">" className="text-primary">
                <code className="text-sm">Contas com acesso:</code>
              </pre>
              <pre data-prefix="1">
                <code className="text-xs">cliente@xp.inc, 12345678 </code>
              </pre>
              <pre data-prefix="2">
                <code className="text-xs">cliente@clear.com, 12345678 </code>
              </pre>
            </div>
          </div>

          <div className="divider divider-horizontal" />

          <div className="flex-shrink-0 w-full max-w-sm border border-base-300 card bg-base-100">
            <div className="card-body">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
