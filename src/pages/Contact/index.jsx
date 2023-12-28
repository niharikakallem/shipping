import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ContactPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-rubik items-center justify-start mx-auto w-full">
        <div className="h-[657px] md:px-5 relative w-full">
          <Header className="flex flex-col items-center justify-center mb-[-78px] mx-auto w-full z-[1]" />
          <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
            <div className="h-[497px] md:h-[498px] relative w-full">
              <Img
                className="h-[497px] m-auto object-cover w-full"
                src="images/img_photo_14.png"
                alt="photo"
              />
              <div className="absolute bg-gradient13  flex flex-col h-full inset-[0] items-start justify-center m-auto p-40 md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[200px] mt-[75px] w-[334px]">
                  <div className="flex flex-row items-center justify-start w-[23%] md:w-full">
                    <Line className="bg-gradient  h-[23px] w-1" />
                    <div className="bg-gray-900_7f flex flex-col items-center justify-start px-[9px] py-[3px] w-auto">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtRubikRomanRegular14"
                      >
                        Contact
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="md:text-5xl text-6xl text-white-A700 w-auto"
                    size="txtRubikRomanBold60"
                  >
                    Contact Us
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900_03 flex flex-col font-krub items-center justify-start max-w-[954px] mt-[100px] md:px-5 px-[98px] py-[101px] w-full">
          <div className="flex flex-col gap-10 items-center justify-start max-w-[758px] w-full">
            <div className="flex flex-col gap-[3px] items-center justify-start max-w-[717px] w-full">
              <div className="flex flex-col font-rubik gap-[13px] items-center justify-start w-[343px]">
                <div className="flex flex-row items-center justify-center w-[22%] md:w-full">
                  <Line className="bg-gradient  h-[23px] w-1" />
                  <Text
                    className="bg-gray-200_19 justify-center px-[9px] py-0.5 text-sm text-white-A700 w-auto"
                    size="txtRubikRomanRegular14"
                  >
                    Contact
                  </Text>
                </div>
                <Text
                  className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-white-A700 w-auto"
                  size="txtRubikRomanSemiBold35WhiteA700"
                >
                  Get in touch with us
                </Text>
              </div>
              <Text
                className="leading-[151.52%] max-w-[717px] md:max-w-full text-base text-center text-white-A700"
                size="txtKrubMedium16"
              >
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value.
              </Text>
            </div>
            <div className="flex flex-col gap-[30px] items-center justify-start max-w-[758px] w-full">
              <div className="flex flex-col gap-[22px] items-center justify-start max-w-[758px] w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between max-w-[681px] w-full">
                  <div className="flex sm:flex-1 flex-col gap-[11px] items-center justify-start w-[23%] sm:w-full">
                    <Img
                      className="h-[63px] w-[63px]"
                      src="images/img_lock_indigo_900_05.svg"
                      alt="lock_One"
                    />
                    <Text
                      className="text-sm text-white-A700"
                      size="txtKrubMedium14"
                    >
                      Contact@logistics.com
                    </Text>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-2.5 items-center justify-start w-[16%] sm:w-full">
                    <Button
                      className="border border-indigo-900_01 border-solid flex h-[63px] items-center justify-center w-[63px]"
                      shape="round"
                      color="indigo_900_05"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        src="images/img_call_white_a700.svg"
                        alt="call_One"
                      />
                    </Button>
                    <Text
                      className="text-sm text-white-A700"
                      size="txtKrubMedium14"
                    >
                      {" "}
                      (00) 112 365 489
                    </Text>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-[11px] items-center justify-start w-[24%] sm:w-full">
                    <Img
                      className="h-[63px] w-[63px]"
                      src="images/img_play.svg"
                      alt="play"
                    />
                    <Text
                      className="leading-[135.02%] text-center text-sm text-white-A700"
                      size="txtKrubMedium14"
                    >
                      <>
                        Mon - Sat 9.00 - 18.00
                        <br />
                        Sunday Closed
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col font-leaguespartan gap-[31px] items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-7 items-start justify-center max-w-[758px] w-full">
                    <Text
                      className="border border-gray-300 border-solid pb-[22px] pl-[29px] pr-[35px] pt-[18px] sm:px-5 text-white-A700 text-xl w-auto"
                      size="txtLeagueSpartanRegular20WhiteA700"
                    >
                      Your name*
                    </Text>
                    <Text
                      className="border border-gray-300 border-solid pb-[22px] pl-[29px] pr-[35px] pt-[18px] sm:px-5 text-white-A700 text-xl w-auto"
                      size="txtLeagueSpartanRegular20WhiteA700"
                    >
                      Email*
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-7 items-start justify-center max-w-[758px] w-full">
                    <Input
                      name="phone"
                      placeholder="Phone Number*"
                      className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-xl w-full"
                      wrapClassName="sm:flex-1 w-[49%] sm:w-full"
                      type="number"
                      shape="square"
                      color="gray_300"
                      size="xl"
                      variant="outline"
                    ></Input>
                    <Input
                      name="city"
                      placeholder="City*"
                      className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-xl w-full"
                      wrapClassName="sm:flex-1 w-[49%] sm:w-full"
                      shape="square"
                      color="gray_300"
                      size="xl"
                      variant="outline"
                    ></Input>
                  </div>
                  <TextArea
                    className="bg-transparent border border-gray-300 border-solid leading-[normal] pb-[35px] pl-[23px] pr-[35px] pt-[21px] sm:px-5 text-left placeholder:text-white-A700 text-white-A700 text-xl w-full"
                    name="message"
                    placeholder="Your Message"
                  ></TextArea>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[60px] items-center justify-end p-[18px]"
                style={{
                  backgroundImage: "url('images/img_button_white_a700.png')",
                }}
              >
                <Text
                  className="mt-0.5 text-base text-gray-900"
                  size="txtKrubSemiBold16"
                >
                  Submit Message
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-syne items-center justify-start max-w-[1201px] mt-[50px] mx-auto md:px-5 w-full">
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
                            alt="photo_One"
                          />
                          <div className="absolute bg-gradient4  flex flex-col h-full inset-[0] items-center justify-center m-auto p-[47px] md:px-10 sm:px-5 w-full">
                            <div className="flex flex-row gap-[9px] items-start justify-center my-[43px] w-full">
                              <Img
                                className="h-[51px] w-[51px]"
                                src="images/img_star_2.svg"
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
                            alt="photo_Two"
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
                              src="images/img_pattern_9.svg"
                              alt="pattern_Five"
                            />
                            <div className="absolute h-[38px] inset-[0] justify-center m-auto w-[38px]">
                              <Img
                                className="border border-gray-900_03 border-solid h-[38px] m-auto w-[38px]"
                                src="images/img_pattern_10.svg"
                                alt="pattern_Six"
                              />
                              <div className="absolute h-[30px] inset-[0] justify-center m-auto w-[30px]">
                                <Img
                                  className="border border-gray-900_03 border-solid h-[30px] m-auto w-[30px]"
                                  src="images/img_pattern_11.svg"
                                  alt="pattern_Seven"
                                />
                                <Img
                                  className="absolute border border-gray-900_03 border-solid h-5 inset-[0] justify-center m-auto w-5"
                                  src="images/img_pattern_12.svg"
                                  alt="pattern_Eight"
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
                      alt="photo_Three"
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
        <div className="bg-gray-100 flex flex-col font-rubik items-end justify-start mt-[50px] md:pl-10 sm:pl-5 pl-[100px] py-[100px] w-full">
          <div className="h-[539px] md:h-[895px] relative w-[86%] md:w-full">
            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[44%]">
              <Img
                className="h-[539px] md:h-auto object-cover w-full"
                src="images/img_photo_539x682.png"
                alt="photo_Four"
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
                          Leverage agile frameworks to provide a robust synopsis
                          for strategy foster collaborative thinking to further
                          the overall value proposition. Organically grow the
                          holistic world view of disruptive.
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
                            alt="call_Two"
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
        <Footer className="flex font-krub items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ContactPage;
