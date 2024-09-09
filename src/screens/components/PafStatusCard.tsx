import { Box, Text } from "@pansophictech/base";
import classes from "../../app.module.css";

const PafStatusCard = (isApproved: any) => {
  return (
    <Box className={classes.bgForms} p="sm" style={{ borderRadius: "10px" }}>
      {isApproved ? (
        <>
          <Text c="theme" fw={600} pb="sm" lts={5} tt="uppercase">
            Submitted
          </Text>
          <Text size="24px" fw="bold" pb="sm">
            Your Assessment is under review.
          </Text>
          <Text size="sm">
            You’ll receive notification within 15 days once our experts have
            approved your assessment.
          </Text>
        </>
      ) : (
        <>
          <Text c="theme" fw={600} pb="sm" lts={5} tt="uppercase">
            Approved
          </Text>
          <Text size="24px" fw="bold" pb="sm">
            Congratulations! 🎉
          </Text>
          <Text size="24px" fw="bold" pb="sm">
            Its approved.
          </Text>
          <Text
            style={{
              fontSize: "11px",
            }}
            pt={15}
            pb={10}
          >
            Go to GNOME Tab and get your reports done.
          </Text>
        </>
      )}
    </Box>
  );
};

export default PafStatusCard;
