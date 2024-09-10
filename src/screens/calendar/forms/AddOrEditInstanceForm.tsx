import {
  Box,
  Button,
  Divider,
  Flex,
  Paper,
  ScrollArea,
  Stack,
  Text,
} from "@pansophictech/base";
import {
  Checkbox,
  DateInput,
  DateTimePicker,
  FormProvider,
  NumberInput,
  RadioGroup,
  Select,
  Switch,
  TextInput,
  Textarea,
  useForm,
} from "@pansophictech/hook-form";

export const AddOrEditInstanceForm = ({
  initialState,
  type,
  taskId,
  close,
}: any) => {
  const eventType = initialState?.name?.toLowerCase();
  const methods = useForm<any>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    // resolver: zodResolver(CalendarAddEditSchema),
    defaultValues: {},
  });
  const { watch } = methods;

  const handleFormSubmit = async (values: any) => {
    console.log(values);
  };
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <Paper p={20}>
            <ScrollArea h="calc(100vh - 180px)">
              <Stack>
                <TextInput
                  name="title"
                  props={{ placeholder: "Event Title" }}
                />
                <Select
                  name="location"
                  data={[]}
                  props={{ placeholder: "Enter Location" }}
                />
                <Divider color="gray.4" my={10} />
                <Checkbox name="allDayEvent" label="All-Day Event" />
                <Flex w={"100%"} gap={20}>
                  <DateTimePicker
                    name="start"
                    label="Starts:"
                    props={{
                      style: {
                        width: "100%",
                      },
                    }}
                  />
                  <DateTimePicker
                    name="end"
                    label="Ends:"
                    props={{
                      style: {
                        width: "100%",
                      },
                    }}
                  />
                </Flex>
                <Select
                  name="repeat"
                  data={[]}
                  props={{ placeholder: "Select" }}
                />
                <Divider color="gray.4" my={10} />
                <TextInput name="search" />
                <Textarea name="AdditionalNotes" />
              </Stack>
            </ScrollArea>
            <Divider color="gray.4" my={10} />
            <Flex align="center" p="sm">
              <Button
                w={300}
                type="submit"
                variant="outline"
                // loading={isLoading || updateEvent}
                // disabled={!methods.formState.isValid}
              >
                Save
              </Button>
            </Flex>
          </Paper>
        </form>
      </FormProvider>
    </>
  );
};
