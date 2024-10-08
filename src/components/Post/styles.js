import styled from "styled-components";
export const PostContainer = styled.div `
  .user-options-container {
    display: flex;
    justify-content: space-between;

    padding-right: 1rem;
    padding-left: 1rem;
  }

  .userphoto-username-container {
    display: flex;
    gap: 0.625rem;

    padding-top: 0.75rem;
    margin-bottom: 0.625rem;
  }

  .userphoto-link,
  .username-position-time-container {
    cursor: pointer;
  }

  .userphoto {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

  .username-position-time-container {
    display: flex;
    flex-direction: column;
  }

  .username {
    color: rgb(0 0 0 / 0.9);
    font-weight: 650;
  }

  .username:hover {
    color: #0a66c2;
    text-decoration: underline;
  }

  .position {
    font-size: 0.75rem;
    color: rgb(0 0 0 / 0.6);
    display: flex;
  }

  .time-globe-container {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    font-size: 12px;
    color: rgb(0 0 0 / 0.6);
  }

  .options-container {
    padding-top: 4px;
    display: flex;
    gap: 0.375rem;
    color: rgb(0 0 0 / 0.75);
  }

  button {
    all: unset;
    cursor: pointer;
  }

  .dots-container,
  .x-container {
    padding: 0.25rem 0.375rem;
    transition: background-color 0.2s;
    border-radius: 50%;
  }

  .dots-container:hover,
  .x-container:hover {
    background-color: #f0f0f0;
  }

  .text-container {
    text-align: left;
  }

  .text {
    padding-right: 1rem;
    padding-left: 1rem;
    font-size: 0.875rem;
    line-height: 1.42857;
    color: rgb(0 0 0 / 0.9);
  }

  .links-container {
    margin-top: 0.625rem;

    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    gap: 0.375rem;
    color: #0a66c2;
    font-weight: 600;
  }

  .link:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .view-translation-container {
    padding-left: 0.75rem;
  }

  .view-translation {
    margin-top: 0.625rem;
    color: #0a66c2;

    font-size: 0.875rem;
    font-weight: 650;

    padding: 0.25rem;
    transition: background-color 0.2s;
  }

  .view-translation:hover {
    background-color: rgba(112, 181, 249, 0.2);
    border-radius: 0.3125rem;
    color: #004182;
  }

  .post-image {
    margin-top: 0.5rem;
    width: 100%;
    height: 100%;
  }

  .likes-comments-shares-container {
    margin-top: 0.25rem;
    display: flex;
    justify-content: space-between;

    padding-right: 1rem;
    padding-left: 1rem;
    font-size: 0.75rem;
    color: rgb(0 0 0/0.6);

    border-bottom: 0.0625rem solid rgba(140, 140, 140, 0.2);
    padding-bottom: 0.5rem;
  }

  .likes-container {
    display: flex;
    align-items: center;
    gap: 0.125rem;
  }

  .icons-container {
    display: flex;
    align-items: center;
  }

  .likes:hover {
    color: #0a66c2;
    text-decoration: underline;
  }

  .thumbsup-icon {
    color: #0a66c2;
  }

  .heart-icon {
    color: #ff5f5f;
  }

  .comments-shares-container {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .comments-container:hover,
  .shares-container:hover {
    color: #0a66c2;
    text-decoration: underline;
  }

  .ball {
    font-size: 0.5rem;
  }

  .tolike-tocomment-toshare-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .tolike-container,
  .tocomment-container,
  .toshare-container,
  .tosend-container {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: rgb(0 0 0 / 0.75);
    font-size: 0.875rem;
    font-weight: 650;

    transition: background-color 0.2s;
    border-radius: 0.3125rem;
    padding: 0.875rem 1.125rem 0.5rem 1.125rem;
  }

  .tolike-container:hover,
  .tocomment-container:hover,
  .toshare-container:hover,
  .tosend-container:hover {
    background-color: #f0f0f0;
    color: rgb(0 0 0 / 0.9);
  }

  .add-comment-container {
    padding: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.375rem;
  }

  .userphoto-addcomment {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  .form-comment {
    flex-grow: 1;
  }

  .input-comment-container {
    display: flex;
    align-items: center;

    position: relative;
    width: 100%;
  }

  .smiley-comment-icon,
  .media-comment-icon {
    display: flex;
    align-items: center;
    color: rgb(0 0 0 / 0.75);

    position: absolute;
  }

  .smiley-comment-icon {
    right: 3.5rem;
  }

  .media-comment-icon {
    right: 1rem;
  }

  .input-comment {
    width: 100%;
    padding: 0.625rem;
    padding-right: 4.5rem;
    border-radius: 1.25rem;
    border: 0.0625rem solid rgb(0 0 0 / 0.3);
    font-size: 0.875rem;
  }

  .comments-post-container {
    text-align: left;
  }

  .more-relevant-button {
    display: flex;
    align-items: center;
    gap: 0.125rem;
    padding-left: 0.875rem;
    color: rgb(0 0 0 / 0.6);
    font-size: 0.875rem;
    font-weight: 650;

    margin-bottom: 0.75rem;
  }

  @media (max-width: 1200px) {
    .options-post-text {
      display: none;
    }
  }

  @media (max-width: 992px) {
    .options-post-text {
      display: block;
    }

    .tolike-container,
    .tocomment-container,
    .toshare-container,
    .tosend-container {
      padding: 0.875rem;
    }
  }

  @media (max-width: 500px) {
    .options-post-text {
      display: none;
    }
  }
`;
