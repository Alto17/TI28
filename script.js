module.exports = {
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
      },
    },
  };
  const withMT = require("@material-tailwind/html/utils/withMT");
 
  module.exports = withMT({
    content: ["./index.html"],
    theme: {
      extend: {},
    },
    plugins: [],
  });