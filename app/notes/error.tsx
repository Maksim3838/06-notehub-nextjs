'use client';

type Props = {
  error: Error;
  reset: () => void;
};

export default function ErrorNote({ error, reset }: Props) {
  return (
    <div>
      <h2>An error occured</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
