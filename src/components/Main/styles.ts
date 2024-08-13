import styled from "styled-components";

export const MainContainer = styled.main`
  .new-post-container,
  .posts-container {
    background-color: #ffff;
    text-align: center;

    border: 1px solid rgba(140, 140, 140, 0.2);
    box-shadow: 0 0 0 0.016rem rgba(0, 0, 0, 0.1),
      0 0.016rem 0.016rem rgba(0, 0, 0, 0.1);

    border-radius: 0.4rem;
  }

  .new-post-container {
    margin: 0 0 0.8rem;
  }

  .image-button-container {
    padding: 0.375rem 0.875rem 0.5rem 0.875rem;
    margin: 0.4rem 0;
    display: flex;
    /* align-items: center; */
    gap: 0.5rem;
  }

  .image-container {
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
  }

  .post-button {
    text-align: left;
    flex-grow: 1;
    line-height: 1.5;
    border: 0.0625rem solid rgb(0 0 0 / 0.3);
    border-radius: 2.1875rem;
    padding-left: 1rem;
    cursor: pointer;

    font-size: 0.875rem;
    font-weight: 700;
    color: #605f5f;
    background-color: transparent;

    transition: background-color 0.2s;
  }

  .post-button:hover {
    background-color: #f0f0f0;
    color: #000000bf;
  }

  .media-event-article-container {
    display: flex;
    justify-content: space-around;
    padding-bottom: 0.4rem;
  }

  .media-container,
  .event-container,
  .article-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: #605f5f;
    font-size: 0.875rem;
    font-weight: 700;
    padding: 0.5rem;
    cursor: pointer;

    transition: background-color 0.1s;
  }

  .media-container:hover,
  .event-container:hover,
  .article-container:hover {
    color: #000000bf;
    background-color: #f4f4f4;
    border-radius: 0.3125rem;
  }

  .media-icon {
    color: #378fe9;
  }

  .event-icon {
    color: #c37d16;
  }

  .article-icon {
    color: #e06847;
  }
`;
