export interface Review {
  id: string;
  title: string;
  poster: string;
  rating: number;
  genre: string;
  type: "movie" | "series";
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const reviews: Review[] = [
  {
    id: "dune-part-two",
    title: "Dune: Part Two",
    poster:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
    rating: 4.8,
    genre: "Sci-Fi",
    type: "movie",
    excerpt:
      "Denis Villeneuve delivers a breathtaking conclusion to the Dune saga with stunning visuals and emotional depth that transcends the genre.",
    content: `Denis Villeneuve has crafted something truly special with Dune: Part Two. This isn't just a sequel—it's the completion of a cinematic vision that pushes the boundaries of what science fiction can achieve on screen.

The film picks up where Part One left off, with Paul Atreides (Timothée Chalamet) navigating the treacherous politics of Arrakis while embracing his destiny among the Fremen. Chalamet delivers a performance that balances vulnerability with growing power, making Paul's transformation both compelling and unsettling.

Visually, the film is nothing short of spectacular. The sandworm riding sequences are breathtaking, and Hans Zimmer's score pulses through every frame like the heartbeat of Arrakis itself. The production design creates a world that feels lived-in and ancient, yet unmistakably alien.

What elevates Dune: Part Two beyond mere spectacle is its willingness to engage with complex themes of colonialism, religious manipulation, and the corrupting nature of power. The ending leaves viewers with much to ponder, refusing easy answers or comfortable resolutions.

This is cinema at its most ambitious and rewarding.`,
    author: "Sofia Chen",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["Sci-Fi", "Epic", "Visual Masterpiece"],
  },
  {
    id: "shogun-series",
    title: "Shōgun",
    poster:
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80",
    rating: 4.9,
    genre: "Historical Drama",
    type: "series",
    excerpt:
      "A masterful adaptation that brings feudal Japan to life with stunning authenticity and deeply human storytelling.",
    content: `FX's Shōgun is a triumph of television, a sweeping historical drama that transports viewers to 1600s Japan with unprecedented authenticity and emotional resonance.

The series follows John Blackthorne (Cosmo Jarvis), an English navigator shipwrecked in Japan, as he becomes entangled in the political machinations of the powerful Lord Toranaga (Hiroyuki Sanada). But what begins as a fish-out-of-water story quickly evolves into something far more nuanced.

Every frame is meticulously crafted, from the costume design to the architecture, creating an immersive world that feels utterly real. The decision to have characters speak predominantly in Japanese with subtitles isn't just authentic—it's essential to understanding the themes of communication and cultural barriers that permeate the series.

The performances are universally excellent, with Anna Sawai's Lady Mariko emerging as the emotional heart of the story. Her complexity and agency make her far more than a supporting character; she's the soul of Shōgun.

This is prestige television at its finest, demanding patience but rewarding viewers with an unforgettable experience.`,
    author: "Marcus Williams",
    date: "2024-03-10",
    readTime: "7 min read",
    tags: ["Historical", "Drama", "Epic"],
  },
  {
    id: "poor-things",
    title: "Poor Things",
    poster:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    rating: 4.7,
    genre: "Fantasy Comedy",
    type: "movie",
    excerpt:
      "Emma Stone delivers a transformative performance in this visually stunning and wickedly funny exploration of consciousness and freedom.",
    content: `Yorgos Lanthimos continues his streak of brilliantly bizarre filmmaking with Poor Things, a feminist Frankenstein tale that's equal parts beautiful and disturbing.

Emma Stone stars as Bella Baxter, a young woman brought back to life by the eccentric Dr. Godwin Baxter (Willem Dafoe) with the brain of an infant. What follows is Bella's journey of self-discovery as she experiences the world with fresh eyes and no social conditioning.

Stone's performance is nothing short of remarkable. She commits fully to Bella's physical and emotional evolution, creating a character who is at once innocent and wise, vulnerable and powerful. It's transformative work that earned her a well-deserved Oscar.

The visual design is stunning, blending Victorian aesthetics with surrealist touches that create a world that's familiar yet utterly strange. Cinematographer Robbie Ryan's use of fisheye lenses and shifting aspect ratios mirrors Bella's expanding perception of reality.

Poor Things is challenging, provocative, and deeply rewarding—a film that trusts its audience's intelligence while delivering pure visual pleasure.`,
    author: "Elena Rodriguez",
    date: "2024-02-28",
    readTime: "6 min read",
    tags: ["Fantasy", "Comedy", "Art House"],
  },
  {
    id: "the-bear-season-two",
    title: "The Bear: Season 2",
    poster:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    rating: 4.6,
    genre: "Drama",
    type: "series",
    excerpt:
      "The sophomore season maintains the intensity while expanding its scope, delivering one of the most memorable episodes in recent television history.",
    content: `The Bear returns with a second season that somehow surpasses its explosive debut, diving deeper into its characters while maintaining the frenetic energy that made it a phenomenon.

Carmy (Jeremy Allen White), Sydney (Ayo Edebiri), and the crew are back, now attempting to transform the beef stand into a fine dining establishment. The stakes are higher, the pressure more intense, and the emotional wounds more raw.

Episode six, "Fishes," stands as a masterpiece of television—a feature-length flashback that explains so much about Carmy while featuring a murderer's row of guest stars including Jamie Lee Curtis and Bob Odenkirk. It's simultaneously the most chaotic and most illuminating episode of the series.

The cinematography continues to make viewers feel the claustrophobia and chaos of a professional kitchen, while the writing finds moments of tenderness amid the tension. Ayo Edebiri particularly shines this season, Sydney's ambition and anxiety creating some of the show's most compelling conflicts.

The Bear proves that great television can be about more than plot—it's about feeling every moment alongside characters we've grown to love.`,
    author: "James Morrison",
    date: "2024-02-15",
    readTime: "7 min read",
    tags: ["Drama", "Kitchen", "Character Study"],
  },
  {
    id: "past-lives",
    title: "Past Lives",
    poster:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    rating: 4.8,
    genre: "Romance Drama",
    type: "movie",
    excerpt:
      "A quietly devastating exploration of love, identity, and the paths not taken that will linger in your heart long after the credits roll.",
    content: `Celine Song's directorial debut is a meditation on love, destiny, and the lives we don't live that achieves something close to perfection in its simplicity and emotional precision.

Past Lives follows Nora (Greta Lee) and Hae Sung (Teo Yoo), childhood sweethearts in Seoul who are separated when Nora's family emigrates. Twenty years later, they reconnect, first virtually, then finally in person when Hae Sung visits Nora in New York, where she now lives with her husband Arthur (John Magaro).

The film operates on silences and glances, saying more in what remains unspoken than most films manage with pages of dialogue. Lee and Yoo have extraordinary chemistry, their every interaction charged with history and possibility. Magaro, in what could have been a thankless role, creates a fully realized character whose presence raises questions about fate, choice, and what constitutes a life well-lived.

Song's direction is confident and restrained, trusting her audience to sit with complicated emotions without easy resolution. The final scene is devastating in its ambiguity, a perfect ending to a near-perfect film.

Past Lives is the rare romance that feels true to life's messiness while still believing in love's transformative power.`,
    author: "Sofia Chen",
    date: "2024-01-20",
    readTime: "8 min read",
    tags: ["Romance", "Drama", "Indie"],
  },
  {
    id: "true-detective-night-country",
    title: "True Detective: Night Country",
    poster:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    rating: 4.3,
    genre: "Crime Thriller",
    type: "series",
    excerpt:
      "Jodie Foster leads a haunting return to the anthology series, bringing supernatural dread to the frozen Alaskan landscape.",
    content: `True Detective returns with its fourth season, subtitled Night Country, delivering a supernatural-tinged mystery that feels both fresh and faithful to the series' best instincts.

Set in Ennis, Alaska, during the polar night—30 days of darkness—the series follows detectives Liz Danvers (Jodie Foster) and Evangeline Navarro (Kali Reis) investigating the disappearance of a research station's entire crew. The setting is instantly iconic, the endless darkness creating an atmosphere of dread that permeates every frame.

Foster is magnetic as Danvers, a woman whose competence masks deep wells of grief and guilt. Reis, a real-life boxer, brings physical presence and emotional vulnerability to Navarro, a character haunted in both figurative and literal senses. Their partnership—fractured, complex, codependent—is the beating heart of the season.

Creator Issa López weaves Indigenous spirituality and climate crisis themes throughout the narrative, giving the mystery stakes beyond the merely criminal. Whether or not you accept the supernatural elements will likely determine your feelings about the finale, but the journey itself is thoroughly gripping.

Night Country proves the True Detective anthology still has stories worth telling.`,
    author: "Marcus Williams",
    date: "2024-01-15",
    readTime: "7 min read",
    tags: ["Crime", "Thriller", "Supernatural"],
  },
];

export function getReviewById(id: string): Review | undefined {
  return reviews.find((review) => review.id === id);
}

export function getFeaturedReview(): Review {
  return reviews[0];
}

export function getLatestReviews(): Review[] {
  return reviews.slice(1);
}
