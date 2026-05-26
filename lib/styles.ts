// Single source of truth for the 12 design styles — used by the homepage
// showcase, the /styles landing pages, and the sitemap.

export type Style = {
  slug: string;
  name: string;
  description: string; // short, for the showcase grid
  palette: [string, string, string];
  tagline: string; // hero subline on the landing page
  intro: string; // SEO body paragraph
  bestFor: string[]; // rooms / scenarios this style suits
  characteristics: string[]; // defining design traits
};

export const styles: Style[] = [
  {
    slug: "modern",
    name: "Modern",
    description: "Clean lines, neutral tones, open spaces.",
    palette: ["#E8E4DD", "#8B8680", "#2C2A28"],
    tagline: "Clean lines and uncluttered, light-filled space.",
    intro:
      "Modern interior design strips a room back to its essentials — straight lines, a neutral palette, and open, breathable space. SpaceFlip's AI reimagines your room in a contemporary modern look in seconds, keeping the architecture intact while swapping in sleek furniture, balanced lighting, and a calm, cohesive colour story.",
    bestFor: ["Living rooms", "Open-plan spaces", "Home offices", "Apartments"],
    characteristics: ["Straight, clean lines", "Neutral colour palette", "Minimal clutter", "Function-first furniture"],
  },
  {
    slug: "scandinavian",
    name: "Scandinavian",
    description: "Light woods, soft whites, cozy textiles.",
    palette: ["#F5F1EA", "#D4C5B0", "#7A6A55"],
    tagline: "Light, warm, and effortlessly cosy.",
    intro:
      "Scandinavian design pairs pale woods and soft whites with cosy textiles and abundant natural light. Upload a photo and SpaceFlip's AI redesigns your space with the airy, hygge-inspired warmth Nordic interiors are loved for — simple shapes, functional pieces, and a bright, inviting feel.",
    bestFor: ["Bedrooms", "Living rooms", "Small spaces", "Rentals"],
    characteristics: ["Light wood tones", "Soft white walls", "Cosy textiles", "Functional simplicity"],
  },
  {
    slug: "japandi",
    name: "Japandi",
    description: "Japanese minimalism meets Scandi warmth.",
    palette: ["#EDE6D8", "#A89B82", "#3D3327"],
    tagline: "Japanese calm meets Scandinavian warmth.",
    intro:
      "Japandi blends Japanese minimalism with Scandinavian comfort — low-profile furniture, natural materials, and a serene, grounded palette. SpaceFlip's AI transforms your room into a balanced, clutter-free Japandi sanctuary that feels both refined and deeply restful.",
    bestFor: ["Bedrooms", "Meditation spaces", "Living rooms", "Studies"],
    characteristics: ["Low-profile furniture", "Natural materials", "Muted earthy palette", "Intentional negative space"],
  },
  {
    slug: "bohemian",
    name: "Bohemian",
    description: "Layered patterns, plants, warm earthy tones.",
    palette: ["#D4A574", "#A0522D", "#5C3317"],
    tagline: "Layered, plant-filled and full of character.",
    intro:
      "Bohemian style is all about personality — layered patterns, lush plants, woven textures, and warm earthy tones. SpaceFlip's AI fills your room with eclectic, free-spirited boho character while keeping it cohesive and liveable, not chaotic.",
    bestFor: ["Living rooms", "Bedrooms", "Reading nooks", "Studios"],
    characteristics: ["Layered patterns & textures", "Lots of greenery", "Warm earthy tones", "Collected, eclectic feel"],
  },
  {
    slug: "art-deco",
    name: "Art Deco",
    description: "Bold geometry, gold accents, rich jewel tones.",
    palette: ["#1A1A2E", "#C9A86A", "#722F37"],
    tagline: "Bold geometry, gold accents, glamour.",
    intro:
      "Art Deco brings the drama — bold geometry, gleaming gold accents, and rich jewel tones. SpaceFlip's AI redesigns your space with the opulent, 1920s-inspired glamour of Art Deco interiors, balancing statement pieces with elegant symmetry.",
    bestFor: ["Living rooms", "Dining rooms", "Bars & lounges", "Entryways"],
    characteristics: ["Bold geometric patterns", "Gold & brass accents", "Rich jewel tones", "Glamorous statement pieces"],
  },
  {
    slug: "industrial",
    name: "Industrial",
    description: "Exposed brick, raw metal, leather, concrete.",
    palette: ["#6B5D4F", "#3A3530", "#1F1B17"],
    tagline: "Raw, urban and unapologetically honest.",
    intro:
      "Industrial design celebrates raw materials — exposed brick, weathered metal, leather, and concrete. SpaceFlip's AI gives your room a confident, loft-inspired industrial look with utilitarian furniture and a moody, urban palette.",
    bestFor: ["Lofts", "Living rooms", "Home offices", "Open-plan spaces"],
    characteristics: ["Exposed brick & concrete", "Raw metal finishes", "Leather & reclaimed wood", "Utilitarian furniture"],
  },
  {
    slug: "coastal",
    name: "Coastal",
    description: "Whites, blues, natural fibers, airy and bright.",
    palette: ["#F0F4F8", "#A8C5D6", "#3E5C76"],
    tagline: "Bright, breezy and by-the-sea.",
    intro:
      "Coastal design captures the calm of the seaside — crisp whites, soft blues, and natural fibres in a bright, airy space. SpaceFlip's AI redesigns your room with a relaxed, sunlit coastal feel that's fresh without being themed.",
    bestFor: ["Living rooms", "Bedrooms", "Sunrooms", "Bathrooms"],
    characteristics: ["White & blue palette", "Natural fibres", "Airy, sunlit feel", "Relaxed, casual furniture"],
  },
  {
    slug: "mid-century",
    name: "Mid-Century",
    description: "Walnut, mustard, teak, sculpted shapes.",
    palette: ["#D4A14A", "#8B5A2B", "#3D2817"],
    tagline: "Retro warmth with sculpted, timeless shapes.",
    intro:
      "Mid-century modern pairs rich woods like walnut and teak with warm mustard tones and sculpted, organic shapes. SpaceFlip's AI brings the timeless, retro-cool look of the 50s and 60s to your room — clean silhouettes with plenty of character.",
    bestFor: ["Living rooms", "Dining rooms", "Home offices", "Lounges"],
    characteristics: ["Walnut & teak woods", "Mustard & warm tones", "Sculpted organic shapes", "Tapered legs & clean lines"],
  },
  {
    slug: "minimalist",
    name: "Minimalist",
    description: "Less is more. Pure forms, single color story.",
    palette: ["#FAFAFA", "#C8C8C8", "#1A1A1A"],
    tagline: "Less, but better. Pure and uncluttered.",
    intro:
      "Minimalist design is the art of less — pure forms, a single colour story, and only what's essential. SpaceFlip's AI strips your room to a calm, intentional minimalist space where every piece earns its place.",
    bestFor: ["Bedrooms", "Studies", "Small apartments", "Living rooms"],
    characteristics: ["Single colour story", "Pure, simple forms", "Zero clutter", "Hidden storage"],
  },
  {
    slug: "farmhouse",
    name: "Farmhouse",
    description: "Reclaimed wood, shiplap, vintage charm.",
    palette: ["#F2EBDF", "#B89B7A", "#5D4A37"],
    tagline: "Rustic warmth with vintage charm.",
    intro:
      "Farmhouse style mixes reclaimed wood, shiplap, and vintage touches into a warm, welcoming space. SpaceFlip's AI redesigns your room with cosy modern-farmhouse character — rustic materials balanced with bright, comfortable simplicity.",
    bestFor: ["Kitchens", "Living rooms", "Dining rooms", "Bedrooms"],
    characteristics: ["Reclaimed wood", "Shiplap walls", "Vintage accents", "Warm, neutral palette"],
  },
  {
    slug: "luxury",
    name: "Luxury",
    description: "Velvet, marble, brass, deep moody hues.",
    palette: ["#2C1F2D", "#7B5E3C", "#D4AF37"],
    tagline: "Velvet, marble and quiet opulence.",
    intro:
      "Luxury interiors layer sumptuous materials — velvet, marble, and brass — into deep, moody, beautifully finished spaces. SpaceFlip's AI redesigns your room with refined, high-end opulence that feels considered rather than flashy.",
    bestFor: ["Living rooms", "Master bedrooms", "Dining rooms", "Lounges"],
    characteristics: ["Velvet & marble", "Brass & gold accents", "Deep, moody hues", "Layered, tactile finishes"],
  },
  {
    slug: "eclectic",
    name: "Eclectic",
    description: "Mix eras and styles with confident curation.",
    palette: ["#8B4789", "#D4A574", "#2E5266"],
    tagline: "Confidently mixed, never matched.",
    intro:
      "Eclectic design mixes eras, colours, and styles with confident curation — bold yet intentional. SpaceFlip's AI blends contrasting pieces into a cohesive, expressive eclectic room that looks collected over time, not bought in one go.",
    bestFor: ["Living rooms", "Studios", "Creative spaces", "Bedrooms"],
    characteristics: ["Mixed eras & styles", "Bold colour combinations", "Curated contrast", "Personal, expressive feel"],
  },
];

export function getStyle(slug: string): Style | undefined {
  return styles.find((s) => s.slug === slug);
}
