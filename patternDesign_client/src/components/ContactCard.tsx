import type React from "react";
import Card from "./Card";
import type { ContactInfo } from "../types";

interface ContactCardProps {
  contact: ContactInfo;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const IconComponent = contact.icon;

  return (
    <Card className="p-6">
      <div className="flex items-center space-x-4">
        <IconComponent className="h-8 w-8 text-blue-600" />
        <div>
          <h4 className="font-semibold text-gray-800">{contact.title}</h4>
          <p className="text-gray-600">{contact.content}</p>
        </div>
      </div>
    </Card>
  );
};

export default ContactCard;
