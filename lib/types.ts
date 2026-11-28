export type RecipeStatus = "draft" | "published";

export interface Recipe {
    id: string;
    authorName: string;
    name: string;
    description: string;
    category: string;
    ingredients: string[];
    instructions: string[];
    cookingTime: number;
    status: RecipeStatus;
}