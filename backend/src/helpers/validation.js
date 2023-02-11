const validateEmail = (email) => {
  return email
    .toString()
    .toLowerCase()
    .match(/^([a-z\d\.-]+)@([a-z\d\-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/);
};
module.exports = { validateEmail };
