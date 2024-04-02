export function removeLeadingZeros(number: number) {
  // Convert the number to a string
  let numberString = number.toString();

  // Find the index of the first non-zero digit
  let firstNonZeroIndex = 0;
  while (numberString[firstNonZeroIndex] === "0") {
    firstNonZeroIndex++;
  }

  // Extract the substring from the first non-zero digit to the end
  let result = numberString.substring(firstNonZeroIndex);

  return result;
}

export const getCurrentMonth = (): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();

  return months[currentMonthIndex];
};

export function getScreenWidth() {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
}
