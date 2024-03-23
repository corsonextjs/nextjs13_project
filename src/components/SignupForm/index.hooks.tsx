import { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup.string().min(3, "minimo 3 caratteri").max(50).required(),
  email: yup.string().required(),
  password: yup.string().email().min(8).required("Error message"),
});

type SignupFormData = {
  name: string;
  email: string;
  password: string;
};

export const useSignupForm = () => {
  const formData = useForm<SignupFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    formState: { isValid, isSubmitted, errors },
  } = formData;
  const submitDisabled = isSubmitted && !isValid;

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        console.log("SUCCESS!");
      }),
    [handleSubmit],
  );
  console.log({ errors });
  return {
    formData,
    triggerSubmit,
    submitDisabled,
  };
};
