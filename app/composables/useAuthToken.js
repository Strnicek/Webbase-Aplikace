const DEFAULT_MAX_AGE = 60 * 60 * 24 * 7 // 7 dní

export function useAuthToken(maxAge = DEFAULT_MAX_AGE) {
  return useCookie('auth_token', { maxAge })
}
