import fetch from 'node-fetch'
import { config } from 'src/constants'

export const getFromManager = (suffix: string) => {
  return fetch(`${config.managerUrl}${suffix}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      return response.json()
    })
    .catch(error => {
      return Promise.reject(
        new Error(`Manager request failed: ${error.message}`)
      )
    })
}

export async function postToManager(suffix: string, payload: any) {
  const res = await fetch(`${config.managerUrl}${suffix}`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (!res.ok) {
    throw new Error(
      `Manager post failes with [${res.status}] body: ${await res.text()}`
    )
  }
  return res.json()
}
