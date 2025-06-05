import { Card, CardContent, CardHeader, Typography } from "@mui/material";

const Recipe = ({ name, ingredients, instructions }) => {
  return (
    <Card sx={{ margin: 10 }} variant="outlined">
      <CardHeader title={name} color='red'></CardHeader>
      <CardContent>
        {ingredients}
      </CardContent>
      <CardContent>
        {instructions}
      </CardContent>
    </Card>
  );
};

export default Recipe;
