class AppSettings {
  //api
  public readonly API_URL: string | undefined
  public readonly AUTH_LOGIN: string | undefined
  public readonly AUTH_PASS: string | undefined
  public readonly DOMAIN_URL: string | undefined

  public readonly authToken: string
  public readonly isLoggedIn: string

  constructor() {
    //api
    this.API_URL = process.env.NEXT_PUBLIC_API_URL
    this.DOMAIN_URL = process.env.NEXT_PUBLIC_DOMAIN_URL
    this.AUTH_LOGIN = process.env.NEXT_PUBLIC_AUTH_LOGIN
    this.AUTH_PASS = process.env.NEXT_PUBLIC_AUTH_PASS

    //constants
    this.authToken = 'authToken'
    this.isLoggedIn = 'isLoggedIn'
  }
}
export const appSettings = new AppSettings()
