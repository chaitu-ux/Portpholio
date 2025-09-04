interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export function Skeleton({ className = '', width = 'w-full', height = 'h-4' }: SkeletonProps) {
  return (
    <div 
      className={`${width} ${height} bg-gray-200 dark:bg-gray-700 rounded animate-pulse ${className}`}
    />
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        {/* Image skeleton */}
        <div className="aspect-video rounded-lg bg-gray-700 animate-pulse" />
        
        {/* Content skeleton */}
        <div className="space-y-4">
          <Skeleton height="h-8" width="w-3/4" />
          <Skeleton height="h-4" width="w-full" />
          <Skeleton height="h-4" width="w-5/6" />
          <Skeleton height="h-4" width="w-4/5" />
          
          {/* Tech stack skeleton */}
          <div className="flex flex-wrap gap-2 pt-2">
            <Skeleton height="h-6" width="w-16" className="rounded-full" />
            <Skeleton height="h-6" width="w-20" className="rounded-full" />
            <Skeleton height="h-6" width="w-14" className="rounded-full" />
          </div>
          
          {/* Buttons skeleton */}
          <div className="flex gap-3 pt-4">
            <Skeleton height="h-10" width="w-24" className="rounded-md" />
            <Skeleton height="h-10" width="w-20" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <section className="container-prose pt-24 pb-16 min-h-screen flex items-center">
      <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-start">
        {/* Left content skeleton */}
        <div className="space-y-6">
          <div className="space-y-2">
            <Skeleton height="h-4" width="w-24" />
            <Skeleton height="h-12" width="w-full" />
            <Skeleton height="h-6" width="w-3/4" />
          </div>
          <div className="space-y-2">
            <Skeleton height="h-4" width="w-full" />
            <Skeleton height="h-4" width="w-5/6" />
            <Skeleton height="h-4" width="w-4/5" />
          </div>
          <div className="flex gap-4 pt-4">
            <Skeleton height="h-10" width="w-32" className="rounded-md" />
            <Skeleton height="h-10" width="w-28" className="rounded-md" />
          </div>
        </div>
        
        {/* Profile image skeleton */}
        <div className="flex items-start justify-center lg:justify-end">
          <div className="h-64 w-64 lg:h-80 lg:w-80 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
