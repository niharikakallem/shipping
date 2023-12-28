import React from "react";

import { Button, Img, Line, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-40 items-center justify-start p-[46px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_header.svg')" }}
        >
          <div className="flex flex-row md:gap-10 gap-[244px] items-center justify-start max-w-[1199px] w-full">
            <div className="flex flex-col items-center justify-start w-[18%]">
              <div className="flex flex-row gap-[9px] items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start mt-[3px] w-[14%]">
                  <div className="flex flex-row gap-[5px] items-start justify-evenly w-full">
                    <Img
                      className="h-[13px] w-[13px]"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
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
            <ul className="flex flex-1 md:flex-col flex-row gap-[39px] md:hidden items-center justify-end max-w-[745px] w-full common-row-list">
              <li>
                <div className="flex flex-row gap-[17px] items-center justify-start">
                  <Img
                    className="h-[63px] w-[63px]"
                    src="images/img_icon.svg"
                    alt="icon"
                  />
                  <Text
                    className="leading-[135.02%] text-sm text-white-A700"
                    size="txtKrubMedium14"
                  >
                    <>
                      Mon - Sat 9.00 - 18.00
                      <br />
                      Sunday Closed
                    </>
                  </Text>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-3.5 items-center justify-center">
                  <Img
                    className="h-[63px] w-[63px]"
                    src="images/img_lock.svg"
                    alt="lock"
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
              </li>
              <li>
                <div className="flex flex-row gap-3.5 items-end justify-start">
                  <Button
                    className="border border-indigo-900_01 border-solid flex h-[63px] items-center justify-center mb-[5px] w-[63px]"
                    shape="round"
                    color="indigo_900"
                    size="md"
                    variant="fill"
                  >
                    <Img src="images/img_call.svg" alt="call" />
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
              </li>
            </ul>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[78px] items-center justify-start md:px-10 sm:px-5 px-[361px] w-full"
          style={{ backgroundImage: "url('images/img_menu.svg')" }}
        >
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1197px] w-full">
            <div className="flex md:flex-1 flex-col items-center justify-end pt-[30px] w-[43%] md:w-full">
              <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                <ul className="flex sm:flex-col flex-row gap-[30px] items-center justify-start w-[504px] sm:w-full">
                  <li>
                    <Text
                      className="text-base text-white-A700"
                      size="txtKrubSemiBold16WhiteA700"
                    >
                      Home
                    </Text>
                  </li>
                  <li>
                    <div className="flex flex-row gap-[29px] items-start justify-center">
                      <Line className="bg-white-A700_33 h-[19px] w-px" />
                      <Text
                        className="text-base text-white-A700"
                        size="txtKrubSemiBold16WhiteA700"
                      >
                        About
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-[29px] items-start justify-center">
                      <Line className="bg-white-A700_33 h-[19px] mb-0.5 w-px" />
                      <div className="flex flex-row items-center justify-evenly w-[67%]">
                        <Text
                          className="text-base text-white-A700"
                          size="txtKrubSemiBold16WhiteA700"
                        >
                          Pages
                        </Text>
                        <Img
                          className="h-1"
                          src="images/img_vector.svg"
                          alt="vector"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-[29px] items-start justify-center">
                      <Line className="bg-white-A700_33 h-[19px] w-px" />
                      <Text
                        className="text-base text-white-A700"
                        size="txtKrubSemiBold16WhiteA700"
                      >
                        Project
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-[29px] items-center justify-start">
                      <Line className="bg-white-A700_33 h-[19px] w-px" />
                      <Text
                        className="text-base text-white-A700"
                        size="txtKrubSemiBold16WhiteA700"
                      >
                        Contact
                      </Text>
                    </div>
                  </li>
                </ul>
                <div className="bg-white-A700 h-0.5 w-[9%]"></div>
              </div>
            </div>
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-[50px] items-center justify-end w-[416px] sm:w-full">
              <Img
                className="h-[19px] w-[151px]"
                src="images/img_follow.svg"
                alt="follow"
              />
              <Button
                className="!text-gray-900 cursor-pointer font-krub font-semibold min-w-[216px] text-base text-center"
                shape="square"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
