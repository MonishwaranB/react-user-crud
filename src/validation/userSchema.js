import * as yup from "yup";

export const userSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phone: yup
    .string()
    .min(10, "Minimum 10 digits")
    .required("Phone is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
});
