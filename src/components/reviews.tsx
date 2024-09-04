interface ReviewProps {
  author: string;
  text: string;
}

const reviews: ReviewProps[] = [
  {
    author: "incognitotgt",
    text: "hyperactive nixxer",
  },
  {
    author: "sparkzii",
    text: "prodigy, idk what else to add",
  },
  {
    author: "iRay",
    text: "zram is a based dude and [...]",
  },
  {
    author: "wyatt",
    text: "the sides are not black!! [darkreader issue]",
  },
  {
    author: "layth",
    text: "dude hop off",
  },
  {
    author: "ameer",
    text: "Zram is drake 2.0 [💀 what]",
  },
  {
    author: "tylander",
    text: "he uses arch btw [dawg i use nixOS]",
  },
  {
    author: "Jack",
    text: "Arc isn't my #1 opp yusof is",
  },
];

function Review(props: ReviewProps) {
  return (
    <div className="my-2">
      <p className="italic">&quot;{props.text}&quot;</p>
      <span className="text-gray-400">― {props.author}</span>
    </div>
  );
}

export function Reviews() {
  return (
    <div className="py-2">
      <h1 className="mt-2 text-xl font-bold underline">Wall of Reviews</h1>
      <span>
        want a review? if you don&apos;t know me at all then you don&apos;t know
        me enough to review me
      </span>
      <div className="flex flex-col">
        {reviews.map((review) => (
          <Review
            author={review.author}
            text={review.text}
            key={`${review.author}'s review about me`}
          />
        ))}
      </div>
    </div>
  );
}
