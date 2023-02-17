import { useCallback, useEffect } from 'react'
import { getAppId, getRedirectUri } from '../../api/yandex'

export function Login() {
  const doLogin = useCallback(async () => {
    const appId = await getAppId()
    const redirectUri = getRedirectUri()
    window.location.replace(
      `https://oauth.yandex.ru/authorize?response_type=code&client_id=${appId}&redirect_uri=${redirectUri}`
    )
  }, [])

  return (
    <>
      <h1>Login with OAuth</h1>
      <p>Click to login with Yandex OAuth</p>
      <a href="#" onClick={doLogin}>
        Login
      </a>
    </>
  )
}
