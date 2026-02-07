import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

export default function UserList({ users, onEdit, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const openModal = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedId(null);
  };

  const handleConfirm = () => {
    onDelete(selectedId);
    closeModal();
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-center">User List</h2>

      {users.length === 0 && (
        <p className="text-center text-gray-500">No users found</p>
      )}

      <div className="space-y-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white/90 backdrop-blur border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition flex justify-between items-center"
          >
            <div>
              <p className="font-medium">
                {user.firstName} {user.lastName}
              </p>

              <p className="text-sm text-gray-600">{user.email}</p>

              <p className="text-sm text-gray-600">{user.phone}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onEdit(user)}
                className="bg-yellow-400/90 hover:bg-yellow-500 px-4 py-1 rounded-lg transition shadow"
              >
                Edit
              </button>

              <button
                onClick={() => openModal(user.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg transition shadow"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <ConfirmModal
        isOpen={showModal}
        title="Delete User"
        message="Are you sure you want to delete this user?"
        onConfirm={handleConfirm}
        onCancel={closeModal}
      />
    </div>
  );
}
