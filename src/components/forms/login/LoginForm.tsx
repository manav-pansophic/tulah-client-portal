import {
  BackgroundImage,
  Box,
  Button,
  Card,
  Container,
  Flex,
} from "@pansophictech/base";
import { FormProvider, TextInput, useForm } from "@pansophictech/hook-form";
import TulahLogo from "../../../assets/img/TulahLogo.png";
import { useLoginMutation } from "../../../services/auth/authService";
import BGImage from "../../../assets/img/bg.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginForm = () => {
  const navigate = useNavigate();

  const [loginUser, { isLoading, isSuccess, isError, error }] =
    useLoginMutation();
  // Handle Login Functions
  const handleLogin = (credentials: any) => {
    // loginUser(credentials);
    // console.log("credentials", credentials);
    navigate(`/auth/verify`);
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     navigate(`/auth/verify`);
  //   }
  // }, [isSuccess]);

  const methods = useForm<any>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    // resolver: zodResolver(LoginSchema),
    defaultValues: {},
  });

  return (
    <>
      <BackgroundImage
        src={BGImage}
        style={{ height: "100vh", width: "100vw" }}
      >
        <Box className="login-layout">
          <Container>
            <Flex h="100vh" align="center" justify="center">
              <Card p={50} w="70%" shadow="lg">
                <Flex align="center" justify="center">
                  <img
                    src={TulahLogo}
                    alt="TulahLogo"
                    style={{ background: "transparent" }}
                  />
                </Flex>
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
                        Get OTP
                      </Button>
                    </Flex>
                  </form>
                </FormProvider>
              </Card>
            </Flex>
          </Container>
        </Box>
      </BackgroundImage>
    </>
  );
};

export default LoginForm;
