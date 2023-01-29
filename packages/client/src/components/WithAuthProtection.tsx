import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../store'
import React from 'react'

interface Props {
  children: React.ReactElement
}

export function WithAuthProtection({ children }: Props): React.ReactElement {
  const [completed, isAuthenticated] = useSelector(selectIsAuthenticated);

  if (!completed) {
    return <>Loading...</>
  }

  if (isAuthenticated) {
    return children;
  }

  return <>
    <h1>Not authorized</h1>
    <p>
      Please <a href="/login">login</a> to access this section
    </p>
  </>
}
