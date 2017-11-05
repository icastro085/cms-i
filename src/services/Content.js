import * as content from './../resources/content';

export default class Content {
  static all(type) {
    return content.all(type)
      .getAll()
      .then((response) => {
        const entities = response.body();
        const items = entities.map(entity => entity.data());
        return items;
      });
  }
}