import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("A full name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email(
      "Invalid format: please type in the following format: example@example.com"
    ),

  message: yup
    .string()
    .required("A message is required")
    .min(5, "A message must be at least 5 letters long"),
});
