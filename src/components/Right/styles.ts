import styled from "styled-components";

export const RightContainer = styled.div`
  .linkedin-news-container,
  .announcement-container {
    background-color: #ffff;
    /* text-align: center; */

    border: 1px solid rgba(140, 140, 140, 0.2);
    box-shadow: 0 0 0 0.016rem rgba(0, 0, 0, 0.1),
      0 0.016rem 0.016rem rgba(0, 0, 0, 0.1);

    border-radius: 0.4rem;
  }

  .linkedin-news-container {
    margin-bottom: 0.375rem;
    padding: 0.875rem 1rem;
  }

  .title-icon-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(0, 0, 0, 0.9);

    margin-bottom: 0.5rem;
  }

  .linkedin-news-title {
    font-size: 1.25rem;
  }

  .info-container {
    all: unset; /* remover estilos padrão de button */
  }

  .main-stories {
    text-align: left;
    font-size: 1rem;
    font-weight: 650;
    color: rgba(0, 0, 0, 0.6);

    margin-bottom: 0.5rem;
  }

  .story-container {
    cursor: pointer;
  }

  .story-container:hover {
    background-color: rgba(140, 140, 140, 0.2);
  }

  .story-title {
    color: rgb(0 0 0/0.9);
    font-size: 0.875rem;
    font-weight: 650;
  }

  .time-readers-container {
    margin-top: 0.25rem;

    font-size: 0.75rem;
    color: rgb(0 0 0 / 0.6);

    margin-bottom: 0.5rem;
  }

  .show-more-container {
    margin-top: 0.75rem;
  }

  .show-more-button {
    all: unset;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 0.125rem;

    font-size: 0.875rem;
    color: rgb(0 0 0 / 0.75);
    font-weight: 650;

    margin-bottom: 0.875rem;

    border-radius: 0.3125rem;
    transition: background-color 0.2s;
  }

  .show-more-button:hover {
    background-color: #f0f0f0;
    color: #000000bf;
  }

  .games-title {
    font-size: 1rem;
    font-weight: 650;
    color: rgba(0, 0, 0, 0.6);

    margin-bottom: 0.5rem;
  }

  .image-game-container {
    display: flex;
    cursor: pointer;
    gap: 0.25rem;
  }

  .image-game-container:hover {
    background-color: rgba(140, 140, 140, 0.2);
  }

  .game-image {
    width: 1.875rem;
  }

  .queens {
    font-size: 0.875rem;
    font-weight: 650;
    color: rgb(0 0 0/0.9);
  }

  .number {
    font-weight: 400;
  }

  .crown-container {
    font-size: 0.75rem;
    color: rgb(0 0 0 / 0.6);
  }

  .announcement-container {
    cursor: pointer;
    margin-bottom: 1.25rem;
  }

  .announcement {
    display: flex;
    align-items: center;
    gap: 6px;
    justify-content: right;
    padding: 0.25rem;
  }

  .annoucement-title {
    color: rgba(0, 0, 0, 0.9);
    font-size: 0.75rem;
  }

  .unlock-container {
    text-align: center;
    color: rgba(0, 0, 0, 0.55);
    font-size: 0.75rem;
    padding-bottom: 0.375rem;
  }

  .image-key-container {
    display: flex;
    justify-content: center;
    gap: 0.875rem;

    padding-bottom: 0.875rem;
  }

  .profile-image {
    width: 4.375rem;
    height: 4.375rem;
    border-radius: 50%;
  }

  .key-icon {
    color: #2e7cb2;
  }

  .viewed-container {
    text-align: center;

    font-size: 0.9375rem;
    color: rgba(0, 0, 0, 0.7);
    padding: 0 0.75rem;
  }

  .try-container {
    padding-top: 0.875rem;
    display: flex;
    justify-content: center;

    padding-bottom: 1.625rem;
  }

  .try-link {
    border: 1px solid #0a66c2;
    color: #0a66c2;
    border-radius: 16px;
    padding: 0.375rem 1rem;
    font-size: 0.9375rem;
    font-weight: 650;
  }

  .footer-container {
    text-align: center;
  }

  .about-accessibility-help-container,
  .preferences-advertising-container,
  .download-more-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-bottom: 0.5rem;
  }

  .privacy-container,
  .services-container {
    padding-bottom: 0.5rem;
  }

  .privacy,
  .services {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .link-footer,
  .privacy-container,
  .services-container {
    font-size: 0.75rem;
    color: rgb(0 0 0 / 0.6);
    cursor: pointer;
  }

  .link-footer:hover,
  .privacy-container:hover,
  .services-container:hover {
    color: #0a66c2;
    text-decoration: underline;
  }

  .linkedin-corporation-container {
    padding-top: 0.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    margin-bottom: 1.25rem;
  }

  .linkedin-logo {
    width: 3.5rem;
  }

  .linkedin-corporation {
    font-size: 0.75rem;
    color: rgb(0 0 0 / 0.9);
  }
`;
