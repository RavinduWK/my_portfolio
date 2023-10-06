import React from "react";

const ImageModal = ({ imgUrl, onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={onClose}
    >
      <img
        src={imgUrl}
        alt="Project Preview"
        className="max-w-full max-h-full"
      />
    </div>
  );
};

export default ImageModal;
