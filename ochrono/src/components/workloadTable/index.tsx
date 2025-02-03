import { getDaysInMonth } from 'date-fns';
import React, { useEffect, useState } from 'react';

const LIST_OF_EMPLOEEYS = [
  'Mega Lodon',
  'KungFu Panda',
  'Jan Paweł 2',
  'Stanisław Łokietek',
  'Optimus Prime',
];

function WorkloadTable() {
  const [curentMonthLength, setCurentMonthLength] = useState(0);

  useEffect(() => {
    const today = new Date();
    setCurentMonthLength(getDaysInMonth(today));
  }, []);

  return (
    <div className="relative">
      <div
        className={`text-sm grid grid-cols-[repeat(${10 + curentMonthLength},_minmax(0,_1fr))] auto-cols-auto grid-flow-col overflow-x-hidden`}
      >
        <div className="col-span-6 p-1 m-1"></div>
        {Array.from({ length: curentMonthLength }, (_, index) => (
          <div
            key={Math.random()}
            className={`${
              (index + 1) % 2 === 1 ? 'bg-gray-300' : 'bg-gray-400'
            } m-4 text-center w-5 h-5 gap-3`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      {LIST_OF_EMPLOEEYS.map((employee) => {
        return (
          <div
            key={employee}
            className={`text-sm grid grid-cols-[repeat(${10 + curentMonthLength},_minmax(0,_1fr))] auto-cols-auto grid-flow-col w-full overflow-x-hidden h-6 mb-2`}
          >
            <div className="col-span-6 bg-slate-600 text-white h-5 text-center ">
              {employee}
            </div>
            {Array.from({ length: curentMonthLength }, (_, index) => (
              <div
                key={Math.random()}
                className={`${
                  (index + 1) % 2 === 1 ? 'bg-gray-300' : 'bg-gray-400'
                } ml-4 text-center w-5 h-5 cursor-pointer`}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default WorkloadTable;
