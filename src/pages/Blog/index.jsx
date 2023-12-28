import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const BlogPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-full">
        <div className="h-[657px] md:px-5 relative w-full">
          <Header className="flex flex-col items-center justify-center mb-[-78px] mx-auto w-full z-[1]" />
          <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
            <div className="h-[497px] md:h-[498px] relative w-full">
              <Img
                className="h-[497px] m-auto object-cover w-full"
                src="images/img_photo_497x1920.png"
                alt="photo"
              />
              <div className="absolute bg-gradient11  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[158px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[202px] mt-[79px] w-[491px] sm:w-full">
                  <div className="flex flex-row items-center justify-start w-[12%] md:w-full">
                    <Line className="bg-gradient  h-[23px] w-1" />
                    <Text
                      className="bg-gray-900_7f justify-center pt-1 px-[11px] text-sm text-white-A700 w-auto"
                      size="txtRubikRomanRegular14"
                    >
                      Blog
                    </Text>
                  </div>
                  <Text
                    className="md:text-5xl text-6xl text-white-A700 w-auto"
                    size="txtRubikRomanBold60"
                  >
                    Our Latest News
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[39px] items-center justify-start max-w-[954px] md:px-5 w-full">
          <div className="flex flex-col gap-[13px] items-center justify-start w-[281px]">
            <div className="flex flex-row items-center justify-center w-[29%] md:w-full">
              <Line className="bg-gradient  h-[23px] w-1" />
              <Text
                className="bg-gray-200_7f justify-center pt-1 px-2.5 text-gray-900_01 text-sm w-auto"
                size="txtRubikRomanRegular14Gray90001"
              >
                Our Blog
              </Text>
            </div>
            <Text
              className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900_01 w-auto"
              size="txtRubikRomanSemiBold35"
            >
              Our Latest News
            </Text>
          </div>
          <List
            className="flex flex-col font-krub gap-[35px] items-start max-w-[954px] w-full"
            orientation="vertical"
          >
            <div className="flex md:flex-1 flex-col gap-7 items-center justify-start my-0 w-[99%] md:w-full">
              <Line className="bg-blue_gray-100_02 h-px w-full" />
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[942px] w-full">
                <Img
                  className="md:flex-1 h-[308px] sm:h-auto object-cover w-[453px] md:w-full"
                  src="images/img_image.png"
                  alt="image"
                />
                <div className="flex md:flex-1 flex-col items-center justify-start pb-[15px] px-[15px] w-[10%] md:w-full">
                  <div className="flex flex-col items-center justify-start mb-[172px] w-[99%] md:w-full">
                    <Img
                      className="h-14"
                      src="images/img_calendar_56x51.svg"
                      alt="calendar"
                    />
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01"
                        size="txtRubikRomanSemiBold40"
                      >
                        08
                      </Text>
                      <Text
                        className="text-base text-blue_gray-500 text-center"
                        size="txtKrubMedium16Bluegray500"
                      >
                        March
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row gap-7 items-start justify-between w-[39%] md:w-full">
                  <Line className="bg-blue_gray-100_02 h-[308px] w-px" />
                  <div className="flex flex-col gap-[18px] items-start justify-start mt-2.5 w-[335px]">
                    <div className="flex flex-col gap-4 items-start justify-start w-[335px]">
                      <Text
                        className="max-w-[335px] md:max-w-full sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01"
                        size="txtRubikRomanRegular25"
                      >
                        Inland freight a worthy solution for your business
                      </Text>
                      <Text
                        className="leading-[151.52%] max-w-[335px] md:max-w-full text-base text-blue_gray-500"
                        size="txtKrubMedium16Bluegray500"
                      >
                        We are dedicated in creating added value for our
                        customers by implementing modern technology in our work.{" "}
                      </Text>
                    </div>
                    <Text
                      className="leading-[166.52%] text-base text-gray-900_01"
                      size="txtKrubMedium16Gray90001"
                    >
                      <>
                        Urgent transport solutions
                        <br />
                        Reliable & experienced staffs
                        <br />
                        Urgent transport solutions
                        <br />
                        Reliable & experienced staffs
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-7 items-center justify-start my-0 w-full">
              <Line className="bg-blue_gray-100_02 h-px w-[99%]" />
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[954px] w-full">
                <Img
                  className="md:flex-1 h-[308px] sm:h-auto object-cover w-[453px] md:w-full"
                  src="images/img_image_308x453.png"
                  alt="image"
                />
                <div className="flex md:flex-1 flex-col items-center justify-start pb-4 px-4 w-[9%] md:w-full">
                  <div className="flex flex-col items-center justify-start mb-[171px] w-[97%] md:w-full">
                    <Img
                      className="h-14"
                      src="images/img_calendar_1.svg"
                      alt="calendar"
                    />
                    <div className="md:h-12 h-[65px] relative w-[95%]">
                      <Text
                        className="absolute inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01 top-[0] w-max"
                        size="txtRubikRomanSemiBold40"
                      >
                        12
                      </Text>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto text-base text-blue_gray-500 text-center w-max"
                        size="txtKrubMedium16Bluegray500"
                      >
                        March
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row gap-7 items-start justify-between w-2/5 md:w-full">
                  <Line className="bg-blue_gray-100_02 h-[308px] w-px" />
                  <div className="flex flex-col gap-[18px] items-start justify-start mt-2.5 w-[347px]">
                    <div className="flex flex-col gap-4 items-start justify-start w-[347px]">
                      <Text
                        className="max-w-[347px] md:max-w-full sm:text-[21px] md:text-[23px] text-[25px] text-yellow-700_02"
                        size="txtRubikRomanRegular25Yellow70002"
                      >
                        How technology can help redraw the supply chain map
                      </Text>
                      <Text
                        className="leading-[151.52%] max-w-[335px] md:max-w-full text-base text-blue_gray-500"
                        size="txtKrubMedium16Bluegray500"
                      >
                        We are dedicated in creating added value for our
                        customers by implementing modern technology in our work.{" "}
                      </Text>
                    </div>
                    <Text
                      className="leading-[166.52%] text-base text-gray-900_01"
                      size="txtKrubMedium16Gray90001"
                    >
                      <>
                        Urgent transport solutions
                        <br />
                        Reliable & experienced staffs
                        <br />
                        Urgent transport solutions
                        <br />
                        Reliable & experienced staffs
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start my-0 w-[99%] md:w-full">
              <Line className="bg-blue_gray-100_02 h-px w-full" />
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[942px] mt-7 w-full">
                <Img
                  className="md:flex-1 h-[308px] sm:h-auto object-cover w-[453px] md:w-full"
                  src="images/img_image_1.png"
                  alt="image"
                />
                <div className="flex md:flex-1 flex-col items-center justify-start pb-[15px] px-[15px] w-[10%] md:w-full">
                  <div className="flex flex-col items-center justify-start mb-[172px] w-[99%] md:w-full">
                    <Img
                      className="h-14"
                      src="images/img_calendar_2.svg"
                      alt="calendar"
                    />
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01"
                        size="txtRubikRomanSemiBold40"
                      >
                        25
                      </Text>
                      <Text
                        className="text-base text-blue_gray-500 text-center"
                        size="txtKrubMedium16Bluegray500"
                      >
                        March
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row gap-7 items-start justify-between w-[39%] md:w-full">
                  <Line className="bg-blue_gray-100_02 h-[308px] w-px" />
                  <div className="flex flex-col gap-[18px] items-start justify-start mt-2.5 w-[335px]">
                    <div className="flex flex-col gap-4 items-start justify-start w-[335px]">
                      <Text
                        className="max-w-[335px] md:max-w-full sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01"
                        size="txtRubikRomanRegular25"
                      >
                        Five things you should have ready for your broker
                      </Text>
                      <Text
                        className="leading-[151.52%] max-w-[335px] md:max-w-full text-base text-blue_gray-500"
                        size="txtKrubMedium16Bluegray500"
                      >
                        We are dedicated in creating added value for our
                        customers by implementing modern technology in our work.{" "}
                      </Text>
                    </div>
                    <Text
                      className="leading-[166.52%] text-base text-gray-900_01"
                      size="txtKrubMedium16Gray90001"
                    >
                      <>
                        Urgent transport solutions
                        <br />
                        Reliable & experienced staffs
                        <br />
                        Urgent transport solutions
                        <br />
                        Reliable & experienced staffs
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-blue_gray-100_02 h-px mt-[35px] w-full" />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
              <Line className="bg-blue_gray-100_02 h-px w-[99%]" />
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[954px] mt-7 w-full">
                <Img
                  className="md:flex-1 h-[308px] sm:h-auto object-cover w-[453px] md:w-full"
                  src="images/img_image_3.png"
                  alt="image"
                />
                <div className="flex md:flex-1 flex-col items-center justify-start pb-[15px] px-[15px] w-[9%] md:w-full">
                  <div className="flex flex-col items-center justify-start mb-[172px] w-[99%] md:w-full">
                    <Img
                      className="h-14"
                      src="images/img_calendar_3.svg"
                      alt="calendar"
                    />
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01"
                        size="txtRubikRomanSemiBold40"
                      >
                        28
                      </Text>
                      <Text
                        className="text-base text-blue_gray-500 text-center"
                        size="txtKrubMedium16Bluegray500"
                      >
                        March
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row gap-7 items-start justify-between w-2/5 md:w-full">
                  <Line className="bg-blue_gray-100_02 h-[308px] w-px" />
                  <div className="flex flex-col gap-[18px] items-start justify-start mt-2.5 w-[347px]">
                    <div className="flex flex-col gap-4 items-start justify-start w-[347px]">
                      <Text
                        className="max-w-[347px] md:max-w-full sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01"
                        size="txtRubikRomanRegular25"
                      >
                        Four simple tips for becoming a healthier truck driver
                      </Text>
                      <Text
                        className="leading-[151.52%] max-w-[335px] md:max-w-full text-base text-blue_gray-500"
                        size="txtKrubMedium16Bluegray500"
                      >
                        We are dedicated in creating added value for our
                        customers by implementing modern technology in our work.{" "}
                      </Text>
                    </div>
                    <Text
                      className="leading-[166.52%] text-base text-gray-900_01"
                      size="txtKrubMedium16Gray90001"
                    >
                      <>
                        Urgent transport solutions
                        <br />
                        Reliable & experienced staffs
                        <br />
                        Urgent transport solutions
                        <br />
                        Reliable & experienced staffs
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-blue_gray-100_02 h-px mt-[35px] w-[99%]" />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
              <Line className="bg-blue_gray-100_02 h-px w-[99%]" />
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[954px] mt-7 w-full">
                <Img
                  className="md:flex-1 h-[308px] sm:h-auto object-cover w-[453px] md:w-full"
                  src="images/img_image_4.png"
                  alt="image"
                />
                <div className="flex md:flex-1 flex-col items-center justify-start pb-[15px] px-[15px] w-[9%] md:w-full">
                  <div className="flex flex-col items-center justify-start mb-[172px] w-[99%] md:w-full">
                    <Img
                      className="h-14"
                      src="images/img_calendar_4.svg"
                      alt="calendar"
                    />
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01"
                        size="txtRubikRomanSemiBold40"
                      >
                        30
                      </Text>
                      <Text
                        className="text-base text-blue_gray-500 text-center"
                        size="txtKrubMedium16Bluegray500"
                      >
                        March
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row gap-7 items-start justify-between w-2/5 md:w-full">
                  <Line className="bg-blue_gray-100_02 h-[308px] w-px" />
                  <div className="flex flex-col gap-[18px] items-start justify-start mt-2.5 w-[347px]">
                    <div className="flex flex-col gap-4 items-start justify-start w-[347px]">
                      <Text
                        className="max-w-[347px] md:max-w-full sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01"
                        size="txtRubikRomanRegular25"
                      >
                        What Is The Role Of A Logistics Operations Manager
                      </Text>
                      <Text
                        className="leading-[151.52%] max-w-[335px] md:max-w-full text-base text-blue_gray-500"
                        size="txtKrubMedium16Bluegray500"
                      >
                        We are dedicated in creating added value for our
                        customers by implementing modern technology in our work.{" "}
                      </Text>
                    </div>
                    <Text
                      className="leading-[166.52%] text-base text-gray-900_01"
                      size="txtKrubMedium16Gray90001"
                    >
                      <>
                        Urgent transport solutions
                        <br />
                        Reliable & experienced staffs
                        <br />
                        Urgent transport solutions
                        <br />
                        Reliable & experienced staffs
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-blue_gray-100_02 h-px mt-[35px] w-[99%]" />
            </div>
          </List>
        </div>
        <Footer className="flex font-krub items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default BlogPage;
