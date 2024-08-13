import styled from "styled-components";

export const MenuContainer = styled.div`
  .user-container,
  .options-container {
    background-color: #ffff;
    text-align: center;

    border: 1px solid rgba(140, 140, 140, 0.2);
    box-shadow: 0 0 0 0.016rem rgba(0, 0, 0, 0.1),
      0 0.016rem 0.016rem rgba(0, 0, 0, 0.1);

    border-radius: 0.4rem;
  }

  .background-container {
    background-image: url("../../../public/background.jpg");
    background-position: center;
    background-size: cover;
    height: 3.516rem;
    border-radius: 0.4rem 0.4rem 0 0;
  }

  .image-container {
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
    max-width: 9.375rem;
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

  .views-connections-container {
    padding-top: 1rem;
  }

  .views-container,
  .connections-container {
    font-size: 0.75rem;
    padding: 0 0.875rem;

    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }

  .views,
  .connections {
    color: rgb(0, 0, 0, 0.6);
    font-weight: 600;
  }

  .number-container {
    color: #0a66c2;
    font-weight: 600;
  }

  .connections-network-container {
    display: flex;
    flex-direction: column;
  }

  .connections-container {
    margin-top: 0.5rem;

    border-bottom: 0.0625rem solid rgba(140, 140, 140, 0.2);
    padding-bottom: 1rem;
  }

  .connections {
    display: flex;
  }

  .network {
    color: rgb(0, 0, 0, 0.9);
    font-weight: 600;
  }

  .premium-container {
    text-align: left;
    font-size: 0.75rem;

    padding: 1rem 0.875rem;

    border-bottom: 0.0625rem solid rgba(140, 140, 140, 0.2);
  }

  .premium-link-container {
    cursor: pointer;
  }

  .leads {
    color: rgb(0 0 0/0.6);
    margin-bottom: 0.375rem;
  }

  .text-icon-container {
    display: flex;
    gap: 0.375rem;
  }

  .premium-image {
    height: 0.875rem;
  }

  .premium-text {
    font-weight: 600;
  }

  .views-container:hover,
  .connections-container:hover,
  .premium-container:hover,
  .saved-container:hover {
    background-color: rgba(140, 140, 140, 0.2);
  }

  .saved-container {
    padding: 1rem 0.875rem 0.625rem 0.875rem;
    text-align: left;

    display: flex;
    align-items: center;
    gap: 0.375rem;

    font-size: 0.75rem;
    font-weight: 600;

    cursor: pointer;
  }

  .saved-icon {
    color: rgb(0 0 0 / 0.6);
  }

  .saved-text {
    color: rgb(0 0 0 / 0.9);
  }

  .options-container {
    margin-top: 0.375rem;
    padding: 1rem 0.875rem;
    text-align: left;

    font-size: 0.75rem;
    color: #0a66c2;
    font-weight: 700;

    margin-bottom: 0.375rem;
  }

  .list-container {
    border-bottom: 0.0625rem solid rgba(140, 140, 140, 0.2);
    padding-bottom: 1rem;
  }

  .list-container > *:not(:last-child) {
    margin-bottom: 0.875rem;
  }

  .groups-container,
  .events-container,
  .hashtags-container {
    cursor: pointer;
  }

  .groups-container:hover,
  .events:hover,
  .hashtags-container:hover {
    text-decoration: underline;
  }

  .events-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .plus-icon-container {
    padding: 0.375rem 0.5rem;
    transition: background-color 0.2s;
    border-radius: 50%;
  }

  .plus-icon-container:hover {
    background-color: #f0f0f0;
  }

  .plus-icon {
    color: rgb(0 0 0 / 0.75);
  }

  .find-more-container {
    text-align: center;
    color: rgb(0 0 0 / 0.75);

    font-size: 0.875rem;
    cursor: pointer;
    transition: background-color 0.2s;

    padding: 1rem 0.875rem 0.1rem 0.875rem;
  }

  .find-more-container:hover {
    background-color: #f0f0f0;
    color: #000000bf;
  }
`;
