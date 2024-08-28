import { useState } from 'react'

import { UserAllowActionType } from '@/shared/card-dropdown-menu/data'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { Button, Modal, Typography } from '@flyingtornado06/ui-kit'

import { ConfirmationModalStyled } from './confirmation-modal.styled'

type ModalProps = {
  action: UserAllowActionType | undefined
  confirmBtnLabel?: string
  declineBtnLabel?: string
  isOpen: boolean
  message?: string
  onClose: () => void
  onConfirmation: () => void
  reason: string
  setReason: (reason: string) => void
  title?: string
  translation?: string
  userName: string
}
export const ConfirmationModal = ({
  action,
  confirmBtnLabel,
  declineBtnLabel,
  isOpen,
  onClose,
  onConfirmation,
  reason,
  setReason,
  translation = 'logOut',
  userName,
}: ModalProps) => {
  const { Buttons, Content, Select } = ConfirmationModalStyled
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

  return (
    <Modal onChange={onClose} open={isOpen}>
      <Modal.Button asChild />
      <Content onInteractOutside={e => e.preventDefault()} title={action && modalText[action]}>
        <Typography variant={'regular-16'}>
          {`Are you sure to ${action} user `}
          <b>{userName}?</b>
        </Typography>
        {action === 'ban' && (
          <Select
            fullWidth
            onChange={setReason}
            options={['Bad behavior', 'Advertising placement', 'Another reason']}
            placeholder={'Reason for ban'}
            value={reason}
          />
        )}
        <Buttons>
          <Button fullWidth onClick={onConfirmation} variant={'outlined'}>
            {confirmBtnLabel || yes}
          </Button>
          <Button fullWidth onClick={onClose}>
            {declineBtnLabel || no}{' '}
          </Button>
        </Buttons>
      </Content>
    </Modal>
  )
}
