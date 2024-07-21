import React from "react";

const Calculator = ({ inputString }: { inputString: string }) => {
  const add = (numbers: string): number => {
    if (!numbers) {
      return 0;
    }

    let delimiter: any = /\n|,/;

    // To handle the different delimiters between numbers
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      delimiter = new RegExp(numbers.slice(2, delimiterEndIndex));
      numbers = numbers.slice(delimiterEndIndex + 1);
    }

    const newNumber = numbers.split(delimiter);
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
