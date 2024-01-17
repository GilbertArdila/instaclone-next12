import Moment from 'react-moment';

const Comment = ({postComment}) => {
  return (
    <div className="flex items-center space-x-2 mb-2">
    <img 
    className="w-7 rounded-full object-cover"
    src={postComment.data().userImage} alt={postComment.data().userName} />
    <p className="font-semibold">{postComment.data().userName}</p>
    <p className="flex-1 truncate">{postComment.data().comment}</p>
    <Moment fromNow>{postComment.data().timestamp?.toDate()}</Moment>
</div>
  )
}

export default Comment;