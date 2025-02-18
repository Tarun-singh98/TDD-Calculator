import React from "react";

const Calculator = ({ inputString }: { inputString: string }) => {
  const add = (numbers: string): number => {
    // To handle the empty string
    if (!numbers) {
      return 0;
    }

    let delimiter: any = /\n|,/;

    // To handle the different delimiters between numbers
    if (numbers.startsWith("//")) {
      
      // To handle the multiple delimiters
      if (numbers.startsWith("//[")) {
        const delimiters: any = [];
        let delimiterEndIndex: any = 2;
        while (numbers[delimiterEndIndex] === "[") {
          delimiterEndIndex++;
          const start: any = delimiterEndIndex;
          delimiterEndIndex = numbers.indexOf("]", start);
          delimiters.push(numbers.slice(start, delimiterEndIndex));
          delimiterEndIndex++;
        }
        delimiter = new RegExp(
          delimiters
            .map((delimiter: any) =>
              delimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            )
            .join("|")
        );
        numbers = numbers.slice(delimiterEndIndex + 1);
      } else {
        const delimiterEndIndex = numbers.indexOf("\n");
        delimiter = new RegExp(numbers.slice(2, delimiterEndIndex));
        numbers = numbers.slice(delimiterEndIndex + 1);
      }
    }

    const newNumber = numbers.split(delimiter);

    // To handle the negative numbers
    const negatives = newNumber.filter((num) => parseInt(num, 10) < 0);

    if (negatives.length) {
      throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return newNumber
      .map((num) => parseInt(num, 10))
      .filter((num) => num <= 1000) // To handle the numbers greater than 1000
      .reduce((sum, num) => sum + num, 0);
  };

  let output: any;
  try {
    output = add(inputString);
  } catch (error: any) {
    output = error.message;
  }

  return <div>{output}</div>;
};

export default Calculator;
