// resources/js/Pages/Auth/ConfirmPassword.tsx (VERSI PERBAIKAN)

import { useId, type FC, type FormEventHandler, useEffect } from 'react';
import GuestLayout from '@/shared/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

// Konvensi: Gunakan arrow function untuk komponen
const ConfirmPassword: FC = () => {
  // LANGKAH 1: Buat ID unik untuk input password
  const passwordId = useId();

  const { data, setData, post, processing, errors, reset } = useForm({
    password: '',
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route('password.confirm'));
  };

  return (
    <GuestLayout>
      <Head title="Confirm Password" />

      <div className="mb-4 text-sm text-gray-600">
        This is a secure area of the application. Please confirm your password
        before continuing.
      </div>

      <form onSubmit={submit}>
        <div className="mt-4">
          {/* LANGKAH 2: Terapkan ID unik ke label dan input */}
          <InputLabel htmlFor={passwordId} value="Password" />

          <TextInput
            id={passwordId}
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            isFocused={true}
            onChange={(e) => setData('password', e.target.value)}
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="mt-4 flex items-center justify-end">
          <PrimaryButton className="ms-4" disabled={processing}>
            Confirm
          </PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
};

export default ConfirmPassword;
