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
      <h1 className="mt-2 text-xl font-bold underline">
        here are some reviews from some of my friends
      </h1>
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
