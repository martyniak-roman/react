import type { IComments } from "../../models/IComments"

type CommentProps = {
    comment: IComments
}

const Comment = ({comment}: CommentProps) => {
  return (
    <div>{comment.id}
      <h4>{comment.name}</h4>
      <p>{comment.body}</p>
    </div>
  )
}

export default Comment