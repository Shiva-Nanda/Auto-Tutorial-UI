import React, { useEffect, useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Grid, Button, CardContent, Typography, Card, TextField } from "@mui/material";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { auth, db } from "../../firebase";
import SideBar from "../Homepage/SideBar/sidelist";
import { useAuthState } from "react-firebase-hooks/auth";
import { getOrgDetails, getUserDetails } from "../../utils/firebaseUtils";

const Editor = (props) => {
    const [description, setDescription] = useState("");
    const [addedData, showData] = useState(0);
    const [createdby, setCreatedBy] = useState("");
    const [title, setTitleby] = useState("");
    const [imgurl, setImgurl] = useState("");
    const [tags, setTags] = useState("Enter Tags");
    const [orgName, setOrgName] = useState("");
    const [user, authLoading, authError] = useAuthState(auth);
    const [createddat, setCreateddat] = useState(
        Timestamp.now().toDate().toString()
    );
    useEffect(() => {
      const loadDetails = async () => {
        const details = await getUserDetails(user.uid);
        const orgDetails = await getOrgDetails(user.uid);
        setCreatedBy(details.data.userName);
        setOrgName(orgDetails.data.orgName);
      }
      loadDetails();
    }, [])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "Tutorials"), {
            title,
            uid: user.uid,
            createdby,
            orgName,
            createddat,
            description,
            imgurl,
            tags,
        })
            .then(() => {
                alert("Inserted data!!");
            })
            .catch((err) => {
                alert(err.message);
            });

    };
    const handleChange = (e, editor) => {
        const data = editor.getData();
        setDescription(data);
        
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
                        <Grid item mt={6} xs={12}>
                            <Typography align="center" style={{ padding: "4px" }} variant="h5">
                                Description
                            </Typography>
                            <CKEditor
                                editor={ClassicEditor}
                                data={description}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item mt={6} xs={12}>
                            <TextField
                                id="imageurl"
                                className="w-100"
                                label="Image URL"
                                variant="outlined"
                                onChange={(e) => {
                                    setImgurl(e.target.value);
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
                            <Button size="medium" variant="contained" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            </React.Fragment>

    );
};

export default Editor;
