import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ReviewCardProps {
  id: string;
  title: string;
  poster: string;
  rating: number;
  genre: string;
  type: "movie" | "series";
  excerpt: string;
}

export function ReviewCard({
  id,
  title,
  poster,
  rating,
  genre,
  type,
  excerpt,
}: ReviewCardProps) {
  return (
    <Link href={`/review/${id}`} className="group block">
      <article className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full">
        {/* Poster */}
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            src={poster || "/placeholder.svg"}
            alt={`${title} poster`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Type Badge */}
          <Badge
            variant="secondary"
            className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-xs capitalize"
          >
            {type}
          </Badge>

          {/* Rating */}
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full px-2.5 py-1">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span className="text-xs font-semibold text-foreground">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <Badge
            variant="outline"
            className="mb-2 text-xs text-muted-foreground border-muted"
          >
            {genre}
          </Badge>
          <h3 className="font-semibold text-foreground text-lg leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
