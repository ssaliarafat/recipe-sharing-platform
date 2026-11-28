import { notFound } from "next/navigation";
import type { Recipe } from "@/lib/types";

const recipes: Recipe[] = [];

export default async function RecipeDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const recipe = recipes.find((item) => item.id === id);

    if (!recipe || recipe.status !== "published") {
        notFound();
    }

    return (
        <main className="mx-auto max-w-3xl px-6 py-12">
            <p className="mb-2 text-sm font-medium text-[#bd593b]">
                {recipe.category}
            </p>

            <h1 className="mb-4 text-4xl font-bold">{recipe.name}</h1>

            <p className="mb-6 text-[#777168]">{recipe.description}</p>

            <p className="mb-8 text-sm">
                By {recipe.authorName} · {recipe.cookingTime} minutes
            </p>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">Ingredients</h2>

                <ul className="list-disc space-y-2 pl-6">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="mb-4 text-2xl font-semibold">Instructions</h2>

                <ol className="list-decimal space-y-3 pl-6">
                    {recipe.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ol>
            </section>
        </main>
    );
}