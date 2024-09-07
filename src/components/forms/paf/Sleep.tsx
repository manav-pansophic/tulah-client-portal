import { Box, Stack, Text } from "@pansophictech/base";
import RatingScale from "../components/RatingScale";

const Sleep = () => {
  //   const colors = ["#CCC1D2", "#AB98B4", "#897098", "#715482"];

  // const sleep_per_day = [
  //   { color: "#BBC6DB", name: "< 4 hrs" },
  //   { color: "#A9B7D6", name: "4-6 hrs" },
  //   { color: "#758BBD", name: "6-8 hrs" },
  //   { color: "#6079B4", name: "> 8 hrs" },
  // ];
  const colorsData = [
    { color: "#CCC1D2", label: "1" },
    { color: "#AB98B4", label: "2" },
    { color: "#897098", label: "3" },
    { color: "#715482", label: "4" },
    { color: "#5D3A70", label: "5" },
    { color: "#57346A", label: "6" },
    { color: "#512D65", label: "7" },
    { color: "#4B295E", label: "8" },
    { color: "#452257", label: "9" },
    { color: "#3D1E4D", label: "10" },
  ];

  const sleepHours = [
    { color: "#CCC1D2", label: "< 4 hrs" },
    { color: "#AB98B4", label: "4-6 hrs" },
    { color: "#897098", label: "6-8 hrs" },
    { color: "#715482", label: "> 8 hrs" },
  ];

  return (
    <Box>
      <Text data-test-id="sleep-title" c="theme" fw={600} pb="sm">
        Sleep
      </Text>
      <Stack gap="lg">
        <RatingScale
          name="sleep"
          label="On a scale of 1 to 10, with 1 being poor and 10 being excellent, how
        would you rate your quality of sleep?"
          data={colorsData}
        />
        <RatingScale
          name="sleep-hours"
          label="On average how many hours would you sleep per day?"
          data={sleepHours}
          props={{ w: "100px" }}
        />
      </Stack>
    </Box>
  );
};
{
  /* <Text fw={600} size="sm" pt="lg" pb="xs" data-test-id="sleep_per_day">
        On average how many hours would you sleep per day?
      </Text>
      <Flex direction="row">
        {sleep_per_day.map((item, index) => (
          <Box
            key={index}
            style={{
              backgroundColor: item.color,
              width: "100px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            data-test-id={`sleep_per_day_${index}`}
          >
            <Text
              style={{
                color: index < 2 ? "black" : "white",
              }}
              data-test-id={`sleep_per_day_text_${index}`}
            >
              {item.name}
            </Text>
          </Box>
        ))}
      </Flex> */
}

export default Sleep;
