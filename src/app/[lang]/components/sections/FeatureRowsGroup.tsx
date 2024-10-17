"use client"
import classNames from "classnames"
import NextImage from "@/app/[lang]/components/elements/Image";
import CustomLink from "@/app/[lang]/components/elements/CustomLink";
import CustomVideo from "@/app/[lang]/components/elements/CustomVideo";

interface Media {
  id: number;
  alternativeText: string | null;
  caption: string | null;
  url: string;
  mime: string;
  width?: number | `${number}` | undefined
  height?: number | `${number}` | undefined
}

interface Link {
  id: number;
  url: string;
  newTab: boolean;
  text: string
}

interface Feature {
  id: string;
  title: string;
  description: string;
  showLink: boolean;
  newTab: boolean;
  url: string;
  text: string;
  media: Media;
  link: Link
}

interface FeaturesProps {
  heading: string;
  description: string;
  features: Feature[];
}

const FeatureRowsGroup = ({data}: { data: FeaturesProps }) => {
  return (
    <section className="dark:bg-black dark:text-gray-100">
      <div className="container flex flex-col gap-12 py-12 mx-auto">
        {data.features.map((feature, index) => (
          <div
            className={classNames(
              // Common classes
              "flex flex-col justify-start md:justify-between md:items-center gap-10",
              {
                "lg:flex-row": index % 2 === 0,
                "lg:flex-row-reverse": index % 2 === 1,
              }
            )}
            key={feature.id}
          >
            <div className="w-full lg:w-6/12 lg:pr-6 text-lg">
              <h3 className="title">{feature.title}</h3>
              <p className="my-6">{feature.description}</p>
              <CustomLink link={feature.link}>
                <div className="text-blue-600 with-arrow hover:underline">
                  {feature.link.text}
                </div>
              </CustomLink>
            </div>
            {/* Media section */}
            <div className="w-full sm:9/12 lg:w-4/12 max-h-full">
              {feature.media.mime.startsWith("image") && (
                <div className="w-full h-auto">
                  <NextImage media={feature.media}/>
                </div>
              )}
              {feature.media.mime.startsWith("video") && (
                <CustomVideo
                  media={feature.media}
                  className="w-full h-auto"
                  autoPlay
                  controls={false}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureRowsGroup
