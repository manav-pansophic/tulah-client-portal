import {
  Box,
  Button,
  Flex,
  Grid,
  Group,
  ScrollAreaAutosize,
  Stepper,
  Text,
} from "@pansophictech/base";
import classes from "../../../app.module.css";
import { RiArrowLeftSLine, RiCircleFill } from "@remixicon/react";
import { useState } from "react";
import { FormProvider, Select, useForm } from "@pansophictech/hook-form";
import BasicInformation from "./BasicInformation";
import Nutrition from "./Nutrition";
import Skin from "./Skin";
import ExerciseTolerance from "./ExerciseTolerance";
import Sleep from "./Sleep";
import Smoke from "./Smoke";
import PillowPreference from "./PillowPreference";
import AdditionalInformation from "./AdditionalInformation";
import Allergie from "./Allergie";
import Medical from "./Medical";
import PafStatusCard from "../../../screens/components/PafStatusCard";
import UserDropdown from "../../../screens/components/UserDropdown";

const steps = [
  {
    label: "Basic Information",
    component: <BasicInformation />,
  },
  {
    label: "Nutrition",
    component: <Nutrition />,
  },
  { label: "Allergies", component: <Allergie /> },
  { label: "Skin", component: <Skin /> },
  { label: "Medical", component: <Medical /> },
  { label: "Exercise Tolerance", component: <ExerciseTolerance /> },
  { label: "Sleep", component: <Sleep /> },
  { label: "Smoke", component: <Smoke /> },
  { label: "Pillow Preference", component: <PillowPreference /> },
  { label: "Additional Information", component: <AdditionalInformation /> },
];

const PafForm = () => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < steps.length ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {},
  });

  const handleFormSubmit = async (values: any) => {
    console.log(values);
  };
  const pafUserData = [
    {
      name: "Pedro Abbott",
      avatar: "",
      dropVal: {
        value: "Pedro Abbott",
        label: "Pedro Abbott",
      },
    },
    {
      name: "Belinda Abbott",
      avatar: "",
      dropVal: {
        value: "Belinda Abbott",
        label: "Belinda Abbott",
      },
    },
  ];
  return (
    <Box>
      <Box
        className={classes.bgForms}
        style={{ height: "80px", borderRadius: "10px" }}
      >
        <Flex align="center" justify="start" style={{ height: "100%" }}>
          <RiArrowLeftSLine size={40} />
          <Text fw={500}>PRE ASSESSMENT FORM</Text>
        </Flex>
      </Box>
      <Box mt={10} p={10}>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(handleFormSubmit)}
            className="relative"
          >
            <Grid>
              <Grid.Col
                span={2}
                h="calc(100vh - 125px)"
                className={classes.bgForms}
                mr={10}
                style={{ borderRadius: "10px" }}
              >
                <ScrollAreaAutosize h="calc(100vh - 125px)">
                  <UserDropdown />
                  <Stepper
                    size={"xs"}
                    orientation="vertical"
                    active={active}
                    onStepClick={setActive}
                    data-el="sidebar_card"
                    styles={{
                      root: {
                        width: "250px",
                        padding: "10px",
                        marginBottom: "-10px",
                      },

                      stepLabel: {
                        fontSize: 14,
                        position: "relative",
                        top: 6,
                        textTransform: "uppercase",
                        fontWeight: 500,
                      },
                    }}
                  >
                    {steps.map((step, index) => (
                      <Stepper.Step
                        icon={
                          active == index ? (
                            <RiCircleFill
                              color="var(--mantine-color-theme-6)"
                              size={20}
                            />
                          ) : (
                            <></>
                          )
                        }
                        // icon={<RiCircleFill size={20} />}
                        key={index}
                        label={step.label}
                        data-el="sidebar_card_step"
                        data-el-val={step.label}
                        style={{
                          verticalSeparator: { top: 0 },
                          stepIcon: { display: "none" },
                          stepLabel: {
                            fontSize: 14,
                            position: "relative",
                            top: 6,
                            textTransform: "uppercase",
                            fontWeight: 500,
                            color: active === index ? "pink" : "inherit",
                          },
                        }}
                      />
                    ))}
                  </Stepper>
                  <PafStatusCard isApproved={true} />
                </ScrollAreaAutosize>
              </Grid.Col>
              <Grid.Col
                span={9.93}
                className={classes.bgForms}
                style={{ borderRadius: "10px" }}
              >
                <Box style={{ flexGrow: 1, padding: "20px" }}>
                  {steps[active]?.component}
                </Box>
                <Flex
                  justify={"flex-end"}
                  mr={20}
                  mb={20}
                  styles={{
                    root: {
                      position: "absolute",
                      right: 0,
                      bottom: 0,
                      margin: "20px",
                    },
                  }}
                >
                  <Group justify="center">
                    {active > 0 && (
                      <Button
                        radius="xl"
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        data-el="button_back"
                        data-el-val="back"
                        size="lg"
                        data-test-id="paf-back-button"
                        // leftSection={<IconChevronLeft stroke={1.5} size={16} />}
                      >
                        Back
                      </Button>
                    )}
                    {active < steps.length - 1 ? (
                      <Button
                        radius="xl"
                        type="button"
                        onClick={nextStep}
                        size="lg"
                        data-test-id="paf-next-button"
                      >
                        Next
                      </Button>
                    ) : (
                      <Button
                        radius="xl"
                        type="submit"
                        variant="filled"
                        size="lg"
                        data-test-id="paf-submit-button"
                      >
                        Submit For Approval
                      </Button>
                    )}
                  </Group>
                </Flex>
              </Grid.Col>
            </Grid>
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};

export default PafForm;

{
  /* <Box w={"100%"}>
<Select
  name="identify_gender"
  data={[
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]}
  props={{
    placeholder: "--Select--",
    leftSection: <Avatar
// src={user?.image}
tt="capitalize"
color="teal"
size={45}
radius="xl"
styles={{ root: { cursor: "pointer" } }}
>
sd
{/* {user?.first_name ? `${user?.first_name?.charAt(0)}` : `${loggedInUser?.first_name?.charAt(0)}`} */
}
// </Avatar>
//   }}

// />
// </Box> */}
