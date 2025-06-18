import type React from "react";
import Card from "./Card";
import type { ServiceCardData } from "../types";

interface ServiceCardProps {
  service: ServiceCardData;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <Card hover className="p-6">
      <IconComponent className="h-12 w-12 text-blue-600 mb-4" />
      <h4 className="text-xl font-semibold text-gray-800 mb-3">
        {service.title}
      </h4>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <ul className="space-y-2 text-sm text-gray-600">
        {service.features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
    </Card>
  );
};

export default ServiceCard;
