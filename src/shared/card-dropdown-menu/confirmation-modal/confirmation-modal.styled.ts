import { Modal } from '@flyingtornado06/ui-kit'
import { styled } from 'styled-components'

export const ConfirmationModalStyled = {
  Buttons: styled.div`
    display: flex;
    gap: 2.4rem;
    justify-content: flex-end;
  `,
  Content: styled(Modal.Content)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-width: 37.8rem;
    max-width: 48.6rem;
    max-height: 0;
    padding: 3rem 2.4rem;
  `,
}
