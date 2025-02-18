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

test("should handle new lines between numbers", () => {
  render(<Calculator inputString={"1\n2,3"} />);
  const check = screen.getByText("6");
  expect(check).toBeVisible();
});

test("should handle different delimiters between numbers", () => {
  render(<Calculator inputString={"//;\n1;2"} />);
  const check = screen.getByText("3");
  expect(check).toBeVisible();
});

test("should throw an error for negative numbers", () => {
  render(<Calculator inputString={"-1,2,-3"} />);
  const check = screen.getByText("negative numbers not allowed: -1, -3");
  expect(check).toBeVisible();
});

test("should ignore numbers bigger than 1000", () => {
  render(<Calculator inputString={"2,1001"} />);
  const check = screen.getByText("2");
  expect(check).toBeVisible();
});

test("should handle delimiters of any length", () => {
  render(<Calculator inputString={"//[***]\n1***2***3"} />);
  const check = screen.getByText("6");
  expect(check).toBeVisible();
});

test("should handle multiple delimiters", () => {
  render(<Calculator inputString={"//[*][%]\n1*2%3"} />);
  const check = screen.getByText("6");
  expect(check).toBeVisible();
});

test("should handle multiple delimiters with lengths longer than one character", () => {
  render(<Calculator inputString={"//[***][%%%]\n1***2%%%3"} />);
  const check = screen.getByText("6");
  expect(check).toBeVisible();
});
