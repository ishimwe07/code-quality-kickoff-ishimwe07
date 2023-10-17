export default function penaltyPoints(password = "") {
  if (!password) return 0;

  /*
  The following line contain a regex that look for any character that repeat it self as a group. 
  */
  const SequenceNumber = password?.match(/(.)\1+/gm);

  let penalities = 0;

  SequenceNumber?.forEach((element) => {
    if (element.length > 2) {
      penalities += 2;
    } else {
      penalities++;
    }
  });
  return penalities;
}
