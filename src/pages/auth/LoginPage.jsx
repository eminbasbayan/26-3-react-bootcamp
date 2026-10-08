import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required('Kullanıcı adı zorunludur!'),
  password: yup
    .string()
    .min(6, 'Parola en az 6 karakterli olmalıdır!')
    .required('Parola zorunludur!'),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <main className="min-h-screen bg-[#f5f6fa] text-slate-900">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-10">
        <section className="relative hidden min-h-[650px] overflow-hidden rounded-[2rem] bg-slate-950 px-10 py-12 text-white shadow-2xl shadow-indigo-950/15 lg:flex lg:flex-col lg:justify-between xl:px-14 xl:py-14">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-[size:28px_28px]" />
          </div>

          <div className="relative flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-lg font-black text-indigo-700 shadow-lg shadow-black/10">
              R
            </div>
            <span className="text-lg font-semibold tracking-tight">React Bootcamp</span>
          </div>

          <div className="relative max-w-lg py-12">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-medium tracking-wide text-indigo-100">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              ÖĞRENMEYE DEVAM ET
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight xl:text-5xl">
              Fikirlerini gerçeğe dönüştürmeye devam et.
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-300">
              Hesabına giriş yap ve eğitim yolculuğunda kaldığın yerden devam et.
            </p>
          </div>

          <p className="relative text-sm text-slate-400">
            Her gün biraz daha ileri.
          </p>
        </section>

        <section className="mx-auto w-full max-w-md py-8 lg:py-12">
          <div className="mb-10 flex items-center gap-3 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-base font-black text-white shadow-lg shadow-indigo-600/20">
              R
            </div>
            <span className="font-semibold tracking-tight text-slate-900">React Bootcamp</span>
          </div>

          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold text-indigo-600">Tekrar hoş geldin</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Giriş yap
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Devam etmek için kullanıcı adı ve parolanı gir.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label htmlFor="username" className="mb-2 block text-sm font-medium text-slate-700">
                Kullanıcı adı
              </label>
              <div className="relative">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                >
                  <path d="M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <input
                  id="username"
                  type="text"
                  autoComplete="username"
                  placeholder="Kullanıcı adını gir"
                  aria-invalid={Boolean(errors.username)}
                  aria-describedby={errors.username ? 'username-error' : undefined}
                  {...register('username')}
                  className={`w-full rounded-xl border bg-white py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 ${errors.username ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'}`}
                />
              </div>
              {errors.username && (
                <p id="username-error" role="alert" className="mt-2 text-xs font-medium text-red-600">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                Parola
              </label>
              <div className="relative">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                >
                  <rect x="4" y="10" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M8 10V7a4 4 0 1 1 8 0v3m-4 5v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Parolanı gir"
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                  {...register('password')}
                  className={`w-full rounded-xl border bg-white py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 ${errors.password ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'}`}
                />
              </div>
              {errors.password && (
                <p id="password-error" role="alert" className="mt-2 text-xs font-medium text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 active:translate-y-px"
            >
              Giriş yap
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>

          <p className="mt-8 text-center text-xs leading-5 text-slate-400">
            Güvenli erişim · React Bootcamp
          </p>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
