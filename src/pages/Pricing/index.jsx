import React from "react";

import { Button, Img, Input, Line, List, RatingBar, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const PricingPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-rubik items-center justify-start mx-auto w-full">
        <div className="h-[657px] md:px-5 relative w-full">
          <Header className="flex flex-col items-center justify-center mb-[-78px] mx-auto w-full z-[1]" />
          <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
            <div className="h-[497px] md:h-[498px] relative w-full">
              <Img
                className="h-[497px] m-auto object-cover w-full"
                src="images/img_photo_15.png"
                alt="photo"
              />
              <div className="absolute bg-gradient13  flex flex-col h-full inset-[0] items-start justify-center m-auto p-44 md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[184px] mt-[43px] w-[428px] sm:w-full">
                  <div className="flex flex-row items-center justify-start w-[18%] md:w-full">
                    <Line className="bg-gradient  h-[23px] w-1" />
                    <Text
                      className="bg-gray-900_7f justify-center pt-1 px-3 text-sm text-white-A700 w-auto"
                      size="txtRubikRomanRegular14"
                    >
                      Pricing
                    </Text>
                  </div>
                  <Text
                    className="md:text-5xl text-6xl text-white-A700 w-auto"
                    size="txtRubikRomanBold60"
                  >
                    Our Best Price
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1198px] mt-[100px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[15px] items-center justify-start w-[280px]">
            <div className="flex flex-row items-center justify-center w-1/4 md:w-full">
              <Line className="bg-gradient  h-[23px] w-1" />
              <Text
                className="bg-gray-200_7f justify-center pt-1 px-[9px] text-gray-900_01 text-sm w-auto"
                size="txtRubikRomanRegular14Gray90001"
              >
                Pricing
              </Text>
            </div>
            <Text
              className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900_01 w-auto"
              size="txtRubikRomanSemiBold35"
            >
              Our Best Pricing
            </Text>
          </div>
          <div className="gap-[29px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-center max-w-[1198px] w-full">
            <div className="bg-gray-100 flex flex-1 flex-col items-start justify-center md:px-10 sm:px-5 px-[50px] py-[61px] w-full">
              <div className="flex flex-col gap-[50px] items-center justify-start w-[280px]">
                <div className="flex flex-col gap-[38px] items-center justify-start w-[238px]">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900_01 w-auto"
                    size="txtRubikRomanMedium30"
                  >
                    Basic
                  </Text>
                  <div className="flex flex-row items-start justify-evenly w-full">
                    <Text
                      className="md:text-5xl text-[85px] text-center text-gray-900_01"
                      size="txtRubikRomanMedium85"
                    >
                      $39
                    </Text>
                    <Text
                      className="mt-[59px] text-[22px] text-gray-900_01 sm:text-lg md:text-xl"
                      size="txtRubikRomanRegular22"
                    >
                      / month
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-center justify-start w-[280px]">
                  <Line className="bg-blue_gray-100_02 h-px w-full" />
                  <Input
                    name="One"
                    placeholder="Single Truck"
                    className="leading-[normal] p-0 placeholder:text-gray-900_01 sm:px-5 text-center text-xl w-full"
                    wrapClassName="px-[35px] w-full"
                    color="blue_gray_100_02"
                    size="xs"
                    variant="underline"
                  ></Input>
                  <Input
                    name="Two"
                    placeholder="Full Insurance"
                    className="leading-[normal] p-0 placeholder:text-gray-900_01 sm:px-5 text-center text-xl w-full"
                    wrapClassName="px-[35px] w-full"
                    color="blue_gray_100_02"
                    size="lg"
                    variant="underline"
                  ></Input>
                  <Input
                    name="distance"
                    placeholder="500 Km"
                    className="leading-[normal] p-0 placeholder:text-gray-900_01 sm:px-5 text-center text-xl w-full"
                    wrapClassName="px-[35px] w-full"
                    color="blue_gray_100_02"
                    size="xl"
                    variant="underline"
                  ></Input>
                  <Input
                    name="Four"
                    placeholder="Real-time rate shopping"
                    className="leading-[normal] p-0 placeholder:text-gray-900_01 sm:px-5 text-center text-xl w-full"
                    wrapClassName="px-[27px] w-full"
                    color="blue_gray_100_02"
                    size="lg"
                    variant="underline"
                  ></Input>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col font-krub h-[60px] items-center justify-start p-[19px]"
                  style={{
                    backgroundImage: "url('images/img_button_gray_900_03.png')",
                  }}
                >
                  <Text
                    className="text-base text-white-A700"
                    size="txtKrubSemiBold16WhiteA700"
                  >
                    Choose Plan
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray-900_03 flex flex-1 flex-col items-start justify-center md:px-10 sm:px-5 px-[50px] py-[61px] w-full">
              <div className="flex flex-col gap-[50px] items-center justify-start w-[280px]">
                <div className="flex flex-col gap-[38px] items-center justify-start w-[238px]">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-auto"
                    size="txtRubikRomanMedium30WhiteA700"
                  >
                    Standard
                  </Text>
                  <div className="flex flex-row items-start justify-evenly w-full">
                    <Text
                      className="md:text-5xl text-[85px] text-center text-white-A700"
                      size="txtRubikRomanMedium85WhiteA700"
                    >
                      $59
                    </Text>
                    <Text
                      className="mt-[59px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtRubikRomanRegular22WhiteA700"
                    >
                      / month
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-center justify-start w-[280px]">
                  <Line className="bg-indigo-900_03 h-px w-full" />
                  <Input
                    name="One_One"
                    placeholder="Single Truck"
                    className="leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-center text-xl w-full"
                    wrapClassName="px-[35px] w-full"
                    color="indigo_900_03"
                    size="xs"
                    variant="underline"
                  ></Input>
                  <Input
                    name="Two_One"
                    placeholder="Full Insurance"
                    className="leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-center text-xl w-full"
                    wrapClassName="px-[35px] w-full"
                    color="indigo_900_03"
                    size="lg"
                    variant="underline"
                  ></Input>
                  <Input
                    name="distance_One"
                    placeholder="500 Km"
                    className="leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-center text-xl w-full"
                    wrapClassName="px-[35px] w-full"
                    color="indigo_900_03"
                    size="xl"
                    variant="underline"
                  ></Input>
                  <Input
                    name="Four_One"
                    placeholder="Real-time rate shopping"
                    className="leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-center text-xl w-full"
                    wrapClassName="px-[27px] w-full"
                    color="indigo_900_03"
                    size="lg"
                    variant="underline"
                  ></Input>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col font-krub h-[60px] items-center justify-start p-[19px]"
                  style={{
                    backgroundImage: "url('images/img_button_white_a700.png')",
                  }}
                >
                  <Text
                    className="text-base text-gray-900_05"
                    size="txtKrubSemiBold16Gray90005"
                  >
                    Choose Plan
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 flex flex-1 flex-col items-start justify-center md:px-10 sm:px-5 px-[50px] py-[61px] w-full">
              <div className="flex flex-col gap-[50px] items-center justify-start w-[280px]">
                <div className="flex flex-col gap-[38px] items-center justify-start w-[239px]">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900_01 w-auto"
                    size="txtRubikRomanMedium30"
                  >
                    Premium
                  </Text>
                  <div className="flex flex-row items-start justify-evenly w-full">
                    <Text
                      className="md:text-5xl text-[85px] text-center text-gray-900_01"
                      size="txtRubikRomanMedium85"
                    >
                      $89
                    </Text>
                    <Text
                      className="mt-[59px] text-[22px] text-gray-900_01 sm:text-lg md:text-xl"
                      size="txtRubikRomanRegular22"
                    >
                      / month
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-center justify-start w-[280px]">
                  <Line className="bg-blue_gray-100_02 h-px w-full" />
                  <Input
                    name="One_Two"
                    placeholder="Double Truck"
                    className="leading-[normal] p-0 placeholder:text-gray-900_01 sm:px-5 text-center text-xl w-full"
                    wrapClassName="px-[35px] w-full"
                    color="blue_gray_100_02"
                    size="sm"
                    variant="underline"
                  ></Input>
                  <Input
                    name="Two_Two"
                    placeholder="Full Insurance"
                    className="leading-[normal] p-0 placeholder:text-gray-900_01 sm:px-5 text-center text-xl w-full"
                    wrapClassName="px-[35px] w-full"
                    color="blue_gray_100_02"
                    size="lg"
                    variant="underline"
                  ></Input>
                  <Input
                    name="Three"
                    placeholder="Unlimitted"
                    className="leading-[normal] p-0 placeholder:text-gray-900_01 sm:px-5 text-center text-xl w-full"
                    wrapClassName="px-[35px] w-full"
                    color="blue_gray_100_02"
                    size="xl"
                    variant="underline"
                  ></Input>
                  <Input
                    name="Four_Two"
                    placeholder="Real-time rate shopping"
                    className="leading-[normal] p-0 placeholder:text-gray-900_01 sm:px-5 text-center text-xl w-full"
                    wrapClassName="px-[27px] w-full"
                    color="blue_gray_100_02"
                    size="lg"
                    variant="underline"
                  ></Input>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col font-krub h-[60px] items-center justify-start p-[19px]"
                  style={{
                    backgroundImage: "url('images/img_button_gray_900_03.png')",
                  }}
                >
                  <Text
                    className="text-base text-white-A700"
                    size="txtKrubSemiBold16WhiteA700"
                  >
                    Choose Plan
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col items-center justify-start max-w-[1918px] mt-[88px] md:px-10 sm:px-5 px-[359px] py-[98px] w-full">
          <div className="flex flex-col gap-10 items-start justify-start max-w-[1200px] mx-auto w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between max-w-[1199px] w-full">
              <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start w-[404px] sm:w-full">
                <div className="flex flex-row items-center justify-start w-1/4 md:w-full">
                  <Line className="bg-gradient  h-[23px] w-1" />
                  <Text
                    className="bg-gray-200_7f justify-center px-[9px] py-0.5 text-gray-900_01 text-sm w-auto"
                    size="txtRubikRomanRegular14Gray90001"
                  >
                    Testimonial
                  </Text>
                </div>
                <Text
                  className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01 w-auto"
                  size="txtRubikRomanSemiBold35"
                >
                  What Our Customer Say
                </Text>
              </div>
              <Img
                className="sm:flex-1 h-[43px] md:h-auto object-cover w-24 sm:w-full"
                src="images/img_aerrow.png"
                alt="aerrow"
              />
            </div>
            <List
              className="sm:flex-col flex-row font-krub md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-start max-w-[1200px] w-full"
              orientation="horizontal"
            >
              <div className="bg-gray-100 flex md:flex-1 flex-col items-start justify-start sm:ml-[0] md:px-10 sm:px-5 px-[72px] py-[62px] w-[601px] md:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-[456px] sm:w-full">
                  <div className="flex flex-row items-center justify-between w-[455px] sm:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[249px]">
                      <div className="flex flex-col h-[91px] items-center justify-start w-[91px]">
                        <Img
                          className="h-[91px] md:h-auto rounded-[50%] w-[91px]"
                          src="images/img_photo_91x91.png"
                          alt="photo"
                        />
                      </div>
                      <div className="flex flex-col gap-0.5 items-start justify-start w-[148px]">
                        <Text
                          className="text-gray-900_03 text-xl w-auto"
                          size="txtRubikRomanMedium20Gray90003"
                        >
                          Kathleen Smith
                        </Text>
                        <Text
                          className="text-base text-gray-900_03 w-auto"
                          size="txtKrubMedium16Gray90003"
                        >
                          Fuel Company
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gradient  flex flex-col h-[72px] items-center justify-start p-[19px] rounded-[50%] w-[72px]">
                      <Img
                        className="h-5 my-1.5"
                        src="images/img_user.svg"
                        alt="user"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 items-start justify-start w-[456px] sm:w-full">
                    <Text
                      className="italic leading-[151.52%] max-w-[456px] md:max-w-full text-base text-blue_gray-500"
                      size="txtKrubMediumItalic16"
                    >
                      Leverage agile frameworks to provide a robust synopsis for
                      strategy foster collaborative thinking to further the
                      overall value proposition. Organically grow the holistic
                      world view of disruptive innovation via workplace
                      diversity and empowerment.
                    </Text>
                    <div className="flex flex-row items-center justify-start w-2/5 md:w-full">
                      <RatingBar
                        className="flex justify-between w-[180px]"
                        value={5}
                        starCount={5}
                        activeColor="#fcaf3b"
                        size={34}
                      ></RatingBar>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900_03 flex md:flex-1 flex-col items-start justify-start sm:ml-[0] md:px-10 sm:px-5 px-[72px] py-[62px] w-[601px] md:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-[456px] sm:w-full">
                  <div className="flex flex-row items-center justify-between w-[455px] sm:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[262px]">
                      <div className="flex flex-col h-[91px] items-center justify-start w-[91px]">
                        <Img
                          className="h-[91px] md:h-auto rounded-[50%] w-[91px]"
                          src="images/img_photo_5.png"
                          alt="photo"
                        />
                      </div>
                      <div className="flex flex-col gap-0.5 items-start justify-start w-[161px]">
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtRubikRomanMedium20"
                        >
                          John Martin
                        </Text>
                        <Text
                          className="text-base text-white-A700 w-auto"
                          size="txtKrubMedium16"
                        >
                          Restoration Company
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gradient  flex flex-col h-[72px] items-center justify-start p-[19px] rounded-[50%] w-[72px]">
                      <Img
                        className="h-5 my-1.5"
                        src="images/img_user.svg"
                        alt="user"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 items-start justify-start w-[456px] sm:w-full">
                    <Text
                      className="italic leading-[151.52%] max-w-[456px] md:max-w-full text-base text-white-A700"
                      size="txtKrubMediumItalic16WhiteA700"
                    >
                      Leverage agile frameworks to provide a robust synopsis for
                      strategy foster collaborative thinking to further the
                      overall value proposition. Organically grow the holistic
                      world view of disruptive innovation via workplace
                      diversity and empowerment.
                    </Text>
                    <div className="flex flex-row items-center justify-start w-2/5 md:w-full">
                      <RatingBar
                        className="flex justify-between w-[180px]"
                        value={5}
                        starCount={5}
                        activeColor="#fcaf3b"
                        size={34}
                      ></RatingBar>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <Footer className="flex font-krub items-center justify-center mt-[3px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default PricingPage;
