import { useTranslation } from '@/shared/hooks/useTranslation'
import { Button, Modal, Typography } from '@flyingtornado06/ui-kit'

import { ConfirmationModalStyled } from './confirmation-modal.styled'

type ModalProps = {
  btnsStyle?: string
  confirmBtnLabel?: string
  declineBtnLabel?: string
  isOpen: boolean
  message?: string
  onClose: () => void
  onConfirmation: () => void
  title?: string
  translation?: string
}
export const ConfirmationModal = ({
  btnsStyle,
  confirmBtnLabel,
  declineBtnLabel,
  isOpen,
  message,
  onClose,
  onConfirmation,
  title,
  translation = 'logOut',
}: ModalProps) => {
  const onConfirm = () => {
    onConfirmation()
    onClose()
  }
  const { Buttons, Content } = ConfirmationModalStyled

  const { t } = useTranslation()

  type KeyTypesInTextModel = keyof typeof t.confirmationModal
  const typedTranslation = translation as KeyTypesInTextModel

  const {
    message: translatedMessage,
    no,
    title: translatedTitle,
    yes,
  } = t.confirmationModal[typedTranslation]

  return (
    <Modal onChange={onClose} open={isOpen}>
      <Modal.Button asChild />
      <Content onInteractOutside={e => e.preventDefault()} title={title || translatedTitle}>
        <Typography variant={'regular-16'}>{message || translatedMessage}</Typography>

        <Buttons>
          <Button onClick={onConfirm} variant={'outlined'}>
            {confirmBtnLabel || yes}
          </Button>
          <Button onClick={onClose}>{declineBtnLabel || no} </Button>
        </Buttons>
      </Content>
    </Modal>
  )
}
