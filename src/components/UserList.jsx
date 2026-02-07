export default function UserList({ users, onEdit, onDelete }) {
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
            className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm
              transition hover:shadow-md flex flex-col gap-4"
          >
            <div>
              <p className="font-medium break-words">
                {user.firstName} {user.lastName}
              </p>

              <p className="text-sm text-gray-600 break-all">{user.email}</p>

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
                onClick={() => onDelete(user.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg transition shadow"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
