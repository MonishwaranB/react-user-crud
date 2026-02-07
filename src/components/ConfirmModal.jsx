export default function ConfirmModal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

      {/* Modal Card */}
      <div className="bg-white w-full h-full w-[350px] sm:w-[500px]  h-[300px] rounded-2xl
                      flex flex-col justify-center items-center
                      p-6 sm:p-8 shadow-2xl animate-scaleIn">

        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-3">
          {title}
        </h3>

        <p className="text-center text-gray-600 mb-6 max-w-md">
          {message}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

          <button
            onClick={onConfirm}
            className="w-full sm:w-auto bg-red-500 hover:bg-red-600
                       text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            Delete
          </button>

          <button
            onClick={onCancel}
            className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200
                       text-gray-700 px-6 py-3 rounded-xl transition"
          >
            Cancel
          </button>

        </div>

      </div>
    </div>
  );
}
