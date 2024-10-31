'use client';
import { useSignUpMutation } from '@/lib/features/auth/auth-api-slice';
import { useFormik } from 'formik';

function SignUpPage() {
  const [fetchSignUp] = useSignUpMutation();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rePassword: '',
    },
    onSubmit: (values) => fetchSignUp(values),
  });

  const { getFieldProps, handleSubmit } = formik;
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="email" {...getFieldProps('email')} />
      <input
        type="text"
        placeholder="password"
        {...getFieldProps('password')}
      />
      <input
        type="text"
        placeholder="re-password"
        {...getFieldProps('rePassword')}
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default SignUpPage;
