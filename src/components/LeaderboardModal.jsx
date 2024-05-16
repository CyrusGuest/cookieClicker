// src/components/LeaderboardModal.js
import React from "react";

const LeaderboardModal = ({ show, onClose, leaderboardData }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2 className="text-2xl mb-4">Leaderboard</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Rank</th>
              <th className="px-4 py-2">Player</th>
              <th className="px-4 py-2">Cookies</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((player, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{player.id}</td>
                <td className="border px-4 py-2">{player.cookies}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={onClose} className="mt-4 p-2 bg-red-500 text-white">
          Close
        </button>
      </div>
    </div>
  );
};

export default LeaderboardModal;
