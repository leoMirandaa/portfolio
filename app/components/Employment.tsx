import { Chip } from "@nextui-org/react";
import { EmploymentType } from "../types";

export const Employment = ({
  company,
  years,
  position,
  description,
  technologies,
}: EmploymentType) => {
  return (
    <div>
      <h3 className="text-xl font-bold inline">{company}</h3>
      <span className="text-sm font-bold text-gray-400 ml-2 text-blue">
        ({years})
      </span>
      <h4 className="text-xl text-gray-400">{position}</h4>

      <p className="text-lg">{description}</p>

      <div className="my-2 flex gap-2 flex-wrap">
        {technologies.map((technology: string) => (
          <Chip>{technology}</Chip>
        ))}
      </div>
    </div>
  );
};
