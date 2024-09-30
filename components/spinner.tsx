export const Spinner = () => {
  return (
    <div
      className="size-20 animate-spin rounded-full border-8 border-red-200 border-t-red-600"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
