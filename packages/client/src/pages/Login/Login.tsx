import { useCallback, useEffect } from 'react'
import { doLoginWithCode, getAppId, getRedirectUri } from '../../api/yandex'
import { useLocation, useNavigate } from 'react-router-dom'

export function Login() {
  const doLogin = useCallback(async () => {
    const appId = await getAppId();
    const redirectUri = getRedirectUri();
    window.location.replace(`https://oauth.yandex.ru/authorize?response_type=code&client_id=${appId}&redirect_uri=${redirectUri}`);
  }, []);

  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sp = new URLSearchParams(search)
    const code = sp.get('code');

    if (code) {
      doLoginWithCode(code).then(() => {
        navigate('/me');
      })
    }
  }, [search, navigate]);

  return <>
    <h1>Login with OAuth</h1>
    <p>Click to login with Yandex OAuth</p>
    <a href="#" onClick={doLogin}>Login</a>
  </>
}
