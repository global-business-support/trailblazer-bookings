import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  X,
} from "lucide-react";

import { SiteLayout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { posts } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      {
        title: "Journal — Horse Trails",
      },
      {
        name: "description",
        content:
          "Guides, safety notes, and stories from our team of expert equestrians.",
      },
    ],
  }),

  component: Blog,
});

type BlogPost = (typeof posts)[number];

type ArticleContent = {
  readTime: string;
  introduction: string;
  paragraphs: string[];
  quote: string;
  tipsTitle: string;
  tips: string[];
};

const articleContents: ArticleContent[] = [
  {
    readTime: "6 min read",
    introduction:
      "Sunrise trail rides offer quiet landscapes, cooler weather, and a peaceful start before the rest of the world wakes up.",
    paragraphs: [
      "A sunrise ride usually begins before the first light appears. Riders meet their guide, get matched with a suitable horse, and receive a short safety briefing before entering the trail.",
      "As the sky begins to brighten, the landscape slowly changes colour. Mountain ridges, forests, and open fields become visible while the horses move calmly through the quiet surroundings.",
      "Morning temperatures are often cooler, so layered clothing is recommended. A light jacket, comfortable trousers, closed shoes, and gloves can make the ride more enjoyable.",
      "Sunrise rides are ideal for photographers, couples, and riders who prefer a calm experience away from busy afternoon trails.",
    ],
    quote:
      "There is something unforgettable about watching the world wake up from the saddle.",
    tipsTitle: "Sunrise riding tips",
    tips: [
      "Arrive at least 20 minutes early.",
      "Wear layered clothing.",
      "Carry a small water bottle.",
      "Keep your camera secured.",
    ],
  },

  {
    readTime: "5 min read",
    introduction:
      "Your first horse ride should feel exciting, safe, and comfortable rather than stressful or overwhelming.",
    paragraphs: [
      "Before mounting, spend a few minutes meeting your horse. Approach calmly, listen to the guide, and allow the horse to become familiar with your presence.",
      "Keep your shoulders relaxed, sit upright, and avoid gripping the saddle too tightly. A balanced posture makes it easier to move naturally with the horse.",
      "The reins should be held gently rather than pulled continuously. Your guide will explain how to ask the horse to move, turn, slow down, and stop.",
      "Most beginner rides follow gentle paths at a walking pace. There is no need to rush into faster movement until both you and the guide feel confident.",
    ],
    quote:
      "Confidence in the saddle begins with patience, balance, and trust.",
    tipsTitle: "Beginner essentials",
    tips: [
      "Tell the guide your real experience level.",
      "Wear closed-toe shoes.",
      "Keep both hands controlled.",
      "Follow the lead horse.",
    ],
  },

  {
    readTime: "7 min read",
    introduction:
      "Beach horse riding combines open coastal scenery, soft sand, and the freedom of riding beside the ocean.",
    paragraphs: [
      "Beach rides are often scheduled during quieter hours when the tide is suitable and fewer people are using the shoreline.",
      "Walking through firm wet sand is generally easier for horses than travelling through deep, dry sand. Guides carefully select the safest part of the beach.",
      "Salt air, waves, and unfamiliar sounds can affect each horse differently, which is why riders should maintain a steady position and follow the guide closely.",
      "Experienced riders may be allowed to trot or canter in designated areas, while beginners can enjoy a relaxed walking ride near the water.",
    ],
    quote:
      "Few experiences compare to the sound of waves beside the rhythm of a horse’s stride.",
    tipsTitle: "Beach ride preparation",
    tips: [
      "Use sunscreen before the ride.",
      "Secure loose hats and accessories.",
      "Avoid carrying heavy bags.",
      "Follow all tide and safety instructions.",
    ],
  },

  {
    readTime: "8 min read",
    introduction:
      "Mountain trail riding rewards riders with dramatic views, changing terrain, and a deeper connection with nature.",
    paragraphs: [
      "Mountain routes may include narrow paths, rocky surfaces, forest sections, and gradual climbs. Horses used for these trails are trained to move carefully across uneven ground.",
      "Riders should remain centred in the saddle and avoid sudden movements. During climbs, leaning slightly forward can help maintain balance.",
      "On downhill sections, riders should sit deeper and keep their heels lowered. The guide may also increase the distance between horses for safety.",
      "Weather conditions can change quickly at higher elevations, so checking the forecast and carrying an extra layer is essential.",
    ],
    quote:
      "The finest mountain views are often found beyond the roads, reached one careful hoofstep at a time.",
    tipsTitle: "Mountain trail checklist",
    tips: [
      "Wear weather-resistant clothing.",
      "Bring water and light snacks.",
      "Follow the guide’s spacing rules.",
      "Avoid standing in the stirrups.",
    ],
  },

  {
    readTime: "6 min read",
    introduction:
      "Choosing the right horse depends on the rider’s confidence, body type, experience, and preferred riding style.",
    paragraphs: [
      "Riding centres consider much more than height when matching a horse with a rider. Temperament, responsiveness, pace, and previous training are equally important.",
      "Beginners are usually paired with calm and experienced horses that respond gently and follow the group comfortably.",
      "More advanced riders may prefer energetic horses that react quickly to commands and are comfortable with faster riding.",
      "Honest communication with the guide is essential. Riders should mention previous experience, injuries, nervousness, and any concerns before mounting.",
    ],
    quote:
      "The best horse is not always the fastest or strongest—it is the one that helps the rider feel secure.",
    tipsTitle: "Finding the right match",
    tips: [
      "Be honest about your riding level.",
      "Mention physical limitations.",
      "Ask about the horse’s temperament.",
      "Request a change if you feel unsafe.",
    ],
  },

  {
    readTime: "7 min read",
    introduction:
      "Overnight horse-riding adventures combine long-distance trails, camp life, outdoor meals, and unforgettable evenings under the stars.",
    paragraphs: [
      "These experiences often begin with equipment checks and a detailed briefing. Riders may carry small personal items while the main luggage is transported separately.",
      "The day is divided into comfortable riding sections with breaks for water, meals, and rest. Guides also monitor the horses throughout the journey.",
      "At camp, riders can help groom the horses, enjoy freshly prepared food, and relax around the fire before sleeping in tents or cabins.",
      "Overnight rides require moderate fitness, but they offer a much deeper experience than a short trail ride.",
    ],
    quote:
      "An overnight journey turns a simple ride into a complete wilderness story.",
    tipsTitle: "Overnight adventure packing",
    tips: [
      "Pack lightweight clothing.",
      "Carry personal medication.",
      "Bring a reusable water bottle.",
      "Use a compact waterproof bag.",
    ],
  },

  {
    readTime: "5 min read",
    introduction:
      "Understanding basic horse behaviour helps riders communicate clearly and recognise when a horse feels relaxed, alert, or uncomfortable.",
    paragraphs: [
      "A relaxed horse usually has soft eyes, a lowered head, and ears that move naturally toward surrounding sounds.",
      "Pinned-back ears, a tightly swishing tail, or sudden tension may indicate irritation or discomfort. Riders should remain calm and inform the guide.",
      "Horses respond strongly to body language. Nervous, abrupt movements can make them uncertain, while calm breathing and steady actions build trust.",
      "Learning to observe these signals creates a safer and more respectful riding experience for both horse and rider.",
    ],
    quote:
      "A horse communicates constantly; good riders learn to listen without words.",
    tipsTitle: "Horse behaviour basics",
    tips: [
      "Approach from a visible angle.",
      "Avoid sudden loud movements.",
      "Watch the horse’s ears.",
      "Inform the guide about unusual behaviour.",
    ],
  },

  {
    readTime: "6 min read",
    introduction:
      "Family trail rides create shared memories while introducing children and adults to horses in a controlled environment.",
    paragraphs: [
      "Family experiences usually use calm horses, shorter routes, and slower speeds. Guides select trails suited to the youngest or least experienced rider.",
      "Children should wear approved helmets and follow age, height, and weight requirements established by the riding centre.",
      "Parents should avoid giving conflicting instructions during the ride. The professional guide should remain the main source of direction.",
      "A successful family ride focuses on comfort and enjoyment rather than speed or distance.",
    ],
    quote:
      "A family ride is not about reaching the trail first—it is about enjoying every step together.",
    tipsTitle: "Family riding advice",
    tips: [
      "Confirm minimum age requirements.",
      "Choose a short beginner route.",
      "Carry water for children.",
      "Book during cooler hours.",
    ],
  },
];

const postContentMap = new Map(
  posts.map((post, index) => [
    post.slug,
    articleContents[index % articleContents.length],
  ]),
);

function Blog() {
  const [selectedPost, setSelectedPost] =
    useState<BlogPost | null>(null);

  const [featured, ...rest] = posts;

  const selectedContent = selectedPost
    ? postContentMap.get(selectedPost.slug)
    : null;

  return (
    <SiteLayout>
      <section className="container-wide">
        <SectionHeading
          eyebrow="Journal"
          title="Stories from the trail"
          subtitle="Guides, riding inspiration, and stories from our equestrian community."
        />

        {/* Featured article */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="group grid overflow-hidden rounded-3xl border border-border/60 bg-card shadow-elegant lg:grid-cols-2"
        >
          <button
            type="button"
            onClick={() => setSelectedPost(featured)}
            className="relative aspect-[4/3] overflow-hidden text-left"
          >
            <img
              src={featured.image}
              alt={featured.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </button>

          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">
            <Badge className="w-fit bg-gold text-gold-foreground">
              {featured.category}
            </Badge>

            <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-forest sm:text-3xl md:text-4xl">
              {featured.title}
            </h2>

            <p className="mt-3 leading-7 text-muted-foreground">
              {featured.excerpt}
            </p>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {featured.date}
            </div>

            <Button
              type="button"
              variant="ghost"
              onClick={() => setSelectedPost(featured)}
              className="mt-6 w-fit gap-2 px-0 text-forest hover:bg-transparent"
            >
              Read article
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.article>

        {/* Other articles */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-elegant"
            >
              <button
                type="button"
                onClick={() => setSelectedPost(post)}
                className="block w-full text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <Badge variant="outline">
                    {post.category}
                  </Badge>

                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-forest">
                    {post.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-forest">
                      Read article
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Article popup */}
      <Dialog
        open={Boolean(selectedPost)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedPost(null);
          }
        }}
      >
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto border-border/60 p-0">
          {selectedPost && selectedContent && (
            <>
              <div className="relative aspect-[16/8] overflow-hidden">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                <button
                  type="button"
                  aria-label="Close article"
                  onClick={() => setSelectedPost(null)}
                  className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <Badge className="bg-gold text-gold-foreground">
                    {selectedPost.category}
                  </Badge>

                  <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {selectedPost.title}
                  </h2>
                </div>
              </div>

              <div className="p-5 sm:p-7">
                <DialogHeader className="sr-only">
                  <DialogTitle>
                    {selectedPost.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="flex flex-wrap items-center gap-4 border-b border-border/60 pb-5 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {selectedPost.date}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {selectedContent.readTime}
                  </span>
                </div>

                <div className="mt-6 space-y-5 text-sm leading-7 text-foreground/80 sm:text-base">
                  <p className="text-lg font-medium leading-8 text-forest">
                    {selectedContent.introduction}
                  </p>

                  {selectedContent.paragraphs.map(
                    (paragraph, index) => (
                      <p key={index}>
                        {paragraph}
                      </p>
                    ),
                  )}

                  <blockquote className="rounded-2xl border-l-4 border-gold bg-cream p-5 font-display text-lg italic leading-8 text-forest">
                    “{selectedContent.quote}”
                  </blockquote>

                  <div className="rounded-2xl border border-border/60 bg-card p-5">
                    <h3 className="font-display text-lg font-semibold text-forest">
                      {selectedContent.tipsTitle}
                    </h3>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {selectedContent.tips.map(
                        (tip) => (
                          <div
                            key={tip}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                            <span>{tip}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end border-t border-border/60 pt-5">
                  <Button
                    type="button"
                    className="bg-forest text-forest-foreground hover:bg-forest/90"
                    onClick={() => setSelectedPost(null)}
                  >
                    Close article
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}