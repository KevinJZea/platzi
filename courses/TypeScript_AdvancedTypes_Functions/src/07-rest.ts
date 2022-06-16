import { User, ROLES } from "./01-enum";

const currentUser: User = {
  username: "kevinjzea",
  role: ROLES.COSTUMER,
};

export const checkAdminRole = () => currentUser.role === ROLES.ADMIN;

const rta = checkAdminRole();
console.log(rta);
