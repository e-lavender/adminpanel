import { Select } from '@flyingtornado06/ui-kit'
import { css, styled } from 'styled-components'

export const PaginationStyles = {
  Container: styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: space-between;
    min-width: 150px;
    font-family: var(--font-family-primary), sans-serif;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    line-height: 24px;
  `,

  Dots: styled.div`
    pointer-events: none;
    user-select: none;
  `,

  Page: styled.div<{ active: boolean }>`
    all: unset;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;

    border: 1px solid transparent;
    border-radius: 0.13rem;
    ${props =>
      props.active &&
      css`
        color: var(--color-dark-900);
        background-color: var(--color-light-100);
      `}
    ${props =>
      props['aria-disabled'] &&
      css`
        color: var(--color-dark-900);
        background-color: var(--color-light-100);
      `}
    &:focus-visible {
      border: 1px solid var(--focus-color-primary);
    }

    &:hover {
      background-color: var(--color-dark-500);
    }

    &.disabled {
      pointer-events: none;
      color: var(--color-dark-100);
    }
  `,

  Pages: styled.div`
    display: flex;
    align-items: center;
  `,

  RowsPerPage: styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
  `,

  Select: styled(Select)`
    padding: 0.01rem 0;
  `,
}
