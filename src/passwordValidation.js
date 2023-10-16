export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */

const checkOrder = (password) => {
  const ascendingNumbers = "123456789";
  const descendingNumbers = "987654321";

  // The following line extract of numbers in our password and return them as an array of numbers
  const arrayOfNumbers = password.match(/([0-9])+/g);

  for (let number of arrayOfNumbers) {
    if (
      (ascendingNumbers.includes(number) ||
        descendingNumbers.includes(number)) &&
      number.length > 1
    )
      return false;
  }

  return true;
};
export default function isValidPassword(password = "") {
  if (forbiddenPasswords.includes(password)) return false;

  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  /*  
  The following regex checks if the password has exactly 10 characters 
  and also if it includes upper lower cases and number only(no special characters).
  */
  if (!/^(?=.*[a-z ])(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{10}$/gm.test(password))
    return false;

  // The function checkOrder check if there is an ascending or descending order number in our pass word.
  if (!checkOrder(password)) return false;

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
