import { useEffect, useState } from 'react';
import { format, compareAsc, add, setMonth } from 'date-fns';
import { pl } from 'date-fns/locale';

function MonthSelection() {
  const [months, setMonths] = useState<Date[]>([]);

  useEffect(() => {
    const currentDate = new Date();
    const january = setMonth(currentDate, 0);
    const yearMonths = Array.from({ length: 11 }).map((_, i) => {
      const result = add(january, {
        months: i,
      });
      return result;
    });
    setMonths(yearMonths);
  }, []);

  return (
    <div>
      {months.map((month) => {
        return (
          <div key={month.toISOString()}>
            {format(month, 'LLLL', { locale: pl })}
          </div>
        );
      })}
    </div>
  );
}

export default MonthSelection;
