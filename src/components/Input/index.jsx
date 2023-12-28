import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  outline: {
    gray_300: "border border-gray-300 border-solid text-white-A700",
    blue_gray_600: "border border-blue_gray-600 border-solid text-gray-500",
  },
  underline: {
    indigo_900_03: "border-b border-indigo-900_03 text-white-A700",
    blue_gray_100_02: "border-b border-blue_gray-100_02 text-gray-900_01",
  },
};
const shapes = { square: "rounded-none" };
const sizes = {
  xl: "pb-[22px] pt-[18px] px-[18px]",
  sm: "pb-4",
  xs: "pb-[13px]",
  lg: "pb-[19px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xl", "sm", "xs", "lg"]),
  variant: PropTypes.oneOf(["outline", "underline"]),
  color: PropTypes.oneOf([
    "gray_300",
    "blue_gray_600",
    "indigo_900_03",
    "blue_gray_100_02",
  ]),
};

export { Input };
