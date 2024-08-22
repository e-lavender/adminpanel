import { useState } from 'react'

import { UserAllowActionType } from '@/shared/card-dropdown-menu/data'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { Button, Modal, Select, Typography } from '@flyingtornado06/ui-kit'

import { ConfirmationModalStyled } from './confirmation-modal.styled'

type ModalProps = {
  action: UserAllowActionType | undefined
  confirmBtnLabel?: string
  declineBtnLabel?: string
  isOpen: boolean
  message?: string
  onClose: () => void
  onConfirmation: () => void
  title?: string
  translation?: string
  userName: string
}
export const ConfirmationModal = ({
  action,
  confirmBtnLabel,
  declineBtnLabel,
  isOpen,
  message,
  onClose,
  onConfirmation,
  title,
  translation = 'logOut',
  userName,
}: ModalProps) => {
  const { Buttons, Content } = ConfirmationModalStyled
  const modalText: Record<string, any> = {
    ban: 'Ban user',
    delete: 'Delete user',
  }
  const { t } = useTranslation()

  type KeyTypesInTextModel = keyof typeof t.confirmationModal
  const typedTranslation = translation as KeyTypesInTextModel

  const {
    message: translatedMessage,
    no,
    title: translatedTitle,
    yes,
  } = t.confirmationModal[typedTranslation]
  const [reason, setReason] = useState('')
  const actionMessage = `Are you sure to ${action} user ${userName}?`

  return (
    <Modal onChange={onClose} open={isOpen}>
      <Modal.Button asChild />
      <Content onInteractOutside={e => e.preventDefault()} title={action && modalText[action]}>
        <Typography variant={'regular-16'}>{actionMessage || translatedMessage}</Typography>
        {action === 'ban' && (
          <Select
            onChange={setReason}
            options={['Bad behavior', 'Advertising placement', 'Another reason']}
            value={reason}
          />
        )}
        <Buttons>
          <Button onClick={onConfirmation} variant={'outlined'}>
            {confirmBtnLabel || yes}
          </Button>
          <Button onClick={onClose}>{declineBtnLabel || no} </Button>
        </Buttons>
      </Content>
    </Modal>
  )
}
