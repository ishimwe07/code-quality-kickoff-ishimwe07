export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if(forbiddenPasswords.includes(password)) return false;
  if (typeof password !== "string") password = String(password);

  const myRegex = /^(?=.*[a-z ])(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{10}$/gm;

  const numberOfCharacters = (password) => {
    let object = {};
    for (let character of password){
      if(object.hasOwnProperty(character)){
        object[character]++;
      }else{
        object[character] = 1;
      }
    }
    return Object.entries(object).length > 3? true : false;
  }

  const checkOrder = (password) => {
    const ascendingNumbers = "123456789"
    const descendingNumbers = "987654321"
    const arrayOfNumbers = password.match(/([0-9])+/g);
    for (let el of  arrayOfNumbers){
      if((ascendingNumbers.includes(el) || descendingNumbers.includes(el)) && el.length > 1){
        return false;
      }
    }
    
    return true;
  }
    if (!(myRegex.test(password) && numberOfCharacters(password) && checkOrder(password))) {
      return false;
    }

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
