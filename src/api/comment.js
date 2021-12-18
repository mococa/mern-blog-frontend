import { request } from ".";

export class CommentAPI {
  static async create({ content, postId }) {
    return request.post("/comments/", { content, postId });
  }
}
