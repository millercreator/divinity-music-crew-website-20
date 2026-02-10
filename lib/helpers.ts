/**
 * Utility functions for common tasks
 */

/**
 * Formats a date to a readable string
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

/**
 * Generates a placeholder image URL
 */
export function getPlaceholderImage(width: number, height: number): string {
  return `https://via.placeholder.com/${width}x${height}`
}

/**
 * Truncates a string to a specified length
 */
export function truncateString(str: string, length: number): string {
  return str.length > length ? `${str.substring(0, length)}...` : str
}
