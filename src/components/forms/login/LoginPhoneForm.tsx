import { Button, Flex, Text } from "@pansophictech/base";
import { FormProvider, TextInput, useForm } from "@pansophictech/hook-form";
import { useNavigate } from "react-router-dom";
import { useVerifyPhoneMutation } from "../../../services/auth/authService";
import { toast } from "@pansophictech/toast";
import { useEffect } from "react";

const LoginPhoneForm = () => {
  const navigate = useNavigate();
  const [verifyPhone, { isSuccess }] = useVerifyPhoneMutation();

  const handleLogin = async (values: any) => {
    await verifyPhone({ phone_number: values?.phone }).then((res) => {
      toast.success(res?.data?.message);
    });
    sessionStorage.setItem("phoneNumber", values.phone);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(`/auth/verify`);
    }
  }, [isSuccess]);

  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {},
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleLogin)}>
        <div style={{ marginTop: "20px" }}>
          <TextInput
            name="phone"
            label="Phone Number"
            props={{
              placeholder: "Enter Phone Number",
            }}
          />
        </div>
        <Flex justify="center" mt={30}>
          <Button type="submit" radius={"xl"}>
            Send OTP
          </Button>
        </Flex>
        <Flex gap="sm" justify={"center"} mt="sm">
          <Text> Don’t have an account?</Text>
          <Text
            c="theme"
            fw={600}
            onClick={() => navigate("/auth/register")}
            style={{ cursor: "pointer" }}
          >
            Sign Up
          </Text>
        </Flex>
      </form>
    </FormProvider>
  );
};

export default LoginPhoneForm;
