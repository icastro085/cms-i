import * as content from './../api/content';

export default class Content {
  static all(type) {
    return content.all(type)
      .then(response => response.data)
      .catch(e => [{}]);
  }

  static save(type, data) {
    return content.save(type, data)
      .then(response => response.data)
  }

  static update(type, data) {
    return content.update(type, data.id, data)
      .then(response => response.data)
  }
}