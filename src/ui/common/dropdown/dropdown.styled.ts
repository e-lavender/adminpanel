import { Dots } from '@/app/assets/svg/dots-icon'
import { Content } from '@radix-ui/react-dropdown-menu'
import { styled } from 'styled-components'

export const DropdownStyles = {
  Content: styled(Content)`
    padding: 1.2rem;
    background-color: var(--bg-color-secondary);
    border: 0.1rem solid var(--text-color-disabled);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  `,

  DotsButton: styled(Dots)<{ $isActive: boolean }>`
    cursor: pointer;
    color: ${({ $isActive }) => ($isActive ? 'var(--color-accent-500);' : 'white')};
  `,
}
