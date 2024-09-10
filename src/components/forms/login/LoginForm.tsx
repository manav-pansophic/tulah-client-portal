import {
  BackgroundImage,
  Box,
  Card,
  Container,
  Flex,
  Tabs,
  Text,
} from "@pansophictech/base";
import BGImage from "../../../assets/img/bg.png";
import TulahLogo from "../../../assets/img/TulahLogo.png";
import "../../layout/layout.css";
import LoginPhoneForm from "./LoginPhoneForm";
import LoginViaPassword from "./LoginViaPassword";

const LoginForm = (props: any) => {
  const { setIsLoggedIn } = props;

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
                <Flex align="center" justify="center" direction={"column"}>
                  <img
                    src={TulahLogo}
                    alt="TulahLogo"
                    style={{ background: "transparent" }}
                  />
                  <Text mt="xl" fw={600}>
                    Sign in to access your personalized insights.
                  </Text>

                  <Tabs variant="pills" defaultValue="login_via_otp" mt="xl">
                    <Box
                      className="layout"
                      p={"5px"}
                      style={{ borderRadius: "10px" }}
                    >
                      <Tabs.List>
                        <Tabs.Tab value="login_via_otp">Login via OTP</Tabs.Tab>
                        <Tabs.Tab value="login_via_password">
                          Login via Password
                        </Tabs.Tab>
                      </Tabs.List>
                    </Box>

                    <Tabs.Panel value="login_via_otp">
                      <LoginPhoneForm />
                    </Tabs.Panel>

                    <Tabs.Panel value="login_via_password" mt="sm">
                      <LoginViaPassword setIsLoggedIn={setIsLoggedIn} />
                    </Tabs.Panel>
                  </Tabs>
                </Flex>
              </Card>
            </Flex>
          </Container>
        </Box>
      </BackgroundImage>
    </>
  );
};

export default LoginForm;
