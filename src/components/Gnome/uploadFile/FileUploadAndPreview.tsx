import {
  ActionIcon,
  Box,
  Flex,
  InputLabel,
  Stack,
  Text
} from "@pansophictech/base";
import {
  Dropzone,
  DropzoneProps,
  FileRejection,
  FileWithPath,
} from "@pansophictech/dropzone";
import { RiUpload2Fill } from "@remixicon/react";
import { IconX } from "@tabler/icons-react";
import { FC, useState } from "react";
import { Controller, useFormContext } from "@pansophictech/hook-form";
import AcceptedFileTypeCard from "./AcceptedFileTypeCard";
import RejectedFileTypeCard from "./RejectedFileTypeCard";

export interface IFileUpload {
  name: string;
  accept: string[];
  allowedMessage: string;
  withAsterisk?: boolean;
  label?: string;
  pickFileSize?: boolean;
  fileSize?: number;
  props?: Partial<DropzoneProps>;
  cardHeight?: number;
  fileDesc?: string;
  subName?: string;
}
const FileUploadAndPreview: FC<IFileUpload> = ({
  name,
  accept,
  allowedMessage,
  label,
  pickFileSize = false,
  withAsterisk,
  props,
  cardHeight = 250,
  fileSize,
  fileDesc,
  subName,
}) => {
  const [localFiles, setLocalFiles] = useState<
    FileWithPath[] | FileRejection[] | any
  >([]);
  const { control, setValue, setError } = useFormContext();
  const [allowedStatus, setAllowedStatus] = useState<{
    accepted: boolean;
    rejected: boolean;
  }>({
    accepted: false,
    rejected: false,
  });

  return (
    <Box>
      {label && (
        <InputLabel mb={5}>
          {label} {""}
          {withAsterisk && (
            <Text
              component="span"
              c="var(--mantine-color-error)"
              size="sm"
              inline
            >
              *
            </Text>
          )}
        </InputLabel>
      )}
      <Box>
        <Controller
          control={control}
          name={name}
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            const fileVal = typeof value;

            // handle accepted file drop
            const handleFileDrop = (files: FileWithPath[]) => {
              setLocalFiles(files);
              setAllowedStatus((prev) => {
                return {
                  ...prev,
                  accepted: true,
                  rejected: false,
                };
              });
              setError(name, null);
              onChange(files);
            };

            // Handle Rejected Drop
            const handleRejectedDrop = (files: FileRejection[]) => {
              setLocalFiles(files);
              setError(name, { message: "This file is not allowed" });
              setAllowedStatus((prev) => {
                return {
                  ...prev,
                  accepted: false,
                  rejected: true,
                };
              });
              onChange(files);
            };

            return (
              <Box>
                <Box
                  pos="relative"
                  className="group"
                  style={{
                    border: error?.message
                      ? "1px dashed var(--mantine-color-error)"
                      : "1px dashed var(--mantine-color-theme-6)",
                    borderRadius: "var(--mantine-radius-sm)",
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.01))",
                  }}
                >
                  <Dropzone
                    onDrop={(files) => handleFileDrop(files)}
                    onReject={(files) => handleRejectedDrop(files)}
                    accept={accept}
                    multiple={props?.multiple ?? false}
                    {...props}
                  >
                    <Box
                      pos="relative"
                      style={{ cursor: "pointer" }}
                      mih={cardHeight}
                    >
                      {!localFiles?.length ? (
                        <Box ta="center" pos="relative" mih={cardHeight}>
                          {fileVal === "string" && value ? (
                            <AcceptedFileTypeCard
                              files={null}
                              isMultiple={props?.multiple ?? false}
                              url={value}
                              cardHeight={cardHeight}
                            />
                          ) : (
                            <Dropzone.Idle>
                              <Stack
                                mih={cardHeight}
                                p="md"
                                align="center"
                              >
                                {/* <Image
                                  w={cardHeight - 80}
                                  h={cardHeight - 80}
                                  mx="auto"
                                  src={uploadIcon}
                                  alt="Upload File"
                                /> */}
                                <RiUpload2Fill color="var(--mantine-color-theme-6)" />
                                <Box>
                                  <Text size="md" fw={500} c="theme">
                                    {subName}
                                  </Text>
                                  <Text size={"10px"} mt={7}>
                                    {fileDesc}
                                  </Text>
                                </Box>
                              </Stack>
                            </Dropzone.Idle>
                          )}
                        </Box>
                      ) : (
                        <Box>
                          {localFiles?.[0]?.["errors"]?.length > 0 ? (
                            <Flex
                              pos="relative"
                              align="center"
                              mih={cardHeight}
                            >
                              <Dropzone.Reject>
                                <RejectedFileTypeCard
                                  size={
                                    fileSize
                                      ? fileSize
                                      : data?.company?.image_size
                                  }
                                  files={localFiles as FileRejection[]}
                                  cardHeight={cardHeight}
                                />
                              </Dropzone.Reject>
                              {allowedStatus.rejected && (
                                <RejectedFileTypeCard
                                  size={null}
                                  files={localFiles as any}
                                  cardHeight={cardHeight}
                                />
                              )}
                            </Flex>
                          ) : (
                            <Flex pos="relative" mih={cardHeight}>
                              <Dropzone.Accept>
                                <AcceptedFileTypeCard
                                  cardHeight={cardHeight}
                                  files={localFiles as FileWithPath[]}
                                  isMultiple={props?.multiple ?? false}
                                />
                              </Dropzone.Accept>
                              {allowedStatus.accepted && (
                                <AcceptedFileTypeCard
                                  cardHeight={cardHeight}
                                  files={localFiles as FileWithPath[]}
                                  isMultiple={props?.multiple ?? false}
                                />
                              )}
                            </Flex>
                          )}
                        </Box>
                      )}
                    </Box>
                  </Dropzone>

                  {(value || localFiles?.length > 0) && (
                    <Box
                      pos="absolute"
                      top={5}
                      right={5}
                      className="group-hover:scale-100 scale-0 transform transition-transform"
                    >
                      <ActionIcon
                        onClick={() => {
                          setValue(name, "");
                          setLocalFiles([]);
                          withAsterisk
                            ? setError(name, {
                                type: "required",
                                message: "This field is required",
                              })
                            : setError(name, null);
                        }}
                      >
                        <IconX stroke={1.5} />
                      </ActionIcon>
                    </Box>
                  )}
                </Box>
                {error?.message && (
                  <Text fz="sm" mt={3} c="var(--mantine-color-error)">
                    {error?.message}
                  </Text>
                )}
              </Box>
            );
          }}
        />
      </Box>
    </Box>
  );
};

export default FileUploadAndPreview;
