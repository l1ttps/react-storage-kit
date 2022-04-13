import hash from "murmurhash-js/murmurhash2_gc";
import sha256 from "crypto-js/sha256";
import getBrowserData from "./getBrowserInfo";
import cryptoJs from "crypto-js";

const getDeviceId = () =>
  sha256(hash(getBrowserData(), 256).toString()).toString(cryptoJs.enc.Hex);

const genKeyStorage = (): string => {
  return getDeviceId().slice(0, 6);
};

export { getDeviceId, genKeyStorage };
