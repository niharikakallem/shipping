import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const ProjectSinglePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-rubik items-center justify-start mx-auto w-full">
        <div className="h-[657px] md:px-5 relative w-full">
          <Header className="flex flex-col items-center justify-center mb-[-78px] mx-auto w-full z-[1]" />
          <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
            <div className="h-[497px] relative w-full">
              <Img
                className="h-[497px] ml-auto my-auto object-cover w-[82%]"
                src="images/img_pexelsscreeny11053641.png"
                alt="pexelsscreenyEleven"
              />
              <div className="absolute bg-gradient10  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[152px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-2 items-start justify-start max-w-[746px] md:ml-[0] ml-[207px] mt-[84px] w-full">
                  <div className="flex flex-row items-center justify-start w-[27%] md:w-full">
                    <Line className="bg-gradient  h-[23px] w-1" />
                    <Text
                      className="bg-gray-900_7f justify-center px-[11px] py-0.5 text-sm text-white-A700 w-auto"
                      size="txtRubikRomanRegular14"
                    >
                      Warehouse Transportation
                    </Text>
                  </div>
                  <Text
                    className="md:text-5xl text-6xl text-white-A700 w-auto"
                    size="txtRubikRomanBold60"
                  >
                    Air Cargo Transportation
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col items-center justify-start max-w-[1919px] md:px-10 sm:px-5 px-[360px] py-[100px] w-full">
          <div className="flex flex-col items-start justify-start max-w-[1201px] mx-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[66px] items-center justify-start max-w-[1134px] w-full">
              <Img
                className="md:flex-1 h-[380px] sm:h-auto object-cover w-[642px] md:w-full"
                src="images/img_image_346x380.png"
                alt="image_One"
              />
              <div className="flex sm:flex-1 flex-col gap-10 items-start justify-start w-[426px] sm:w-full">
                <Text
                  className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01 w-auto"
                  size="txtRubikRomanSemiBold35"
                >
                  Project Details
                </Text>
                <div className="flex flex-col gap-5 items-start justify-start w-[426px] sm:w-full">
                  <div className="flex flex-row gap-[27px] items-center justify-start w-[62%] md:w-full">
                    <Text
                      className="text-gray-900_01 text-xl"
                      size="txtRubikRomanMedium20Gray90001"
                    >
                      Customer :
                    </Text>
                    <Text
                      className="text-gray-900_01 text-xl"
                      size="txtRubikRomanRegular20"
                    >
                      David Warner
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-7 items-center justify-start w-[89%] md:w-full">
                    <Text
                      className="text-gray-900_01 text-xl"
                      size="txtRubikRomanMedium20Gray90001"
                    >
                      Category :
                    </Text>
                    <Text
                      className="text-gray-900_01 text-xl"
                      size="txtRubikRomanRegular20"
                    >
                      Warehouse Transportaion
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[30px] items-center justify-start w-3/4 md:w-full">
                    <Text
                      className="text-gray-900_01 text-xl"
                      size="txtRubikRomanMedium20Gray90001"
                    >
                      Date :
                    </Text>
                    <Text
                      className="text-gray-900_01 text-xl"
                      size="txtRubikRomanRegular20"
                    >
                      12 December, 2022
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[30px] items-start justify-start w-[58%] md:w-full">
                    <Text
                      className="text-gray-900_01 text-xl"
                      size="txtRubikRomanMedium20Gray90001"
                    >
                      Status :
                    </Text>
                    <Text
                      className="text-gray-900_01 text-xl"
                      size="txtRubikRomanRegular20"
                    >
                      Completed
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[31px] items-start justify-start w-full">
                    <Text
                      className="text-gray-900_01 text-xl"
                      size="txtRubikRomanMedium20Gray90001"
                    >
                      Tags :
                    </Text>
                    <Text
                      className="text-gray-900_01 text-xl"
                      size="txtRubikRomanRegular20"
                    >
                      Life Style Travel , Best Delivery
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1199px] mt-[100px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[30px] items-start justify-start max-w-[1199px] w-full">
            <div className="flex flex-col gap-3 items-start justify-start max-w-[1199px] w-full">
              <Text
                className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01 w-auto"
                size="txtRubikRomanSemiBold35"
              >
                Wharehouse Transportation
              </Text>
              <Text
                className="leading-[151.52%] max-w-[1199px] md:max-w-full text-base text-blue_gray-500"
                size="txtKrubMedium16Bluegray500"
              >
                Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
                Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit
                nec feugiat tempus.Phasellus at quam id elit hendrerit semper
                feugiat id nunc. Morbi quis justo velit. Duis semper lacus
                scelerisque, aliquam leo quis, porttitor leo. Fusce lectus ex,
                pretium efficitur suscipit sed, faucibus vel elit Integer
                adipiscing erat eget risus sollicitudin pellentesque non erat.
                Maecenas nibh dolor malesuada sagittis accumsan ipsum.
                Pellentesque ultrices ultrices sapien, nec tincidunt nunc
                posuere.
              </Text>
            </div>
            <div className="flex flex-col gap-[25px] items-start justify-start max-w-[664px] w-full">
              <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-[77%] md:w-full">
                <Img
                  className="h-[13px] sm:mt-0 mt-[3px] w-3.5"
                  src="images/img_arrowright_gray_900_01.svg"
                  alt="arrowright"
                />
                <Text
                  className="text-gray-900_01 text-xl"
                  size="txtRubikRomanRegular20"
                >
                  National Customer Service Center – 24 hours a day.
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                <Img
                  className="h-[13px] md:mt-0 mt-0.5 w-3.5"
                  src="images/img_arrowright_gray_900_01.svg"
                  alt="arrowright_One"
                />
                <Text
                  className="text-gray-900_01 text-xl"
                  size="txtRubikRomanRegular20"
                >
                  Online shipping navigator lets you quote, book, and track
                  shipments
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-[82%] md:w-full">
                <Img
                  className="h-[13px] sm:mt-0 mt-[3px] w-3.5"
                  src="images/img_arrowright_gray_900_01.svg"
                  alt="arrowright_Two"
                />
                <Text
                  className="text-gray-900_01 text-xl"
                  size="txtRubikRomanRegular20"
                >
                  Your Logistics Needs Are At The Heart Of Our Business
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-[61%] md:w-full">
                <Img
                  className="h-[13px] sm:mt-0 mt-[3px] w-3.5"
                  src="images/img_arrowright_gray_900_01.svg"
                  alt="arrowright_Three"
                />
                <Text
                  className="text-gray-900_01 text-xl"
                  size="txtRubikRomanRegular20"
                >
                  Very careful handling of valuable goods
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-[95%] md:w-full">
                <Img
                  className="h-[13px] md:mt-0 mt-0.5 w-3.5"
                  src="images/img_arrowright_gray_900_01.svg"
                  alt="arrowright_Four"
                />
                <Text
                  className="text-gray-900_01 text-xl"
                  size="txtRubikRomanRegular20"
                >
                  Time saving and convenient transportation services in your
                  area
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[29px] items-center justify-start max-w-[1200px] mt-[101px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[9px] items-start justify-start w-full">
            <Text
              className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01"
              size="txtRubikRomanSemiBold35"
            >
              Our Project Transportation
            </Text>
            <Text
              className="leading-[151.52%] text-base text-blue_gray-500 w-full"
              size="txtKrubMedium16Bluegray500"
            >
              Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
              Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
              feugiat tempus.Phasellus at quam id elit hendrerit semper feugiat
              id nunc. Morbi quis justo velit. Duis semper lacus scelerisque,
              aliquam leo quis, porttitor leo. Fusce lectus ex, pretium
              efficitur suscipit sed, faucibus vel elit Integer adipiscing erat
              eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor
              malesuada sagittis accumsan ipsum. Pellentesque ultrices ultrices
              sapien, nec tincidunt nunc posuere.
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <Img
              className="h-[681px] md:h-auto object-cover w-full"
              src="images/img_maskgroup.png"
              alt="maskgroup"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[35px] items-start justify-start max-w-[1201px] mt-[100px] mx-auto md:px-5 w-full">
          <Text
            className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01 w-auto"
            size="txtRubikRomanSemiBold35"
          >
            Related Project
          </Text>
          <div className="flex md:flex-col flex-row gap-[30px] items-start justify-center max-w-[1199px] w-full">
            <div className="h-[346px] relative w-[32%] md:w-full">
              <Img
                className="h-[346px] m-auto object-cover w-full"
                src="images/img_2.png"
                alt="image_Three"
              />
              <div className="absolute bg-gray-900_e8 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[132px] md:px-10 sm:px-5 w-[85%]">
                <Img className="h-7 w-7" src="images/img_map.svg" alt="map" />
              </div>
            </div>
            <Img
              className="md:flex-1 h-[346px] sm:h-auto object-cover w-[379px] md:w-full"
              src="images/img_3.png"
              alt="Two"
            />
            <Img
              className="md:flex-1 h-[346px] sm:h-auto object-cover w-[380px] md:w-full"
              src="images/img_1.png"
              alt="Three"
            />
          </div>
        </div>
        <footer className="flex font-krub items-center justify-center mt-[100px] md:px-5 w-full">
          <div className="h-[563px] sm:h-[564px] md:h-[710px] relative w-full">
            <div className="md:h-[562px] h-[563px] sm:h-[564px] m-auto w-full">
              <div className="absolute bg-gray-900_03 flex flex-col h-max inset-[0] items-center justify-center m-auto py-[18px] w-full">
                <div className="flex flex-col gap-3.5 items-center justify-start mt-[471px] w-full">
                  <Line className="bg-blue_gray-600 h-px w-full" />
                  <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1195px] w-full">
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtKrubMedium16"
                    >
                      <span className="text-white-A700 font-krub text-left font-medium">
                        Copyright © TransitFlow | Designed by{" "}
                      </span>
                      <span className="text-white-A700 font-krub text-left font-medium">
                        VictorFlow{" "}
                      </span>
                      <span className="text-white-A700 font-krub text-left font-medium">
                        - Powered by{" "}
                      </span>
                      <span className="text-white-A700 font-krub text-left font-medium">
                        Webflow
                      </span>
                      <span className="text-white-A700 font-krub text-left font-medium">
                        .
                      </span>
                    </Text>
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtKrubRegular16"
                    >
                      Style Guide Licenses Changelog Password
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white-A700_14 h-[118px] right-[0] top-[0] w-[62%]"></div>
            </div>
            <Img
              className="absolute h-[118px] left-[0] object-cover rotate-[180deg] top-[0] w-[17%]"
              src="images/img_background_118x311.png"
              alt="background_One"
            />
            <div className="absolute flex md:flex-col flex-row font-rubik md:gap-10 inset-x-[0] items-start justify-between mx-auto top-[8%] w-[63%]">
              <div className="flex flex-col md:gap-10 gap-[77px] items-start justify-start w-[319px]">
                <div className="flex flex-col items-center justify-start w-[66%] md:w-full">
                  <div className="flex flex-row gap-[9px] items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start mt-[3px] w-[14%]">
                      <div className="flex flex-row gap-[5px] items-start justify-evenly w-full">
                        <Img
                          className="h-[13px] w-[13px]"
                          src="images/img_thumbsup.svg"
                          alt="thumbsup_One"
                        />
                        <div className="bg-yellow-700_01 h-2.5 w-2.5"></div>
                      </div>
                      <div className="flex flex-row items-center justify-evenly ml-1 md:ml-[0] w-[86%] md:w-full">
                        <div className="bg-yellow-700_01 h-2.5 w-2.5"></div>
                        <div className="bg-yellow-700_01 h-2.5 w-2.5"></div>
                      </div>
                    </div>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtRubikRomanSemiBold30"
                    >
                      TransitFlow
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col font-krub gap-[33px] items-start justify-start w-[319px]">
                  <Text
                    className="leading-[151.52%] max-w-[319px] md:max-w-full text-base text-gray-200_01"
                    size="txtKrubMedium16Gray20001"
                  >
                    Leverage agile frameworks to provide a robust synopsis for
                    strategy collaborative thinking to further the overall value
                    proposition.
                  </Text>
                  <div className="flex flex-col gap-[30px] items-start justify-start w-[227px]">
                    <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                      <Img
                        className="h-[63px] w-[63px]"
                        src="images/img_lock.svg"
                        alt="lock_One"
                      />
                      <a
                        href="mailto:contact@hvcargologistics.com"
                        className="font-medium leading-[135.02%] text-sm text-white-A700"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text>
                          <>
                            Email
                            <br />
                            contact@logistics.com
                          </>
                        </Text>
                      </a>
                    </div>
                    <div className="flex flex-row gap-3.5 items-end justify-start w-[82%] md:w-full">
                      <Button
                        className="border border-indigo-900_01 border-solid flex h-[63px] items-center justify-center mb-[5px] w-[63px]"
                        shape="round"
                        color="indigo_900"
                        size="md"
                        variant="fill"
                      >
                        <Img src="images/img_call.svg" alt="call_One" />
                      </Button>
                      <Text
                        className="leading-[135.02%] mt-[11px] text-sm text-white-A700"
                        size="txtKrubMedium14"
                      >
                        <>
                          Call Us <br />
                          (00) 112 365 489
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between max-w-[769px] w-full">
                <div className="flex flex-col md:gap-10 gap-[74px] items-start justify-start w-[86px]">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-auto"
                    size="txtRubikRomanMedium25"
                  >
                    Pages
                  </Text>
                  <Text
                    className="leading-[250.00%] text-base text-white-A700"
                    size="txtKrubMedium16"
                  >
                    <>
                      About Us
                      <br />
                      Our Team
                      <br />
                      Our Project
                      <br />
                      Pricing
                      <br />
                      Contact
                    </>
                  </Text>
                </div>
                <div className="flex flex-col md:gap-10 gap-[74px] items-start justify-start w-[86px]">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-auto"
                    size="txtRubikRomanMedium25"
                  >
                    Utility
                  </Text>
                  <Text
                    className="leading-[250.00%] text-base text-white-A700"
                    size="txtKrubMedium16"
                  >
                    <>
                      Style Guide
                      <br />
                      Changelog
                      <br />
                      Licenses
                      <br />
                      Protected
                      <br />
                      Not Found
                    </>
                  </Text>
                </div>
                <div className="flex flex-col md:gap-10 gap-[85px] items-start justify-start w-[317px]">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-auto"
                    size="txtRubikRomanMedium25"
                  >
                    Subscribe
                  </Text>
                  <div className="flex flex-col font-leaguespartan gap-5 items-start justify-start w-[317px]">
                    <Input
                      name="name"
                      placeholder="Email here*"
                      className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-xl w-full"
                      wrapClassName="w-full"
                      type="email"
                      shape="square"
                      color="blue_gray_600"
                      size="xl"
                      variant="outline"
                    ></Input>
                    <div className="flex flex-row font-krub gap-[35px] items-center justify-start w-[303px]">
                      <Button
                        className="cursor-pointer font-semibold min-w-[148px] text-base text-center"
                        shape="square"
                        size="sm"
                        variant="gradient"
                        color="yellow_700_orange_100"
                      >
                        Send Now
                      </Button>
                      <Img
                        className="h-[21px] w-[120px]"
                        src="images/img_follow_white_a700.svg"
                        alt="follow_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProjectSinglePage;
