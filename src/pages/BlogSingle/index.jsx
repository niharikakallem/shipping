import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const BlogSinglePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-full">
        <div className="h-[657px] md:px-5 relative w-full">
          <Header className="flex flex-col items-center justify-center mb-[-78px] mx-auto w-full z-[1]" />
          <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
            <div className="h-[497px] relative w-full">
              <Img
                className="h-[497px] m-auto object-cover w-full"
                src="images/img_photo_10.png"
                alt="photo"
              />
              <div className="absolute bg-gradient12  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[93px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-2 items-start justify-start max-w-[1092px] md:ml-[0] ml-[267px] mt-[91px] w-full">
                  <div className="flex flex-row gap-3 items-end justify-start w-[11%] md:w-full">
                    <Img
                      className="h-14 mb-[3px] mt-1.5"
                      src="images/img_icon_white_a700.svg"
                      alt="icon"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                        size="txtRubikRomanSemiBold40WhiteA700"
                      >
                        12
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtKrubMedium16"
                      >
                        March
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="max-w-[1092px] md:max-w-full md:text-5xl text-6xl text-white-A700"
                    size="txtRubikRomanBold60"
                  >
                    How technology can help redraw the supply chain map
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[95px] items-start justify-center max-w-[1199px] mx-auto md:px-5 w-full">
          <div className="flex flex-1 flex-col gap-[30px] items-start justify-start max-w-[664px] w-full">
            <div className="flex flex-col gap-10 items-start justify-start max-w-[664px] w-full">
              <div className="flex flex-col gap-[30px] items-start justify-start max-w-[664px] w-full">
                <div className="flex flex-col gap-3 items-start justify-start max-w-[664px] w-full">
                  <Text
                    className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01 w-auto"
                    size="txtRubikRomanSemiBold35"
                  >
                    Your Logistics Solutions
                  </Text>
                  <Text
                    className="leading-[151.52%] max-w-[664px] md:max-w-full text-base text-blue_gray-500"
                    size="txtKrubMedium16Bluegray500"
                  >
                    <span className="text-blue_gray-500 font-krub text-left font-medium">
                      Duis semper lacus scelerisque, aliquam leo quis, porttitor
                      leo. Etiam lobortis dapibus libero vel porttitor. Nulla
                      tempor elit nec{" "}
                    </span>
                    <span className="text-blue_gray-500_01 font-krub text-left font-medium">
                      feugiat tempus
                    </span>
                    <span className="text-blue_gray-500 font-krub text-left font-medium">
                      .Phasellus at quam hendrerit semper feugiat id nunc. Morbi
                      quis justo velit. Duis semper lacus scelerisque, aliquam
                      leo quis, porttitor leo Fusce lectus ex pretium[...]
                    </span>
                  </Text>
                </div>
                <div className="bg-gray-900_03 flex flex-col items-start justify-center max-w-[664px] md:px-10 sm:px-5 px-[55px] py-[50px] w-full">
                  <Text
                    className="italic max-w-[554px] md:max-w-full text-center text-white-A700 text-xl"
                    size="txtRubikItalicRegular20"
                  >
                    “Digitization within transport and logistics means seamless
                    service to our customers, visibility in the supply chain,
                    and driving a more efficient business.”
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-krub gap-[30px] items-start justify-start max-w-[664px] w-full">
                <div className="flex flex-col gap-3 items-start justify-start max-w-[664px] w-full">
                  <Text
                    className="max-w-[609px] md:max-w-full sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01"
                    size="txtRubikRomanSemiBold35"
                  >
                    Safest Logistics Solutions Provider With Integrity
                  </Text>
                  <Text
                    className="leading-[151.52%] max-w-[664px] md:max-w-full text-base text-blue_gray-500"
                    size="txtKrubMedium16Bluegray500"
                  >
                    <span className="text-blue_gray-500 font-krub text-left font-medium">
                      Duis semper lacus scelerisque, aliquam leo quis, porttitor
                      leo. Etiam lobortis dapibus libero vel porttitor. Nulla
                      tempor elit nec{" "}
                    </span>
                    <span className="text-blue_gray-500_01 font-krub text-left font-medium">
                      attempus
                    </span>
                    <span className="text-blue_gray-500 font-krub text-left font-medium">
                      .Phasellus at quam hendrerit semper{" "}
                    </span>
                    <span className="text-blue_gray-500_01 font-krub text-left font-medium">
                      David Warner
                    </span>
                    <span className="text-blue_gray-500 font-krub text-left font-medium">
                      {" "}
                      nunc. Morbi quis justo velit. Duis semper lacus
                      scelerisque, aliquam leo quis, porttitor leo Fusce lectus
                      ex pretium[...]
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col gap-[30px] items-start justify-start max-w-[664px] w-full">
                  <div className="flex flex-col gap-3 items-center justify-start max-w-[664px] w-full">
                    <Img
                      className="h-[292px] sm:h-auto object-cover w-[664px] md:w-full"
                      src="images/img_image_292x664.png"
                      alt="image"
                    />
                    <Text
                      className="text-base text-blue_gray-500 text-center w-auto"
                      size="txtKrubMedium16Bluegray500"
                    >
                      The Cargo Ship
                    </Text>
                  </div>
                  <Text
                    className="leading-[151.52%] text-base text-blue_gray-500"
                    size="txtKrubMedium16Bluegray500"
                  >
                    <span className="text-blue_gray-500 font-krub text-left font-medium">
                      Duis semper lacus scelerisque, aliquam leo quis, porttitor
                      leo. Etiam lobortis dapibus libero vel porttitor. Nulla
                      tempor elit nec{" "}
                    </span>
                    <span className="text-blue_gray-500_01 font-krub text-left font-medium">
                      attempus
                    </span>
                    <span className="text-blue_gray-500 font-krub text-left font-medium">
                      .Phasellus at quam hendrerit semper{" "}
                    </span>
                    <span className="text-blue_gray-500_01 font-krub text-left font-medium">
                      David Warner
                    </span>
                    <span className="text-blue_gray-500 font-krub text-left font-medium">
                      {" "}
                      nunc. Morbi quis justo velit. Duis semper lacus
                      scelerisque, aliquam leo quis, porttitor leo Fusce lectus
                      ex pretium
                    </span>
                    <span className="text-blue_gray-500 font-krub text-left font-medium">
                      <>
                        .<br />
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-500 font-krub text-left font-normal">
                      Duis semper lacus scelerisque, aliquam leo quis, porttitor
                      leo. Etiam lobortis dapib libero vel porttitor. Nulla
                      tempor elit nec feugiat tempus Phasellus atquam.
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-krub items-center justify-start w-full">
              <Line className="bg-blue_gray-100_02 h-px w-full" />
              <div className="flex flex-row sm:gap-10 gap-[390px] items-center justify-start max-w-[664px] mt-4 w-full">
                <Img
                  className="h-4 w-[125px]"
                  src="images/img_socialmedia.svg"
                  alt="socialmedia"
                />
                <Text
                  className="text-base text-blue_gray-500 text-right w-auto"
                  size="txtKrubMedium16Bluegray500"
                >
                  Category : Shipping
                </Text>
              </div>
              <Line className="bg-blue_gray-100_02 h-px mt-[19px] w-full" />
            </div>
          </div>
          <div className="flex sm:flex-1 flex-col gap-[46px] items-end justify-start w-[440px] sm:w-full">
            <div className="bg-gray-100_01 border border-gray-200_02 border-solid flex flex-col items-center justify-start md:px-10 sm:px-5 px-[42px] py-[46px] w-[440px] sm:w-full">
              <div className="flex flex-col gap-[30px] items-start justify-start w-[356px]">
                <Text
                  className="text-[22px] text-gray-900_01 sm:text-lg md:text-xl w-auto"
                  size="txtRubikRomanSemiBold22"
                >
                  Categories
                </Text>
                <div className="flex flex-col gap-[19px] items-start justify-start w-[356px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-blue_gray-500_01 text-lg"
                          size="txtRubikRomanRegular18"
                        >
                          Shipping
                        </Text>
                        <Text
                          className="text-base text-gray-900_01 text-right uppercase"
                          size="txtRubikRomanMedium16"
                        >
                          (3)
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-100_02 h-px w-full" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-blue_gray-500_01 text-lg"
                          size="txtRubikRomanRegular18"
                        >
                          Services
                        </Text>
                        <Text
                          className="text-base text-gray-900_01 text-right uppercase"
                          size="txtRubikRomanMedium16"
                        >
                          (5)
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-100_02 h-px w-full" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-blue_gray-500_01 text-lg"
                          size="txtRubikRomanRegular18"
                        >
                          Transport
                        </Text>
                        <Text
                          className="text-base text-gray-900_01 text-right uppercase"
                          size="txtRubikRomanMedium16"
                        >
                          (2)
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-100_02 h-px w-full" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-blue_gray-500_01 text-lg"
                          size="txtRubikRomanRegular18"
                        >
                          Warehouse
                        </Text>
                        <Text
                          className="text-base text-gray-900_01 text-right uppercase"
                          size="txtRubikRomanMedium16"
                        >
                          (2)
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-100_02 h-px w-full" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-blue_gray-500_01 text-lg"
                          size="txtRubikRomanRegular18"
                        >
                          Transport Industries
                        </Text>
                        <Text
                          className="text-base text-gray-900_01 text-right uppercase"
                          size="txtRubikRomanMedium16"
                        >
                          (5)
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-100_02 h-px w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100_01 border border-gray-200_02 border-solid flex flex-col items-center justify-start md:px-10 sm:px-5 px-[42px] py-[46px] w-[440px] sm:w-full">
              <div className="flex flex-col gap-[30px] items-start justify-start w-[360px]">
                <div className="flex flex-col font-rubik gap-3 items-start justify-start w-[360px]">
                  <Text
                    className="text-[22px] text-gray-900_01 sm:text-lg md:text-xl w-auto"
                    size="txtRubikRomanSemiBold22"
                  >
                    How can we help you?
                  </Text>
                  <Text
                    className="leading-[130.50%] max-w-[356px] md:max-w-full text-base text-blue_gray-500_01"
                    size="txtRubikRomanRegular16"
                  >
                    Duis semper lacus scelerisque, aliquam leo quis, porttitor
                    leo. Etiam lobortis dapib libero vel porttitor. Nulla tempor
                    elit nec feugiat tempus Phasellus atquam.
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-krub font-semibold min-w-[148px] text-base text-center"
                  shape="square"
                  size="sm"
                  variant="gradient"
                  color="yellow_700_orange_100"
                >
                  Contact
                </Button>
              </div>
            </div>
            <div className="bg-gray-900_03 flex flex-col items-center justify-start md:px-10 sm:px-5 px-[43px] py-[35px] w-[440px] sm:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-[354px]">
                <div className="flex flex-col gap-6 items-start justify-start w-[148px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                      <Line className="bg-gradient  h-[23px] w-1" />
                      <Text
                        className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                        size="txtRubikRomanSemiBold22WhiteA700"
                      >
                        Get In Touch
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-lg text-white-A700"
                      size="txtRubikRomanRegular18WhiteA700"
                    >
                      Need help?
                    </Text>
                    <Text
                      className="text-lg text-white-A700"
                      size="txtRubikRomanRegular18WhiteA700"
                    >
                      (00) 112 365 489
                    </Text>
                  </div>
                </div>
                <Line className="bg-blue_gray-900_02 h-px w-full" />
                <Text
                  className="leading-[125.00%] text-gray-500_01 text-lg"
                  size="txtRubikRomanRegular18Gray50001"
                >
                  <span className="text-white-A700 font-rubik text-left font-normal">
                    <>
                      Email
                      <br />
                    </>
                  </span>
                  <span className="text-white-A700 font-rubik text-left font-normal">
                    contact@logistics.com
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex font-krub items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default BlogSinglePage;
