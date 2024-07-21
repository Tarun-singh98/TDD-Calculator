import React from "react";

const Calculator = ({ inputString }: { inputString: string }) => {
  const add = (numbers: string): number => {
    if (!numbers) {
      return 0;
    }

    let delimeter = /\n|,/;

    const newNumber = numbers.split(delimeter);
    let sum = 0;
    for (let i = 0; i < newNumber.length; i++) {
      sum += parseInt(newNumber[i], 10);
    }
    return sum;
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
