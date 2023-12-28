import React from "react";

import { Button, Img, Input, Line, List, RatingBar, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const AboutUsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-rubik items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="h-[657px] md:px-5 relative w-full">
            <Header className="flex flex-col items-center justify-center mb-[-78px] mx-auto w-full z-[1]" />
            <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
              <div className="h-[497px] relative w-full">
                <Img
                  className="h-[497px] ml-auto my-auto object-cover w-[89%]"
                  src="images/img_photo_497x1690.png"
                  alt="photo"
                />
                <div className="absolute bg-gradient5  flex flex-col h-full inset-[0] items-start justify-center m-auto p-48 md:px-10 sm:px-5 w-full">
                  <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[167px] mt-1 w-[592px] sm:w-full">
                    <div className="flex flex-row items-center justify-start w-[14%] md:w-full">
                      <Line className="bg-gradient  h-[23px] w-1" />
                      <Text
                        className="bg-gray-900_7f justify-center px-[9px] py-0.5 text-sm text-white-A700 w-auto"
                        size="txtRubikRomanRegular14"
                      >
                        About Us
                      </Text>
                    </div>
                    <Text
                      className="md:text-5xl text-6xl text-white-A700 w-auto"
                      size="txtRubikRomanBold60"
                    >
                      About Our Logistics
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row font-krub md:gap-10 gap-[100px] items-center justify-start max-w-[1470px] md:ml-[0] ml-[90px] mt-[103px] md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[53%] md:w-full">
            <div className="md:h-[486px] h-[531px] relative w-full">
              <div className="absolute md:h-[486px] h-[491px] left-[0] top-[0] w-[96%] md:w-full">
                <Img
                  className="absolute h-[486px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_image_486x726.png"
                  alt="image"
                />
                <div className="absolute bg-white-A700 bottom-[0] h-[218px] right-[0] w-[32%]"></div>
              </div>
              <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[32%]">
                <Img
                  className="h-[233px] md:h-auto object-cover w-full"
                  src="images/img_photo_233x239.png"
                  alt="photo_One"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-[35px] items-start justify-start w-[604px] md:w-full">
            <div className="flex flex-col gap-[19px] items-start justify-start w-[604px] md:w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-[604px] md:w-full">
                <div className="flex flex-col font-rubik gap-[15px] items-start justify-start w-[397px] sm:w-full">
                  <div className="flex flex-row items-center justify-start w-[21%] md:w-full">
                    <Line className="bg-gradient  h-[23px] w-1" />
                    <Text
                      className="bg-gray-200_7f justify-center px-[9px] py-0.5 text-gray-900_01 text-sm w-auto"
                      size="txtRubikRomanRegular14Gray90001"
                    >
                      About Us
                    </Text>
                  </div>
                  <Text
                    className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900_01 w-auto"
                    size="txtRubikRomanSemiBold35"
                  >
                    Our Company Overview
                  </Text>
                </div>
                <Text
                  className="leading-[151.52%] max-w-[604px] md:max-w-full text-base text-blue_gray-500"
                  size="txtKrubMedium16Bluegray500"
                >
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition.
                </Text>
              </div>
              <div className="flex flex-col gap-[27px] items-start justify-start w-[604px] md:w-full">
                <div className="flex md:flex-col flex-row gap-3.5 items-center justify-start w-[604px] md:w-full">
                  <Button
                    className="cursor-pointer font-semibold min-w-[192px] text-[19px] text-center"
                    shape="square"
                    color="yellow_700_01"
                    size="sm"
                    variant="fill"
                  >
                    Our Approch
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold min-w-[192px] text-[19px] text-center"
                    shape="square"
                    color="gray_100"
                    size="sm"
                    variant="fill"
                  >
                    Our Approch
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold min-w-[192px] text-[19px] text-center"
                    shape="square"
                    color="gray_100"
                    size="sm"
                    variant="fill"
                  >
                    Our Approch
                  </Button>
                </div>
                <Text
                  className="leading-[151.52%] max-w-[603px] md:max-w-full text-base text-blue_gray-500"
                  size="txtKrubMedium16Bluegray500"
                >
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem quia voluptassit.
                </Text>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[60px] items-center justify-end p-[19px]"
              style={{
                backgroundImage: "url('images/img_button_yellow_700.svg')",
              }}
            >
              <a
                href="javascript:"
                className="text-base text-center text-white-A700"
              >
                <Text size="txtKrubSemiBold16WhiteA700">Learn More</Text>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-rubik items-center mt-[100px] w-full">
          <div className="bg-gray-100 flex flex-col items-center justify-start max-w-[1919px] md:px-10 sm:px-5 px-[359px] py-[108px] w-full">
            <div className="flex flex-col gap-[55px] items-center justify-start max-w-[1201px] mx-auto w-full">
              <div className="flex flex-col gap-[15px] items-center justify-start w-[397px] sm:w-full">
                <div className="flex flex-row items-center justify-center w-1/4 md:w-full">
                  <Line className="bg-gradient  h-[23px] w-1" />
                  <Text
                    className="bg-gray-200_7f justify-center px-[9px] py-0.5 text-gray-900_01 text-sm w-auto"
                    size="txtRubikRomanRegular14Gray90001"
                  >
                    What We Do
                  </Text>
                </div>
                <Text
                  className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900_01 w-auto"
                  size="txtRubikRomanSemiBold35"
                >
                  Our Logistics Services
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start max-w-[1201px] w-full">
                <div className="gap-48 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-[22px] items-start justify-start w-full">
                    <Img
                      className="h-14 w-[49px]"
                      src="images/img_user_gray_900_01.svg"
                      alt="user"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start w-[270px]">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01 w-auto"
                        size="txtRubikRomanRegular25"
                      >
                        Sea Transport Services
                      </Text>
                      <Text
                        className="leading-[151.52%] max-w-[270px] md:max-w-full text-base text-blue_gray-500"
                        size="txtKrubMedium16Bluegray500"
                      >
                        Following the quality of our service thus having gained
                        trust of our many clients.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[22px] items-start justify-start w-full">
                    <Img
                      className="h-14 w-[54px]"
                      src="images/img_icon_gray_900_02.svg"
                      alt="icon"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start w-[270px]">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01 w-auto"
                        size="txtRubikRomanRegular25"
                      >
                        Warehousing Services
                      </Text>
                      <Text
                        className="leading-[151.52%] max-w-[270px] md:max-w-full text-base text-blue_gray-500"
                        size="txtKrubMedium16Bluegray500"
                      >
                        Following the quality of our service thus having gained
                        trust of our many clients.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[22px] items-start justify-start w-full">
                    <Img
                      className="h-14 w-[72px]"
                      src="images/img_user_gray_900_01_56x72.svg"
                      alt="user"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start w-[276px]">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01 w-auto"
                        size="txtRubikRomanRegular25"
                      >
                        Air Fright Services
                      </Text>
                      <Text
                        className="leading-[151.52%] max-w-[276px] md:max-w-full text-base text-blue_gray-500"
                        size="txtKrubMedium16Bluegray500"
                      >
                        Following the quality of our service thus having gained
                        trust of our many clients.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[22px] items-start justify-start w-full">
                    <Img
                      className="h-14 w-[50px]"
                      src="images/img_settings_amber_300_01.svg"
                      alt="settings"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start w-[270px]">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01 w-auto"
                        size="txtRubikRomanRegular25"
                      >
                        Project & Exhibition
                      </Text>
                      <Text
                        className="leading-[151.52%] max-w-[270px] md:max-w-full text-base text-blue_gray-500"
                        size="txtKrubMedium16Bluegray500"
                      >
                        Following the quality of our service thus having gained
                        trust of our many clients.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[22px] items-start justify-start w-full">
                    <Img
                      className="h-14 w-[54px]"
                      src="images/img_settings_gray_900_01.svg"
                      alt="settings"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start w-[277px]">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01 w-auto"
                        size="txtRubikRomanRegular25"
                      >
                        Local Shipping Services
                      </Text>
                      <Text
                        className="leading-[151.52%] max-w-[270px] md:max-w-full text-base text-blue_gray-500"
                        size="txtKrubMedium16Bluegray500"
                      >
                        Following the quality of our service thus having gained
                        trust of our many clients.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[22px] items-start justify-start w-full">
                    <Img
                      className="h-14 w-[55px]"
                      src="images/img_user_amber_300_01.svg"
                      alt="user"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start w-[276px]">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01 w-auto"
                        size="txtRubikRomanRegular25"
                      >
                        Customer Clearance
                      </Text>
                      <Text
                        className="leading-[151.52%] max-w-[276px] md:max-w-full text-base text-blue_gray-500"
                        size="txtKrubMedium16Bluegray500"
                      >
                        Following the quality of our service thus having gained
                        trust of our many clients.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col font-krub h-[60px] items-center justify-start p-[19px]"
                style={{
                  backgroundImage: "url('images/img_button_yellow_700.svg')",
                }}
              >
                <Text
                  className="text-base text-center text-white-A700"
                  size="txtKrubSemiBold16WhiteA700"
                >
                  More Works
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1200px] mt-[100px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-[307px]">
              <div className="flex flex-row items-center justify-center w-[43%] md:w-full">
                <Line className="bg-gradient  h-[23px] w-1" />
                <Text
                  className="bg-gray-200_7f justify-center px-2 py-0.5 text-center text-gray-900_01 text-sm w-auto"
                  size="txtRubikRomanRegular14Gray90001"
                >
                  The Transporters
                </Text>
              </div>
              <Text
                className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900_01 w-auto"
                size="txtRubikRomanSemiBold35"
              >
                Meet Expert Team
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-[54px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1200px] w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:h-[535px] h-[538px] relative w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img
                            className="h-[426px] md:h-auto object-cover w-full"
                            src="images/img_photo_426x364.png"
                            alt="photo"
                          />
                        </div>
                        <div className="bg-gray-900_01 flex flex-col items-center justify-start p-5 w-full">
                          <div className="flex flex-col items-start justify-start sm:pr-5 pr-[22px] pt-[22px] w-[92%] md:w-full">
                            <div className="flex flex-col gap-0.5 items-start justify-start w-[123px]">
                              <Text
                                className="text-white-A700 text-xl w-auto"
                                size="txtRubikRomanMedium20"
                              >
                                Jessca Arow
                              </Text>
                              <Text
                                className="text-base text-white-A700 w-auto"
                                size="txtKrubMedium16"
                              >
                                Designer
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-gradient  bottom-[15%] flex flex-col items-end justify-center sm:px-5 px-[20.07px] py-[17.06px] right-[0] rotate-[90deg] w-[151px]">
                      <Img
                        className="h-[21px] w-[117px]"
                        src="images/img_icons.svg"
                        alt="icons"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:h-[534px] h-[538px] relative w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img
                            className="h-[426px] md:h-auto object-cover w-full"
                            src="images/img_photo_6.png"
                            alt="photo"
                          />
                        </div>
                        <div className="bg-gray-900_01 flex flex-col items-center justify-start p-5 w-full">
                          <div className="flex flex-col items-start justify-start sm:pr-5 pr-[21px] pt-[21px] w-[92%] md:w-full">
                            <div className="flex flex-col gap-0.5 items-start justify-start w-[149px]">
                              <Text
                                className="text-white-A700 text-xl w-auto"
                                size="txtRubikRomanMedium20"
                              >
                                Kathleen Smith
                              </Text>
                              <Text
                                className="text-base text-white-A700 w-auto"
                                size="txtKrubMedium16"
                              >
                                Designer
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-gradient  bottom-[15%] flex flex-col items-end justify-center sm:px-5 px-[20.07px] py-[17.06px] right-[0] rotate-[90deg] w-[198px]">
                      <Img
                        className="h-[21px] w-[163px]"
                        src="images/img_icons_gray_900_01.svg"
                        alt="icons"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:h-[535px] h-[538px] relative w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img
                            className="h-[426px] md:h-auto object-cover w-full"
                            src="images/img_photo_7.png"
                            alt="photo"
                          />
                        </div>
                        <div className="bg-gray-900_01 flex flex-col items-center justify-start p-5 w-full">
                          <div className="flex flex-col items-start justify-start sm:pr-5 pr-[22px] pt-[22px] w-[92%] md:w-full">
                            <div className="flex flex-col gap-0.5 items-start justify-start w-[135px]">
                              <Text
                                className="text-white-A700 text-xl w-auto"
                                size="txtRubikRomanMedium20"
                              >
                                Rebecca Tylor
                              </Text>
                              <Text
                                className="text-base text-white-A700 w-auto"
                                size="txtKrubMedium16"
                              >
                                Designer
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-gradient  bottom-[15%] flex flex-col items-end justify-center sm:px-5 px-[20.07px] py-[17.06px] right-[0] rotate-[90deg] w-[104px]">
                      <Img
                        className="h-[21px] w-[70px]"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="bg-gray-100 flex flex-col items-center justify-start max-w-[1918px] mt-[101px] md:px-10 sm:px-5 px-[359px] py-[98px] w-full">
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
                        Leverage agile frameworks to provide a robust synopsis
                        for strategy foster collaborative thinking to further
                        the overall value proposition. Organically grow the
                        holistic world view of disruptive innovation via
                        workplace diversity and empowerment.
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
                        Leverage agile frameworks to provide a robust synopsis
                        for strategy foster collaborative thinking to further
                        the overall value proposition. Organically grow the
                        holistic world view of disruptive innovation via
                        workplace diversity and empowerment.
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
          <div className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1198px] mt-[101px] mx-auto md:px-5 w-full">
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
                      backgroundImage:
                        "url('images/img_button_gray_900_03.png')",
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
                      backgroundImage:
                        "url('images/img_button_white_a700.png')",
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
                      backgroundImage:
                        "url('images/img_button_gray_900_03.png')",
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
          <div className="bg-gray-100 flex flex-col items-end justify-start mt-[100px] md:pl-10 sm:pl-5 pl-[100px] py-[100px] w-full">
            <div className="h-[539px] md:h-[895px] relative w-[86%] md:w-full">
              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[44%]">
                <Img
                  className="h-[539px] md:h-auto object-cover w-full"
                  src="images/img_photo_539x682.png"
                  alt="photo_Two"
                />
              </div>
              <div className="absolute flex md:flex-col flex-row md:gap-10 gap-[71px] h-max inset-y-[0] items-center justify-between left-[0] max-w-[1200px] my-auto w-full">
                <div className="flex flex-1 flex-col gap-[50px] items-start justify-start max-w-[681px] w-full">
                  <div className="flex flex-col gap-[15px] items-start justify-start w-[308px]">
                    <div className="flex flex-row items-center justify-start w-[16%] md:w-full">
                      <Line className="bg-gradient  h-[23px] w-1" />
                      <Text
                        className="bg-gray-200_7f justify-center px-[9px] py-0.5 text-gray-900_01 text-sm w-auto"
                        size="txtRubikRomanRegular14Gray90001"
                      >
                        FAQ
                      </Text>
                    </div>
                    <Text
                      className="max-w-[308px] md:max-w-full sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01"
                      size="txtRubikRomanSemiBold35"
                    >
                      Frequently Asked Questions
                    </Text>
                  </div>
                  <div className="flex flex-col gap-11 items-start justify-start max-w-[681px] w-full">
                    <div className="flex flex-col gap-[18px] items-start justify-start max-w-[681px] w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <Text
                          className="text-gray-900_01 text-xl"
                          size="txtRubikRomanRegular20"
                        >
                          How can I pay for your logistics services?
                        </Text>
                        <Img
                          className="h-2"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown"
                        />
                      </div>
                      <div className="flex flex-col font-krub items-center justify-start w-[84%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="leading-[151.52%] text-base text-blue_gray-500 w-full"
                            size="txtKrubMedium16Bluegray500"
                          >
                            Leverage agile frameworks to provide a robust
                            synopsis for strategy foster collaborative thinking
                            to further the overall value proposition.
                            Organically grow the holistic world view of
                            disruptive.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                      <Text
                        className="text-gray-900_01 text-xl"
                        size="txtRubikRomanRegular20"
                      >
                        What payment methods are supported?
                      </Text>
                      <Img
                        className="h-4 mb-0.5 sm:mt-0 mt-[5px]"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                      <Text
                        className="text-gray-900_01 text-xl"
                        size="txtRubikRomanRegular20"
                      >
                        What options for logistics plans are available?
                      </Text>
                      <Img
                        className="h-4 mb-0.5 sm:mt-0 mt-[5px]"
                        src="images/img_arrowright.svg"
                        alt="arrowright_One"
                      />
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                      <Text
                        className="text-gray-900_01 text-xl"
                        size="txtRubikRomanRegular20"
                      >
                        Can i specify a delivery date when ordering?
                      </Text>
                      <Img
                        className="h-4 mb-0.5 sm:mt-0 mt-[5px]"
                        src="images/img_arrowright.svg"
                        alt="arrowright_Two"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[38%] md:w-full">
                  <div className="bg-gray-900_03 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[62px] py-[52px] w-[448px] sm:w-full">
                    <div className="flex flex-col gap-[26px] items-start justify-start w-[324px]">
                      <div className="flex flex-col gap-[21px] items-start justify-start w-[324px]">
                        <div className="flex flex-col gap-[23px] items-start justify-start w-[324px]">
                          <div className="flex flex-row items-center justify-start w-1/4 md:w-full">
                            <Line className="bg-gradient  h-[23px] w-1" />
                            <Text
                              className="bg-blue_gray-900_01 justify-center px-2 py-0.5 text-sm text-white-A700 w-auto"
                              size="txtRubikRomanRegular14"
                            >
                              Let’s Talk
                            </Text>
                          </div>
                          <Text
                            className="capitalize max-w-[324px] md:max-w-full text-white-A700 text-xl"
                            size="txtRubikRomanMedium20"
                          >
                            You need any help? get free consultation
                          </Text>
                        </div>
                        <div className="flex flex-row font-krub gap-3.5 items-center justify-start w-[230px]">
                          <Button
                            className="border border-indigo-800 border-solid flex h-[63px] items-center justify-center w-[63px]"
                            shape="round"
                            color="indigo_900"
                            size="md"
                            variant="fill"
                          >
                            <Img
                              src="images/img_call_white_a700.svg"
                              alt="call_One"
                            />
                          </Button>
                          <Text
                            className="leading-[135.02%] text-base text-white-A700"
                            size="txtKrubMedium16"
                          >
                            <>
                              Have Any Questions <br />
                              (00) 112 365 489
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gradient  flex flex-col font-krub items-center justify-start w-[44%] md:w-full">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[60px] items-center justify-end p-[19px] w-full"
                          style={{
                            backgroundImage: "url('images/img_group42.png')",
                          }}
                        >
                          <a
                            href="javascript:"
                            className="text-base text-gray-900"
                          >
                            <Text size="txtKrubSemiBold16">Contact Us</Text>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-syne items-center justify-start max-w-[1201px] mt-[81px] mx-auto md:px-5 w-full">
            <div className="h-[234px] md:h-[488px] relative w-[1201px] md:w-full">
              <div className="flex m-auto w-full">
                <div className="flex my-auto w-[76%] md:w-full">
                  <div className="flex flex-col items-center justify-start my-auto w-[67%]">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                      <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                        <div className="h-[234px] relative w-full">
                          <div className="bg-blue_gray-900 h-[234px] m-auto w-full"></div>
                          <div className="absolute h-[234px] inset-[0] justify-center m-auto w-full">
                            <Img
                              className="h-[234px] m-auto object-cover w-full"
                              src="images/img_photo_234x301.png"
                              alt="photo_Three"
                            />
                            <div className="absolute bg-gradient4  flex flex-col h-full inset-[0] items-center justify-center m-auto p-[47px] md:px-10 sm:px-5 w-full">
                              <div className="flex flex-row gap-[9px] items-start justify-center my-[43px] w-full">
                                <Img
                                  className="h-[51px] w-[51px]"
                                  src="images/img_star_51x51.svg"
                                  alt="star"
                                />
                                <Text
                                  className="text-white-A700 text-xl tracking-[11.30px] uppercase"
                                  size="txtSyneBold20"
                                >
                                  <span className="text-white-A700 font-syne text-left font-bold">
                                    <>
                                      Studio
                                      <br />
                                    </>
                                  </span>
                                  <span className="text-white-A700 tracking-[15.10px] font-syne text-left font-bold">
                                    Green
                                  </span>
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-row items-center justify-evenly w-1/2 md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="h-[234px] relative w-full">
                            <Img
                              className="h-[234px] m-auto object-cover w-full"
                              src="images/img_photo_234x300.png"
                              alt="photo_Four"
                            />
                            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[97px] md:px-10 sm:px-5 w-full">
                              <Img
                                className="h-[38px]"
                                src="images/img_settings_gray_900_03.svg"
                                alt="settings"
                              />
                            </div>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-600 h-[234px] w-px" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row font-timesnewroman items-center justify-evenly ml-[-1px] my-auto w-[34%] z-[1]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[234px] items-center justify-center p-[57px] md:px-10 sm:px-5 w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_background_white_a700.svg')",
                      }}
                    >
                      <div className="md:h-[119px] h-[47px] my-9 relative w-full">
                        <Text
                          className="absolute h-max inset-y-[0] my-auto right-[0] text-gray-900_03 text-xl tracking-[11.30px] uppercase"
                          size="txtTimesNewRomanPSMT20Gray90003"
                        >
                          <>
                            Points
                            <br />
                            one
                          </>
                        </Text>
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            <div className="h-[47px] relative w-[47px]">
                              <Img
                                className="border border-gray-900_03 border-solid h-[47px] m-auto w-[47px]"
                                src="images/img_pattern_1.svg"
                                alt="pattern_Twelve"
                              />
                              <div className="absolute h-[38px] inset-[0] justify-center m-auto w-[38px]">
                                <Img
                                  className="border border-gray-900_03 border-solid h-[38px] m-auto w-[38px]"
                                  src="images/img_pattern_2.svg"
                                  alt="pattern_Thirteen"
                                />
                                <div className="absolute h-[30px] inset-[0] justify-center m-auto w-[30px]">
                                  <Img
                                    className="border border-gray-900_03 border-solid h-[30px] m-auto w-[30px]"
                                    src="images/img_pattern_3.svg"
                                    alt="pattern_Fourteen"
                                  />
                                  <Img
                                    className="absolute border border-gray-900_03 border-solid h-5 inset-[0] justify-center m-auto w-5"
                                    src="images/img_pattern_4.svg"
                                    alt="pattern_Fifteen"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start mt-7 w-[31%]">
                              <Line className="bg-gray-900_03 h-0.5 w-full" />
                              <Line className="bg-gray-900_03 h-0.5 mt-0.5 w-full" />
                              <Line className="bg-gray-900_03 h-0.5 mt-[3px] w-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-blue_gray-600 h-[234px] w-px" />
                  </div>
                </div>
                <div className="flex flex-row font-thabit items-center justify-evenly ml-[-1px] my-auto w-1/4 z-[1]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-[234px] relative w-full">
                      <Img
                        className="h-[234px] m-auto object-cover w-full"
                        src="images/img_photo_9.png"
                        alt="photo_Five"
                      />
                      <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[62px] md:px-10 sm:px-5 w-full">
                        <div className="md:h-[110px] h-[52px] my-[29px] relative w-full">
                          <Text
                            className="m-auto text-gray-900_03 text-xl tracking-[11.30px] uppercase"
                            size="txtThabit20Gray90003"
                          >
                            <>
                              OutOfThe
                              <br />
                              Sand Box
                            </>
                          </Text>
                          <div className="absolute border border-gray-900_03 border-solid bottom-[13%] flex flex-col items-center justify-start p-0.5 right-[40%] w-[7%]">
                            <div className="bg-gray-900_03 h-[5px] w-[88%]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-blue_gray-600 h-[234px] w-px" />
                </div>
              </div>
              <Line className="absolute bg-blue_gray-600 h-px inset-x-[0] mx-auto top-[0] w-full" />
            </div>
            <Line className="bg-blue_gray-600 h-px w-full" />
          </div>
          <Footer className="flex font-krub items-center justify-center mt-[79px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
