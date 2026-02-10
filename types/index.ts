import React from "react"
/**
 * Common types and interfaces used across the application
 */

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
}

export interface NavItem {
  title: string
  href: string
  icon?: React.ReactNode
  external?: boolean
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter?: string
    github?: string
  }
}
