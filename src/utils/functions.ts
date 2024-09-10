import moment from "moment";

export const extractFileNameAndExtensionFromUrl = (url: string) => {
  const urlParts = url.split("/");
  const fileNameWithQueryParams = urlParts[urlParts.length - 1].split("?")[0];
  const fileNameParts = fileNameWithQueryParams.split(".");
  const fileName = decodeURIComponent(fileNameParts[0]);
  const extension = fileNameParts.slice(1).join(".");
  return {
    url,
    fileName,
    extension,
  };
};

export const getStartOrEndFromDate = (date: Date) => {
  const start = moment(date)
    .subtract(1, "months")
    .startOf("month")
    .format("yyyy-MM-DD");
  const end = moment(date).add(1, "months").endOf("month").format("yyyy-MM-DD");
  return { start, end };
};
