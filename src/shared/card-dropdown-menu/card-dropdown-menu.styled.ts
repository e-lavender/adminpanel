import { Item } from '@radix-ui/react-dropdown-menu'
import { styled } from 'styled-components'

export const CardDropdownMenuStyled = {
  DropDownMenuItem: styled(Item)`
    display: flex;
    column-gap: 12px;
    align-items: center;
    user-select: none;
    outline: none;
    border-radius: 3px;
    padding: 0 5px;
    &:hover {
      background-color: var(--color-accent-500);
      cursor: pointer;
    }
    &:focus-visible {
    }
  `,
}
