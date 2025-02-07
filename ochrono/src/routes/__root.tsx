import * as React from 'react';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="p-2 flex gap-10 text-lg">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        <Link
          to="/dni-wolne"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Dni Wolne
        </Link>{' '}
        <Link
          to="/lista-pracownikow"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Lista Pracowników
        </Link>{' '}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
