import {
  BackgroundImage,
  Box,
  Button,
  Card,
  Center,
  Container,
  Flex,
  Text,
} from "@pansophictech/base";
import BGImage from "../../../assets/img/bg.png";
import TulahLogo from "../../../assets/img/TulahLogo.png";
import {
  FormProvider,
  PinInput,
  TextInput,
  useForm,
} from "@pansophictech/hook-form";

const VerifyForm = () => {
  //   const [loginUser, { isLoading, isSuccess, isError, error }] =
  //     useLoginMutation();
  // Handle Login Functions
  const handleLogin = (credentials: any) => {
    // loginUser(credentials);
    console.log("credentials", credentials);
  };

  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    // resolver: zodResolver(LoginSchema),
    defaultValues: {},
  });
  return (
    <BackgroundImage src={BGImage} style={{ height: "100vh", width: "100vw" }}>
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
                  <div style={{ marginTop: "20px" }}>
                    <PinInput
                      name="number_data"
                      label="Enter the OTP sent to your mobile number"
                      props={{
                        length: 6,
                        size: "md",
                      }}
                      labelProps={{
                        fw: 600,
                        size: "14px",
                      }}
                    />
                  </div>
                  <Center mt="md">
                    <Text size="md">
                      Didn’t Receive OTP?{" "}
                      <b
                        style={{
                          background: "theme",
                        }}
                      >
                        Resend OTP
                      </b>
                    </Text>
                  </Center>
                  <Flex justify="center" mt={10}>
                    <Button type="submit" radius={"xl"}>
                      VERIFY
                    </Button>
                  </Flex>
                </form>
              </FormProvider>
            </Card>
          </Flex>
        </Container>
      </Box>
    </BackgroundImage>
  );
};

export default VerifyForm;
