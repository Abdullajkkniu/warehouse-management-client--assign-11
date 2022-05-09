import React, { useState } from 'react';

import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import '../SignUp/Reset.css';
import 'react-toastify/dist/ReactToastify.css';

const Reset = () => {
  const [email, setEmail] = useState('');
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
    auth
  );
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (sending) {
    return <p>Sending...</p>;
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  return (
    <div>
      <h5 className='mt-5 text-center'>Your Email</h5>
      <form className='w-25 mx-auto'>
        <input className='email-reset d-block w-100 p-1' onChange={handleEmailChange} type="email" name="email" id="" placeholder='Your email' />
        <button className='button-colors btn-submit d-block mt-2 p-1 w-100' onClick={async () => {
          await sendPasswordResetEmail(email);
          toast('Sent email');
        }}>Reset</button>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Reset;