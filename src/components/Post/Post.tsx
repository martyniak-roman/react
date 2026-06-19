import type { IPost } from "../../models/IPosts"

type PostProps = {
    post: IPost
}

const Post = ({post}: PostProps) => {
  return (
    <div>{post.id}
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}

export default Post