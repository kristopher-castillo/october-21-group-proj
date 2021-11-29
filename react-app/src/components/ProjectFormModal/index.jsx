import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import ProjectForm from "../ProjectForm";

function ProjectFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>
                Start a project
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ProjectForm />
                </Modal>
            )}
        </>
    )

}

export default ProjectFormModal;
