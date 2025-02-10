import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dni-wolne')({
  component: DniWolne,
});

function DniWolne() {
  return (
    <div className="p-2">
      <h3>About</h3>
    </div>
  );
}
