const screen = window.screen;
const navigator = window.navigator
const getCurrentResolution = () => {
  return screen.width + "x" + screen.height;
};

const getAvailableResolution = () => {
  return screen.availWidth + "x" + screen.availHeight;
};

const getColorDepth = () => {
  return screen.colorDepth;
};

const getPixelDepth = () => {
  return screen.pixelDepth;
};

export const getScreenPrint = () => {
  return [
    getCurrentResolution(),
    getAvailableResolution(),
    getColorDepth(),
    getPixelDepth(),
  ].join(" | ");
};

export const getTimeZone = () => {
  var rightNow, myNumber, formattedNumber, result;
  rightNow = new Date();
  myNumber = -(rightNow.getTimezoneOffset() / 60)
  if (myNumber < 0) {
    myNumber = myNumber * -1;
    formattedNumber = ("0" + myNumber).slice(-2);
    result = "-" + formattedNumber;
  } else {
    formattedNumber = ("0" + myNumber).slice(-2);
    result = "+" + formattedNumber;
  }
  return result;
};

export const getLanguage = () => {
  return navigator.language;
};

export const getSystemLanguage = () => {
  return window.navigator.language;
};

export const isCookie = () => {
  return navigator.cookieEnabled;
};

export const getCanvasPrint = () => {
  var canvas = document.createElement("canvas");
  var ctx: any;
  try {
    ctx = canvas.getContext("2d");
  } catch (e) {
    return "";
  }
  var txt = "react-storage-kit";
  ctx.textBaseline = "top";
  ctx.font = "14px 'Arial'";
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#f60";
  ctx.fillRect(125, 1, 62, 20);
  ctx.fillStyle = "#069";
  ctx.fillText(txt, 2, 15);
  ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
  ctx.fillText(txt, 4, 17);
  return canvas.toDataURL();
};

const getBrowserData = () => {
  return [
    getCanvasPrint(),
    getLanguage(),
    getScreenPrint(),
    getSystemLanguage(),
    getTimeZone(),
    isCookie(),
  ].join(" | ");
};

export default getBrowserData;
