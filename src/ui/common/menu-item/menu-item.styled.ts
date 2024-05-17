import { Typography } from '@flyingtornado06/ui-kit'
import Link from 'next/link'
import { styled } from 'styled-components'

export const MenuItemStyles = {
  LabelStyled: styled(Typography)`
    &:active {
      color: var(--color-accent-500);
    }
  `,
  LinkComponent: styled(Link)`
    cursor: pointer;

    display: inline-flex;
    gap: 1.2rem;
    justify-content: flex-start;

    min-width: 2rem;

    color: var(--text-color-primary);

    caret-color: transparent;

    -webkit-tap-highlight-color: transparent;

    &:active,
    &:active span {
      color: var(--color-accent-500);
    }
    &.selected {
      color: var(--focus-color-primary);

      & span {
        color: var(--focus-color-primary);
      }
    }

    &.active {
      &:focus-visible {
        outline: 2px solid var(--focus-color-primary);
      }

      &:focus-visible.disabled {
        pointer-events: none;
        color: var(--color-dark-100);
        outline: none;
      }
    }
    &:hover,
    &:hover span {
      color: var(--color-accent-100);
    }
    &.disabled,
    .disabled {
      pointer-events: none;
      color: var(--color-dark-100);
    }
  `,
}
