import { Scissors, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const UserFooter = () => {
  const services = [
    { name: "Thiết kế rập cơ bản", href: "/services/basic-pattern" },
    { name: "Thiết kế rập cao cấp", href: "/services/advanced-pattern" },
    { name: "Sơ đồ may chi tiết", href: "/services/detailed-layout" },
    { name: "Tư vấn sản xuất", href: "/services/production-consultation" },
  ];

  const quickLinks = [
    { name: "Về chúng tôi", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Liên hệ", href: "/contact" },
  ];
  const legalLinks = [
    { name: "Chính sách bảo mật", href: "/privacy-policy" },
    { name: "Điều khoản sử dụng", href: "/terms-conditions" },
    { name: "Liên hệ", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  ];

  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container max-w-full w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* First Column - Brand Section */}
            {/* Brand Section */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scissors className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">
                  Fashion Pattern Studio
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Chuyên gia thiết kế rập và sơ đồ may mặc hàng đầu Việt Nam
              </p>
            </div>

            {/* Second Column - 3 Sub-columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* About Section */}
              <div>
                <h5 className="font-semibold mb-4">Dịch vụ</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.href}
                        className="space-x-2 hover:text-blue-400"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Section */}
              <div>
                <h5 className="font-semibold mb-4">Liên kết</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="space-x-2 hover:text-blue-400"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Section */}
              <div>
                <h5 className="font-semibold mb-4">Pháp lý</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  {legalLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="space-x-2 hover:text-blue-400"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Fashion Pattern Studio™
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default UserFooter;
