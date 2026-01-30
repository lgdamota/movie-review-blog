import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ReviewCard } from "@/components/review-card";
import { reviews } from "@/lib/data";

export default function SeriesPage() {
  const seriesReviews = reviews.filter((review) => review.type === "series");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Page Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                TV Series Reviews
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Binge-worthy shows and must-see series. Find your next obsession
                with our in-depth reviews.
              </p>
            </div>

            {/* Series Grid */}
            {seriesReviews.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {seriesReviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    id={review.id}
                    title={review.title}
                    poster={review.poster}
                    rating={review.rating}
                    genre={review.genre}
                    type={review.type}
                    excerpt={review.excerpt}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No series reviews yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
