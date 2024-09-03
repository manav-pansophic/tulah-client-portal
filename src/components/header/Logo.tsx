import { FC } from "react";
import { Box, Image } from "@pansophictech/base";

const Logo: FC<{ src: any }> = ({ src }) => {
  return (
    <Box p="sm">
      <Image
        src={src}
        width="100%"
        height="50px"
        style={{
          objectFit: "contain",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    </Box>
  );
};

export default Logo;
