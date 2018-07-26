let config = {
  apiUrl: "http://localhost:8000"
};

const env = process.env.REACT_APP_ENV || "development";

switch (env) {
  case "test":
    config.apiUrl = "http://localhost:8010";
    break;
  case "production":
    config.apiUrl = "http://159.65.200.25:8000";
    break;
  default:
}

export default config;
