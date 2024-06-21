export function formatPrice(number) {
  // Ensure the number is a float with two decimal places
  const parts = number.split('.');
  let integerPart = parts[0];
  // const decimalPart = parts[1];

  // Use regular expression to insert dots for thousands and apostrophes for millions
  integerPart = integerPart
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    .replace(/\B(?=(\d{6})+(?!\d))/g, "'");

  // Join the integer part with the decimal part, separated by a comma
  // return integerPart + ',' + decimalPart;
  return integerPart;
}
