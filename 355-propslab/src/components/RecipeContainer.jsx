import Recipe from "./Recipe.jsx";

const RecipeContainer = ({recipes}) => {
    return(
        <>
    {recipes.map((recipe, index ) => <Recipe key={`${index}${recipe.name}`} name={recipe.name} ingredients={recipe.ingredients} instructions={recipe.instructions}/>)}
        </>
    )
}

export default RecipeContainer;