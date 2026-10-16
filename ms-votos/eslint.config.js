module.exports = [
  {
    files: ["src/**/*.js", "tests/**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        require: "readonly",
        module: "readonly",
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        process: "readonly",
        console: "readonly"
      }
    },

    rules: {
      "no-undef": "error",
      "no-unused-vars": "warn"
    }
  }
];
