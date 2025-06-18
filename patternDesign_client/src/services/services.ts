import { Ruler, Palette, Scissors, Users, Star, Mail } from "lucide-react"
import type { ServiceCardData } from "../types"

export const servicesData: ServiceCardData[] = [
    {
        icon: Ruler,
        title: "Thiết Kế Rập Cơ Bản",
        description: "Thiết kế rập cho các loại trang phục cơ bản như áo sơ mi, váy, quần",
        features: ["Rập áo sơ mi nam/nữ", "Rập váy các loại", "Rập quần tây, jean", "Điều chỉnh size theo yêu cầu"],
    },
    {
        icon: Palette,
        title: "Thiết Kế Rập Cao Cấp",
        description: "Thiết kế rập cho trang phục phức tạp, thời trang cao cấp",
        features: ["Đầm dạ hội, cưới", "Áo khoác, blazer", "Trang phục truyền thống", "Thiết kế theo yêu cầu riêng"],
    },
    {
        icon: Scissors,
        title: "Sơ Đồ May Chi Tiết",
        description: "Cung cấp sơ đồ may từng bước, hướng dẫn chi tiết",
        features: [
            "Sơ đồ may từng bước",
            "Hướng dẫn kỹ thuật may",
            "Danh sách vật liệu cần thiết",
            "Video hướng dẫn (tùy chọn)",
        ],
    },
    {
        icon: Users,
        title: "Tư Vấn Sản Xuất",
        description: "Tư vấn quy trình sản xuất hàng loạt cho doanh nghiệp",
        features: ["Tối ưu hóa quy trình", "Tính toán vật liệu", "Kiểm soát chất lượng", "Đào tạo nhân viên"],
    },
    {
        icon: Star,
        title: "Thiết Kế Độc Quyền",
        description: "Thiết kế rập độc quyền cho thương hiệu riêng",
        features: ["Thiết kế theo phong cách riêng", "Bảo mật thiết kế", "Hỗ trợ lâu dài", "Điều chỉnh không giới hạn"],
    },
    {
        icon: Mail,
        title: "Khóa Học Online",
        description: "Dạy thiết kế rập và may mặc qua video call",
        features: ["Học 1-1 với chuyên gia", "Tài liệu học tập đầy đủ", "Thực hành trực tiếp", "Chứng chỉ hoàn thành"],
    },
]
