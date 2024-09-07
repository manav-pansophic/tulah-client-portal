import { FC } from "react";
import { Box, BoxComponentProps, Flex, Text } from "@pansophictech/base";
import { useFormContext, Controller } from "@pansophictech/hook-form";

interface ScaleData {
  label: string;
  color: string;
}
interface RatingScaleProps {
  label: string;
  name: string;
  data: ScaleData[];
  props?: Partial<BoxComponentProps>;
}

const RatingScale: FC<RatingScaleProps> = ({ label, name, data, props }) => {
  const { control } = useFormContext();

  return (
    <>
      <Text data-test-id={`${name}`} fw={600} size="sm">
        {label}
      </Text>
      <Flex direction="row">
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              {data?.map((color: ScaleData, index: number) => (
                <Box
                  key={index}
                  data-test-id={`ratingscale-${color.label}-${index}`}
                  style={{
                    backgroundColor: color.color,
                    width: "60px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    border:
                      +value === index + 1
                        ? `2px solid ${
                            index >= data.length / 2 ? "white" : "black"
                          }`
                        : "none",
                  }}
                  onClick={() => onChange(index + 1)}
                  {...props}
                >
                  <Text
                    data-test-id={`lable-${color.label}-${index}`}
                    style={{
                      color: index < data.length / 2 ? "black" : "white",
                    }}
                  >
                    {color.label}
                  </Text>
                </Box>
              ))}
            </>
          )}
        />
      </Flex>
    </>
  );
};

export default RatingScale;
