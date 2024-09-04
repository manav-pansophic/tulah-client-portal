import { FC, ReactNode } from "react";
import { Box, Flex, Image, Paper, Text } from "@pansophictech/base";
import { FileWithPath, MIME_TYPES } from "@pansophictech/dropzone";
import svg from "../../../assets/img/misc/files/svg.svg";
import pdf from "../../../assets/img/misc/files/pdf.svg";
import jpg from "../../../assets/img/misc/files/jpg.svg";
import doc from "../../../assets/img/misc/files/doc.svg";
import ppt from "../../../assets/img/misc/files/ppt.svg";
import xls from "../../../assets/img/misc/files/xls.svg";
import png from "../../../assets/img/misc/files/png.svg";
import webp from "../../../assets/img/misc/files/webp.svg";
import { extractFileNameAndExtensionFromUrl } from "../../../utils/functions";

const fileIConsStatic: { mime: string; icon: ReactNode; extension: string }[] =
  [
    { mime: MIME_TYPES.png, icon: png, extension: "png" },
    { mime: MIME_TYPES.jpeg, icon: jpg, extension: "jpg" },
    { mime: MIME_TYPES.svg, icon: svg, extension: "svg" },
    { mime: MIME_TYPES.webp, icon: webp, extension: "webp" },
    { mime: MIME_TYPES.pdf, icon: pdf, extension: "pdf" },
    { mime: MIME_TYPES.xls, icon: xls, extension: "xls," },
    { mime: MIME_TYPES.xlsx, icon: xls, extension: "xlsx" },
    { mime: MIME_TYPES.doc, icon: doc, extension: "doc" },
    { mime: MIME_TYPES.docx, icon: doc, extension: "docx" },
    { mime: MIME_TYPES.ppt, icon: ppt, extension: "ppt" },
    { mime: MIME_TYPES.pptx, icon: ppt, extension: "pptx" },
  ];

const getFileInfo = (file: File) => {
  const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
  const fileName = file.name;
  return { fileSizeMB, fileName };
};

const AcceptedFileTypeCard: FC<{
  files: FileWithPath[] | any;
  isMultiple: boolean;
  url?: string;
  cardHeight: number;
}> = ({ files, isMultiple, url = "", cardHeight }) => {
  const urlInfo = {
    name: url ? extractFileNameAndExtensionFromUrl(url).fileName : "",
    extension: url ? extractFileNameAndExtensionFromUrl(url).extension : "",
  };
  const fileIcon = fileIConsStatic.filter((item) => {
    const file = files?.find((file: File) => file?.type === item?.mime);
    return file !== undefined;
  });

  return (
    <Paper p="md" h="100%" w="100%" bg="transparent">
      {isMultiple ? (
        <Box className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {files?.map((file: any, i: number) => {
            return (
              <Paper withBorder p="md" key={i}>
                <Image
                  maw={cardHeight}
                  mx="auto"
                  src={fileIcon?.[0]?.icon}
                  alt="AcceptedFile"
                />
                <Text component="div" truncate="end" ta="center" mt="md">
                  {file?.name}
                </Text>
              </Paper>
            );
          })}
        </Box>
      ) : (
        <Paper p="md" mih={cardHeight + 5} className="overflow-hidden">
          <Flex align="center" justify="center" mih={cardHeight - 25}>
            {files ? (
              <Box h="100%">
                <Image
                  maw={60}
                  mx="auto"
                  src={fileIcon?.[0]?.icon}
                  alt="AcceptedFile"
                />
                <Text component="div" truncate="end" ta="center" mt="sm">
                  {getFileInfo(files?.[0]).fileName}
                </Text>
                <Text component="div" ta="center" mt="xs" fz="xs" fw={600}>
                  {getFileInfo(files?.[0]).fileSizeMB} MB
                </Text>
              </Box>
            ) : (
              <Box h="100%">
                <Image
                  maw={60}
                  mx="auto"
                  src={
                    fileIConsStatic.find(
                      (item) => item.extension === urlInfo?.extension
                    )?.icon
                  }
                  alt="AcceptedFile"
                />
                <Text component="div" ta="center" mt="xs" fz="xs" fw={600}>
                  {urlInfo?.name}.{urlInfo?.extension}
                </Text>
              </Box>
            )}
          </Flex>
        </Paper>
      )}
    </Paper>
  );
};

export default AcceptedFileTypeCard;
