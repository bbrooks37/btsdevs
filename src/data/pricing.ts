// src/data/pricing.ts

export interface PricingPackage {
  name: string;
  price: string;
  type: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export const packages: PricingPackage[] = [
  {
    name: "The Essential Website",
    price: "$399",
    type: "one-time",
    description: "Professional single-page online presence",
    features: [
      "Custom Single-Page React Site",
      "Mobile-Responsive Design",
      "Tailwind CSS Styling",
      "Contact Form Integration",
      "SEO Basic Setup",
      "Secure Netlify Deployment"
    ]
  },
  {
    name: "Annual Hosting & Support",
    price: "$160",
    type: "year",
    description: "Worry-free maintenance & hosting",
    isPopular: true,
    features: [
      "Reliable Managed Hosting Setup",
      "SSL Security Certificate",
      "Ongoing Site Monitoring",
      "Content Management Updates",
      "Automated Site Backups",
      "Priority Technical Support"
    ]
  },
  {
    name: "PC & Tech Troubleshooting",
    price: "$50",
    type: "hour",
    description: "Expert computer and hardware solutions",
    features: [
      "PC & Device Troubleshooting",
      "Operating System & Software Fixes",
      "Network & Wi-Fi Optimization",
      "Hardware Diagnostics & Upgrades",
      "Malware & Virus Removal",
      "Remote or On-Site Technical Support"
    ]
  }
];