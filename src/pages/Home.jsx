import { useEffect, useState } from "react";

import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import ConfirmModal from "../components/ConfirmModal";

import { getUsers, createUser, updateUser, deleteUser } from "../api/userApi";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Modal state (NEW)
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Fetch users
  const fetchUsers = async () => {
    setLoading(true);

    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch {
      alert("Failed to load users");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Add / Update
  const handleSubmit = async (data) => {
    try {
      if (editUser) {
        await updateUser(editUser.id, data);
      } else {
        await createUser(data);
      }

      fetchUsers();
      setEditUser(null);
      document.querySelector("form")?.reset();
    } catch {
      alert("Error saving user");
    }
  };

  // Open Modal (NEW)
  const openDeleteModal = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  // Close Modal (NEW)
  const closeModal = () => {
    setShowModal(false);
    setSelectedId(null);
  };

  // Confirm Delete (NEW)
  const handleConfirmDelete = async () => {
    await deleteUser(selectedId);
    fetchUsers();
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        User Management System
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <UserForm
          onSubmit={handleSubmit}
          editData={editUser}
          cancelEdit={() => setEditUser(null)}
        />

        <div className="backdrop-blur-lg bg-white/80 p-6 rounded-2xl shadow-xl">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <UserList
              users={users}
              onEdit={setEditUser}
              onDelete={openDeleteModal}
            />
          )}
        </div>
      </div>

      <ConfirmModal
        isOpen={showModal}
        title="Delete User"
        message="Are you sure you want to delete this user?"
        onConfirm={handleConfirmDelete}
        onCancel={closeModal}
      />
    </div>
  );
}
