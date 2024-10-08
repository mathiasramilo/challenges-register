import Image from 'next/image';
import { Logo, Form } from '@/components';

export default function Home() {
  return (
    <section className="flex min-h-screen w-full overflow-hidden bg-white md:max-h-[85vh] md:w-3/4 md:rounded-lg">
      <aside className="relative hidden flex-[3] md:block">
        <Image
          src="/sign-up.jpg"
          alt=""
          className="h-full w-full object-cover"
          width={1024}
          height={1024}
        />
        <Logo className="absolute left-6 top-6 hidden md:block" />
      </aside>

      <main className="flex w-full flex-col justify-center overflow-y-scroll bg-red-50 p-6 pt-16 md:flex-[2] md:p-16">
        <Logo className="absolute left-6 top-6 md:hidden" />
        <Form />
      </main>
    </section>
  );
}
