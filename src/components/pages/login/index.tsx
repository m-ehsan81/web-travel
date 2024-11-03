// import { useLoginMutation } from '@/lib/features/auth/auth-api-slice';
// import { useFormik } from 'formik';
// import React from 'react';

// function LoginPage() {
//   const [fetchLogin] = useLoginMutation();

//   const formik = useFormik({
//     initialValues: { email: '', password: '', isPersistent: false },
//     onSubmit: (values) => fetchLogin(values),
//   });

//   const { getFieldProps, handleSubmit } = formik;

//   return (
//     <form onSubmit={handleSubmit}>
//       <input {...getFieldProps('email')} placeholder="email" type="text" />
//       <input
//         {...getFieldProps('password')}
//         placeholder="password"
//         type="password"
//       />
//       <label htmlFor="isPersistent-checkbox">isPersistent</label>
//       <input
//         id="isPersistent-checkbox"
//         type="checkbox"
//         {...getFieldProps('isPersistent')}
//       />
//       <br />
//       <button type="submit" className="bg-slate-600">
//         submit
//       </button>
//     </form>
//   );
// }

// export default LoginPage;

import React from 'react';
import { LoginProps } from './type';
import { Modal } from 'flowbite-react';

function LoginPage(props: LoginProps) {
  const { showModal, setShowModal } = props;
  return (
    <Modal
      show={showModal}
      size="4xl"
      onClose={() => setShowModal(false)}
      dismissible
    >
      <Modal.Body className="login-bg bg-slate-600">
        <div className="text-center">login page</div>
      </Modal.Body>
    </Modal>
  );
}

export default LoginPage;
