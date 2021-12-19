import { request } from ".";

export class PostsAPI {
  static async paginate({ page = 0, maxPerPage = 16 }) {
    return request.get(`/posts/paginate?page=${page}&maxPerPage=${maxPerPage}`);
  }
  static async getBySlug({ slug }) {
    return request.get(`/posts?slug=${slug}`);
  }
  static async getById({ id }) {
    return request.get(`/posts?id=${id}`);
  }
  static async react({ reaction, post }) {
    return request.put("/posts/vote", { reaction, post });
  }
}
