import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { userSchema } from "../validation/userSchema";
import { userFields } from "../config/formConfig";

export default function UserForm({ onSubmit, editData, cancelEdit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  useEffect(() => {
    if (editData) {
      reset(editData);
    } else {
      reset({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      });
    }
  }, [editData, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl shadow-lg p-8 space-y-5"
    >
      <h2 className="text-xl font-bold text-center">
        {editData ? "Edit User" : "Add User"}
      </h2>

      {userFields.map((field) => (
        <div key={field.name}>
          <label className="block mb-1 font-medium">{field.label}</label>

          <input
            type={field.type}
            {...register(field.name)}
            className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          />

          <p className="text-red-500 text-sm">{errors[field.name]?.message}</p>
        </div>
      ))}

      <div className="flex gap-3">
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-xl hover:opacity-90 transition shadow-md"
        >
          {editData ? "Update" : "Add"}
        </button>

        {editData && (
          <button
            type="button"
            onClick={() => {
              reset({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
              });
              cancelEdit();
            }}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
