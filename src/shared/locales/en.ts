import { LocaleType } from '@/shared/locales/ru'
import { AuthTextModel, HeaderTextModel } from '@/shared/locales/text-models'

const header = HeaderTextModel.en
const auth = AuthTextModel.en

export const en: LocaleType = {
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
}
