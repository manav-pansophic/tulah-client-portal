import { Box, Button, Divider, Grid, Text } from "@pansophictech/base";
import "../../layout/layout.css";
import {
  DateInput,
  FormProvider,
  //   InputPhone,
  Select,
  TextInput,
  useForm,
} from "@pansophictech/hook-form";

const RegistrationForm = () => {
  const methods = useForm<any>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    // resolver: zodResolver(LoginSchema),
    defaultValues: {},
  });

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
                  data={[]}
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
                <DateInput
                  name="email"
                  label="Email Address"
                  props={{ placeholder: "Enter Email Address" }}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                <DateInput
                  name="phoneNo"
                  label="Phone Number"
                  props={{ placeholder: "Enter Phone Number" }}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                <Select
                  name="nationality"
                  data={[]}
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
                  data={[]}
                  label="Country"
                  props={{ placeholder: "Select" }}
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
                  data={[]}
                  label="State"
                  props={{ placeholder: "Select" }}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                <Select
                  name="city"
                  data={[]}
                  label="City"
                  props={{ placeholder: "Select" }}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  name="permanentAddress"
                  label="Permanent Address"
                  props={{ placeholder: "Enter Permanent Address" }}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  name="permanentAddress"
                  label="Permanent Address"
                  props={{ placeholder: "Enter Permanent Address" }}
                />
              </Grid.Col>
            </Grid>
            <Divider my={30} color="gray.4" />
            <Text pb={10} c={"var(--mantine-color-theme-6)"}>
              Emergency Contact
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
                  name="lastName"
                  label="Last Name"
                  props={{ placeholder: "Enter Last Name" }}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                <TextInput name="phone" label="Phone Number" />
                {/* <InputPhone name="phone" label="Phone Number" /> */}
              </Grid.Col>
            </Grid>
            <Box pos={"fixed"} bottom={30} right={30}>
              <Button type="button" variant="outline" radius={"xl"} mr={10}>
                Cancel
              </Button>
              <Button type="submit" radius={"xl"}>
                Save
              </Button>
            </Box>
          </Box>
        </form>
      </FormProvider>
    </>
  );
};

export default RegistrationForm;
