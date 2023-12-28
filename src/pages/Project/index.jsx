import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ProjectPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-full">
        <div className="h-[657px] md:px-5 relative w-full">
          <Header className="flex flex-col items-center justify-center mb-[-78px] mx-auto w-full z-[1]" />
          <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
            <div className="h-[497px] relative w-full">
              <Img
                className="h-[497px] ml-auto my-auto object-cover w-[90%]"
                src="images/img_photo_497x1714.png"
                alt="photo"
              />
              <div className="absolute bg-gradient9  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[153px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[206px] mt-[83px] w-[410px] sm:w-full">
                  <div className="flex flex-row items-center justify-start w-[18%] md:w-full">
                    <Line className="bg-gradient  h-[23px] w-1" />
                    <Text
                      className="bg-gray-900_7f justify-center px-[11px] py-0.5 text-sm text-white-A700 w-auto"
                      size="txtRubikRomanRegular14"
                    >
                      Gallery
                    </Text>
                  </div>
                  <Text
                    className="md:text-5xl text-6xl text-white-A700 w-auto"
                    size="txtRubikRomanBold60"
                  >
                    Our Project
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] items-center justify-start max-w-[1199px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[30px] items-start justify-center max-w-[1199px] w-full">
            <div className="h-[346px] relative w-[32%] md:w-full">
              <Img
                className="h-[346px] m-auto object-cover w-full"
                src="images/img_image_346x380.png"
                alt="image"
              />
              <div className="absolute bg-gray-900_e8 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[132px] md:px-10 sm:px-5 w-[85%]">
                <Img className="h-7 w-7" src="images/img_map.svg" alt="map" />
              </div>
            </div>
            <Img
              className="md:flex-1 h-[346px] sm:h-auto object-cover w-[379px] md:w-full"
              src="images/img_2.png"
              alt="Two"
            />
            <Img
              className="md:flex-1 h-[346px] sm:h-auto object-cover w-[380px] md:w-full"
              src="images/img_3.png"
              alt="Three"
            />
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-start justify-center max-w-[1199px] w-full">
            <Img
              className="md:flex-1 h-[346px] sm:h-auto object-cover w-[380px] md:w-full"
              src="images/img_1.png"
              alt="One"
            />
            <Img
              className="md:flex-1 h-[346px] sm:h-auto object-cover w-[379px] md:w-full"
              src="images/img_2_346x379.png"
              alt="Two_One"
            />
            <Img
              className="md:flex-1 h-[346px] sm:h-auto object-cover w-[380px] md:w-full"
              src="images/img_3_346x380.png"
              alt="Three_One"
            />
          </div>
        </div>
        <div className="sm:h-[155px] h-[156px] md:h-[360px] md:px-5 relative w-full">
          <div className="flex flex-col m-auto w-full">
            <Line className="bg-gradient7  h-px mx-auto w-full" />
            <Line className="bg-blue_gray-100_01 h-[156px] mb-auto ml-[490px] mt-[-1px] w-px z-[1]" />
            <Line className="bg-blue_gray-100_01 h-[156px] mb-auto mt-[-1px] mx-auto w-px z-[1]" />
            <Line className="bg-blue_gray-100_01 h-[156px] mb-auto ml-auto mr-[519px] mt-[-1px] w-px z-[1]" />
          </div>
          <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-[0] items-center justify-between m-auto max-w-[1572px] w-full">
            <div className="flex flex-row gap-4 items-center justify-start w-[279px]">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_01 text-right w-auto"
                size="txtRubikRomanSemiBold50"
              >
                24
              </Text>
              <div className="bg-gradient  h-[17px] w-[17px]"></div>
              <Text
                className="text-gray-900_01 text-xl w-auto"
                size="txtLeagueSpartanRegular20"
              >
                Our Location
              </Text>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[120px] grid md:grid-cols-1 grid-cols-2 w-[48%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-row gap-[11px] items-center justify-start w-[316px]">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_01 text-right w-auto"
                  size="txtRubikRomanSemiBold50"
                >
                  1294
                </Text>
                <div className="bg-gradient  h-[17px] w-[17px]"></div>
                <Text
                  className="text-gray-900_01 text-xl w-auto"
                  size="txtLeagueSpartanRegular20"
                >
                  Delivered Packages
                </Text>
              </div>
              <div className="flex flex-row gap-[11px] items-center justify-start w-[316px]">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_01 w-auto"
                  size="txtRubikRomanSemiBold50"
                >
                  3594
                </Text>
                <div className="bg-gradient  h-[17px] w-[17px]"></div>
                <Text
                  className="text-gray-900_01 text-xl w-auto"
                  size="txtLeagueSpartanRegular20"
                >
                  Satisfied Clients
                </Text>
              </div>
            </List>
            <div className="flex flex-row gap-[11px] items-center justify-start w-[301px]">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_01 text-right w-auto"
                size="txtRubikRomanSemiBold50"
              >
                247+
              </Text>
              <div className="bg-gradient  h-[17px] w-[17px]"></div>
              <Text
                className="text-gray-900_01 text-xl w-auto"
                size="txtLeagueSpartanRegular20"
              >
                Owned Vehicles
              </Text>
            </div>
          </div>
        </div>
        <Footer className="flex font-krub items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProjectPage;
