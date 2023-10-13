import { educationType } from "../types";

export const Education = ({ career, years, description }: educationType) => {
  return (
    <div>
      <h3 className="text-xl font-bold inline">{career}</h3>
      <span className="text-sm font-bold ml-2 text-gray-400 text-blue">
        ({years})
      </span>
      <p className="text-lg text-gray-300">{description}</p>
    </div>
  );
};
