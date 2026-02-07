export default function ConfirmModal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl shadow-2xl w-[380px] p-7 animate-scaleIn">

        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-2">
          {title}
        </h3>

        <p className="text-center text-gray-600 mb-6">
          {message}
        </p>

        <div className="flex justify-center gap-4">

          <button
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl shadow-md transition"
          >
            Delete
          </button>

          <button
            onClick={onCancel}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-xl transition"
          >
            Cancel
          </button>

        </div>

      </div>
    </div>
  );
}
