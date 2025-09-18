function isValidEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

function isValidName(name) {
  return typeof name === 'string' && name.length >= 3;
}

function isUniqueNumericId(id, users) {
  return typeof id === 'number' && !users.some((user) => user.id === id);
}

function validateUser(user) {
  const { name, email } = user;

  if (!isValidName(name)) {
    return {
      isValid: false,
      error: 'Name must be at least 3 characters long.',
    };
  }
  if (!isValidEmail(email)) {
    return { isValid: false, error: 'Email is not valid.' };
  }

  return { isValid: true };
}

function getHightestId(users) {
  return users.reduce(
    (highestId, user) => (user.id > highestId ? user.id : highestId),
    0
  );
}

function doesUserExist(users, userId) {
  return users.some((user) => user.id === userId);
}

module.exports = {
  doesUserExist,
  getHightestId,
  isValidEmail,
  isValidName,
  isUniqueNumericId,
  validateUser,
};
