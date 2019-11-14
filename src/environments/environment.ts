export const environment = {
  production: false,
  version: "/v1.0",
  applicationName: "/OnlineRetailPortal",
  isMockingEnabled: false,
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
    mockImageUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
};