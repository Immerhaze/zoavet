import React from "react";

const progressBars = ["Nosotros", "Misión", "Visión", "Valores"];

export default function ProgressiveBars({
  activeIndex,
  progress,
  phone,
  clic,
}) {
  return (
    <div className="w-full lg:w-3/4 h-full flex flex-row justify-between items-center p-2 md:p-5 gap-5">
      {progressBars.map((bar, index) => (
        <div key={bar} className="w-full">
          {!phone && (
            <span
              onClick={() => clic(index)}
              className="text-nowrap lg:text-3xl hover:text-primary cursor-pointer"
            >
              {bar}
            </span>
          )}
          <div onClick={() => clic(index)} className="border-b-2 h-2 relative ">
            <div
              className="absolute bottom-[-3px] rounded-full left-0 h-full bg-secondary transition-all duration-[100ms]"
              style={{
                width: index === activeIndex ? `${progress}%` : "0%",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
