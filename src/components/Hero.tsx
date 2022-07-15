import { LoginForm } from '@components';

export default function Hero() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="hero max-w-[800px]">
        <div className="flex-col md:gap-10 hero-content lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Acesse sua conta!</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              soluta veniam blanditiis architecto, distinctio ratione excepturi
              dolores officia fuga aliquam at.
            </p>
          </div>

          <div className="divider divider-horizontal" />

          <div className="flex-shrink-0 w-full max-w-sm shadow-md card bg-base-100">
            <div className="card-body">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
