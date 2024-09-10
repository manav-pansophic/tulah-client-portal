import { Button, Center, Flex, Text } from "@pansophictech/base";
import { FormProvider, TextInput, useForm } from "@pansophictech/hook-form";
import { useNavigate } from "react-router-dom";
import { useLoginViaPasswordMutation } from "../../../services/auth/authService";

const LoginViaPassword = (props: any) => {
  const { setIsLoggedIn } = props;
  const navigate = useNavigate();
  const [loginViaPassword] = useLoginViaPasswordMutation();

  const handleLogin = async (values: any) => {
    setIsLoggedIn(true);
    console.log("re", values);
    await loginViaPassword(values).then((res) => {
      console.log("res", res);
    });
  };

  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {},
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleLogin)}>
        <TextInput
          name="email"
          label="Registered Email"
          props={{
            placeholder: "Enter Registered Email",
            w: "100%",
          }}
        />
        <TextInput
          name="password"
          label="Password"
          props={{
            placeholder: "Enter Password",
            w: "100%",
            type: "password",
          }}
        />
        <Center>
          <Button radius={"xl"} mt="xl" type="submit">
            Login
          </Button>
        </Center>
        <Flex gap="sm" justify={"center"} mt="sm">
          <Text>Don’t have an account? </Text>
          <Text
            c="theme"
            fw={600}
            onClick={() => navigate("/auth/register")}
            style={{
              cursor: "pointer",
            }}
          >
            Sign Up
          </Text>
        </Flex>
      </form>
    </FormProvider>
  );
};

export default LoginViaPassword;
