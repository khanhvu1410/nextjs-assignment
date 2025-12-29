'use client';

import { useLogin } from '@/hooks/useAuth';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { ADMIN_URL } from '@/constant/url';
import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';

export default function LoginPage() {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { mutateAsync: login, isPending } = useLogin();

  const onSubmit = async (data) => {
    await login({
      email: data.email,
      password: data.password,
    });
    router.push(ADMIN_URL.BASE);
  };

  return (
    <section id="content-wrap" className="login-center">
      <div className="row narrow">
        <div className="primary-content">
          <div className="page-header">
            <h1 className="entry-title">Login</h1>
          </div>

          <div className="row">
            <div className="col-twelve tab-full">
              <form
                id="cForm"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="contact-form"
              >
                <fieldset>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    error={errors.email?.message}
                    {...register('email', {
                      required: 'Please enter your email address',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address',
                      },
                    })}
                  />

                  <Input
                    type="password"
                    placeholder="Your Password"
                    error={errors.email?.message}
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                      },
                    })}
                  />

                  <Button type="submit" loading={isPending}>
                    Login
                  </Button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
