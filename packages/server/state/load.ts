import axios from 'axios'
import type { Request } from 'express'

async function loadProfile(req: Request) {
  const { data } = await axios.get('https://ya-praktikum.tech/api/v2/auth/user', {
    headers: {
      cookie: req.headers['cookie']
    }
  })
  return data;
}

export async function loadState(req: Request) {
  const initialState = {
    user: {
      profile: null,
      isLoaded: false
    }
  }
  try {
    initialState.user.profile = await loadProfile(req);
    initialState.user.isLoaded = true;
  } catch(e) {
    // ignore
  }
  return initialState;
}
