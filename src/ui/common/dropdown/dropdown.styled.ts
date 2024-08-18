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
    background-color: var(--bg-color-secondary);
    border: 0.1rem solid var(--text-color-disabled);
    border-radius: 0.5rem;
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
