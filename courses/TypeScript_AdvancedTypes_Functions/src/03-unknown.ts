let anyVar: any;
anyVar = true;
anyVar = undefined;

let isNew: boolean = anyVar;

let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = {};

typeof unknownVar === "string" && unknownVar.toUpperCase();

const parse = (str: string): unknown => JSON.parse(str);
