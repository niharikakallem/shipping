import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ServiceSinglePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gray-200 h-[657px] md:px-5 relative w-full">
            <Header className="flex flex-col items-center justify-center mb-[-78px] mx-auto w-full z-[1]" />
            <div className="h-[497px] md:h-[498px] mt-auto mx-auto w-full">
              <Img
                className="h-[497px] ml-auto my-auto object-cover w-[85%]"
                src="images/img_photo_497x1628.png"
                alt="photo"
              />
              <div className="absolute bg-gradient8  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[158px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[203px] mt-[79px] w-[453px] sm:w-full">
                  <div className="flex flex-row items-center justify-start w-[27%] md:w-full">
                    <Line className="bg-gradient  h-[23px] w-1" />
                    <Text
                      className="bg-gray-900_7f justify-center pt-1 px-[11px] text-sm text-white-A700 w-auto"
                      size="txtRubikRomanRegular14"
                    >
                      Service Single
                    </Text>
                  </div>
                  <Text
                    className="md:text-5xl text-6xl text-white-A700 w-auto"
                    size="txtRubikRomanBold60"
                  >
                    Service Details
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1200px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-10 items-start justify-start max-w-[1200px] w-full">
            <Img
              className="h-[509px] sm:h-auto object-cover w-[1199px] md:w-full"
              src="images/img_image_509x1199.png"
              alt="image"
            />
            <div className="flex flex-col gap-[22px] items-start justify-start max-w-[1200px] w-full">
              <div className="flex sm:flex-col flex-row font-rubik gap-[22px] items-center justify-start w-[468px] sm:w-full">
                <Img
                  className="h-[53px] w-[49px]"
                  src="images/img_user_gray_900_01.svg"
                  alt="user"
                />
                <Text
                  className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900_01 w-auto"
                  size="txtRubikRomanSemiBold35"
                >
                  Sea Transport Services
                </Text>
              </div>
              <Text
                className="leading-[151.52%] text-base text-blue_gray-500"
                size="txtKrubMedium16Bluegray500"
              >
                <>
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos, qui ratione
                  voluptatem sequi nesciunt, neque porro quisquam est, qui
                  dolorem ipsum, quia dolor sit, amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt, ut
                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                  minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur?
                  <br />
                  <br />
                  Quis autem vel eum iure reprehenderit, qui in ea voluptate
                  velit esse, quam nihil molestiae consequatur, vel illum, qui
                  dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos
                  et accusamus et iusto odio dignissimos ducimus, qui blanditiis
                  praesentium voluptatum deleniti atque corrupti, quos dolores
                  et quas molestias excepturi sint, obcaecati cupiditate non
                  provident, similique sunt in culpa, qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio.
                </>
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-center justify-start max-w-[1200px] w-full">
            <div className="flex sm:flex-1 flex-col gap-10 items-start justify-start w-[442px] sm:w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-[442px] sm:w-full">
                <Text
                  className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01 w-auto"
                  size="txtRubikRomanSemiBold35"
                >
                  Benefit of Service
                </Text>
                <Text
                  className="leading-[151.52%] max-w-[442px] md:max-w-full text-base text-blue_gray-500"
                  size="txtKrubMedium16Bluegray500"
                >
                  Sed ut perspiciatis, unde omnis iste natu volupta temaccu
                  santium doloremque laudantium, totam rem quae ab illo
                  inventore veritatis.
                </Text>
              </div>
              <div className="flex flex-col gap-[25px] items-start justify-start w-[417px] sm:w-full">
                <div className="flex flex-row gap-3 items-start justify-start w-[83%] md:w-full">
                  <Img
                    className="h-[13px] mt-1 w-3.5"
                    src="images/img_arrowright_gray_900_01.svg"
                    alt="arrowright"
                  />
                  <Text
                    className="text-gray-900_01 text-xl"
                    size="txtRubikRomanRegular20"
                  >
                    Clearance and compliance service
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-3 items-start justify-start w-full">
                  <Img
                    className="h-[13px] sm:mt-0 mt-0.5 w-3.5"
                    src="images/img_arrowright_gray_900_01.svg"
                    alt="arrowright_One"
                  />
                  <a
                    href="https://moovit.foxthemes.me/new-design-for-cargo/"
                    className="text-gray-900_01 text-xl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>Saving Time to Deal with commodo iaculis</Text>
                  </a>
                </div>
                <div className="flex sm:flex-col flex-row gap-3 items-start justify-start w-[89%] md:w-full">
                  <Img
                    className="h-[13px] sm:mt-0 mt-[3px] w-3.5"
                    src="images/img_arrowright_gray_900_01.svg"
                    alt="arrowright_Two"
                  />
                  <Text
                    className="text-gray-900_01 text-xl"
                    size="txtRubikRomanRegular20"
                  >
                    Automate your business elis tristique
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-3 items-start justify-start w-full">
                  <Img
                    className="h-[13px] sm:mt-0 mt-0.5 w-3.5"
                    src="images/img_arrowright_gray_900_01.svg"
                    alt="arrowright_Three"
                  />
                  <Text
                    className="text-gray-900_01 text-xl"
                    size="txtRubikRomanRegular20"
                  >
                    Saving Time to Deal with commodo iaculis
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="md:flex-1 h-[376px] sm:h-auto object-cover w-[686px] md:w-full"
              src="images/img_image_376x686.png"
              alt="image_One"
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[65px] items-center justify-start max-w-[1200px] w-full">
            <Img
              className="md:flex-1 h-[376px] sm:h-auto object-cover w-[645px] md:w-full"
              src="images/img_image_376x645.png"
              alt="image_Two"
            />
            <div className="flex sm:flex-1 flex-col gap-[15px] items-start justify-start w-[490px] sm:w-full">
              <Text
                className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01 w-auto"
                size="txtRubikRomanSemiBold35"
              >
                How It Works
              </Text>
              <Text
                className="leading-[151.52%] text-base text-blue_gray-500"
                size="txtKrubMedium16Bluegray500"
              >
                <>
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem, quia voluptas sit, doloremque laudantium.
                  <br />
                  <br />
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis.
                </>
              </Text>
            </div>
          </div>
        </div>
        <Footer className="flex font-krub items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ServiceSinglePage;
