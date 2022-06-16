const withouEnd = () => {
  while (true) {
    console.log("Nunca pares de aprender");
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === "string") {
    return "es un string";
  } else if (Array.isArray(input)) {
    return "es un array";
  }
  return fail("No match");
};
