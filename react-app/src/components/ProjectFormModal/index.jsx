import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import ProjectForm from "../ProjectForm";

function ProjectFormModal() {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>
                Start a project
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ProjectForm closeModalHandler={closeModal}/>
                </Modal>
            )}
        </>
    )

}

export default ProjectFormModal;
