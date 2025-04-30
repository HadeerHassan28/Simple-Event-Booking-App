import "dotenv/config";

export default {
  expo: {
    name: "YourAppName",
    slug: "your-app-name",
    extra: {
      MOCK_API_URL: process.env.MOCK_API_URL,
    },
  },
};
