'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Input, Button } from '@/components';

export const Form = () => {
  const handleRegister = () => {};

  return (
    <form action="" className="flex flex-col gap-12">
      <header className="flex flex-col gap-1">
        <h1 className="mb-4 text-3xl font-medium text-gray-900">Sign up</h1>
        <p>If you already have an account registered</p>
        <p>
          You can{' '}
          <Link href="#" className="font-bold text-red-600">
            Login here!
          </Link>
        </p>
      </header>

      <fieldset className="flex flex-col gap-5">
        <Input
          label="Email"
          leftAdornment={
            <Image src="/message.png" alt="" width={16} height={16} />
          }
          error="error"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
        />
        <Input
          label="Username"
          leftAdornment={
            <Image src="/user.png" alt="" width={16} height={16} />
          }
          error="error"
          type="text"
          id="username"
          name="username"
          placeholder="Enter your user name"
        />
        <Input
          label="Password"
          leftAdornment={
            <Image src="/padlock.png" alt="" width={16} height={16} />
          }
          rightAdornment={
            <button
              type="button"
              className="appearance-none border-none bg-transparent active:opacity-50"
            >
              <Image src="/invisible.png" alt="" width={16} height={16} />
              <span className="sr-only">Show password</span>
            </button>
          }
          error="error"
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
        />
        <Input
          label="Confirm Password"
          leftAdornment={
            <Image src="/padlock.png" alt="" width={16} height={16} />
          }
          rightAdornment={
            <button
              type="button"
              className="appearance-none border-none bg-transparent active:opacity-50"
            >
              <Image src="/invisible.png" alt="" width={16} height={16} />
              <span className="sr-only">Show password</span>
            </button>
          }
          error="error"
          type="password"
          id="confirm-password"
          name="confirm-password"
          placeholder="Confirm your password"
        />
      </fieldset>
      <Button onClick={handleRegister}>Register</Button>
    </form>
  );
};
