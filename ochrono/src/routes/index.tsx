import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import MonthSelection from '../components/MonthSelection';
import WorkloadTable from '../components/WorkloadTable';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-2 flex">
      <MonthSelection />
      <WorkloadTable />
    </div>
  );
}
