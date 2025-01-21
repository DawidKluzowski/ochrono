import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import MainMenu from '../components/mainMenu';
import MonthSelection from '../components/monthSelection';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-2 flex">
      <MainMenu />
      <MonthSelection />
    </div>
  );
}
