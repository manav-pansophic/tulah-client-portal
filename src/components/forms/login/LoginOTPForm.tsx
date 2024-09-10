import { Button, Center, Flex, Stack, Text } from "@pansophictech/base";
import {
    FormProvider,
    PinInput,
    useForm
} from "@pansophictech/hook-form";
import { toast } from "@pansophictech/toast";
import { useVerifyOTPMutation } from "../../../services/auth/authService";
import {
    useLazyAddVisitorsQuery,
    useLazyGetVisitorsQuery,
} from "../../../services/visitors/visitorsServices";

const LoginOTPForm = (props: any) => {
  const { setIsLoggedIn } = props;

  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {},
  });

  const [verifyOTP] = useVerifyOTPMutation();
  const [getVisitors] = useLazyGetVisitorsQuery();
  const [addVisitors] = useLazyAddVisitorsQuery();

  const phone_number = sessionStorage.getItem("phoneNumber");

  const handleVerify = (values: any) => {
   
    verifyOTP({ phone_number: phone_number, otp: values?.otp }).then((res) => {
      toast.success(res.data.message);
      if (res.data.status === 200) {
        sessionStorage.setItem("isLoggedIn", true);
        setIsLoggedIn(true);
        getVisitors(sessionStorage.getItem("phoneNumber")).then((res: any) => {
          if (res?.error?.["status"] === 404) {
            addVisitors(sessionStorage.getItem("phoneNumber")).then(
              (res: any) => {
                sessionStorage.setItem("visitors_id", res.data.results);
                toast.success(res?.data?.message);
              }
            );
          } else {
            console.log("res", res.data.results._id);
            toast.success(res.data.message);
            sessionStorage.setItem("visitors_id", res.data.results._id);
          }
        });
      }
    });
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleVerify)}>
        <Stack gap="md" mt="md">
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
        </Stack>

        <Center mt="xl">
          <Text size="md">
            Didn’t Receive OTP?{" "}
            <b
              style={{
                background: "theme",
              }}
            >
              <span style={{ cursor: "pointer" }}>Resend OTP</span>
            </b>
          </Text>
        </Center>

        <Flex justify="center" mt={10}>
          <Button radius={"xl"} type="submit">
            VERIFY OTP
          </Button>
        </Flex>
      </form>
    </FormProvider>
  );
};

export default LoginOTPForm;
