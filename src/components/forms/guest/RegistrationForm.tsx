import {
  Box,
  Button,
  Divider,
  Grid,
  ScrollAreaAutosize,
  Text,
} from "@pansophictech/base";
import "../../layout/layout.css";
import {
  DateInput,
  FormProvider,
  Checkbox,
  Select,
  TextInput,
  useForm,
} from "@pansophictech/hook-form";
import { openModal } from "@pansophictech/modals";
import SchedulePopup from "../../gnome/SchedulePopup";
import { OPTIONS } from "../../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setGuestUserData } from "../../../store/slices/guestUserSlice";
import { useEffect } from "react";
import { useUpdateGuestDetailsMutation } from "../../../services/guests/guestServices";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.guestUserData)

  const methods = useForm<any>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    // resolver: zodResolver(LoginSchema),
  });

  const { watch, reset } = methods;

  useEffect(() => {
    reset(user, { keepDirtyValues: true });
  }, [user])

  const [updateGuestDetails, { isLoading, isSuccess, error }] = useUpdateGuestDetailsMutation();
  const isDiffAddress = watch("diffCurrAddress");
  const handleFormSubmit = (values: any) => {
    updateGuestDetails(values);
    dispatch(setGuestUserData(values));
  };
  return (
    <>
      <Box
        p={13}
        style={{
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.3))",
        }}
      >
        <Text fw={600}> Guest Registration</Text>
      </Box>
      <ScrollAreaAutosize mah="calc(100vh - 260px)">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
            <Box mt={15} p={20}>
              <Text pb={10} c={"var(--mantine-color-theme-6)"}>
                Personal Details
              </Text>
              <Grid gutter={20}>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <TextInput
                    name="firstName"
                    label="First Name"
                    props={{ placeholder: "Enter First Name" }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <TextInput
                    label="Last Name"
                    name="lastName"
                    props={{ placeholder: "Enter Last Name" }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <Select
                    name="gender"
                    data={OPTIONS.gender}
                    label="Gender"
                    props={{ placeholder: "Select" }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <DateInput
                    name="dob"
                    label="Date of Birth"
                    props={{ placeholder: "dd/mm/yyyy" }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <TextInput
                    name="email"
                    label="Email Address"
                    props={{ placeholder: "Enter Email Address", type: "email" }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <TextInput
                    name="phoneNo"
                    label="Phone Number"
                    props={{ placeholder: "Enter Phone Number", type: "phone"}}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <Select
                    name="nationality"
                    data={OPTIONS.nationality}
                    label="Nationality"
                    props={{ placeholder: "Select Nationality" }}
                  />
                </Grid.Col>
              </Grid>
              <Divider my={30} color="gray.4" />
              <Text pb={10} c={"var(--mantine-color-theme-6)"}>
                Permanent Address
              </Text>
              <Grid>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <Select
                    name="country"
                    data={OPTIONS.country}
                    label="Country"
                    props={{ placeholder: "Select Country" }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <TextInput
                    name="zipCode"
                    label="Zip Code"
                    props={{ placeholder: "Enter Zip Code" }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <Select
                    name="state"
                    data={OPTIONS.state}
                    label="State"
                    props={{ placeholder: "Select State" }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <Select
                    name="city"
                    data={OPTIONS.city}
                    label="City"
                    props={{ placeholder: "Select City" }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    name="addressLine1"
                    label="Address Line 1"
                    props={{ placeholder: "Enter Address Line 1" }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    name="addressLine2"
                    label="Address Line 2"
                    props={{ placeholder: "Enter Address Line 2" }}
                  />
                </Grid.Col>
              </Grid>
              <Checkbox
                name="diffCurrAddress"
                label="I have a different current address"
                props={{
                  pt: 20,
                }}
              />
              {isDiffAddress && (
                <>
                  <Divider my={30} color="gray.4" />
                  <Text pb={10} c={"var(--mantine-color-theme-6)"}>
                    Current Address
                  </Text>
                  <Grid>
                    <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                      <Select
                        name="currentCountry"
                        data={[]}
                        label="Country"
                        props={{ placeholder: "Select" }}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                      <TextInput
                        name="currentZipCode"
                        label="Zip Code"
                        props={{ placeholder: "Enter Zip Code" }}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                      <Select
                        name="currentState"
                        data={[
                          { label: "Gujrat", value: "Gj" },
                          { label: "Madhya Pradesh", value: "mp" },
                        ]}
                        label="State"
                        props={{ placeholder: "Select" }}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                      <Select
                        name="currentCity"
                        data={[]}
                        label="City"
                        props={{ placeholder: "Select" }}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        name="currentAddressLine1"
                        label="Address Line 1"
                        props={{ placeholder: "Enter Address Line 1" }}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        name="currentAddressLine2"
                        label="Address Line 2"
                        props={{ placeholder: "Enter Address Line 2" }}
                      />
                    </Grid.Col>
                  </Grid>
                </>
              )}

              <Divider my={30} color="gray.4" />
              <Text pb={10} c={"var(--mantine-color-theme-6)"}>
                Emergency Contact
              </Text>
              <Grid gutter={20}>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <TextInput
                    name="emergencyFirstName"
                    label="First Name"
                    props={{ placeholder: "Enter First Name" }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <TextInput
                    name="emergencyLastName"
                    label="Last Name"
                    props={{ placeholder: "Enter Last Name" }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <TextInput name="emergencyPhoneNumber" label="Phone Number" />
                  {/* <InputPhone name="phone" label="Phone Number" /> */}
                </Grid.Col>
              </Grid>
              <Box pos={"fixed"} bottom={30} right={30}>
                <Button
                  type="button"
                  variant="outline"
                  radius={"xl"}
                  mr={10}
                  onClick={() =>
                    openModal({
                      centered: true,
                      closeOnClickOutside: false,
                      overlayProps: { blur: 3 },
                      title: (
                        <Text fw={600}>Apply Changes to All Reports?</Text>
                      ),
                      transitionProps: { transition: "pop", duration: 200 },
                      children: <SchedulePopup />,
                      scrollAreaComponent: ScrollAreaAutosize,
                      size: "lg",
                    })
                  }
                >
                  RESET
                </Button>
                <Button type="submit" radius={"xl"}>
                  SAVE
                </Button>
              </Box>
            </Box>
          </form>
        </FormProvider>
      </ScrollAreaAutosize>
    </>
  );
};

export default RegistrationForm;
