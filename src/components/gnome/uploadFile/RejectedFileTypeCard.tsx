import rejectedIcon from "../../../assets/img/misc/rejected.svg";
import { FC } from "react";
import { Image, Paper, Stack, Text } from "@pansophictech/base";
import { FileRejection } from "@pansophictech/dropzone";
import { ErrorCode } from "react-dropzone-esm";

const RejectedFileTypeCard: FC<{
  size: number | any;
  files: FileRejection[];
  cardHeight: number;
}> = ({ size, files, cardHeight }) => {
  const errorMessages = {
    [ErrorCode.FileInvalidType]: `The file you're attempting to upload is not allowed. Please try one of the allowed file types with a max size of ${size} MB.`,
    [ErrorCode.FileTooLarge]: `You have exceeded the limit for allowed file size. Kindly upload file with a size less than ${size} MB`,
    [ErrorCode.FileTooSmall]: "Minimum upload file size is 10 KB",
    [ErrorCode.TooManyFiles]:
      "Multiple file uploads are currently disabled. Kindly proceed with single-file upload.",
  };

  const { code } = files?.[0]?.errors?.[0] || {};
  const errorMessage =
    errorMessages[code] || "Invalid File Upload, Please contact support.";

  return (
    <Paper
      p="md"
      h="100%"
      w="100%"
      className="overflow-hidden"
      bg="transparent"
      mih={cardHeight}
    >
      <Stack>
        <Image
          maw={cardHeight - 70}
          style={{ transform: "rotate(45deg)" }}
          mx="auto"
          src={rejectedIcon}
          alt="Rejected"
        />
        <Text ta="center" fz={13} maw={500} mx="auto">
          {errorMessage}
        </Text>
      </Stack>
    </Paper>
  );
};

export default RejectedFileTypeCard;
