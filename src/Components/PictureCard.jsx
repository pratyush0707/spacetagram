import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function PictureCard(props) {


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Card sx={{ maxWidth: 750 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={props.cardData.url}
            alt={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.cardData.title}
            </Typography>
            <Typography variant="body1">
                Date: {props.cardData.date}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {props.cardData.explanation}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}