import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ChangeLogPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[172px] items-center justify-start mx-auto w-full">
        <div className="h-[609px] md:px-5 relative w-full">
          <Header className="flex flex-col items-center justify-center mb-[-78px] mx-auto w-full z-[1]" />
          <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
            <div className="h-[449px] relative w-full">
              <Img
                className="h-[449px] ml-auto my-auto object-cover w-[93%]"
                src="images/img_photo_449x1779.png"
                alt="photo"
              />
              <div className="absolute bg-gradient13  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[129px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[230px] mt-[85px] w-[352px]">
                  <div className="flex flex-row items-center justify-start w-[24%] md:w-full">
                    <Line className="bg-gradient  h-[21px] w-1" />
                    <Text
                      className="bg-gray-900_7f justify-center px-[11px] text-sm text-white-A700 w-auto"
                      size="txtRubikRomanRegular14"
                    >
                      Updates
                    </Text>
                  </div>
                  <Text
                    className="md:text-5xl text-6xl text-white-A700 w-auto"
                    size="txtRubikRomanBold60"
                  >
                    Change Log
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900_03 flex flex-col items-center justify-center max-w-[762px] md:px-5 px-[81px] py-24 w-full">
          <div className="flex md:flex-col flex-row gap-[37px] items-center justify-center w-[600px] md:w-full">
            <Text
              className="sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 w-auto"
              size="txtRubikRomanBold35"
            >
              Version 01
            </Text>
            <Button
              className="cursor-pointer font-krub min-w-[381px] sm:min-w-full text-base text-center"
              shape="square"
              color="blue_gray_900_03"
              size="sm"
              variant="fill"
            >
              Initial TransitFlow Webflow Template Release
            </Button>
          </div>
        </div>
        <Footer className="flex font-krub items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ChangeLogPage;
