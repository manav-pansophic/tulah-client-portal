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
import { toast } from "react-toastify";

const VerifyForm = (props) => {
  const { setIsLoggedIn, isOtpSent, setIsOtpSent } = props;

  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {},
  });

  // Handle Send OTP
  const handleSendOtp = () => {
    setIsOtpSent(true);
  };

  //  Handle Verify OTP
  const handleVerifyOtp = () => {
    const otpValue = methods.getValues('otp'); // Get the OTP value
    console.log("Entered OTP:", otpValue);

    if (otpValue && otpValue === '999999') {
      toast.success('Login Successfully')
      sessionStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
    } else {
      toast.error('Invalid OTP')
    }
  };

  const handleLogin = (values) => {
    if (values?.phone !== "" && values.phone.length === 10) {
      toast.success('OTP Sent')
      handleSendOtp();
    }
    else{
      toast.error('Please enter a valid 10-digit phone number')
    }
  };

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
                  {isOtpSent && (
                    <>
                      <div style={{ marginTop: "20px" }}>
                        <PinInput
                          name="otp"
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
                            <span style={{ cursor: "pointer" }}>
                              Resend OTP
                            </span>
                          </b>
                        </Text>
                      </Center>
                    </>
                  )}
                  <Flex justify="center" mt={10}>
                    {!isOtpSent && (
                      <Button type="submit" radius={"xl"}>
                        SEND OTP
                      </Button>
                    )}
                    {isOtpSent && (
                      <Button onClick={handleVerifyOtp} radius={"xl"}>
                        VERIFY OTP
                      </Button>
                    )}
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
