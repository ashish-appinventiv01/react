export default {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.tsx?$": "js-jest",
    },
  
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy",
      "^.+\\.svg$": "jest-transformer-svg",
    },
  
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  }; 
  