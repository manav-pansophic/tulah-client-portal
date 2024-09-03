import { FC, ReactNode } from "react";
import BGImage from "../../assets/img/bg.png";
import { BackgroundImage } from "@pansophictech/base";

const MainBackgroundImage: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <BackgroundImage src={BGImage} style={{ height: "100vh", width: "100vw" }}>
      {children}
    </BackgroundImage>
  );
};

export default MainBackgroundImage;
