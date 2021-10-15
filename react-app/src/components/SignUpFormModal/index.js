import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupForm from "./SignUpForm";
// import 'SignUpForm.css'

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="create-account-button" onClick={() => setShowModal(true)}>
        Create account
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
