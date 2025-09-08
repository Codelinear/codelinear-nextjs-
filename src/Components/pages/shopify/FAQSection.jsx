"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openItem, setOpenItem] = useState("01"); // Default open item

  const toggleItem = (id) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  const faqs = [
    {
      id: "01",
      question: "Is Shopify SEO-friendly?",
      answer:
        "Yes, Shopify is SEO-friendly. It offers clean URLs, editable meta tags, sitemaps, and supports SEO apps for better optimization.",
    },
    {
      id: "02",
      question: "Can I migrate my existing store to Shopify?",
      answer:
        "Yes, you can migrate your store to Shopify. It supports transfers from platforms like Magento, WooCommerce, and BigCommerce, including products, customers, and orders.",
    },
    {
      id: "03",
      question:
        "How is this better than hiring separate agencies for ads, landing pages, and Shopify?",
      answer:
        "Most agencies operate in silos. Ads, landing pages, and design don’t talk to each other. We align everything from the start, so your ad creative shapes your landing page, and page data refines your ad strategy. That synergy drives higher conversions.",
    },
    {
      id: "04",
      question: "Can we review the designs before launch?",
      answer:
        "Absolutely. We use Figma to share designs, giving you full access and revision rounds before development starts.",
    },
    {
      id: "05",
      question:
        "What kind of support is available after launching my Shopify store?",
      answer:
        "After launch, support includes troubleshooting, updates, marketing help, performance tracking, and feature upgrades, ongoing maintenance is key to long-term success.",
    },
    {
      id: "06",
      question: "Do you have long contracts?",
      answer:
        "Nope! We work on a month-to-month basis because we believe strong partnerships should be driven by results, not long-term commitments.",
    },
    {
      id: "07",
      question: "What do you need from us to get started?",
      answer:
        "To get started, we’ll ask you to fill out a detailed onboarding form with your customer data, brand guidelines, and performance metrics. Our team will walk you through it to ensure nothing is overlooked and we can begin identifying winning strategies right away.",
    },
  ];

  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[66px] font-[400] text-black mb-12 max-sm:leading-tight max-sm:text-[35px]">
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openItem === faq.id;

            return (
              <div
                key={faq.id}
                className="border-b border-[#CACACA] overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1 max-sm:items-start">
                      <span className="text-black text-[24px] font-[400] ">
                        {faq.id}
                      </span>
                      <span className="text-black text-[24px] font-[400]">
                        {faq.question}
                      </span>
                    </div>
                    <div className="text-yellow-500 text-xl font-light">
                      {isOpen ? (
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 16H24"
                            stroke="#BF8700"
                            strokeWidth="1.5"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 16H24"
                            stroke="#BF8700"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M16 8L16 24"
                            stroke="#BF8700"
                            strokeWidth="1.5"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <div className="ml-8 text-[#727272] text-[18px] font-[400] leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
