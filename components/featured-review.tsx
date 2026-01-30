import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FeaturedReviewProps {
  id: string;
  title: string;
  poster: string;
  rating: number;
  genre: string;
  type: "movie" | "series";
  excerpt: string;
  author: string;
  readTime: string;
}

export function FeaturedReview({
  id,
  title,
  poster,
  rating,
  genre,
  type,
  excerpt,
  author,
  readTime,
}: FeaturedReviewProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-card border border-border">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image Side */}
        <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[300px]">
          <Image
            src={poster || "/placeholder.svg"}
            alt={`${title} featured poster`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/50 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent md:hidden" />

          {/* Mobile Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden">
            <Badge
              variant="secondary"
              className="mb-2 bg-primary text-primary-foreground capitalize"
            >
              Featured {type}
            </Badge>
            <h2 className="text-2xl font-bold text-foreground mb-2 text-balance">
              {title}
            </h2>
          </div>
        </div>

        {/* Content Side */}
        <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <div className="hidden md:block">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary text-primary-foreground capitalize"
            >
              Featured {type}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
              {title}
            </h2>
          </div>

          {/* Rating & Genre */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5 bg-accent rounded-full px-3 py-1.5">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-sm font-semibold text-foreground">
                {rating.toFixed(1)}
              </span>
            </div>
            <Badge variant="outline" className="border-muted">
              {genre}
            </Badge>
          </div>

          {/* Excerpt */}
          <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 md:line-clamp-4">
            {excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* CTA */}
          <div>
            <Button asChild className="group rounded-xl">
              <Link href={`/review/${id}`}>
                Read Full Review
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
