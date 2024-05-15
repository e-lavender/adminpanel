import { AuthTextModel, HeaderTextModel } from '@/shared/locales/text-models'

const header = HeaderTextModel.ru
const auth = AuthTextModel.ru

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
}
export type LocaleType = typeof ru
