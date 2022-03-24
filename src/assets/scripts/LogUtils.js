import { globalVars } from "./globalVars.js";
export const LogUtils = {
  log: function (combined, loaded) {
    globalVars.combined = combined;
    globalVars.loaded = loaded;
    this.logUsage();
  },
  logUsage: function () {
    console.log(
      `combined: ${globalVars.combined} loaded: ${globalVars.loaded}`
    );
  },
};
