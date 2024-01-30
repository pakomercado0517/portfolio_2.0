/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { FiExternalLink, FiFilePlus } from "react-icons/fi";

export default function ModalComponent({ openModal, closeModal, data }) {
  return (
    <div>
      <Modal
        show={openModal === "open"}
        onClose={closeModal}
        className="dark:bg-gray-600"
      >
        <Modal.Header>
          <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
            {data.title}
          </h2>
        </Modal.Header>
        <Modal.Body>
          <section>
            <article className="grid grid-cols-1 lg:grid-cols-2 my-6">
              <div className="space-y-2">
                <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                  <FiFilePlus className="mr-2 sm:text-lg sm:block" />
                  Proyecto:&nbsp;{" "}
                  <span className="font-medium">{data.title}</span>
                </p>
              </div>
              <div className="space-y-2">
                <p className="dark:text-white flex items-center text-[15px] sm:text-lg ">
                  <FiExternalLink className="mr-2 sm:block" />
                  <a href={data.href} target="_blank" rel="noopener noreferrer">
                    Visitar Projecto&nbsp;{" "}
                  </a>
                </p>
              </div>
            </article>
            <p className="dark:text-white text-2line font-normal text-[15px]">
              {data.description}
            </p>
            <img
              src={data.img}
              alt={data.title}
              className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6 "
            />
          </section>
        </Modal.Body>
      </Modal>
    </div>
  );
}
