import { css, styled } from 'styled-components'

export const DropDownMenuStyled = {
  Dots: styled.nav<{ $isActive: boolean }>`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 3.6rem;
    height: 1rem;
    padding: 3rem 0 2rem 1.2rem;

    caret-color: transparent;

    p {
      width: 0.4rem;
      height: 0.4rem;
      background-color: ${props =>
        props.$isActive ? 'var(--color-accent-500)' : 'var(--text-color-primary)'};
      border-radius: 100%;
    }
    &:hover {
      p {
        background-color: var(--color-accent-500);
      }
    }
  `,
  Menu: styled.div<{ $isActive: boolean }>`
    position: absolute;
    top: 5rem;
    right: 0;
    transform: translateY(-1rem);

    overflow: hidden;

    width: 16.1rem;
    padding: 1.2rem;

    visibility: hidden;
    opacity: 0;
    background-color: var(--bg-color-secondary);
    border: 0.1rem solid var(--text-color-disabled);
    border-radius: 0.5rem;
    ${props =>
      props.$isActive &&
      css`
        animation: fade-in 0.3s ease-in forwards;
      `};

    & ul {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      align-items: flex-start;

      height: 100%;

      &.active li {
        all: unset;

        transform: translateY(-1rem);

        display: inline-flex;
        gap: 1.2rem;
        align-items: center;
        justify-content: flex-start;

        min-width: 2rem;
        min-height: 3.6rem;

        color: var(--text-color-primary);
        list-style-type: none;

        opacity: 0;
        caret-color: transparent;

        &:hover {
          span,
          svg {
            color: var(--color-accent-100);
          }
        }

        &:active {
          span,
          svg {
            color: var(--color-accent-500);
          }
        }

        //&:first-child {
        //  animation-delay: calc(var(50));
        //}
        //
        //&:nth-child(2) {
        //  animation-delay: calc(var(50) * 2);
        //}
        //
        //&:nth-child(3) {
        //  animation-delay: calc(var(50) * 3);
        //}
        //
        //&:nth-child(4) {
        //  animation-delay: calc(var(50) * 4);
        //}
      }
    }
  `,
  Navigation: styled.div.attrs(() => ({ style: {} }))`
    --animation-duration: 400ms;
    --animation-delay: 50ms;

    position: relative;
    display: inline-block;

    height: 6rem;

    -webkit-tap-highlight-color: transparent;

    &:active,
    &:hover {
      -webkit-tap-highlight-color: transparent;
    }
    @keyframes fade-in {
      to {
        transform: translateY(0);
        visibility: visible;
        opacity: 1;
      }
    }
  `,
}
