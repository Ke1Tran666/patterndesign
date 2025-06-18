import { Phone, Mail, MapPin } from "lucide-react"
import type { ContactInfo } from "../types"

export const contactsData: ContactInfo[] = [
    {
        icon: Phone,
        title: "Điện thoại",
        content: "+84 123 456 789",
    },
    {
        icon: Mail,
        title: "Email",
        content: "info@fashionpattern.com",
    },
    {
        icon: MapPin,
        title: "Địa chỉ",
        content: "123 Đường ABC, Quận 1, TP.HCM",
    },
]
