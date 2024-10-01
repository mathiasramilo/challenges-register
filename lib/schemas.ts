import { z } from 'zod';

const emailDomains = ['@gmail.com', '@hotmail.com', '@lightit.io'];

export const userSchema = z
  .object({
    email: z
      .string()
      .min(1, 'Email is required.')
      .email('Please enter a valid email address.')
      .trim()
      .refine(
        (value) => {
          return emailDomains.some((domain) => value.endsWith(domain));
        },
        {
          message:
            'The email must be valid and have a domain of @gmail.com, @hotmail.com, or @lightit.io',
        },
      ),
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
