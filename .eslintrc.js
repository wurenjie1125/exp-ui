const eslintrc = {
  parser: "babel-eslint",
  extends: ["prettier", "plugin:jest/recommended"],
  rules: {
    "prettier/prettier": "error"
  }
};
module.exports = eslintrc;
