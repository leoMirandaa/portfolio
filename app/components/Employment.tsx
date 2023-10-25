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
      <h4 className="text-lg">{position}</h4>

      <p className="text-lg text-gray-400">{description}</p>

      <div className="my-2 flex gap-2 flex-wrap">
        {technologies.map((technology: string) => (
          <Chip key={`technology-name-${technology}`}>{technology}</Chip>
        ))}
      </div>
    </div>
  );
};
