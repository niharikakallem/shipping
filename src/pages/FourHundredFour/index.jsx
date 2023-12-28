import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const FourHundredFourPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-rubik items-center justify-start mx-auto w-full">
        <div className="h-[475px] md:px-5 relative w-full">
          <Header className="flex flex-col items-center justify-center mb-[-78px] mx-auto w-full z-[1]" />
          <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
            <div className="h-[315px] relative w-full">
              <Img
                className="h-[315px] ml-auto my-auto object-cover w-[84%]"
                src="images/img_photo_315x1608.png"
                alt="photo"
              />
              <div className="absolute bg-gradient13  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[72px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[287px] mt-[72px] w-[428px] sm:w-full">
                  <div className="flex flex-row items-start justify-start w-[18%] md:w-full">
                    <Line className="bg-gradient  h-5 w-1" />
                    <Text
                      className="bg-gray-900_7f justify-center px-3 py-0.5 text-sm text-white-A700 w-auto"
                      size="txtRubikRomanRegular14"
                    >
                      Pricing
                    </Text>
                  </div>
                  <Text
                    className="md:text-5xl text-6xl text-white-A700 w-[428px]"
                    size="txtRubikRomanBold60"
                  >
                    Our Best Price
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[97px] md:px-5 relative w-[704px] md:w-full">
          <Text
            className="max-w-[704px] md:max-w-full mx-auto md:text-5xl text-[350px] text-center text-gray-900_01 w-full"
            size="txtRubikRomanSemiBold350"
          >
            <span className="text-gray-900_01 font-rubik font-semibold">4</span>
            <span className="text-yellow-700_01 font-rubik font-semibold">
              0
            </span>
            <span className="text-gray-900_01 font-rubik font-semibold">4</span>
          </Text>
          <div className="flex flex-col font-krub gap-[26px] items-center justify-start mt-[-17px] mx-auto w-[375px] sm:w-full z-[1]">
            <div className="flex flex-col gap-[7px] items-center justify-start w-[375px] sm:w-full">
              <Text
                className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900_01 w-auto"
                size="txtRubikRomanSemiBold35"
              >
                Oops! Page not found.
              </Text>
              <Text
                className="text-base text-blue_gray-500 text-center w-auto"
                size="txtKrubMedium16Bluegray500"
              >
                Let’s get you to where you need to be.
              </Text>
            </div>
            <Button
              className="cursor-pointer font-semibold min-w-[194px] text-base text-center"
              shape="square"
              size="sm"
              variant="gradient"
              color="yellow_700_orange_100"
            >
              Back to home
            </Button>
          </div>
        </div>
        <Footer className="flex font-krub items-center justify-center mt-[100px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default FourHundredFourPage;
