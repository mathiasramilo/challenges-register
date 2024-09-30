'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input, Button, Spinner, Success } from '@/components';

interface FormFields {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export const UserSchema = z
  .object({
    email: z
      .string()
      .min(1, 'Email is required.')
      .email('Please enter a valid email address.')
      .regex(
        /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|lightit\.io)$/,
        'Email must be from one of the allowed domains: gmail.com, hotmail.com, or lightit.io.',
      )
      .trim(),
    username: z
      .string({ required_error: 'Username is required.' })
      .min(1, 'Username is required.')
      .toLowerCase()
      .regex(
        /^[a-z]+$/,
        'Username can only contain lowercase letters, no spaces, numbers, or special characters.',
      )
      .min(3, 'Username must be at least 3 characters long.')
      .max(32, 'Username must be 32 characters or less.')
      .trim(),
    password: z
      .string({ required_error: 'Password is required.' })
      .min(1, 'Password is required.')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one special character.',
      )
      .min(8, 'Password must be at least 8 characters long.')
      .max(64, 'Password must be 64 characters or less.'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match.',
  });

export const Form = () => {
  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
  } = useForm<FormFields>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('Form submitted successfully');
        console.log(data);
      }, 2000),
    );
  };

  if (isSubmitting) {
    return (
      <div className="flex w-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (isSubmitSuccessful) {
    return <Success />;
  }

  return (
    <form className="flex flex-col gap-12" onSubmit={handleSubmit(onSubmit)}>
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
          fieldName="email"
          register={register}
          label="Email"
          leftAdornment={
            <Image src="/message.png" alt="" width={16} height={16} />
          }
          error={errors.email?.message}
          type="email"
          id="email"
          placeholder="Enter your email address"
        />
        <Input
          fieldName="username"
          register={register}
          label="Username"
          leftAdornment={
            <Image src="/user.png" alt="" width={16} height={16} />
          }
          error={errors.username?.message}
          type="text"
          id="username"
          placeholder="Enter your user name"
        />
        <Input
          fieldName="password"
          register={register}
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
          error={errors.password?.message}
          type="password"
          id="password"
          placeholder="Enter your password"
        />
        <Input
          fieldName="confirmPassword"
          register={register}
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
          error={errors.confirmPassword?.message}
          type="password"
          id="confirm-password"
          placeholder="Confirm your password"
        />
      </fieldset>
      <Button disabled={isSubmitting}>Register</Button>
    </form>
  );
};
