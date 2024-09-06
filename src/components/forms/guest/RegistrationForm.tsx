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

const RegistrationForm = () => {
  const methods = useForm<any>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    // resolver: zodResolver(LoginSchema),
    defaultValues: { diffCurrAddress: false },
  });

  const isDiffAddress = methods.watch("diffCurrAddress");
  console.log({ isDiffAddress });
  const handleFormSubmit = (values: any) => {
    console.log(values);
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
        <Text fw={600}> Guest 2 Registration</Text>
      </Box>
      <ScrollAreaAutosize mah="calc(100vh - 260px)">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
            <Box data-test-id="registration-form-wrapper" mt={15} p={20}>
              <Text
                data-test-id="personal-details-label"
                pb={10}
                c={"var(--mantine-color-theme-6)"}
              >
                Personal Details
              </Text>
              <Grid gutter={20}>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <TextInput
                    name="firstName"
                    label="First Name"
                    props={{
                      placeholder: "Enter First Name",
                      "data-test-id": "first-name",
                      labelProps: {
                        "data-test-id": "first-name-label",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <TextInput
                    label="Last Name"
                    name="lastName"
                    props={{
                      placeholder: "Enter Last Name",
                      "data-test-id": "last-name",
                      labelProps: {
                        "data-test-id": "last-name-label",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <Select
                    name="gender"
                    data={[]}
                    label="Gender"
                    props={{
                      placeholder: "Select",
                      "data-test-id": "gender",
                      labelProps: {
                        "data-test-id": "gender-label",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <DateInput
                    name="dob"
                    label="Date of Birth"
                    props={{
                      placeholder: "dd/mm/yyyy",
                      "data-test-id": "dob",
                      labelProps: {
                        "data-test-id": "dob-label",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <DateInput
                    name="email"
                    label="Email Address"
                    props={{
                      placeholder: "Enter Email Address",
                      "data-test-id": "email-address",
                      labelProps: {
                        "data-test-id": "email-address-label",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <DateInput
                    name="phoneNo"
                    label="Phone Number"
                    props={{
                      placeholder: "Enter Phone Number",
                      "data-test-id": "phone-number",
                      labelProps: {
                        "data-test-id": "phone-number-label",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <Select
                    name="nationality"
                    data={[]}
                    label="Nationality"
                    props={{
                      placeholder: "Select Nationality",
                      "data-test-id": "nationality",
                      labelProps: {
                        "data-test-id": "nationality-label",
                      },
                    }}
                  />
                </Grid.Col>
              </Grid>
              <Divider my={30} color="gray.4" />
              <Text
                data-test-id="permanent-address-label"
                pb={10}
                c={"var(--mantine-color-theme-6)"}
              >
                Permanent Address
              </Text>
              <Grid>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <Select
                    name="country"
                    data={[]}
                    label="Country"
                    props={{
                      placeholder: "Select",
                      "data-test-id": "country",
                      labelProps: {
                        "data-test-id": "country-label",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <TextInput
                    name="zipCode"
                    label="Zip Code"
                    props={{
                      placeholder: "Enter Zip Code",
                      "data-test-id": "zipCode",
                      labelProps: {
                        "data-test-id": "zipCode-label",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <Select
                    name="state"
                    data={[
                      { label: "Gujrat", value: "Gj" },
                      { label: "Madhya Pradesh", value: "mp" },
                    ]}
                    label="State"
                    props={{
                      placeholder: "Select",
                      "data-test-id": "state",
                      labelProps: {
                        "data-test-id": "state-label",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <Select
                    name="city"
                    data={[]}
                    label="City"
                    props={{
                      placeholder: "Select",
                      "data-test-id": "city",
                      labelProps: {
                        "data-test-id": "city-label",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    name="addressLine1"
                    label="Address Line 1"
                    props={{
                      placeholder: "Enter Address Line 1",
                      "data-test-id": "addressLine1",
                      labelProps: {
                        "data-test-id": "addressLine1-label",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    name="addressLine2"
                    label="Address Line 2"
                    props={{
                      placeholder: "Enter Address Line 2",
                      "data-test-id": "addressLine2",
                      labelProps: {
                        "data-test-id": "addressLine2-label",
                      },
                    }}
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
                  <Text
                    data-test-id="current-address"
                    pb={10}
                    c={"var(--mantine-color-theme-6)"}
                  >
                    Current Address
                  </Text>
                  <Grid>
                    <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                      <Select
                        name="currentCountry"
                        data={[]}
                        label="Country"
                        props={{
                          placeholder: "Select",
                          "data-test-id": "current-country-",
                          labelProps: {
                            "data-test-id": "current-country-label",
                          },
                        }}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                      <TextInput
                        name="currentZipCode"
                        label="Zip Code"
                        props={{
                          placeholder: "Enter Zip Code",
                          "data-test-id": "current-zipCode",
                          labelProps: {
                            "data-test-id": "current-zipCode-label",
                          },
                        }}
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
                        props={{
                          placeholder: "Select",
                          "data-test-id": "current-state",
                          labelProps: {
                            "data-test-id": "current-state-label",
                          },
                        }}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                      <Select
                        name="currentCity"
                        data={[]}
                        label="City"
                        props={{
                          placeholder: "Select",
                          "data-test-id": "current-city",
                          labelProps: {
                            "data-test-id": "current-city-label",
                          },
                        }}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        name="currentAddressLine1"
                        label="Address Line 1"
                        props={{
                          placeholder: "Enter Address Line 1",
                          "data-test-id": "current-addressline1",
                          labelProps: {
                            "data-test-id": "current-addressline1-label",
                          },
                        }}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        name="currentAddressLine2"
                        label="Address Line 2"
                        props={{
                          placeholder: "Enter Address Line 2",
                          "data-test-id": "current-addressline2",
                          labelProps: {
                            "data-test-id": "current-addressline2-label",
                          },
                        }}
                      />
                    </Grid.Col>
                  </Grid>
                </>
              )}

              <Divider my={30} color="gray.4" />
              <Text data-test-id="" pb={10} c={"var(--mantine-color-theme-6)"}>
                Emergency Contact
              </Text>
              <Grid gutter={20}>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <TextInput
                    name="firstName"
                    label="First Name"
                    props={{
                      placeholder: "Enter First Name",
                      "data-test-id": "first-name",
                      labelProps: {
                        "data-test-id": "first-name-label",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <TextInput
                    name="lastName"
                    label="Last Name"
                    props={{
                      placeholder: "Enter Last Name",
                      "data-test-id": "first-name",
                      labelProps: {
                        "data-test-id": "first-name-label",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <TextInput
                    name="phone"
                    label="Phone Number"
                    props={{
                      "data-test-id": "first-name",
                      labelProps: {
                        "data-test-id": "first-name-label",
                      },
                    }}
                  />
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
