import * as content from './../resources/content';

export default class Content {
  static all(type) {
    return content.all(type)
      .then(response => response.data)
      .catch(e => [{}]);
  }

  static save(type, data) {
    console.log(type, data);
    return content.save(type)
      .post(data)
      .then((response) => {
        console.log(response);
      })
  }
}