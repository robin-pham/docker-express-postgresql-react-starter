export default class Post {
  constructor(name) {
    this.name = name;
  }
  content(content) {
    this.content = content;
    return this;
  }
  getName() {
    return this.name;
  }
  getContent() {
    return this.content;
  }
};
