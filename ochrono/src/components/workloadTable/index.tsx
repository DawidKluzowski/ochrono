import { getDaysInMonth } from 'date-fns';
import React, { useEffect, useState } from 'react';

const LIST_OF_EMPLOEEYS = [
  'Mega Lodon',
  'KungFu Panda',
  'Jan Paweł 2',
  'Stanisław Łokietek',
  'Optimus Prime',
];

let monthWorkload = {};

const GRID_FIRST_COLUMN_SPAN = 6;

function WorkloadTable() {
  const [currentMonthLength, setCurrentMonthLength] = useState(0);
  const [clickedCells, setClickedCells] = useState({});

  useEffect(() => {
    const today = new Date();
    setCurrentMonthLength(getDaysInMonth(today));
  }, []);

  const numbers = Array.from({ length: currentMonthLength }, (_, i) => i + 1);

  const numberOfColumns = currentMonthLength + GRID_FIRST_COLUMN_SPAN + 3;
  const numberOfRows = LIST_OF_EMPLOEEYS.length + 1;

  const handleCellClick = (name, day) => {
    const selectedDays = clickedCells[name] || [];

    const isAdjacent = selectedDays.some(
      (selectedDay) => Math.abs(selectedDay - day) === 1
    );

    if (isAdjacent) {
      alert('You cannot select two days in a row for the same person.');
      return;
    }

    setClickedCells((prev) => {
      const newClickedCells = { ...prev };
      if (!newClickedCells[name]) {
        newClickedCells[name] = [];
      }

      if (newClickedCells[name].includes(day)) {
        newClickedCells[name] = newClickedCells[name].filter((d) => d !== day);
      } else {
        newClickedCells[name] = [...newClickedCells[name], day];
      }

      return newClickedCells;
    });

    if (!monthWorkload[name]) {
      monthWorkload[name] = [];
    }

    if (monthWorkload[name].includes(day)) {
      monthWorkload[name] = monthWorkload[name].filter((d) => d !== day);
    } else {
      monthWorkload[name] = [...monthWorkload[name], day];
    }
  };

  return (
    <div
      className={`grid gap-1`}
      style={{
        gridTemplateColumns: `repeat(${numberOfColumns}, minmax(0, 2rem))`,
        gridTemplateRows: `repeat(${numberOfRows}, minmax(0, 2rem))`,
      }}
    >
      <div className="col-span-6" />

      {numbers.map((number, colIndex) => (
        <div
          key={`${number}${colIndex}`}
          className={`border border-black p-1 text-center ${
            colIndex % 2 === 0 ? 'bg-gray-200' : 'bg-white'
          }`}
        >
          {number}
        </div>
      ))}

      {LIST_OF_EMPLOEEYS.map((name) => (
        <React.Fragment key={name}>
          <div className="border col-span-6 border-black p-1 text-center">
            {name}
          </div>
          {numbers.map((number, colIndex) => {
            const isClicked = clickedCells[name]?.includes(number);

            return (
              <div
                key={`${colIndex}${number}`}
                className={`border border-black p-1 text-center ${
                  colIndex % 2 === 0 ? 'bg-gray-200' : 'bg-white'
                } ${
                  isClicked ? '!bg-green-300' : 'hover:border-opacity-25'
                } cursor-pointer`}
                onClick={() => handleCellClick(name, number)}
              />
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
}

export default WorkloadTable;
