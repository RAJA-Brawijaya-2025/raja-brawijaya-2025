import { useId, type FC, type FormEventHandler } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/shared/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

// Konvensi: Definisikan tipe untuk props menggunakan 'type'.
type LoginProps = {
  status?: string;
  canResetPassword: boolean;
};

// Konvensi: Gunakan arrow function untuk deklarasi komponen.
const Login: FC<LoginProps> = ({ status, canResetPassword }) => {
  // Perbaikan Linter: Gunakan hook useId untuk membuat ID unik.
  const emailId = useId();
  const passwordId = useId();
  const rememberId = useId();

  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route('login'), {
      onFinish: () => reset('password'),
    });
  };

  return (
    <GuestLayout>
      <Head title="Log in" />

      {status && (
        <div className="mb-4 text-sm font-medium text-green-600">{status}</div>
      )}

      <form onSubmit={submit}>
        <div>
          {/* Terapkan ID unik untuk label dan input */}
          <InputLabel htmlFor={emailId} value="Email" />

          <TextInput
            id={emailId}
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            isFocused={true}
            onChange={(e) => setData('email', e.target.value)}
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-4">
          {/* Terapkan ID unik untuk label dan input */}
          <InputLabel htmlFor={passwordId} value="Password" />

          <TextInput
            id={passwordId}
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="current-password"
            onChange={(e) => setData('password', e.target.value)}
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="mt-4 block">
          <label className="flex items-center" htmlFor={rememberId}>
            <Checkbox
              id={rememberId} // Tambahkan ID agar terhubung dengan label
              name="remember"
              checked={data.remember}
              onChange={(e) => setData('remember', e.target.checked as false)}
            />
            <span className="ms-2 text-sm text-gray-600">Remember me</span>
          </label>
        </div>

        <div className="mt-4 flex items-center justify-end">
          {canResetPassword && (
            <Link
              href={route('password.request')}
              className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Forgot your password?
            </Link>
          )}

          <PrimaryButton className="ms-4" disabled={processing}>
            Log in
          </PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
};

export default Login;
