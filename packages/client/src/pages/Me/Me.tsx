import { useEffect, useState } from 'react'
import { getMe } from '../../api/yandex'

export function Me() {
  const [me, setMe] = useState(null);

  useEffect(() => {
    if (!me) {
      getMe().then(setMe)
    }
  });

  return <>
    <pre>
      {JSON.stringify(me, null, 2)}
    </pre>
  </>
}
