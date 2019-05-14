import appEnum from "./enum";

module.exports = {
  async changeHue() {
    const data = await axios.put(
      `${appEnum.API.LINK}${appEnum.PRIVATE.KEY}${appEnum.API.LIGHT}`
    );
    return data;
  }
};
