/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  if(!password) return 0;

  const SequenceNumber = password?.match(/(.)\1+/gm)
  
    let penalities = 0;

    SequenceNumber?.forEach(element => {
      if(element.length > 2){
        penalities +=2;
      }else {
        penalities++;
      }
    });
    return penalities;
}
