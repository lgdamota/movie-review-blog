import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/star-rating";
import { getReviewById, reviews } from "@/lib/data";

interface ReviewPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return reviews.map((review) => ({
    id: review.id,
  }));
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { id } = await params;
  const review = getReviewById(id);

  if (!review) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Image */}
        <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh]">
          <Image
            src={review.poster || "/placeholder.svg"}
            alt={`${review.title} cover`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

          {/* Back Button */}
          <div className="absolute top-6 left-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Back</span>
            </Link>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12">
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge
                  variant="secondary"
                  className="bg-primary text-primary-foreground capitalize"
                >
                  {review.type}
                </Badge>
                <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                  {review.genre}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                {review.title}
              </h1>
              <div className="flex items-center gap-3">
                <StarRating rating={review.rating} size="lg" />
                <span className="text-lg font-semibold text-foreground">
                  {review.rating.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="py-8 md:py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{review.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(review.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{review.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {review.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Excerpt */}
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-serif italic border-l-4 border-primary pl-6">
              {review.excerpt}
            </p>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              {review.content.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-foreground/90 leading-relaxed mb-6 font-serif"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Share this review
              </h3>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="px-4 py-2 rounded-xl bg-accent text-accent-foreground hover:bg-primary/10 hover:text-primary transition-all text-sm font-medium"
                >
                  Twitter
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded-xl bg-accent text-accent-foreground hover:bg-primary/10 hover:text-primary transition-all text-sm font-medium"
                >
                  Facebook
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded-xl bg-accent text-accent-foreground hover:bg-primary/10 hover:text-primary transition-all text-sm font-medium"
                >
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
