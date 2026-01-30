import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FeaturedReview } from "@/components/featured-review";
import { ReviewCard } from "@/components/review-card";
import { getFeaturedReview, getLatestReviews } from "@/lib/data";

export default function HomePage() {
  const featured = getFeaturedReview();
  const latestReviews = getLatestReviews();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
                Discover Your Next
                <span className="text-primary block mt-1">Favorite Watch</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Thoughtful reviews and insights on the latest movies and TV
                series. Join us on a journey through storytelling at its finest.
              </p>
            </div>

            {/* Featured Review */}
            <FeaturedReview
              id={featured.id}
              title={featured.title}
              poster={featured.poster}
              rating={featured.rating}
              genre={featured.genre}
              type={featured.type}
              excerpt={featured.excerpt}
              author={featured.author}
              readTime={featured.readTime}
            />
          </div>
        </section>

        {/* Latest Reviews Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Latest Reviews
                </h2>
                <p className="text-muted-foreground">
                  Fresh perspectives on recent releases
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestReviews.map((review) => (
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
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-3xl border border-border p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Stay in the Loop
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Get our latest reviews and recommendations delivered straight to
                your inbox. No spam, just great content.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
