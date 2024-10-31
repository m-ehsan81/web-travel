'use client';
import { useLoginMutation } from '@/lib/features/auth/auth-api-slice';
import { useFormik } from 'formik';

function LoginPage() {
  const [fetchLogin] = useLoginMutation();

  const formik = useFormik({
    initialValues: { email: '', password: '', isPersistent: false },
    onSubmit: (values) => fetchLogin(values),
  });

  const { getFieldProps, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <input {...getFieldProps('email')} placeholder="email" type="text" />
      <input
        {...getFieldProps('password')}
        placeholder="password"
        type="password"
      />
      <label htmlFor="isPersistent-checkbox">isPersistent</label>
      <input
        id="isPersistent-checkbox"
        type="checkbox"
        {...getFieldProps('isPersistent')}
      />
      <br />
      <button type="submit" className="bg-slate-600">
        submit
      </button>
    </form>
  );
}

export default LoginPage;
