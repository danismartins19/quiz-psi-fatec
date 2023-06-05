import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ResultsType } from '../../Types/ResultsType';

export const ResultCard = ({title, description, careerTitle, careers}: ResultsType) => {
  return (
    <Card sx={{ minWidth: 275 , background: "#315dad", color: "white", marginBottom:"30px"}}>
      <CardContent>
        <Typography variant="h6" component="div" marginBottom={"10px"}>
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} style={{textAlign: 'justify'}} >
          {description}
        </Typography>
        <hr style={{marginBottom:"10px"}}></hr>
        <Typography variant="body1">
          {careerTitle}
        </Typography>
        <hr style={{margin:"10px 0"}}></hr>
        <Typography sx={{ mb: 1.5 }} style={{textAlign: 'justify'}} >
          {careers}
        </Typography>
      </CardContent>
    </Card>
  );
};
