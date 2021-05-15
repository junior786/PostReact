import './style.css'
export const PostCard = ({ title, cover, body }) => (
    <div className="post">
        <img alt={title} src={cover}></img>
        <div className="post-content">
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    </div>
)