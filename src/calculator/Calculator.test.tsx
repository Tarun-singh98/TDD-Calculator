import React from "react";
import { render, screen } from "@testing-library/react";
import Calculator from "./Calculator";

test("String should not be empty.", () => {
  render(<Calculator inputString={""} />);
  const check = screen.queryByText("0");
  expect(check).toBeVisible();
});

test("if only 1 number given that should be output", () => {
  render(<Calculator inputString={"1"} />);
  const check = screen.queryByText("1");
  expect(check).toBeVisible();
});

test("if 2 numbers are given than return the sum", () => {
  render(<Calculator inputString={"1,5"} />);
  const check = screen.queryByText("6");
  expect(check).toBeVisible();
});
