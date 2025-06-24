"use client";

import type React from "react";
import { useState } from "react";
import { Scissors, Menu, X } from "lucide-react";
import Button from "../../Button";

interface UserHeaderProps {
  onScrollToSection: (sectionId: string) => void;
}

const UserHeader: React.FC<UserHeaderProps> = ({ onScrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string): void => {
    onScrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
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
            onClick={() => handleNavClick("services")}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Dịch vụ
          </button>
          <button
            onClick={() => handleNavClick("portfolio")}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Portfolio
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Giới thiệu
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Liên hệ
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <Button onClick={() => handleNavClick("contact")}>
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
              onClick={() => handleNavClick("services")}
              className="block w-full text-left py-2 text-gray-600 hover:text-blue-600"
            >
              Dịch vụ
            </button>
            <button
              onClick={() => handleNavClick("portfolio")}
              className="block w-full text-left py-2 text-gray-600 hover:text-blue-600"
            >
              Portfolio
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="block w-full text-left py-2 text-gray-600 hover:text-blue-600"
            >
              Giới thiệu
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="block w-full text-left py-2 text-gray-600 hover:text-blue-600"
            >
              Liên hệ
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default UserHeader;
