const separateString = (convertible: string | string[]): string[] | string => {
  if (typeof convertible === "string") return convertible.split("");
  return convertible.join("");
};

console.log(separateString(separateString("Kevin")));

// Solution made by professor

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) return input.join("");
  return input.split("");
}

const rtaArray = parseStr("Kevs");
console.log("rtaArray", rtaArray);

const rtaStr = parseStr(["K", "e", "v", "s"]);
console.log("rtaStr", rtaStr);
