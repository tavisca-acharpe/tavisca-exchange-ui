export const environment = {
  production: false,
  version: "/v1.0",
  applicationName: "/OnlineRetailPortal",
  isMockingEnabled: true,
  isPreviewEnabled: false,
  loginSetting: {
    BaseUrl: "http://localhost:62914/api",
    signInPath: "/signin"
  },
  productSetting: {
    BaseUrl: "https://localhost:44357/api",
    addProductPath: "/products/add",
    updateProductPath: "/products/update",
    adDetailsPath: "/details",
    adsListPath: "/products",
    getCategoriesPath: "/categories"
  },
  userSetting: {
    baseUrl: "http://localhost:62914/api",
    profile: "/profile",
    activeAds: "/active",
    inactiveAds: "/inactive"
  },

  imageApiSettings: {
    BaseUrl: "https://localhost:44357/",
    uploadImagePath: "api/v1.0/OnlineRetailPortal/image/",
    storeImagePath: "api/v1.0/OnlineRetailPortal/image/store",
    mockImageUrl: "https://cmsimages-alt.kbb.com/content/dam/kbb-editorial/make/rolls-royce/cullinan/2019-rolls-royce-cullinan-side.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"
  }
};