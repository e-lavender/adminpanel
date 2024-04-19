import { StyledContainers } from '@/ui/common/styled/container.styled'
import { styled } from 'styled-components'

export const HeaderStyled = {
  Container: styled(StyledContainers.GlobalContainer)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100%;
    padding-right: 6.4rem;
    padding-left: 6rem;
  `,
  Wrapper: styled.header`
    position: sticky;
    z-index: 10;
    top: 0;

    height: 6rem;

    background-color: var(--color-dark-700);
    border-bottom: 1px solid var(--color-dark-300);
  `,
}
