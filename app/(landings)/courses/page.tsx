"use client";
import { PricingCardList } from "./_components/price-cards";

export default function CoursePage() {
  return (
    <div>
      <CourseModule />
      <PricingCardList />
      <Faq />
    </div>
  );
}

const CourseModule = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(https://tse3.mm.bing.net/th/id/OIP.U_BM0mAdQ7TorcPdDV663wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3)`,
      }}
    >
      {/* Gradient overlay instead of solid black */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>

      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 section-text-shadow">
          Immunization
        </h1>
        <p className="text-xl md:text-2xl mb-8 section-text-shadow">
          Making it easier for everyone to access vaccines
        </p>
      </div>

      <style jsx>{`
        .section-text-shadow {
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </section>
  );
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import React from "react";

const faqs = [
  {
    question: "What courses do you offer?",
    answer:
      "We offer a variety of courses tailored for different skill levels. From beginner basics to advanced trading strategies, there's something for everyone. Explore our course catalog to find the perfect fit for your trading journey.",
  },
  {
    question: "How do I enroll?",
    answer:
      "Enrolling in our courses is simple! Just select the course you're interested in and click the 'Enroll Now' button. Follow the prompts to complete your registration and start learning.",
  },
  {
    question: "Are there certifications available?",
    answer:
      "Yes, upon successful completion of our courses, you will receive a certification. This certification can enhance your resume and demonstrate your commitment to learning. Check specific courses for certification details.",
  },
  {
    question: "What is the course duration?",
    answer:
      "Course durations vary depending on the subject matter and complexity. Most courses are designed to be completed at your own pace. You can typically expect to finish within a few weeks.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes, we offer a refund policy for our courses. If you are not satisfied within the first 30 days, you can request a full refund. Please refer to our terms and conditions for more details.",
  },
];

export function Faq() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-background">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        {/* Left side */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-5 md:text-4xl">
            FAQs
          </h2>
          <p className="text-muted-foreground">
            Find answers to your questions about our courses, enrollment, and
            certifications right here.
          </p>
          <div className="mt-6 md:mt-8">
            <Button variant="secondary">Contact</Button>
          </div>
        </div>

        {/* Right side (Accordion with map) */}
        <Accordion type="multiple">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="flex items-center gap-2 text-base md:py-5">
                <HelpCircle className="h-5 w-5 text-primary" />
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
