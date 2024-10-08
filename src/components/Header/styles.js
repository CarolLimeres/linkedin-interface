import styled from "styled-components";
export const HeaderContainer = styled.header `
  background-color: #ffffff;
  position: fixed;

  height: 3.875rem;
  width: 100vw;
  border-bottom: 1px solid rgba(140, 140, 140, 0.2);

  display: flex;
  align-items: center;

  justify-content: space-evenly;

  .options-container {
    display: flex;
    gap: 1.75rem;
  }

  .logo-search-container {
    display: flex;
    align-items: center;
    gap: 0.125rem;
  }

  .link-logo-container {
    display: flex;
  }

  .linkedin-logo {
    color: #0a66c2;
    cursor: pointer;
  }

  .search-container {
    display: flex;
    align-items: center;
    gap: 0.375rem;

    position: relative;
    width: 17.5rem;
  }

  .search-icon {
    color: rgb(0, 0, 0, 0.9);

    position: absolute; /* pro ícone ficar dentro do input (lembrar de colocar relative no pai) */
    left: 1rem;
    pointer-events: none; /* com essa propriedade, se eu clico no ícone
    da lupa libera o input tb (além do clique na caixa normal). Sem isso, ao clicar na lupa
    nao libera o input */
  }

  .input-search {
    border: none;
    box-shadow: none;

    width: 100%;
    font-weight: 400;
    font-size: 0.875rem;
    height: 2.125rem;

    background-color: #edf3f8;
    color: rgb(0, 0, 0, 0.9);
    border-radius: 0.4rem;
    padding: 0 2.5rem;
  }

  button {
    all: unset;
  }

  .search-media-container {
    display: none;
  }

  .link-container {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(0, 0, 0, 0.6);
  }

  .link-container:hover {
    color: rgb(0, 0, 0, 0.9);
  }

  .text-arrow-container:hover {
    color: rgb(0, 0, 0, 0.9);
  }

  .business-container:hover {
    color: rgb(0, 0, 0, 0.9);
  }

  .premium-container:hover {
    color: rgb(0, 0, 0, 0.9);
  }

  .text-container {
    font-size: 0.75rem;
    line-height: 1.33333;
  }

  .photo-text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  .profile-image {
    border-radius: 50%;
    border: none;
    height: 24px;
    overflow: hidden;
    transform: scale(1);
    transition: transform 0.2s ease-in-out;
    width: 24px;
  }

  .text-arrow-container {
    display: flex;
    color: rgb(0, 0, 0, 0.6);
    gap: 0.125rem;
  }

  .business-premium-container {
    display: flex;
    align-items: center;
    gap: 0.875rem;

    border-left: 1px solid rgba(140, 140, 140, 0.2);
    height: 100%;
    padding-left: 1.2rem;
  }

  .business-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;
  }

  .button-options-media-container {
    display: none;
  }

  .gradient-icon {
    color: rgb(0, 0, 0, 0.6);
  }

  .business-text,
  .premium-container,
  .me-text {
    font-size: 0.75rem;
  }

  .premium-container {
    max-width: 8.75rem;
    text-align: center;
    cursor: pointer;
    text-decoration: underline;
    color: #915907;
    line-height: 1.5;
  }

  @media (max-width: 1092px) {
    .search-container {
      width: 100%;
    }
  }

  @media (max-width: 1040px) {
    .search-container {
      display: none;
    }

    .search-media-container {
      display: block;
    }
  }

  @media (max-width: 850px) {
    .text-container,
    .text-arrow-container {
      display: none;
    }

    .options-container {
      gap: 2.5rem;
    }

    @media (max-width: 710px) {
      padding-left: 0.5rem;
      justify-content: space-between;

      .business-premium-container {
        border: none;
      }
    }

    @media (max-width: 670px) {
      .options-container {
        gap: 1.75rem;
      }
    }

    @media (max-width: 570px) {
      padding-left: 0;
      justify-content: space-evenly;
      /* gap: 1rem; */

      .button-options-media-container {
        display: block;
        cursor: pointer;
        color: rgb(0, 0, 0, 0.6);
      }

      .business-container,
      .premium-container {
        display: none;
      }
    }

    @media (max-width: 500px) {
      .photo-text-container {
        display: none;
      }
    }

    @media (max-width: 500px) {
      gap: 0.625rem;
      .photo-text-container {
        display: none;
      }
    }

    @media (max-width: 440px) {
      gap: 0.375rem;
      .notifications-container,
      .messages-container {
        display: none;
      }
    }
  }
`;
