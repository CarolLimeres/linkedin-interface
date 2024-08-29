import styled from "styled-components";

export const CommentContainer = styled.div`
  padding-left: 1.25rem;
  padding-right: 1.25rem;

  margin-bottom: 1.25rem;

  .user-time-options-container {
    display: flex;
    align-items: start;
    justify-content: space-between;
  }

  .user-photo-container {
    display: flex;
    gap: 0.5rem;
  }

  .userphotocomment {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  .photo-link {
    cursor: pointer;
  }

  .username-comment-link {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  .usernamecomment {
    font-size: 0.875rem;
    color: rgb(0 0 0 / 0.9);
    font-weight: 600;
    line-height: 1.25;
  }

  .userpositioncomment {
    font-size: 0.75rem;
    color: rgb(0 0 0 / 0.6);
    line-height: 1.25;
    margin-bottom: 0.5rem;
  }

  .time-options-container {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.75rem;
    color: rgb(0 0 0 / 0.6);
  }

  .time-comment-container {
    display: flex;
    gap: 0.1875rem;
  }

  .dots-button-container {
    padding: 0.25rem 0.375rem;
    transition: background-color 0.2s;
    border-radius: 50%;
  }

  .dots-button-container:hover {
    background-color: #f0f0f0;
  }

  .text-comment-container {
    font-size: 14px;
    color: rgb(0 0 0 / 0.9);
  }

  .likes-responses-container {
    margin-top: 0.5rem;
    display: flex;

    gap: 0.625rem;
    font-size: 0.75rem;

    color: rgb(0 0 0 / 0.6);
    font-weight: 650;
  }

  .likes-comments-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .like-button,
  .response-button {
    transition: background-color 0.2s;
    border-radius: 0.3125rem;
    padding: 0.25rem;
  }

  .like-button:hover,
  .response-button:hover {
    background-color: #f0f0f0;
  }

  .amount-likes-button {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .commentlikes-number {
    color: rgb(0 0 0 / 0.6);
    font-weight: 400;
  }

  .commentlikes-number:hover {
    text-decoration: underline;
    color: #0a66c2;
  }

  .ball-comment-container {
    display: flex;
    align-items: center;
  }

  .ball-comment {
    font-size: 0.25rem;
  }
`;
