export default function ProductDetailLoading() {
  return (
    <main className="min-h-screen pt-24">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 h-5 w-96 animate-pulse rounded bg-slate-200" />
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="aspect-square animate-pulse rounded-2xl bg-slate-200" />
          <div className="flex flex-col gap-4">
            <div className="h-4 w-20 animate-pulse rounded bg-slate-200" />
            <div className="h-8 w-3/4 animate-pulse rounded bg-slate-200" />
            <div className="h-6 w-1/3 animate-pulse rounded bg-slate-200" />
            <div className="mt-4 h-24 animate-pulse rounded-xl bg-slate-200" />
            <div className="mt-4 flex gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-10 w-20 animate-pulse rounded-lg bg-slate-200" />
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <div className="h-12 flex-1 animate-pulse rounded-xl bg-slate-200" />
              <div className="h-12 flex-1 animate-pulse rounded-xl bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
