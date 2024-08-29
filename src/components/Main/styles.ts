import styled from "styled-components";

export const MainContainer = styled.main`
  .user-container {
    display: none;
  }

  .show-more-container {
    display: none;
  }

  .new-post-container,
  .post-container {
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
    flex-wrap: wrap;
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

  .select-most-container {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    cursor: pointer;
  }

  .border {
    max-width: 100%;
    margin-bottom: auto;
    margin-top: auto;
    margin-right: 1rem;
    flex-grow: 1;
    background-color: rgba(0, 0, 0, 0.15);
  }

  .select-viewing {
    color: rgb(0 0 0 / 0.6);
    font-size: 0.75rem;
  }

  .most-relevant-container {
    display: flex;
  }

  .most-relevant {
    color: rgb(0 0 0 / 0.9);
    font-size: 0.75rem;
    font-weight: 600;

    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .post-container {
    margin-top: 0.4rem;
    padding-bottom: 1.25rem;
  }

  @media (max-width: 768px) {
    .user-container {
      display: block;
      background-color: #ffff;
      text-align: center;

      border: 1px solid rgba(140, 140, 140, 0.2);
      box-shadow: 0 0 0 0.016rem rgba(0, 0, 0, 0.1),
        0 0.016rem 0.016rem rgba(0, 0, 0, 0.1);

      border-radius: 0.4rem;

      margin-bottom: 0.625rem;
    }

    .background-container {
      background-image: url("../../../public/background.jpg");
      background-position: center;
      background-size: cover;
      height: 3.516rem;
      border-radius: 0.4rem 0.4rem 0 0;
    }

    .image-media-container {
      border-radius: 50%;
      height: 4.5rem;
      width: 4.5rem;
      border: 0.125rem solid #fff;
      margin: -2.375rem auto 1.2rem; /* deixa a foto por cima do fundo */
    }

    .name-office-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .name-container {
      color: rgb(0, 0, 0, 0.9);
      font-weight: 600;
      line-height: 1.5;

      cursor: pointer;
    }

    .name-container:hover {
      text-decoration: underline;
      text-decoration-color: #8443ce;
    }

    .office-container {
      margin-top: 0.4rem;
      font-size: 0.75rem;
      line-height: 1.3;
      color: rgb(0, 0, 0, 0.6);

      border-bottom: 0.0625rem solid rgba(140, 140, 140, 0.2);
      width: 100%;

      padding-bottom: 1rem;
    }

    .show-more-container {
      display: block;
      margin-bottom: 0.625rem;

      display: flex;
      justify-content: center;
      font-size: 0.875rem;
      color: rgb(0 0 0/0.75);
      font-weight: 650;
    }

    button {
      all: unset;
      cursor: pointer;
    }

    .show-more-button {
      display: flex;
      gap: 0.125rem;
    }
  }
`;
