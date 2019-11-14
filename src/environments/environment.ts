export const environment = {
  production: false,
  version: "/v1.0",
  applicationName: "/OnlineRetailPortal",
  isMockingEnabled: true,
  isPreviewEnabled:false,
  loginSetting: {
    BaseUrl: "https://localhost:44357/api",
    signInPath: "/signin"
  },
  productSetting: {
    BaseUrl: "https://localhost:44357/api",
    addProductPath: "/products/add",
    adDetailsPath: "/details",
    adsListPath: "/products"
  },
  userSetting: {
    baseUrl: "https://localhost:44340/api",
    profile: "/profile",
    activeAds: "/active",
    inactiveAds: "/inactive",
    userId: "777888666",
  },
  
  imageApiSettings:{
    BaseUrl: "https://localhost:44357/",
    uploadImagePath: "api/v1.0/OnlineRetailPortal/image/",
    storeImagePath: "api/v1.0/OnlineRetailPortal/image/store",
    mockImageUrl: "https://cmsimages-alt.kbb.com/content/dam/kbb-editorial/make/rolls-royce/cullinan/2019-rolls-royce-cullinan-side.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"
  }
};