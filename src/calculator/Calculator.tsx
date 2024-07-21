import React from "react";

const Calculator = ({ inputString }: { inputString: string }) => {
  const add = (numbers: string): number => {
    if (numbers === "") {
      return 0;
    } else if (numbers?.includes(",")) {
      let number = numbers.split(",");
      let sum = 0;
      for (let i = 0; i < number.length; i++) {
        sum += parseInt(number[i], 10);
      }
      return sum;
    } else {
      return parseInt(inputString, 10);
    }
  };
  let output: any;
  try {
    output = add(inputString);
  } catch (error: any) {
    output = error.message;
  }

  return (
    <div>
      <div>{output}</div>
    </div>
  );
};

export default Calculator;
