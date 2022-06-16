export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  COSTUMER = "costumer",
}

export type User = {
  username: string;
  role: ROLES;
};

const kevoUser: User = {
  username: "kevinjzea",
  role: ROLES.ADMIN,
};
