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

export function scrollToTop(smoothScroll: boolean = true): void {
  const options: ScrollToOptions = {
    top: 0,
    behavior: smoothScroll ? "smooth" : "auto", // Use "auto" for instant scrolling
  };
  document.querySelector(".scrollToTopNow")?.scrollTo(options);
}

export function getCurrentDateTime() {
  const currentDate = new Date();

  // Get day, month, year
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Month is zero-based
  const year = currentDate.getFullYear();

  // Get hours and minutes
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");

  // Return formatted date and time
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}
