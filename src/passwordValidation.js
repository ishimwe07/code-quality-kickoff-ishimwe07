export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

export default function isValidPassword(password = "") {
  if (forbiddenPasswords.includes(password)) return false;

  if (typeof password !== "string") password = String(password);

  /*  
  The following regex checks if the password has exactly 10 characters 
  and also if it includes upper lower cases and number only(no special characters).
  */
  if (!/^(?=.*[a-z ])(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{10}$/gm.test(password))
    return false;

  if (new Set([...password]).size < 4) return false;

  return true;
}
