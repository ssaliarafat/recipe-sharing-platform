import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#eae3d9] bg-[#faf7f2]/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="RecipeShare home"
          className="flex shrink-0 items-center gap-2.5 rounded-sm"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#bd593b] text-lg text-white">
            R
          </span>

          <span className="text-xl font-bold tracking-tight text-[#28251f]">
            RecipeShare<span className="text-[#bd593b]">.</span>
          </span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-2 sm:gap-5">
            <li>
              <Link
                href="/"
                className="rounded-md px-3 py-2 text-sm font-medium text-[#514b43] transition-colors hover:text-[#bd593b]"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/recipes"
                className="inline-flex items-center justify-center rounded-full bg-[#bd593b] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#98432d] sm:px-5"
              >
                Explore recipes
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}