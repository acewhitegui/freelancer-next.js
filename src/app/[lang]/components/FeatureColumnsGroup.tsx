"use client"
import NextImage from "@/app/[lang]/components/elements/Image";

interface Icon {
  id: number;
  alternativeText: string | null;
  caption: string | null;
  url: string;
  width?: number | `${number}` | undefined
  height?: number | `${number}` | undefined
}

interface Feature {
  id: string;
  title: string;
  description: string;
  showLink: boolean;
  newTab: boolean;
  url: string;
  text: string;
  icon: Icon;
}

interface FeaturesProps {
  heading: string;
  description: string;
  features: Feature[];
}

export default function FeatureColumnsGroup({data}: { data: FeaturesProps }) {
  return (
    <div className="container flex flex-col lg:flex-row lg:flex-wrap gap-12 align-top py-12">
      {data.features.map((feature: Feature) => (
        <div className="flex-1 text-lg" key={feature.id}>
          <div className="w-10 h-10">
            <NextImage media={feature.icon}/>
          </div>
          <h3 className="font-bold mt-4 mb-4">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

