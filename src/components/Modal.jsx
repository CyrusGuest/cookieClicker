import React, { useState } from "react";

function Modal({ show, onClose, onSubmit, question }) {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  if (!show) {
    return null;
  }

  const handleSubmit = () => {
    const isCorrect =
      answer.trim().toLowerCase() === question.answer.trim().toLowerCase();
    setCorrect(isCorrect);
    setSubmitted(true);

    if (isCorrect) {
      onSubmit(answer, isCorrect);
      setAnswer("");
      setCorrect(false);
      setSubmitted(false);
      onClose();
    }

    setAnswer("");
  };

  const handleClose = () => {
    if (!correct) {
      onSubmit(answer, correct);
    }

    setAnswer("");
    setCorrect(false);
    setSubmitted(false);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <h2 className="text-2xl mb-4">Solve this Calculus Question</h2>
        <p className="mb-4">{question.question}</p>
        {!submitted ? (
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="border p-2 mb-4"
          />
        ) : (
          ""
        )}
        {submitted && !correct && (
          <div className="mb-4 text-red-600">
            Incorrect! The correct answer is: {question.answer}
          </div>
        )}
        <div className="flex justify-center">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Submit
            </button>
          ) : (
            ""
          )}
          <button
            onClick={handleClose}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Close (Give Up)
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
