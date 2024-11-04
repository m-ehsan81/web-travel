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
import CustomTabs from '@/components/custom-tabs';

function LoginPage(props: LoginProps) {
  const { showModal, setShowModal } = props;
  return (
    <Modal
      show={showModal}
      size="5xl"
      onClose={() => setShowModal(false)}
      dismissible
    >
      <Modal.Body className="login-bg rounded-md bg-cover p-0">
        <div className="h-[600px] w-2/5 bg-[#142D4D] px-[43px] py-6 text-center">
          <CustomTabs
            tabs={[
              { id: 1, content: <div>login</div>, title: 'ورود' },
              { id: 2, content: <div>sign up</div>, title: 'ثبت نام' },
            ]}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LoginPage;
