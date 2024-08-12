import { LocaleType } from '@/shared/locales/ru'
import { AuthTextModel, ConfirmationTextModel, HeaderTextModel } from '@/shared/locales/text-models'

const header = HeaderTextModel.en
const auth = AuthTextModel.en
const confirmationModal = ConfirmationTextModel.en

export const en: LocaleType = {
  auth: {
    signIn: {
      buttonTitle: auth.signIn.buttonTitle,
      emailLabel: auth.signIn.emailLabel,
      passwordLabel: auth.signIn.passwordLabel,
      title: auth.signIn.title,
    },
  },
  confirmationModal: confirmationModal,
  header: {
    language: header.language,
  },
}
