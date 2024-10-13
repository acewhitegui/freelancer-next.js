import Image from "next/image"
import {getStrapiMedia} from "@/app/[lang]/utils/api-helpers";
import React from "react";


interface MediaPros {
  width?: number | `${number}` | undefined
  height?: number | `${number}` | undefined
}


export default function NextImage(data: any, props?: MediaPros) {
  const {url, alternativeText, width, height} = data.media

  const loader: ({src, width}: { src: string; width: string }) => null | string = ({src, width}: {
    src: string,
    width: string
  }) => {
    return getStrapiMedia(src)
  }

  // The image has a fixed width and height
  if (props?.width && props?.height) {
    return (
      //@ts-ignore
      <Image loader={loader} src={url} alt={alternativeText || ""} {...props} />
    )
  }

  // The image is responsive
  return (
    <Image
      //@ts-ignore
      loader={loader}
      layout="responsive"
      width={width}
      height={height}
      objectFit="contain"
      src={url}
      alt={alternativeText || ""}
    />
  )
}