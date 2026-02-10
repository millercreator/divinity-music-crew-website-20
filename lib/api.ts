/**
 * API utility functions and base configuration
 */

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

interface FetchOptions extends RequestInit {
  params?: Record<string, string | number | boolean>
}

/**
 * Wrapper around fetch with common configuration
 */
export async function fetchAPI<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  const { params, ...fetchOptions } = options

  // Build URL with query parameters
  const url = new URL(`${baseURL}${endpoint}`)
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value))
    })
  }

  // Default headers
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...fetchOptions.headers,
  }

  const response = await fetch(url.toString(), {
    ...fetchOptions,
    headers,
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}
