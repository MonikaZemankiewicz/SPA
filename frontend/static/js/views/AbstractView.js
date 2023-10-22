export default class {
  constructor() {}

  setTitle(title) {
    document.title = title;
  }

  //async in case it will be loaded from the server
  async getHtml() {
    return "";
  }
}
