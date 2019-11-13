export const environment = {
  production: false,
  version: "/v1.0",
  applicationName: "/ORP",
  isMockingEnabled: true,
  loginSetting: {
    BaseUrl: "https://localhost:44340/api",
    signInPath: "/signin"
  },
  productSetting: {
    //BaseUrl: "https://localhost:44340/api",
    BaseUrl: "http://localhost:62281/api",
    addProductPath: "/product",
    adDetailsPath: "",
    adsListPath: "/products",
    getCategoriesPath: "/categories"
  }
};