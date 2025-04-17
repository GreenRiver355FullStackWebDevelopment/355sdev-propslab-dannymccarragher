const Recipe = ({name, ingredients, instructions}) => {

    return(
        <>
            <h1>{name}</h1>
            <ul>
                {ingredients}
            </ul>
            <ul>
                {instructions}
            </ul>
        </>
    )
}

export default Recipe;