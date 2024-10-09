interface Feature {
  id: string;
    name: string;
}

interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  pricePeriod: string;
  isRecommended: boolean;
  product_features: {
    data: Feature[];
  };
}

interface PriceProps {
  data: {
    id: string;
    title: string;
    plans: Plan[];
  };
}

export default function Pricing({ data }: PriceProps) {
  return (
    <section className="py-20 dark:bg-black dark:text-gray-100 m:py-12 lg:py-24">
      <div className="container px-4 mx-auto ">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="font-bold tracking-wider uppercase dark:text-violet-400">
            Pricing
          </span>
          <h2 className="text-4xl font-bold lg:text-5xl">{data.title}</h2>
        </div>
        <div className="flex flex-wrap items-stretch max-w-5xl mx-auto">
          {data.plans.map((plan: Plan) => (
            <div
              key={plan.id}
              className="w-full p-4 mb-8  sm:mx-40 lg:mx-0 lg:w-1/3 lg:mb-0"
            >
              <div
                className={`flex flex-col p-6 space-y-6 rounded shadow sm:p-8 min-h-[475px] min-w-[300px] ${
                  plan.isRecommended ? "dark:bg-violet-600" : "dark:bg-gray-800"
                }`}
              >
                <div className="space-y-2">
                  <h4 className="text-3xl font-bold mb-6">{plan.name}</h4>
                  <span className="text-6xl font-bold ">
                    {plan.price}
                    <span
                      className={`ml-1 text-sm tracking-wid ${
                        plan.isRecommended
                          ? "dark:text-gray-900"
                          : "dark:text-violet-500"
                      }`}
                    >
                      {plan.pricePeriod.toLowerCase()}
                    </span>
                  </span>
                </div>
                <p
                  className={`mt-3 leading-relaxed text-lg font-bold ${
                    plan.isRecommended
                      ? "dark:text-gray-900"
                      : "dark:text-gray-400"
                  }`}
                >
                  {plan.description}
                </p>
                <button
                  type="button"
                  className={`inline-block px-5 py-3 font-semibold tracking-wider text-center rounded   ${
                    plan.isRecommended
                      ? "dark:bg-gray-900 dark:text-violet-400"
                      : "dark:bg-violet-400 dark:text-gray-900"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
