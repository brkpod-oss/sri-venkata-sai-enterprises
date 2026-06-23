import { ProductCardSkeleton } from "@/components/ui/product-card-skeleton";

export default function ProductsLoading() {
  return (
    <main className="min-h-screen pt-24">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 h-10 w-64 animate-pulse rounded-lg bg-slate-200" />
        <div className="mb-8 flex gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-9 w-20 animate-pulse rounded-full bg-slate-200" />
          ))}
        </div>
        <ProductCardSkeleton count={8} />
      </div>
    </main>
  );
}
