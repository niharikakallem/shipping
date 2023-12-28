import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
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
          <div className="absolute bg-white-A700_14 h-[118px] left-[0] rotate-[180deg] top-[0] w-[17%]"></div>
          <div className="absolute flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto top-[8%] w-[63%]">
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
              <div className="flex flex-col gap-[33px] items-start justify-start w-[319px]">
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
                    <Text
                      className="leading-[135.02%] text-sm text-white-A700"
                      size="txtKrubMedium14"
                    >
                      <>
                        Email
                        <br />
                        contact@logistics.com
                      </>
                    </Text>
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
                <div className="flex flex-col gap-5 items-start justify-start w-[317px]">
                  <Input
                    name="name"
                    placeholder="Email here*"
                    className="font-leaguespartan leading-[normal] p-0 placeholder:text-gray-500 text-left text-xl w-full"
                    wrapClassName="w-full"
                    shape="square"
                    color="blue_gray_600"
                    size="xl"
                    variant="outline"
                  ></Input>
                  <div className="flex flex-row gap-[35px] items-center justify-start w-[303px]">
                    <Button
                      className="cursor-pointer font-krub font-semibold min-w-[148px] text-base text-center"
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
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
