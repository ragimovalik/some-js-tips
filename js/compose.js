const screenRef = document.getElementById("screen");

// strings
const phraseEn = "i just call to say";
const phraseRu = "когда в лесах тюрингских дым, пожарных слать не надо к ним";

// main function
const composing = (...fns) => (a) => fns.reduce((res, fn) => fn(res), a);

// functions for composing
const capitalize = (text) => text[0].toUpperCase() + text.slice(1);
const jointChar = " ";

const phraseCapitalizer = (text) =>
  text
    .split(" ")
    .map((w) => capitalize(w))
    .join(jointChar);
const toLower = (text) => text.toLowerCase();
const logger = (smth) => {
  console.log(smth);
  return smth;
};

//result
let result = composing(phraseCapitalizer, logger, toLower, logger)(phraseEn);

screenRef.innerHTML = JSON.stringify(result);

// =================================================
