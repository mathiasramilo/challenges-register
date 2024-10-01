'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { userSchema } from '@/lib/schemas';
import {
  Input,
  Button,
  Spinner,
  Success,
  EmailIcon,
  UserIcon,
  LockIcon,
  EyeClosedIcon,
} from '@/components';

type UserFormValues = z.infer<typeof userSchema>;

export const Form = () => {
  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
  } = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<UserFormValues> = (data) => {
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
        <Spinner size="lg" color="red" />
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
          leftAdornment={<EmailIcon width={16} height={16} />}
          error={errors.email?.message}
          type="email"
          id="email"
          placeholder="Enter your email address"
        />
        <Input
          fieldName="username"
          register={register}
          label="Username"
          leftAdornment={<UserIcon width={16} height={16} />}
          error={errors.username?.message}
          type="text"
          id="username"
          placeholder="Enter your user name"
        />
        <Input
          fieldName="password"
          register={register}
          label="Password"
          leftAdornment={<LockIcon width={16} height={16} />}
          rightAdornment={
            <button
              type="button"
              className="appearance-none border-none bg-transparent active:opacity-50"
            >
              <EyeClosedIcon width={16} height={16} />
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
          leftAdornment={<LockIcon width={16} height={16} />}
          rightAdornment={
            <button
              type="button"
              className="appearance-none border-none bg-transparent active:opacity-50"
            >
              <EyeClosedIcon width={16} height={16} />
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
