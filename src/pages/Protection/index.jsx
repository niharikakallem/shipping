import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ProtectionPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-full">
        <div className="h-[609px] md:px-5 relative w-full">
          <Header className="flex flex-col items-center justify-center mb-[-78px] mx-auto w-full z-[1]" />
          <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
            <div className="h-[449px] md:h-[450px] relative w-full">
              <Img
                className="h-[449px] ml-auto my-auto object-cover w-[92%]"
                src="images/img_davidprestono.png"
                alt="davidprestono"
              />
              <div className="absolute h-[449px] md:h-[450px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[449px] m-auto object-cover w-full"
                  src="images/img_vooqqqrsybi1fhfmunsplash.png"
                  alt="vooqqqrsybi1fhf"
                />
                <div className="absolute bg-gradient13  flex flex-col h-full inset-[0] items-start justify-center m-auto p-36 md:px-10 sm:px-5 w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start max-w-[628px] md:ml-[0] ml-[216px] mt-[63px] w-full">
                    <div className="flex flex-row items-center justify-start w-[14%] md:w-full">
                      <Line className="bg-gradient  h-[21px] w-1" />
                      <Text
                        className="bg-gray-900_7f justify-center px-[7px] text-sm text-white-A700 w-auto"
                        size="txtRubikRomanRegular14"
                      >
                        Protection
                      </Text>
                    </div>
                    <Text
                      className="md:text-5xl text-6xl text-white-A700 w-auto"
                      size="txtRubikRomanBold60"
                    >
                      Password Protection
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900_03 flex flex-col items-center justify-start max-w-[1200px] mx-auto md:px-5 px-[351px] py-[126px] w-full">
          <div className="flex flex-col gap-[42px] items-center justify-start w-[498px] sm:w-full">
            <Text
              className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-white-A700 w-auto"
              size="txtRubikRomanBold35"
            >
              Enter Password
            </Text>
            <div className="flex sm:flex-col flex-row font-leaguespartan gap-[25px] items-start justify-center w-[498px] sm:w-full">
              <Input
                name="name"
                placeholder="Enter Your Password"
                className="leading-[normal] p-0 placeholder:text-gray-500 text-left text-xl w-full"
                wrapClassName="w-[64%] sm:w-full"
                type="password"
                shape="square"
                color="blue_gray_600"
                size="xl"
                variant="outline"
              ></Input>
              <div
                className="bg-cover bg-no-repeat flex flex-col font-krub h-[60px] items-center justify-start p-[19px]"
                style={{
                  backgroundImage: "url('images/img_button_white_a700.png')",
                }}
              >
                <Text
                  className="text-base text-gray-900"
                  size="txtKrubSemiBold16"
                >
                  Submit
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

export default ProtectionPage;
