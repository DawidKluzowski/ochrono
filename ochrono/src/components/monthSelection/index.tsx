import { useEffect, useState } from 'react';
import { format, add, setMonth } from 'date-fns';
import { pl } from 'date-fns/locale';

function MonthSelection() {
  const [months, setMonths] = useState<Date[]>([]);

  useEffect(() => {
    const currentDateYear = new Date().getFullYear();
    const january = setMonth(new Date(currentDateYear, 1, 1), 0);
    const yearMonths = Array.from({ length: 12 }).map((_, i) => {
      const result = add(january, {
        months: i,
      });
      return result;
    });
    setMonths(yearMonths);
  }, []);

  return (
    <div className="flex flex-col">
      {months.map((month) => {
        return (
          <button key={month.toISOString()}>
            {format(month, 'LLLL', { locale: pl })}
          </button>
        );
      })}
    </div>
  );
}

export default MonthSelection;
