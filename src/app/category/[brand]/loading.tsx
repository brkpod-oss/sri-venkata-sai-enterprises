import { ProductCardSkeleton } from "@/components/ui/product-card-skeleton";

export default function CategoryLoading() {
  return (
    <main className="min-h-screen pt-24">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 h-10 w-64 animate-pulse rounded-lg bg-slate-200" />
        <ProductCardSkeleton count={8} />
      </div>
    </main>
  );
}
