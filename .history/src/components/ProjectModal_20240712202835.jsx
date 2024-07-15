import { useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "40rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};

const ProjectModal = ({ isOpen, onRequestClose, project }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <h2 className="font-bold text-xl mb-4">{project.description}</h2>
      <p className="mb-4">{project.description}</p>
      <Swiper
        pagination={{
          clickable: true,
        }}
        spaceBetween={20}
        modules={[Pagination]}
        className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
      >
        {project.images.map((image, i) => (
          <SwiperSlide key={i} className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit">
            <img src={image} alt="..." />
          </SwiperSlide>
        ))}
      </Swiper>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block mt-4 text-blue-500">
          Visit Project
        </a>
      )}
      <button onClick={onRequestClose} className="btn mt-4">
        Close
      </button>
    </Modal>
  );
};

export default ProjectModal;
