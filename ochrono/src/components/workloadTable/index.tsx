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

  console.log(curentMonthLength);

  return (
    <div>
      {LIST_OF_EMPLOEEYS.map((employee) => {
        return (
          <div
            key={employee}
            className=" text-sm grid grid-cols-[repeat(38,_minmax(0,_1fr))] gap-3 auto-cols-auto grid-flow-col w-full overflow-x-hidden "
          >
            <div className="col-span-5 bg-slate-600 p-1 text-white m-1">
              {employee}
            </div>
            {Array.from({ length: curentMonthLength }, (_, index) => (
              <div
                key={Math.random()}
                className=" bg-gray-300 m-4 text-center w-5 h-5 gap-3 cursor-pointer"
              >
                {index + 1}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default WorkloadTable;
