import {
  Card,
  CardContent,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { FacebookRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { addOrUpdateDocs, getUserDetails } from "../../utils/firebaseUtils";
import { useEffect } from "react";
import { Divider } from "material-ui";
import { Box } from "@mui/system";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "@ckeditor/ckeditor5-build-classic";
import Editor from "./Editor";
import { async } from "@firebase/util";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Createpost = (props) => {
  const uid = props.uid;
  const navigate = useNavigate();
  const createdby = items;
  const [userId, setUserId] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [title, setTitleby] = useState("");
  const [Description, setDescription] = useState();
  const [imgurl, setImgurl] = useState("");
  const [tags, setTags] = useState("Enter Tags");
  const [user, loading, error] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const [createddat, setCreateddat] = useState(
    Timestamp.now().toDate().toString()
  );
  const navtopost = () => {
    navigate('/displaytutorial');
  }
  const handleResult = () => {
    
     handleSubmit();
    
  }
  useEffect(() => {
  
   
    })
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "Tutorials"), {
      title,
      createdby,
      createddat,
      Description,
      imgurl,
      tags
    }).then(() => { alert("Inserted data!!"); }).catch(err=>{alert(err.message)})
  };

  const onSelectFile = (e) => {
    if (e.target.fles && e.target.files.length > 0) {
      const reader = new FileReader();
      //reader.addEventListener("load", () => setImage(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <React.Fragment>
      <Card
        sx={{
          width: {
            sx: 5.0, // 100%
            sm: 1000,
            md: 1000,
          },
        }}
      >
        <Typography align="center" style={{ padding: "4px" }} variant="h3">
          Create a New Tutorial
        </Typography>
        <CardContent>
          <Grid container spacing={1} direction="column">
            <Grid item mt={6} xs={12}>
              <TextField
                required
                id="title"
                className="w-100"
                label="Title"
                variant="outlined"
                onChange={(e) => {
                  setTitleby(e.target.value);
                }}
              />
            </Grid>
            <Grid item mt={6} xs={12} style={{ padding: "4px" }}>
              <TextField
                id="description"
                className="w-100"
                label="Description"
                variant="outlined"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Grid>
            <Grid item mt={6} xs={12}>
              <Typography align="left" style={{ padding: "4px" }} variant="h5">
                Description:
              </Typography>
            </Grid>
            <Grid item mt={6} xs={12}>
              <TextField
                id="imageurl"
                className="w-100"
                label="Image URL"
                variant="outlined"
                onChange={(e) => {
                  setImgurl(e.target.value)
                }}
              />
            </Grid>
            <Grid item mt={6} xs={12} style={{ padding: "4px" }}>
              <TextField
                id="tags"
                className="w-100"
                label="Tags"
                variant="outlined"
                onChange={(e) => {
                  setTags(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} style={{ paddingBottom: "10px" }}>
              <Button size="medium" variant="contained" onClick={() => { handleResult();  navtopost()}}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default Createpost;
