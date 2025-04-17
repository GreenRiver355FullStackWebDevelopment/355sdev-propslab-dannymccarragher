import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";

const Recipe = ({ name, ingredients, instructions }) => {
  return (
    <Card sx={{ margin: 10 }}>
      <CardHeader title={name}></CardHeader>
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
