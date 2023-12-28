import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const TeamPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-rubik items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="h-[657px] md:px-5 relative w-full">
            <Header className="flex flex-col items-center justify-center mb-[-78px] mx-auto w-full z-[1]" />
            <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
              <div className="h-[497px] md:h-[498px] relative w-full">
                <Img
                  className="h-[497px] ml-auto my-auto object-cover w-[84%]"
                  src="images/img_photo_497x1596.png"
                  alt="photo"
                />
                <div className="absolute bg-gradient13  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[163px] md:px-10 sm:px-5 w-full">
                  <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[197px] mt-[69px] w-[277px]">
                    <div className="flex flex-row items-center justify-start w-1/5 md:w-full">
                      <Line className="bg-gradient  h-[23px] w-1" />
                      <Text
                        className="bg-gray-900_7f justify-center px-2 py-0.5 text-sm text-white-A700 w-auto"
                        size="txtRubikRomanRegular14"
                      >
                        Team
                      </Text>
                    </div>
                    <Text
                      className="md:text-5xl text-6xl text-white-A700 w-auto"
                      size="txtRubikRomanBold60"
                    >
                      Our Team
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 flex flex-col items-start justify-center max-w-[1920px] md:px-10 sm:px-5 px-[360px] py-[107px] w-full">
            <div className="flex flex-col gap-10 items-center justify-start max-w-[1200px] mx-auto w-full">
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
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:gap-5 gap-[54px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
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
                                <div className="flex flex-col gap-0.5 items-start justify-start w-32">
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
                                    Warehouse Head
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
                      <div className="md:h-[533px] h-[538px] relative w-full">
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
                                    Transport Manager
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
                                    Cargo Head
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
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="md:h-[534px] h-[538px] relative w-full">
                        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <Img
                                className="h-[426px] md:h-auto object-cover w-full"
                                src="images/img_photo_11.png"
                                alt="photo"
                              />
                            </div>
                            <div className="bg-gray-900_01 flex flex-col items-center justify-start p-5 w-full">
                              <div className="flex flex-col items-start justify-start sm:pr-5 pr-[21px] pt-[21px] w-[92%] md:w-full">
                                <div className="flex flex-col gap-0.5 items-start justify-start w-[131px]">
                                  <Text
                                    className="text-white-A700 text-xl w-auto"
                                    size="txtRubikRomanMedium20"
                                  >
                                    Ria Jackson
                                  </Text>
                                  <Text
                                    className="text-base text-white-A700 w-auto"
                                    size="txtKrubMedium16"
                                  >
                                    Operational Head
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
                                src="images/img_photo_12.png"
                                alt="photo"
                              />
                            </div>
                            <div className="bg-gray-900_01 flex flex-col items-center justify-start p-5 w-full">
                              <div className="flex flex-col items-start justify-start sm:pr-5 pr-[21px] pt-[21px] w-[92%] md:w-full">
                                <div className="flex flex-col gap-0.5 items-start justify-start w-[123px]">
                                  <Text
                                    className="text-white-A700 text-xl w-auto"
                                    size="txtRubikRomanMedium20"
                                  >
                                    Kane William
                                  </Text>
                                  <Text
                                    className="text-base text-white-A700 w-auto"
                                    size="txtKrubMedium16"
                                  >
                                    Country Head
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
                      <div className="md:h-[535px] h-[538px] relative w-full">
                        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <Img
                                className="h-[426px] md:h-auto object-cover w-full"
                                src="images/img_photo_13.png"
                                alt="photo"
                              />
                            </div>
                            <div className="bg-gray-900_01 flex flex-col items-center justify-start p-5 w-full">
                              <div className="flex flex-col items-start justify-start sm:pr-5 pr-[22px] pt-[22px] w-[92%] md:w-full">
                                <div className="flex flex-col gap-0.5 items-start justify-start w-[130px]">
                                  <Text
                                    className="text-white-A700 text-xl w-auto"
                                    size="txtRubikRomanMedium20"
                                  >
                                    Lisara Tylor
                                  </Text>
                                  <Text
                                    className="text-base text-white-A700 w-auto"
                                    size="txtKrubMedium16"
                                  >
                                    Finance Manager
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1371px] md:ml-[0] ml-[188px] mt-[101px] md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[55%] md:w-full">
            <div className="md:h-[486px] h-[511px] relative w-full">
              <div className="absolute md:h-[486px] h-[487px] inset-x-[0] mx-auto top-[0] w-[97%] md:w-full">
                <Img
                  className="absolute h-[486px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_image_5.png"
                  alt="image"
                />
                <div className="absolute bg-white-A700 bottom-[0] h-[251px] right-[0] w-[37%]"></div>
              </div>
              <div className="absolute bg-gradient6  bottom-[0] flex flex-col items-center justify-start right-[0] w-[36%]">
                <Img
                  className="h-[251px] md:h-auto object-cover w-full"
                  src="images/img_photo_251x264.png"
                  alt="photo_One"
                />
              </div>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start w-[560px] sm:w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-[560px] sm:w-full">
                <div className="flex flex-col font-rubik gap-[15px] items-start justify-start w-[260px]">
                  <div className="flex flex-row items-center justify-start w-1/4 md:w-full">
                    <Line className="bg-gradient  h-[23px] w-1" />
                    <Text
                      className="bg-gray-200_7f justify-center px-2.5 py-0.5 text-gray-900_01 text-sm w-auto"
                      size="txtRubikRomanRegular14Gray90001"
                    >
                      About
                    </Text>
                  </div>
                  <Text
                    className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01 w-auto"
                    size="txtRubikRomanSemiBold35"
                  >
                    Why Choose Us
                  </Text>
                </div>
                <Text
                  className="leading-[151.52%] max-w-[560px] md:max-w-full text-base text-blue_gray-500"
                  size="txtKrubMedium16Bluegray500"
                >
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition.
                </Text>
              </div>
              <Line className="bg-blue_gray-100_02 h-px w-full" />
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[83px] items-start justify-start w-[535px] sm:w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-[230px]">
                <div className="flex flex-col font-rubik gap-[11px] items-start justify-start w-[135px]">
                  <Img
                    className="h-12 w-12"
                    src="images/img_settings_amber_300_01_48x48.svg"
                    alt="settings"
                  />
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01 w-auto"
                    size="txtRubikRomanMedium25Gray90001"
                  >
                    Our Vission
                  </Text>
                </div>
                <Text
                  className="leading-[151.52%] max-w-[230px] md:max-w-full text-base text-blue_gray-500"
                  size="txtKrubMedium16Bluegray500"
                >
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster.
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-[222px]">
                <div className="flex flex-col font-rubik gap-[11px] items-start justify-start w-[222px]">
                  <Img
                    className="h-12 w-[31px]"
                    src="images/img_thumbsup_gray_900_01_48x31.svg"
                    alt="thumbsup_One"
                  />
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900_01 w-auto"
                    size="txtRubikRomanMedium25Gray90001"
                  >
                    Estimate Shipping
                  </Text>
                </div>
                <Text
                  className="leading-[151.52%] max-w-[222px] md:max-w-full text-base text-blue_gray-500"
                  size="txtKrubMedium16Bluegray500"
                >
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-syne md:gap-10 gap-[100px] items-center mt-[50px] w-full">
          <div className="flex flex-col items-center justify-start max-w-[1201px] mx-auto md:px-5 w-full">
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
                              alt="photo_Two"
                            />
                            <div className="absolute bg-gradient4  flex flex-col h-full inset-[0] items-center justify-center m-auto p-[47px] md:px-10 sm:px-5 w-full">
                              <div className="flex flex-row gap-[9px] items-start justify-center my-[43px] w-full">
                                <Img
                                  className="h-[51px] w-[51px]"
                                  src="images/img_star_1.svg"
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
                              alt="photo_Three"
                            />
                            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[97px] md:px-10 sm:px-5 w-full">
                              <Img
                                className="h-[38px]"
                                src="images/img_settings_gray_900_03.svg"
                                alt="settings_One"
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
                                src="images/img_pattern_5.svg"
                                alt="pattern_Seven"
                              />
                              <div className="absolute h-[38px] inset-[0] justify-center m-auto w-[38px]">
                                <Img
                                  className="border border-gray-900_03 border-solid h-[38px] m-auto w-[38px]"
                                  src="images/img_pattern_6.svg"
                                  alt="pattern_Eight"
                                />
                                <div className="absolute h-[30px] inset-[0] justify-center m-auto w-[30px]">
                                  <Img
                                    className="border border-gray-900_03 border-solid h-[30px] m-auto w-[30px]"
                                    src="images/img_pattern_7.svg"
                                    alt="pattern_Nine"
                                  />
                                  <Img
                                    className="absolute border border-gray-900_03 border-solid h-5 inset-[0] justify-center m-auto w-5"
                                    src="images/img_pattern_8.svg"
                                    alt="pattern_Ten"
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
                        alt="photo_Four"
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
          <Footer className="flex font-krub items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default TeamPage;
