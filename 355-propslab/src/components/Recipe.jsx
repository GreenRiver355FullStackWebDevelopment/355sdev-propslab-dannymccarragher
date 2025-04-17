import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import Typography from "@mui/material";

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
