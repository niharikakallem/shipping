import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const LiecensesPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-full">
        <div className="h-[609px] md:px-5 relative w-full">
          <Header className="flex flex-col items-center justify-center mb-[-78px] mx-auto w-full z-[1]" />
          <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
            <div className="h-[449px] md:h-[450px] relative w-full">
              <Img
                className="h-[449px] ml-auto my-auto object-cover w-[85%]"
                src="images/img_photo_449x1624.png"
                alt="photo"
              />
              <div className="absolute bg-gradient13  flex flex-col h-full inset-[0] items-start justify-center m-auto p-36 md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[216px] mt-[63px] w-[612px] md:w-full">
                  <div className="flex flex-row items-center justify-start w-[13%] md:w-full">
                    <Line className="bg-gradient  h-[19px] w-1" />
                    <Text
                      className="bg-gray-900_7f justify-center px-[7px] text-sm text-white-A700 w-auto"
                      size="txtRubikRomanRegular14"
                    >
                      Licenses
                    </Text>
                  </div>
                  <Text
                    className="md:text-5xl text-6xl text-white-A700 w-auto"
                    size="txtRubikRomanBold60"
                  >
                    All Assets Liecenses
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[78px] items-start justify-start max-w-[1197px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1197px] w-full">
            <Text
              className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01 w-auto"
              size="txtRubikRomanBold35Gray90001"
            >
              Icon & Graphics
            </Text>
            <div className="flex flex-1 flex-col font-lato gap-5 items-start justify-start max-w-[800px] w-full">
              <Text
                className="leading-[147.50%] text-base text-blue_gray-500_01"
                size="txtLatoRegular16"
              >
                <>
                  All graphical assets in this template are licensed for
                  personal and commercial use. If you&#39;d like to use a
                  specific asset, please check the license below.
                  <br />
                  <br />
                  The iconography used in this Webflow Template are licensed for
                  free personal and commercial use. If you&#39;d like to use any
                  specific Icon, you can check the licenses and download the
                  images for free on phosphoricons.
                </>
              </Text>
              <div className="flex flex-row font-rubik gap-2 items-start justify-start w-[42%] md:w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900_01"
                  size="txtRubikRomanBold30"
                >
                  Phosphor Icon:
                </Text>
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01"
                  size="txtRubikRomanRegular25"
                >
                  Licenses
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1197px] w-full">
            <Text
              className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01 w-auto"
              size="txtRubikRomanBold35Gray90001"
            >
              Photography
            </Text>
            <div className="flex flex-1 flex-col font-krub gap-[34px] items-start justify-start max-w-[800px] w-full">
              <Text
                className="leading-[147.50%] max-w-[800px] md:max-w-full text-base text-blue_gray-500_01"
                size="txtKrubRegular16Bluegray50001"
              >
                <>
                  All images used in this Webflow Template are licensed for free
                  personal and commercial use. If you&#39;d like to use any
                  specific image, you can check the licenses and download the
                  images for free on Unsplash, Pexels, Pixabay, Freepik.
                </>
              </Text>
              <div className="flex flex-col gap-[22px] items-start justify-start max-w-[800px] w-full">
                <div className="flex flex-row font-rubik gap-[7px] items-start justify-start w-[28%] md:w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900_01"
                    size="txtRubikRomanBold30"
                  >
                    Pexels :
                  </Text>
                  <Text
                    className="mt-1 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01"
                    size="txtRubikRomanRegular25"
                  >
                    Licenses
                  </Text>
                </div>
                <Text
                  className="leading-[147.50%] max-w-[800px] md:max-w-full text-base text-blue_gray-500_01"
                  size="txtKrubRegular16Bluegray50001"
                >
                  Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                  Image 8, Image 9, Image 10, Image 11, Image 12, Image 13,
                  Image 14, Image 15, Image 16, Image 17, Image 18, Image 19,
                  Image 20, Image 21, Image 22, Image 23, Image 24, Image 25
                </Text>
              </div>
              <div className="flex flex-col gap-[22px] items-start justify-start max-w-[692px] w-full">
                <div className="flex flex-row font-rubik gap-2 items-start justify-start w-[39%] md:w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900_01"
                    size="txtRubikRomanBold30"
                  >
                    Unsplash :
                  </Text>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01"
                    size="txtRubikRomanRegular25"
                  >
                    Licenses
                  </Text>
                </div>
                <Text
                  className="text-base text-blue_gray-500_01 w-auto"
                  size="txtKrubRegular16Bluegray50001"
                >
                  Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                  Image 8, Image 9, Image 10
                </Text>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row md:gap-10 gap-[315px] items-center justify-start max-w-[1031px] w-full">
            <Text
              className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01 w-auto"
              size="txtRubikRomanBold35Gray90001"
            >
              Font
            </Text>
            <Text
              className="text-base text-blue_gray-500_01 w-auto"
              size="txtLatoRegular16"
            >
              <span className="text-blue_gray-500_01 font-krub text-left font-normal">
                TransitFlow
              </span>
              <span className="text-blue_gray-500_01 font-krub text-left font-normal">
                {" "}
                template uses free licensed{" "}
              </span>
              <span className="text-gray-900_01 font-krub text-left font-semibold">
                Google Fonts
              </span>
              <span className="text-blue_gray-500_01 font-krub text-left font-normal">
                . please check{" "}
              </span>
              <span className="text-gray-900_01 font-krub text-left font-semibold">
                Rubik
              </span>
              <span className="text-blue_gray-500_01 font-krub text-left font-normal">
                {" "}
                and{" "}
              </span>
              <span className="text-gray-900_01 font-krub text-left font-semibold">
                Krub.
              </span>
            </Text>
          </div>
        </div>
        <Footer className="flex font-krub items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default LiecensesPage;
