import Link from "next/link";

const highlights = [
  {
    number: "01",
    title: "Find inspiration",
    description:
      "Discover ideas for your next breakfast, lunch, dinner, or special occasion.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Explore new flavors",
    description:
      "Step outside your usual routine and find something different to try.",
    icon: "◈",
  },
  {
    number: "03",
    title: "Share what you love",
    description:
      "Bring your favorite recipes to a community that appreciates good food.",
    icon: "♡",
  },
];

export default function Home() {
  return (
    <div className="space-y-24 pb-12 sm:space-y-32">
      {/* Hero section */}
      <section
        aria-labelledby="home-heading"
        className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
      >
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e8d8cb] bg-[#f4e9df] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#98432d]">
            <span className="h-2 w-2 rounded-full bg-[#bd593b]" />
            A little inspiration for your kitchen
          </p>

          <h1
            id="home-heading"
            className="text-5xl font-bold leading-[1.08] tracking-[-0.055em] text-[#28251f] sm:text-6xl lg:text-7xl"
          >
            Good food.
            <br />
            Great stories.
            <br />
            <span className="font-serif font-medium italic text-[#bd593b]">
              Shared together.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-[#777168] sm:text-lg">
            Every great meal starts with an idea. Discover recipes, explore
            new flavors, and share the dishes that make life delicious.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/recipes"
              className="inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#bd593b] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#bd593b]/15 transition-all hover:-translate-y-0.5 hover:bg-[#98432d] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bd593b]"
            >
              Explore recipes
              <span aria-hidden="true">→</span>
            </Link>

            <a
              href="#discover"
              className="inline-flex min-h-13 items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold text-[#514b43] transition-colors hover:text-[#bd593b]"
            >
              Discover RecipeShare
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-[#eae3d9] pt-7">
            <div className="flex -space-x-2" aria-hidden="true">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#faf7f2] bg-[#ead0b9] text-sm">
                🍅
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#faf7f2] bg-[#e9dfb9] text-sm">
                🥑
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#faf7f2] bg-[#e8c7bd] text-sm">
                🍓
              </span>
            </div>

            <p className="text-sm text-[#777168]">
              <span className="font-semibold text-[#28251f]">
                Made for food lovers.
              </span>
              <br />
              From everyday meals to special moments.
            </p>
          </div>
        </div>

        {/* Decorative food illustration */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -right-4 -top-5 h-28 w-28 rounded-full bg-[#e9c6a9]/50 blur-2xl" />
          <div className="absolute -bottom-5 -left-5 h-36 w-36 rounded-full bg-[#d8d9b9]/60 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] bg-[#e9dfd0] p-5 sm:p-8">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/40" />
            <div className="absolute -bottom-20 -left-12 h-64 w-64 rounded-full border border-white/40" />

            <div className="relative flex items-center justify-between">
              <span className="rounded-full bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#765c49]">
                Made with love
              </span>
              <span className="text-2xl text-[#bd593b]" aria-hidden="true">
                ✳
              </span>
            </div>

            <div className="relative flex min-h-[300px] items-center justify-center sm:min-h-[370px]">
              <div className="absolute h-64 w-64 rounded-full bg-[#f9f5ee] shadow-[0_20px_50px_rgba(80,55,35,0.12)] sm:h-80 sm:w-80" />
              <div className="absolute h-56 w-56 rounded-full border-[10px] border-[#fffdf9] bg-[#e7cda9] shadow-inner sm:h-72 sm:w-72 sm:border-[12px]" />

              <div className="relative z-10 flex h-48 w-48 rotate-[-8deg] items-center justify-center rounded-full bg-[#f4e5c8] text-[105px] shadow-inner sm:h-64 sm:w-64 sm:text-[140px]">
                🥗
              </div>

              <span className="absolute left-3 top-10 rotate-[-12deg] text-4xl sm:left-8 sm:top-12 sm:text-5xl">
                🍋
              </span>
              <span className="absolute bottom-8 right-3 rotate-12 text-4xl sm:bottom-10 sm:right-8 sm:text-5xl">
                🌿
              </span>
              <span className="absolute right-5 top-8 text-2xl text-[#bd593b] sm:right-12">
                ✦
              </span>
            </div>

            <div className="relative flex items-center justify-between rounded-2xl bg-white/75 px-5 py-4 backdrop-blur-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#93816e]">
                  The joy of cooking
                </p>
                <p className="mt-1 text-lg font-bold tracking-tight text-[#28251f]">
                  Something delicious awaits.
                </p>
              </div>
              <span className="text-3xl" aria-hidden="true">
                🍽️
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction section */}
      <section id="discover" aria-labelledby="discover-heading">
        <div className="mb-10 max-w-xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#bd593b]">
            Welcome to RecipeShare
          </p>

          <h2
            id="discover-heading"
            className="text-3xl font-bold tracking-tight text-[#28251f] sm:text-4xl"
          >
            More than recipes. A place to share your love of food.
          </h2>

          <p className="mt-4 leading-7 text-[#777168]">
            Whether you are looking for something new to cook or have a
            favorite dish worth sharing, there is room for you at the table.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.number}
              className="group rounded-2xl border border-[#eae3d9] bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#d8b5a4] hover:shadow-xl hover:shadow-[#5a3b2b]/5"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.15em] text-[#a49a8d]">
                  {item.number}
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f7eee7] text-2xl text-[#bd593b] transition-colors group-hover:bg-[#bd593b] group-hover:text-white">
                  {item.icon}
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-[#28251f]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#777168]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Final call to action */}
      <section className="relative overflow-hidden rounded-[2rem] bg-[#302c26] px-7 py-14 text-center sm:px-12 sm:py-16">
        <div className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-[#bd593b]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-12 h-64 w-64 rounded-full bg-[#d4a66c]/15 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#e6a58e]">
            Your next favorite dish is waiting
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to find something delicious?
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#d0c8bd] sm:text-base">
            Explore the world of recipes and find inspiration for your next
            meal.
          </p>

          <Link
            href="/recipes"
            className="mt-8 inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#e6a58e] px-7 py-3.5 text-sm font-bold text-[#302c26] transition-all hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Browse recipes
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}