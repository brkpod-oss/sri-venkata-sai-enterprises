export function ProductCardSkeleton({ count = 1 }: { count?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="animate-pulse rounded-2xl border border-slate-200 bg-white p-4">
          <div className="mb-4 aspect-square rounded-xl bg-slate-200" />
          <div className="mb-2 h-3 w-16 rounded bg-slate-200" />
          <div className="mb-3 h-4 w-3/4 rounded bg-slate-200" />
          <div className="mb-2 flex gap-1">
            <div className="h-6 w-12 rounded-md bg-slate-200" />
            <div className="h-6 w-12 rounded-md bg-slate-200" />
          </div>
          <div className="mb-3 flex gap-1">
            <div className="h-4 w-4 rounded-full bg-slate-200" />
            <div className="h-4 w-4 rounded-full bg-slate-200" />
            <div className="h-4 w-4 rounded-full bg-slate-200" />
          </div>
          <div className="mb-4 h-5 w-24 rounded bg-slate-200" />
          <div className="flex gap-2">
            <div className="h-10 flex-1 rounded-lg bg-slate-200" />
            <div className="h-10 flex-1 rounded-lg bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
}
