"use client";

import type React from "react";
import { useState } from "react";
import { Scissors, Menu, X } from "lucide-react";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import Textarea from "./components/Textarea";
import Badge from "./components/Badge";
import ServiceCard from "./components/ServiceCard";
import ContactCard from "./components/ContactCard";
import type { ContactInfo, FormData, ServiceCardData } from "./types";
import { servicesData } from "./services/services";
import { contactsData } from "./services/contacts";
import UserFooter from "./components/layouts/user/UserFooter";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    description: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong 24h.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      description: "",
    });
  };

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const portfolioItems: number[] = [1, 2, 3, 4, 5, 6];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container max-w-full w-[1440px] mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">
              Fashion Pattern Studio
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Dịch vụ
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Giới thiệu
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Liên hệ
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button onClick={() => scrollToSection("contact")}>
              Tư vấn miễn phí
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left py-2 text-gray-600 hover:text-blue-600"
              >
                Dịch vụ
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left py-2 text-gray-600 hover:text-blue-600"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 text-gray-600 hover:text-blue-600"
              >
                Giới thiệu
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 text-gray-600 hover:text-blue-600"
              >
                Liên hệ
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-full w-[1440px] mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800">
            Chuyên gia thiết kế rập may mặc
          </Badge>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Thiết Kế Rập & Sơ Đồ May Mặc
            <span className="text-blue-600 block">Chuyên Nghiệp</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Chúng tôi cung cấp dịch vụ thiết kế rập, sơ đồ may mặc chính xác và
            chuyên nghiệp. Từ ý tưởng đến sản phẩm hoàn thiện, chúng tôi đồng
            hành cùng thương hiệu của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection("portfolio")}>
              Xem Portfolio
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
            >
              Tư vấn ngay
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="container max-w-full w-[1440px] mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Dịch Vụ Của Chúng Tôi
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cung cấp đầy đủ các dịch vụ thiết kế từ rập cơ bản đến
              sơ đồ may phức tạp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map(
              (
                service: ServiceCardData,
                index: React.Key | null | undefined
              ) => (
                <ServiceCard key={index} service={service} />
              )
            )}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4">
        <div className="container max-w-full w-[1440px] mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Portfolio</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Một số dự án tiêu biểu chúng tôi đã thực hiện
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item} hover className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <img
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Dự án ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2">Dự án {item}</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Thiết kế rập và sơ đồ may cho bộ sưu tập thời trang cao cấp
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Rập thiết kế</Badge>
                    <Badge variant="secondary">Sơ đồ may</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container max-w-full w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Về Chúng Tôi
              </h3>
              <p className="text-gray-600 mb-6">
                Với hơn 10 năm kinh nghiệm trong ngành thiết kế và may mặc,
                chúng tôi đã hỗ trợ hàng trăm thương hiệu và cá nhân thực hiện ý
                tưởng thời trang của họ.
              </p>
              <div className="space-y-4">
                {[
                  "Hơn 500 dự án hoàn thành thành công",
                  "Đội ngũ chuyên gia giàu kinh nghiệm",
                  "Cam kết chất lượng và đúng thời hạn",
                  "Hỗ trợ 24/7 trong suốt dự án",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg p-8 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Về chúng tôi"
                className="rounded-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container max-w-full w-[1440px] mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Liên Hệ Với Chúng Tôi
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sẵn sàng bắt đầu dự án của bạn? Hãy liên hệ để được tư vấn miễn
              phí
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Gửi Tin Nhắn
              </h4>
              <p className="text-gray-600 mb-6">
                Điền thông tin và chúng tôi sẽ liên hệ lại trong 24h
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Họ và tên"
                    name="name"
                    placeholder="Nhập họ tên"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    label="Số điện thoại"
                    name="phone"
                    placeholder="Nhập số điện thoại"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Nhập email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  label="Dịch vụ quan tâm"
                  name="service"
                  placeholder="VD: Thiết kế rập áo sơ mi"
                  value={formData.service}
                  onChange={handleInputChange}
                />
                <Textarea
                  label="Mô tả chi tiết"
                  name="description"
                  placeholder="Mô tả chi tiết về dự án của bạn..."
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                />
                <Button type="submit" className="w-full">
                  Gửi Tin Nhắn
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              {contactsData.map(
                (contact: ContactInfo, index: React.Key | null | undefined) => (
                  <ContactCard key={index} contact={contact} />
                )
              )}

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Giờ làm việc
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Thứ 2 - Thứ 6:</span>
                    <span>8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thứ 7:</span>
                    <span>8:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chủ nhật:</span>
                    <span>Nghỉ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <UserFooter />
    </div>
  );
};

export default App;
