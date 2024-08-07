import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { CardActionArea, CardActions } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ProfileData } from "../../../constants";
import { blue } from "@mui/material/colors";
import useTheme from '../../../constants/useTheme';

export const Profile = () => {
  const handleLinkedInClick = (linkedinURL) => {
    window.open(linkedinURL, '_blank');
  };

  const { theme } = useTheme();

  return (
    <div style={{ background: theme.background }} className="mx-auto flex justify-center pt-3">
      <div className="mb-5 grid grid-cols-1 gap-5 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3">
        {ProfileData.map((item, index) => (
          <Card style={{ background: theme.backgroundAcordion }} className="" sx={{ maxWidth: 270, maxHeight: 400 }} key={index}>
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ height: "280px" }}
                image={item.backgroundImage}
                alt="Profile"
                className=""
              />
              <CardContent className=" h-[60px] flex flex-col justify-center">
                <Typography
                  style={{ color: theme.textSecondary }}
                  lineHeight="1"
                  fontWeight="bold"
                  fontSize="20px"
                  gutterBottom
                  component="div"
                >
                  {item.name}
                </Typography>
                <Typography
                  style={{ color: theme.textPrimary }}
                  lineHeight="1"
                  fontSize="13px"
                  color="text.secondary"
                >
                  {item.profile}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="flex pt-0 justify-end h-[33px]">
              <IconButton
                size="medium"
                aria-label="Linkedin"
                onClick={() => handleLinkedInClick(item.linkedin)}
                sx={{ color: blue[700] }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};
