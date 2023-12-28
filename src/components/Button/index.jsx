import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[31px]" };
const variants = {
  fill: {
    yellow_700_01: "bg-yellow-700_01 text-white-A700",
    indigo_900_05: "bg-indigo-900_05",
    blue_gray_900_03: "bg-blue_gray-900_03 text-white-A700",
    white_A700: "bg-white-A700",
    gray_100: "bg-gray-100 text-gray-900_01",
    indigo_900: "bg-indigo-900",
  },
  gradient: { yellow_700_orange_100: "bg-gradient  text-gray-900" },
};
const sizes = {
  xs: "p-[15px]",
  sm: "p-[19px]",
  md: "p-[22px] sm:px-5",
  lg: "p-7 sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "gradient"]),
  color: PropTypes.oneOf([
    "yellow_700_01",
    "indigo_900_05",
    "blue_gray_900_03",
    "white_A700",
    "gray_100",
    "indigo_900",
    "yellow_700_orange_100",
  ]),
};

export { Button };
