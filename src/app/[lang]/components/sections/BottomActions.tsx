import ButtonLink from "@/app/[lang]/components/elements/ButtonLink";
import {getButtonAppearance} from "@/app/[lang]/utils/button";

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface BottomActionsProps {
  data: {
    id: string;
    title: string;
    description: string;
    buttons: Button[];
  };
}


export default function BottomActions({data}: BottomActionsProps) {
  return (
    <section className="bg-primary-800 py-20 text-center">
      <div className="container flex flex-col justify-center p-6">
        <h2 className="title text-white mb-10">{data.title}</h2>
        {/* Buttons row */}
        <div className="flex flex-row justify-center flex-wrap gap-4">
          {data.buttons.map((button: Button) => (
            <ButtonLink
              button={button}
              appearance={getButtonAppearance(button.type, "dark")}
              compact={false}
              key={button.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
