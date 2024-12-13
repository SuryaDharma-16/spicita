import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ title }) => {
  return (
    <>
      <div className="flex flex-row gap-[4px] justify-start items-center">
        <p className="font-lexendDeca text-p text-gray-500">
          <Link to="/dashboard">Dasbor Belajar</Link>
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="size-4"
        >
          <path
            color="#422006"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>

        <p className="font-lexendDeca text-yellow-950 text-p">{title}</p>
      </div>
    </>
  );
};

export default Breadcrumbs;
