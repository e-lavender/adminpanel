import { Modal, Select } from '@flyingtornado06/ui-kit'
import { styled } from 'styled-components'

export const ConfirmationModalStyled = {
  Buttons: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    column-gap: 7rem;
  `,
  Content: styled(Modal.Content)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    min-width: 37.8rem;
    max-width: 48.6rem;
    min-height: 16.8rem;
    height: fit-content;
    padding: 3.6rem 2.4rem;
  `,
  Select: styled(Select)`
    margin: 1.8rem 0 4.8rem;
    background-color: var(--color-dark-300);
  `,
}
