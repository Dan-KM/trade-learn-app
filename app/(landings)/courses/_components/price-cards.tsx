import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

const plans = {
  monthly: [
    {
      title: "Basic Plan",
      description: "Access to all courses",
      price: "$19/mo",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
      ],
    },
    {
      title: "Business Plan",
      description: "Includes quizzes and assessments",
      price: "$29/mo",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
      ],
    },
    {
      title: "Enterprise Plan",
      description: "Includes live session links",
      price: "$49/mo",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
      ],
    },
  ],
  yearly: [
    {
      title: "Basic Plan",
      description: "Access to all courses",
      price: "$180/yr",
      save: "Save 20%",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
      ],
    },
    {
      title: "Business Plan",
      description: "Includes quizzes and assessments",
      price: "$280/yr",
      save: "Save 20%",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
       
      ],
    },
    {
      title: "Enterprise Plan",
      description: "Includes live session links",
      price: "$480/yr",
      save: "Save 20%",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
      ],
    },
  ],
};

// function PricingCard({
//   title,
//   description,
//   price,
//   save,
//   features,
// }: {
//   title: string;
//   description: string;
//   price: string;
//   save?: string;
//   features: string[];
// }) {
//   return (
//     <Card className="flex h-full flex-col px-6 py-8 md:p-8 shadow-sm hover:shadow-md transition">
//       <h2 className="text-lg font-bold mb-1">{title}</h2>
//       <p className="text-muted-foreground">{description}</p>

//       <div className="my-6 h-px w-full bg-border" />

//       <h3 className="text-3xl font-bold">{price}</h3>
//       {save && <p className="font-medium text-green-600">{save}</p>}

//       <div className="mt-6">
//         <Button className="w-full">Get started</Button>
//       </div>

//       <div className="my-6 h-px w-full bg-border" />

//       <ul className="grid gap-3">
//         {features.map((feature, i) => (
//           <li key={i} className="flex items-start">
//             <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
//             <span>{feature}</span>
//           </li>
//         ))}
//       </ul>
//     </Card>
//   );
// }

// import React, { useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Check } from "lucide-react";

type PricingCardProps = {
  title: string;
  description: string;
  price: string;
  save?: string;
  features: string[];
  mostUsed?: boolean; // new prop
};

export function PricingCard({
  title,
  description,
  price,
  save,
  features,
  mostUsed = false,
}: PricingCardProps) {
  const [selected, setSelected] = useState(false);

  return (
    <Card
      onClick={() => setSelected(!selected)}
      className={`relative flex h-full flex-col px-6 py-8 md:p-8 shadow-sm transition cursor-pointer
        ${selected ? "border-2 border-blue-600 shadow-lg" : "hover:shadow-md"}
      `}
    >
      {/* Most Used Badge */}
      {mostUsed && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 text-white text-xs font-medium px-3 py-1 shadow">
          Most Used
        </span>
      )}

      <h2 className="text-lg font-bold mb-1">{title}</h2>
      <p className="text-muted-foreground">{description}</p>

      <div className="my-6 h-px w-full bg-border" />

      <h3 className="text-3xl font-bold">{price}</h3>
      {save && <p className="font-medium text-green-600">{save}</p>}

      <div className="mt-6">
        <Button className="w-full">Get started</Button>
      </div>

      <div className="my-6 h-px w-full bg-border" />

      <ul className="grid gap-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function PricingCardList() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-lg text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h1>
          <p className="text-muted-foreground">
            Choose the package that suits your trading journey.
          </p>
        </div>

        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-10 flex w-fit rounded-full border bg-muted p-1">
            <TabsTrigger
              value="monthly"
              className="rounded-full px-5 py-2 text-sm data-[state=active]:bg-background data-[state=active]:shadow"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="rounded-full px-5 py-2 text-sm data-[state=active]:bg-background data-[state=active]:shadow"
            >
              Yearly
            </TabsTrigger>
          </TabsList>

          {Object.entries(plans).map(([period, planList]) => (
            <TabsContent
              key={period}
              value={period}
              className="grid grid-cols-1 gap-8 lg:grid-cols-3"
            >
              {planList.map((plan, i) => (
                <PricingCard key={i} {...plan} />
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
