import Markdown from "react-markdown"

const RichText = ({data}: { data: RichText }) => {
  return (
    <div className="container mx-auto prose prose-lg py-12">
      <Markdown>{data.content}</Markdown>
    </div>
  )
}


export default RichText
