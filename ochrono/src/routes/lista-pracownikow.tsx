import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/lista-pracownikow')({
  component: ListaPracownikow,
});

function ListaPracownikow() {
  return <div>Hello "/lista-pracownikow"!</div>;
}
