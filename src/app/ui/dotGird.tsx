


"use client"; 

import React from "react";

const GRID_SIZE = 5;

const DotGrid = () => {
  return (
    <div className="grid grid-cols-5 gap-3 sm:w-30 sm:h-20 md:w-40 md:h-30 justify-items-center items-center">
      {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => (
        <div
          key={index}
          className="w-2 h-2 rounded-full bg-gray-400"
        ></div>
      ))}
    </div>
  );
};

export default DotGrid;
