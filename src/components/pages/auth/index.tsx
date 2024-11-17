import { Modal } from 'flowbite-react';
import React from 'react';
import { AuthProps } from './model';
import CustomTabs from '@/components/custom-tabs';
import LoginPage from './login';
import SignUpPage from './sign-up';

function Auth(props: AuthProps) {
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
              { id: 1, content: <LoginPage />, title: 'ورود' },
              { id: 2, content: <SignUpPage />, title: 'ثبت نام' },
            ]}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Auth;
