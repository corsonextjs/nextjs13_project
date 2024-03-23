import { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  password: yup.string().required().min(8),
  email: yup.string().email().required(),
});

type LoginFormData = {
  email: string;
  passsword: string;
};

export const useLoginForm = () => {
  const formData = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      // name: "",
    },
  });
  const {
    handleSubmit,
    formState: { isValid, isSubmitted },
  } = formData;
  const submitDisabled = isSubmitted && !isValid;

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        // data.name;
      }),
    [handleSubmit],
  );

  return {
    formData,
    triggerSubmit,
    submitDisabled,
  };
};
