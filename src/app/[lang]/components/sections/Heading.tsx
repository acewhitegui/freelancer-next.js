interface HeadingProps {
  heading: string;
  description: string;
}

export default function Heading({data}: { data: HeadingProps }) {
  return (
    <section>
      <div className="container px-4 mx-auto">
        <div>{data.heading}</div>
        <div>{data.description}</div>
      </div>
    </section>
  )
}