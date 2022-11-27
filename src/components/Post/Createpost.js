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
import {
  FacebookRounded, GitHub, LinkedIn,
} from "@mui/icons-material";
import { addOrUpdateDocs, getUserDetails } from "../../utils/firebaseUtils";
import { useEffect } from "react";
import { Divider } from "material-ui";
import { Box } from "@mui/system";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "@ckeditor/ckeditor5-build-classic";
import Editor from "./Editor";

const Createpost = (props) => {
  const uid = props.uid;
  const [addData, setVal] = useState("");
  const [addedData, showData] = useState(0);
  const [title, Title] = useState("Enter the Title");
  const [image, setImage] = useState();
  const [tags, Tags] = useState("Enter Tags");
  const [url, Url] = useState("Enter Url");

  const onSelectFile = (e) => {
    if (e.target.fles && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setImage(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  const handleChange = (e, editor) =>{
    const data = editor.getData();
    setVal(data);
  }
  return (
    <React.Fragment>
     
      <Card  sx={{
    width: {
      sx: 5.0, // 100%
      sm: 1000,
      md: 1000,
    },
  }}>
      <Typography align="center" style={{ padding: "4px" }} variant="h3">
        Create a New Tutorial
      </Typography>
        <CardContent>
          <Grid container spacing={1} direction="column">
            <Grid mb={10}
              item
              xs={12}
              style={{ minWidth: "500px", paddingBottom: "10px" }}
            >
              <Grid container>
                <Grid sx={ {mt: '2px'}} item xs={12}>
                  <TextField
                    required
                    id="user-name"
                    className="w-100"
                    label="Title"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={0.5} />
                
              </Grid>
            </Grid>
            <Button>
              <Box mt={2} mb={2} m={1}>
                <label
                  for="file-upload"
                  class="custom-file-upload"
                  style={{
                    display: "block",
                    width: "200%",
                    
                    color: "white",
                    backgroundColor: "royalBlue",
                  }}
                >
                  upload Image
                </label>
                <input
                  id="file-upload"
                  fullWidth
                  style={{ display: "none" }}
                  accept="image/*"
                  type="file"
                  onChange={onSelectFile}
                />
              </Box>
            </Button>
            <Grid>
                  <Typography align="left" style={{ padding: "4px", }} variant="h6">
                      Description
                  </Typography> 
                  <Editor />
            </Grid>
            <Grid item mt={10} xs={12} style={{ paddingBottom: "10px" }}>
              <TextField
                id="tags"
                className="w-100"
                label="Tags"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} style={{ paddingBottom: "10px" }}>
              <TextField
                id="Titleurl"
                className="w-100"
                label="Titleurl"
              />
            </Grid>
            
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default Createpost;
