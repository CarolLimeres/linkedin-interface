import { CommentContainer } from "./styles";
import { DotsThree } from "phosphor-react";
import { ThumbsUp } from "phosphor-react";

interface CommentProps {
  userphotocomment: string;
  usernamecomment: string;
  userpositioncomment: string;
  commenttime: number;
  commenttext: string;
  commentlikes: number;
}

export function Comment({
  userphotocomment,
  usernamecomment,
  userpositioncomment,
  commenttime,
  commenttext,
  commentlikes,
}: CommentProps) {
  return (
    <CommentContainer>
      <div className="user-time-options-container">
        <div className="user-photo-container">
          <a href="" className="photo-link">
            <img
              src={`/public/${userphotocomment}`}
              alt=""
              className="userphotocomment"
            />
          </a>

          <div className="username-position-container">
            <a href="/" className="username-comment-link">
              <span className="usernamecomment">{usernamecomment}</span>
              <span className="userpositioncomment">{userpositioncomment}</span>
            </a>
            <div className="text-comment-container">
              <p>{commenttext}</p>
            </div>
            <div className="likes-responses-container">
              <div className="likes-comments-container">
                <button className="like-button">
                  <span>Gostei</span>
                </button>
                <button className="amount-likes-button">
                  <ThumbsUp
                    size={16}
                    weight="fill"
                    className="thumbsup-icon"
                  ></ThumbsUp>

                  <span className="commentlikes-number">{commentlikes}</span>
                </button>
              </div>
              <div className="ball-comment-container">
                <span className="ball-comment">•</span>
              </div>
              <div className="responses-container">
                <button className="response-button">
                  <span>Responder</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="time-options-container">
          <div className="time-comment-container">
            <span>{commenttime}</span>
            <span>d</span>
          </div>

          <button className="dots-button-container">
            <DotsThree
              size={22}
              weight="bold"
              className="dots-icon"
            ></DotsThree>
          </button>
        </div>
      </div>
    </CommentContainer>
  );
}
