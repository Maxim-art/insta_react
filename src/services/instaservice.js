export default class InstaService {
  constructor() {
    this._apiBase = 'http://maxpike.ru/';
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recived ${res.status}`);
    }

    return res.json();
  }

  getAllPosts = async () => {
    const res = await this.getResource('posts.php/');
    return res.posts;
  }
}