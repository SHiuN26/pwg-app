import React from "react";
import useLoading from "../../hooks/useLoading";

const LoadingModal = () => {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg">Loading...</div>
    </div>
  );
};

export default LoadingModal;
