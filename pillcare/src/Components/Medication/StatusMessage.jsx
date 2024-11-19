import React from "react";

function StatusMessage({ message }) {
  if (!message) return null;

  return <p className="mt-4 text-center text-sm text-teal-700">{message}</p>;
}

export default StatusMessage;
