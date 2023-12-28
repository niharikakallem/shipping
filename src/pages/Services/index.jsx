import React from "react";

import { Button, Img, Input, Line, List, RatingBar, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ServicesPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-rubik items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gray-200 h-[657px] md:px-5 relative w-full">
            <Header className="flex flex-col items-center justify-center mb-[-78px] mx-auto w-full z-[1]" />
            <div className="h-[497px] mt-auto mx-auto w-full">
              <Img
                className="h-[497px] ml-auto my-auto object-cover w-[82%]"
                src="images/img_photo_497x1569.png"
                alt="photo"
              />
              <div className="absolute bg-gradient6  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[126px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[233px] mt-[70px] w-[410px] sm:w-full">
                  <div className="flex flex-row items-center justify-start w-1/5 md:w-full">
                    <Line className="bg-gradient  h-[23px] w-1" />
                    <Text
                      className="bg-gray-900_7f justify-center px-[11px] py-0.5 text-sm text-white-A700 w-auto"
                      size="txtRubikRomanRegular14"
                    >
                      Services
                    </Text>
                  </div>
                  <Text
                    className="max-w-[410px] md:max-w-full md:text-5xl text-6xl text-white-A700"
                    size="txtRubikRomanBold60"
                  >
                    Our Logistics Service
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[55px] items-center justify-start max-w-[1201px] mt-[82px] mx-auto md:px-5 w-full">
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
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-yellow-700_01 w-auto"
                    size="txtRubikRomanRegular25Yellow70001"
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
                  src="images/img_icon_gray_900_02_56x54.svg"
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
                  src="images/img_settings_amber_300_01_56x50.svg"
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
        <div className="bg-gray-100 flex flex-col items-center justify-start max-w-[1918px] mt-[102px] md:px-10 sm:px-5 px-[360px] py-[103px] w-full">
          <div className="flex flex-col gap-[35px] items-center justify-start max-w-[1350px] w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start w-[18%] md:w-full">
              <div className="flex flex-row items-center justify-center w-[52%] md:w-full">
                <Line className="bg-gradient  h-[23px] w-1" />
                <Text
                  className="bg-gray-200_7f capitalize h-[23px] justify-center pl-[11px] pr-[19px] py-0.5 text-gray-900_01 text-sm w-[121px]"
                  size="txtRubikRomanRegular14Gray90001"
                >
                  Our Goodness
                </Text>
              </div>
              <Text
                className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900_01"
                size="txtRubikRomanSemiBold35"
              >
                How We Works
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1350px] w-full">
                <div className="md:h-[486px] h-[515px] relative w-[57%] md:w-full">
                  <div className="absolute h-[486px] inset-x-[0] mx-auto top-[0] w-[97%] md:w-full">
                    <Img
                      className="h-[486px] m-auto object-cover w-full"
                      src="images/img_image_2.png"
                      alt="image"
                    />
                    <div className="absolute bg-white-A700 bottom-[0] h-[304px] right-[0] w-[44%]"></div>
                  </div>
                  <div className="absolute bg-gradient6  bottom-[0] flex flex-col items-center justify-start right-[0] w-[43%]">
                    <Img
                      className="h-[303px] md:h-auto object-cover w-full"
                      src="images/img_photo_303x319.png"
                      alt="photo_One"
                    />
                  </div>
                </div>
                <List
                  className="flex md:flex-1 flex-col gap-[55px] items-start w-[534px] md:w-full"
                  orientation="vertical"
                >
                  <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-start my-0 w-[534px] sm:w-full">
                    <Img
                      className="h-[53px] w-[47px]"
                      src="images/img_thumbsup_gray_900_01_53x47.svg"
                      alt="thumbsup"
                    />
                    <div className="flex flex-col items-center justify-end pt-[11px] w-[88%] sm:w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-[468px] sm:w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01 w-auto"
                          size="txtRubikRomanMedium25Gray90001"
                        >
                          Warehousing Services
                        </Text>
                        <Text
                          className="leading-[151.52%] max-w-[468px] md:max-w-full text-base text-blue_gray-500"
                          size="txtKrubMedium16Bluegray500"
                        >
                          Leverage agile frameworks to provide a robust synopsis
                          for strategy foster collaborative thinking{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-start my-0 w-[534px] sm:w-full">
                    <Img
                      className="h-[51px] w-[47px]"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                    <div className="flex flex-col items-center justify-end pt-[11px] w-[88%] sm:w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-[468px] sm:w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01 w-auto"
                          size="txtRubikRomanMedium25Gray90001"
                        >
                          Safety & Quality
                        </Text>
                        <Text
                          className="leading-[151.52%] max-w-[468px] md:max-w-full text-base text-blue_gray-500"
                          size="txtKrubMedium16Bluegray500"
                        >
                          Leverage agile frameworks to provide a robust synopsis
                          for strategy foster collaborative thinking{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-start my-0 w-[534px] sm:w-full">
                    <Img
                      className="h-12 w-[47px]"
                      src="images/img_settings_amber_300_01_48x47.svg"
                      alt="settings"
                    />
                    <div className="flex flex-col items-center justify-end pt-[11px] w-[88%] sm:w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-[468px] sm:w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01 w-auto"
                          size="txtRubikRomanMedium25Gray90001"
                        >
                          Care for Environment
                        </Text>
                        <Text
                          className="leading-[151.52%] max-w-[468px] md:max-w-full text-base text-blue_gray-500"
                          size="txtKrubMedium16Bluegray500"
                        >
                          Leverage agile frameworks to provide a robust synopsis
                          for strategy foster collaborative thinking{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-start justify-start max-w-[1200px] mt-[100px] mx-auto md:px-5 w-full">
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
                    world view of disruptive innovation via workplace diversity
                    and empowerment.
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
                    world view of disruptive innovation via workplace diversity
                    and empowerment.
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
        <div className="h-[156px] sm:h-[270px] md:h-[475px] mt-[115px] md:px-5 relative w-full">
          <div className="flex flex-col m-auto w-full">
            <Line className="bg-gradient7  h-px mx-auto w-full" />
            <Line className="bg-blue_gray-100_01 h-[156px] mb-auto ml-[493px] mt-[-1px] w-px z-[1]" />
            <Line className="bg-blue_gray-100_01 h-[156px] mb-auto mt-[-1px] mx-auto w-px z-[1]" />
            <Line className="bg-blue_gray-100_01 h-[156px] mb-auto ml-auto mr-[528px] mt-[-1px] w-px z-[1]" />
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

export default ServicesPage;
