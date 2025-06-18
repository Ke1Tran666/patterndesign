import type React from "react"
export interface ButtonProps {
    children: React.ReactNode
    variant?: "primary" | "outline" | "secondary"
    size?: "sm" | "md" | "lg"
    className?: string
    onClick?: () => void
    disabled?: boolean
    type?: "button" | "submit" | "reset"
}

export interface CardProps {
    children: React.ReactNode
    className?: string
    hover?: boolean
}

export interface InputProps {
    label?: string
    type?: string
    placeholder?: string
    className?: string
    name?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    required?: boolean
}

export interface TextareaProps {
    label?: string
    placeholder?: string
    rows?: number
    className?: string
    name?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export interface BadgeProps {
    children: React.ReactNode
    variant?: "default" | "secondary"
    className?: string
}

export interface FormData {
    name: string
    phone: string
    email: string
    service: string
    description: string
}

export interface ServiceCardData {
    icon: React.ComponentType<{ className?: string }>
    title: string
    description: string
    features: string[]
}

export interface ContactInfo {
    icon: React.ComponentType<{ className?: string }>
    title: string
    content: string
}