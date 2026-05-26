// Blog content. Add new posts to this array — they automatically appear on
// /blog, get their own /blog/[slug] page, and land in the sitemap.

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date
  readingTime: string;
  sections: { heading?: string; body: string[] }[];
};

export const posts: BlogPost[] = [
  {
    slug: "how-ai-interior-design-works",
    title: "How AI Interior Design Works (And Why It's So Fast)",
    description:
      "A plain-English look at how AI redesigns a room from a single photo — room analysis, design styles, and photo-realistic results in under a minute.",
    date: "2026-05-20",
    readingTime: "4 min read",
    sections: [
      {
        body: [
          "AI interior design has gone from novelty to genuinely useful in a remarkably short time. Snap a photo of your living room, pick a style, and seconds later you're looking at a photo-realistic redesign of the exact same space. But how does it actually work? Here's the plain-English version.",
        ],
      },
      {
        heading: "Step 1 — The AI reads your room",
        body: [
          "Before it changes anything, the AI analyses your photo. It detects the room type, identifies furniture and fixtures, estimates the lighting and dimensions, and maps out the structural elements — walls, windows, doors, and floors.",
          "This matters because a good redesign has to respect reality. Your windows can't move, your ceiling height is fixed, and the sofa needs to fit. Room analysis is what keeps the result believable instead of a generic stock image.",
        ],
      },
      {
        heading: "Step 2 — You choose a style",
        body: [
          "Next you pick a direction — Modern, Scandinavian, Japandi, Industrial, or any of a dozen others. Each style is a set of design rules the AI applies: colour palettes, materials, furniture silhouettes, and overall mood.",
          "Because the style is doing the heavy lifting, you don't need any design knowledge. You just need to know what you like when you see it.",
        ],
      },
      {
        heading: "Step 3 — The model generates the redesign",
        body: [
          "This is where diffusion models come in — the same family of AI that powers modern image generation, but tuned specifically on real interior photography. The model repaints your room in the chosen style while preserving its structure, so the new design lines up with your actual space.",
          "The whole process usually takes under 60 seconds, which is why it feels almost magical compared to hiring a designer or rendering a 3D model by hand.",
        ],
      },
      {
        heading: "Why it's worth trying",
        body: [
          "Whether you're planning a renovation, staging a home to sell, or just curious what your space could look like, AI interior design gives you instant, low-commitment inspiration. There's no risk, no mess, and no budget required to explore an idea.",
          "Want to see it on your own room? Snap a photo with SpaceFlip and try a few styles — it takes less time than reading this article.",
        ],
      },
    ],
  },
  {
    slug: "redesign-small-living-room-with-ai",
    title: "How to Redesign a Small Living Room with AI",
    description:
      "Practical tips for making a small living room feel bigger, brighter, and more stylish — and how to test every idea instantly with AI before you commit.",
    date: "2026-05-26",
    readingTime: "5 min read",
    sections: [
      {
        body: [
          "Small living rooms are the ultimate design challenge: you want it to feel open and calm, but you've got limited square footage to work with. The good news is that a few proven principles go a long way — and with AI you can test each one on your actual room before spending a cent.",
        ],
      },
      {
        heading: "1. Lean into light, airy styles",
        body: [
          "Styles like Scandinavian, Coastal, and Minimalist are built around light woods, soft whites, and breathing room. They make a small space feel larger almost instantly. Try redesigning your room in each to see which opens it up the most.",
        ],
      },
      {
        heading: "2. Choose furniture that earns its place",
        body: [
          "In a small room, every piece should pull its weight. Low-profile sofas, slim-legged chairs, and multi-use furniture keep sightlines open and floors visible — which tricks the eye into reading the room as bigger than it is.",
        ],
      },
      {
        heading: "3. Keep the palette tight",
        body: [
          "A single, cohesive colour story reduces visual clutter. Two or three tones that flow into each other will always feel calmer than a busy mix. When you preview a style with AI, pay attention to how restrained palettes change the sense of space.",
        ],
      },
      {
        heading: "4. Test before you buy",
        body: [
          "The biggest mistake in small-space design is committing to a look that doesn't fit. This is exactly where AI shines: snap a photo, try Modern, then Japandi, then Coastal, and compare them side by side. You'll know what works in minutes instead of after an expensive shopping trip.",
        ],
      },
      {
        heading: "Try it on your room",
        body: [
          "Pick your favourite of these approaches and see it on your own living room with SpaceFlip. It's the fastest way to find a small-space design you'll actually love.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
