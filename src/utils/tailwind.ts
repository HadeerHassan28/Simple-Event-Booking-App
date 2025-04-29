import { create } from "twrnc";

// custom config
const tw = create({
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        background: "#121212",
        surface: "#1E1E1E",
        text: "#E5E5E5",
      },
    },
  },
});

export default tw;
