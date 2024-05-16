// src/components/UserID.js
import React, { useState } from "react";
import axios from "axios";

const UserID = ({ id, setId, cookies }) => {
  const [newId, setNewId] = useState(id);

  const handleIdChange = (e) => {
    setNewId(e.target.value);
  };

  const handleIdSubmit = () => {
    setId(newId);
    try {
      axios.post("https://cc.brandingandbeyond.org/update", {
        id: newId,
        cookies,
        update: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="user-id-container">
      <h2 className="text-2xl">User ID: {id}</h2>
      <input
        type="text"
        value={newId}
        onChange={handleIdChange}
        className="border p-2"
      />
      <button
        onClick={handleIdSubmit}
        className="ml-2 p-2 bg-blue-500 text-white"
      >
        Change ID
      </button>
    </div>
  );
};

export default UserID;
