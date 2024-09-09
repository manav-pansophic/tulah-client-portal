import {
  Box,
  Button,
  Flex,
  Group,
  ScrollAreaAutosize,
  Select,
  Stepper,
} from "@pansophictech/base";
import { FormProvider, useForm } from "@pansophictech/hook-form";
import { useEffect, useState } from "react";
import BasicInformation from "../components/forms/paf/BasicInformation";
import Nutrition from "../components/forms/paf/Nutrition";
import Allergie from "../components/forms/paf/Allergie";
import Skin from "../components/forms/paf/Skin";
import Medical from "../components/forms/paf/Medical";
import ExerciseTolerance from "../components/forms/paf/ExerciseTolerance";
import Smoke from "../components/forms/paf/Smoke";
import PillowPreference from "../components/forms/paf/PillowPreference";
import AdditionalInformation from "../components/forms/paf/AdditionalInformation";
import { RiCircleFill } from "@remixicon/react";
import Sleep from "../components/forms/paf/Sleep";
import PafStatusCard from "./components/PafStatusCard";
import { useSelector } from "react-redux";
import { useSaveAssessmentMutation } from "../services/assessment/assessmentServices";
import { useGetAllGuestListQuery } from "../services/guests/guestServices";
import { createGuestSelectOptions } from "../helper/functions";
import { toast } from "react-toastify";

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

export const PafScreen = () => {
  const [active, setActive] = useState(0);
  const { guest_id, assessment } = useSelector((state) => state.assessmentData);

  const nextStep = () =>
    setActive((current) => (current < steps.length ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {},
  });

  const { reset, getValues } = methods;

  const [saveAssessment, { isLoading, isSuccess, error }] =
    useSaveAssessmentMutation();

  useEffect(() => {
    reset(assessment, { keepDirtyValues: true });
  }, [assessment]);

  const handleFormSubmit = async (values: any) => {
    console.log(values);
    saveAssessment({
      guest_id: "",
      ...values,
    });
  };

  const { data } = useGetAllGuestListQuery();
  const guestList = data?.results;
  const guestListOption = guestList?.length
    ? createGuestSelectOptions(guestList)
    : [];

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleFormSubmit)}
        className="relative"
      >
        <Flex>
          <Box className="layout-bg-color navbar-layout" p={"sm"}>
            <ScrollAreaAutosize h="calc(100vh - 125px)">
              {/* <UserDropdown /> */}
              <Box py={3}>
                <Select
                  defaultValue={"user"}
                  data={guestListOption || []}
                  w={"100%"}
                  pb={13}
                  placeholder="Select Guest"
                />
              </Box>
              <Stepper
                orientation="vertical"
                active={active}
                onStepClick={setActive}
                iconSize={17}
                styles={{
                  stepLabel: {
                    fontSize: 14,
                    textTransform: "uppercase",
                    fontWeight: 500,
                  },
                }}
              >
                {steps.map((step, index) => (
                  <Stepper.Step
                    allowStepSelect={false}
                    allowStepClick={false}
                    icon={
                      active == index ? (
                        <RiCircleFill
                          color="var(--mantine-color-theme-6)"
                          size={15}
                        />
                      ) : (
                        <></>
                      )
                    }
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
          </Box>
          <Box
            className="layout-bg-color main-layout"
            h="calc(100vh - 110px)"
            w={"100%"}
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
                    size="md"
                    // leftSection={<IconChevronLeft stroke={1.5} size={16} />}
                  >
                    BACK
                  </Button>
                )}
                {active < steps.length - 1 && (
                  <Button
                    radius="xl"
                    type="button"
                    onClick={nextStep}
                    size="md"
                  >
                    NEXT
                  </Button>
                )}
                {active + 1 === steps.length && (
                  <Button radius="xl" type="submit" variant="filled" size="md">
                    Submit For Approval
                  </Button>
                )}
              </Group>
            </Flex>
          </Box>
        </Flex>
      </form>
    </FormProvider>
  );
};
