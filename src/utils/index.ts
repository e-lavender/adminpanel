export const saveAuthToken = (data: { email: string; password: string }) => {
  sessionStorage.setItem('isLoggedIn', 'true')

  const base64 = btoa(`${data.email}:${data.password}`)

  sessionStorage.setItem('authToken', base64)
}
