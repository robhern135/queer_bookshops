import { Box, Typography, Card, CardContent } from "@material-ui/core"

import LocationOnIcon from "@material-ui/icons/LocationOn"
import WebIcon from "@mui/icons-material/Web"
import useStyles from "./styles"

import { decodeTitle } from "../../functions"

const PlaceDetails = ({ place, refProp, selected }) => {
  const classes = useStyles()

  const { id, acf, _embedded } = place
  const title = place.title.rendered

  const { address, website, position } = acf

  return (
    <Card elevation={6} id={id} className={classes.cardContent}>
      <CardContent
        style={{
          padding: 0,
          paddingBottom: 5,
          marginBottom: 20,
          width: "100%",
        }}
      >
        <div
          style={{
            marginTop: 20,
            marginBottom: 0,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <div className="list-image-container">
            <img
              className="image"
              src={_embedded["wp:featuredmedia"][0].source_url}
              alt={decodeTitle(title)}
            />
          </div>
          <Typography gutterBottom variant={"h5"}>
            {decodeTitle(title)}
          </Typography>
          {address && (
            <Box
              style={{
                marginBottom: 10,
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <LocationOnIcon />
              <Typography
                variant="subtitle2"
                style={{ marginLeft: 10, display: "inline-flex" }}
              >
                {address}
              </Typography>
            </Box>
          )}
          {/* {tel && (
            <Box
              style={{
                marginBottom: 10,
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <PhoneIcon />
              <Typography
                style={{ marginLeft: 10, display: "inline-flex" }}
                variant="subtitle2"
              >
                {tel}
              </Typography>
            </Box>
          )} */}
          {website && (
            <Box
              style={{
                marginBottom: 10,
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <a
                className="go-to-link"
                href={website}
                rel="noreferrer"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "#010101",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <WebIcon />
                <Typography
                  style={{
                    marginLeft: 10,
                    display: "inline-flex",
                    lineHeight: 1,
                  }}
                  variant="subtitle2"
                >
                  {website}
                </Typography>
              </a>
            </Box>
          )}
          {/* <Box
            style={{
              marginBottom: 10,
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {open_now ? <MeetingRoomIcon /> : <NoMeetingRoomIcon />}
            <Typography
              style={{ marginLeft: 10, display: "inline-flex" }}
              variant="subtitle2"
            >
              {open_now ? "Open Now" : "Closed Now"}
            </Typography>
          </Box> */}

          {/* <Box display="flex">
            <Typography variant="h6">Services</Typography>
          </Box>
          <Box display="flex" style={{ flexWrap: "wrap" }}>
            {categories
              ?.sort((a, b) => a.localeCompare(b))
              .map((service, idx) => {
                let theService = service.replace("gcid:", "")
                let theServiceTitle = theService.replaceAll("_", " ")
                return (
                  <Chip
                    style={{ textTransform: "capitalize" }}
                    key={`${theService}-${idx}`}
                    size="small"
                    label={theServiceTitle}
                    className={classes.chip}
                  />
                )
              })}
          </Box> */}
        </div>
        {/* <CardActions>
          <Link
            to={{ pathname: `/location/${id}` }}
            style={{
              textDecoration: "none",
              marginLeft: 10,
              textAlign: "center",
              borderRadius: 20,
            }}
          >
            <button
              style={{
                textAlign: "center",
                color: "#1d1d1d",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 13,
                paddingBottom: 5,
                borderRadius: 40,
                width: "100%",
                border: 0,
                fontSize: 15,
                lineHeight: 1,
              }}
              size="small"
              color="primary"
            >
              View Location
            </button>
          </Link>
        </CardActions> */}
      </CardContent>
    </Card>
  )
}
export default PlaceDetails
