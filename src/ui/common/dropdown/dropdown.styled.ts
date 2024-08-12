import { Dots } from '@/app/assets/svg/dots-icon'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { styled } from 'styled-components'

export const DropdownStyles = {
  DotsButton: styled(Dots)<{ $isActive: boolean }>`
    cursor: pointer;
    color: ${({ $isActive }) => ($isActive ? 'var(--color-accent-500);' : 'white')};
  `,

  List: styled.div`
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

    &.fade {
      animation: fade-in 0.3s ease-in forwards;
    }

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
        animation: fade-in var(--animation-duration) linear forwards;

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
        &:first-child {
          --animation-delay: 3000;
          animation-delay: calc(var(3000));
        }

        &:nth-child(2) {
          animation-delay: calc(var(3000) * 2);
        }

        &:nth-child(3) {
          animation-delay: calc(var(3000) * 3);
        }

        &:nth-child(4) {
          animation-delay: calc(var(3000) * 4);
        }
      }
    }

    @keyframes fade-in {
      to {
        transform: translateY(0);
        visibility: visible;
        opacity: 1;
      }
    }
  `,
  Navigation: styled(DropdownMenu.Content)`
    --animation-duration: 400ms;
    --animation-delay: 50ms;

    position: relative;
    z-index: 5;
    display: inline-block;
    height: 6rem;
    -webkit-tap-highlight-color: transparent;

    &:active,
    &:hover {
      -webkit-tap-highlight-color: transparent;
    }
  `,
}
