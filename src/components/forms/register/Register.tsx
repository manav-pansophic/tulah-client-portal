import {
  BackgroundImage,
  Box,
  Button,
  Card,
  Center,
  Container,
  Flex,
  Stack,
  Text,
} from "@pansophictech/base";
import { FormProvider, TextInput, useForm, z } from "@pansophictech/hook-form";
import { useNavigate } from "react-router-dom";
import BGImage from "../../../assets/img/bg.png";
import TulahLogo from "../../../assets/img/TulahLogo.png";
import "../../layout/layout.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "../../../services/register/registerServices";

const Register = () => {
  const navigate = useNavigate();
  const [register] = useRegisterMutation();

  const registerSchema = z
    .object({
      first_name: z.string().optional(),
      last_name: z.string().optional(),
      phone: z.string().optional(),
      email: z.string().optional(),
      password: z.string().optional(),
      confirm_password: z.string().optional(),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: "Passwords must match",
      path: ["confirm_password"],
    });

  const handleLogin = (values: any) => {
    register(values).then((res) => {
      console.log("res", res);
    });
    console.log("values", values);
  };

  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(registerSchema),
  });

  return (
    <BackgroundImage src={BGImage} style={{ height: "100vh", width: "100vw" }}>
      <Box>
        <Container>
          <Flex h="100vh" align="center" justify="center">
            <Card p={50} w="70%" shadow="lg">
              <Flex align="center" justify="center" direction={"column"}>
                <img
                  src={TulahLogo}
                  alt="TulahLogo"
                  style={{ background: "transparent" }}
                />
                <Text mt="xl" fw={600}>
                  Create your account and start your journey towards well-being.
                </Text>
                <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(handleLogin)}>
                    <Stack gap="md">
                      <Flex gap="sm" mt="xl" w="100%">
                        <TextInput
                          name="first_name"
                          label="First Name"
                          props={{
                            placeholder: "Enter First Name",
                            w: "100%",
                          }}
                        />
                        <TextInput
                          name="last_name"
                          label="Last Name"
                          props={{
                            placeholder: "Enter Phone Number",
                            w: "100%",
                          }}
                        />
                      </Flex>
                      <TextInput
                        name="phone"
                        label="Phone Number"
                        props={{
                          placeholder: "Enter Phone Number",
                          w: "100%",
                        }}
                      />
                      <TextInput
                        name="email"
                        label="Email Address"
                        props={{
                          placeholder: "Enter Email Address",
                          w: "100%",
                        }}
                      />
                      <Flex gap="sm" w="100%">
                        <TextInput
                          name="password"
                          label="Password"
                          props={{
                            placeholder: "Enter Password",
                            w: "100%",
                            type: "password",
                          }}
                        />
                        <TextInput
                          name="confirm_password"
                          label="Confirm Password"
                          props={{
                            placeholder: "Enter Confirm Password",
                            w: "100%",
                            type: "password",
                          }}
                        />
                      </Flex>
                    </Stack>
                    <Center>
                      <Button radius={"xl"} mt="xl" type="submit">
                        SIGN UP
                      </Button>
                    </Center>
                    <Flex mt="sm" justify={"center"} gap={5}>
                      <Text>Already have an account? </Text>
                      <Text
                        c="theme"
                        fw={600}
                        onClick={() => navigate("/auth/login")}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        Login
                      </Text>
                    </Flex>
                  </form>
                </FormProvider>
              </Flex>
            </Card>
          </Flex>
        </Container>
      </Box>
    </BackgroundImage>
  );
};

export default Register;
