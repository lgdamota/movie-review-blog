import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Heart, Film, Sparkles } from "lucide-react";

const team = [
  {
    name: "Sofia Chen",
    role: "Editor-in-Chief",
    bio: "Film studies graduate with a passion for sci-fi and international cinema. Always hunting for the next hidden gem.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Marcus Williams",
    role: "Senior Reviewer",
    bio: "Former film school professor turned full-time critic. Specializes in prestige TV and historical dramas.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Elena Rodriguez",
    role: "Contributing Writer",
    bio: "Art house enthusiast and Oscar predictor extraordinaire. Believes every film deserves a fair chance.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion First",
    description:
      "We review because we love stories. Every piece is written with genuine enthusiasm for the art of filmmaking.",
  },
  {
    icon: Film,
    title: "Thoughtful Analysis",
    description:
      "Beyond ratings, we dive deep into themes, craft, and context to give you meaningful insights.",
  },
  {
    icon: Sparkles,
    title: "Fresh Perspectives",
    description:
      "We celebrate diverse voices and viewpoints, finding beauty in both blockbusters and indie darlings.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Reel Reflections
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to your cozy corner of the internet for movie and TV
                reviews. We believe great storytelling deserves thoughtful
                discussion, and we&apos;re here to guide you to your next
                favorite watch.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              What We Stand For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card rounded-2xl p-6 border border-border text-center"
                >
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Meet the Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A small but passionate group of cinephiles dedicated to bringing
                you honest, insightful reviews.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-card rounded-2xl overflow-hidden border border-border group"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center border border-primary/10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Want to Write With Us?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                We&apos;re always looking for passionate voices to join our
                team. If you love movies and have something to say, we&apos;d
                love to hear from you.
              </p>
              <a
                href="mailto:hello@reelreflections.com"
                className="inline-flex px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
