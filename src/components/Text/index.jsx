import React from "react";

const sizeClasses = {
  txtRubikRomanSemiBold35: "font-rubik font-semibold",
  txtRubikRomanBold60: "font-bold font-rubik",
  txtRubikRomanSemiBold350: "font-rubik font-semibold",
  txtRubikRomanMedium25Gray90001: "font-medium font-rubik",
  txtTimesNewRomanPSMT20Gray90003: "font-normal font-timesnewroman",
  txtRubikRomanSemiBold40: "font-rubik font-semibold",
  txtKrubMedium16Gray20001: "font-krub font-medium",
  txtKrubMedium16: "font-krub font-medium",
  txtKrubMediumItalic16: "font-krub font-medium italic",
  txtKrubMedium14: "font-krub font-medium",
  txtTimesNewRomanPSMT20: "font-normal font-timesnewroman",
  txtRubikRomanRegular22WhiteA700: "font-normal font-rubik",
  txtLatoRegular16: "font-lato font-normal",
  txtRubikRomanMedium20: "font-medium font-rubik",
  txtKrubSemiBold16Gray90005: "font-krub font-semibold",
  txtRubikRomanBold35: "font-bold font-rubik",
  txtKrubMediumItalic16WhiteA700: "font-krub font-medium italic",
  txtKrubMedium16Bluegray500: "font-krub font-medium",
  txtRubikRomanBold30: "font-bold font-rubik",
  txtRubikRomanSemiBold35WhiteA700: "font-rubik font-semibold",
  txtRubikRomanMedium16: "font-medium font-rubik",
  txtRubikRomanRegular18: "font-normal font-rubik",
  txtRubikRomanRegular16: "font-normal font-rubik",
  txtRubikRomanRegular14: "font-normal font-rubik",
  txtKrubSemiBold16: "font-krub font-semibold",
  txtRubikRomanSemiBold50: "font-rubik font-semibold",
  txtRubikRomanRegular14Gray90001: "font-normal font-rubik",
  txtThabit20Gray90003: "font-medium font-thabit",
  txtRubikRomanRegular20: "font-normal font-rubik",
  txtKrubMedium16Yellow700: "font-krub font-medium",
  txtRubikItalicRegular20: "font-normal font-rubik italic",
  txtRubikRomanRegular25Yellow70002: "font-normal font-rubik",
  txtRubikRomanMedium30: "font-medium font-rubik",
  txtRubikRomanRegular25Yellow70001: "font-normal font-rubik",
  txtRubikRomanMedium30WhiteA700: "font-medium font-rubik",
  txtRubikRomanRegular18Gray50001: "font-normal font-rubik",
  txtRubikRomanMedium25: "font-medium font-rubik",
  txtRubikRomanMedium85WhiteA700: "font-medium font-rubik",
  txtRubikRomanSemiBold22: "font-rubik font-semibold",
  txtLeagueSpartanRegular20: "font-leaguespartan font-normal",
  txtThabit20: "font-medium font-thabit",
  txtRubikRomanRegular25: "font-normal font-rubik",
  txtRubikRomanRegular22: "font-normal font-rubik",
  txtSyneBold20: "font-bold font-syne",
  txtKrubRegular16: "font-krub font-normal",
  txtRubikRomanBold35Gray90001: "font-bold font-rubik",
  txtRubikRomanSemiBold40WhiteA700: "font-rubik font-semibold",
  txtKrubRegular16Bluegray50001: "font-krub font-normal",
  txtLeagueSpartanRegular20WhiteA700: "font-leaguespartan font-normal",
  txtKrubMedium16Gray90003: "font-krub font-medium",
  txtKrubMedium16Gray90001: "font-krub font-medium",
  txtRubikRomanSemiBold22WhiteA700: "font-rubik font-semibold",
  txtRubikRomanMedium85: "font-medium font-rubik",
  txtRubikRomanMedium20Gray90001: "font-medium font-rubik",
  txtKrubSemiBold16WhiteA700: "font-krub font-semibold",
  txtRubikRomanMedium20Gray90003: "font-medium font-rubik",
  txtRubikRomanRegular18WhiteA700: "font-normal font-rubik",
  txtRubikRomanSemiBold30: "font-rubik font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
