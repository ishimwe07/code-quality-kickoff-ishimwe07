export default function penaltyPoints(password) {
  if (!password) return 0;

  let penalities = 0;

  // The following line contain a regex that look for any character that repeat it self as a group.
  password
    .match(/(.)\1+/gm)
    ?.forEach((element) =>
      element.length > 2 ? (penalities += 2) : penalities++
    );

  return penalities;
}
