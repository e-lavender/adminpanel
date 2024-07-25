import { AuthTextModel, ConfirmationTextModel, HeaderTextModel } from '@/shared/locales/text-models'

const header = HeaderTextModel.ru
const auth = AuthTextModel.ru
const confirmationModal = ConfirmationTextModel.ru

export const ru = {
  auth: {
    signIn: {
      buttonTitle: auth.signIn.buttonTitle,
      emailLabel: auth.signIn.emailLabel,
      passwordLabel: auth.signIn.passwordLabel,
      title: auth.signIn.title,
    },
  },
  header: {
    language: header.language,
  },
  confirmationModal: confirmationModal,
}
export type LocaleType = typeof ru
