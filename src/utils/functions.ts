export const extractFileNameAndExtensionFromUrl = (url: string) => {
    const urlParts = url.split('/');
    const fileNameWithQueryParams = urlParts[urlParts.length - 1].split('?')[0];
    const fileNameParts = fileNameWithQueryParams.split('.');
    const fileName = decodeURIComponent(fileNameParts[0]);
    const extension = fileNameParts.slice(1).join('.');
    return {
      url,
      fileName,
      extension
    };
  };