import React, { useEffect, useState } from "react";
import AdminCard from "../../../components/AdminCard";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  CircularProgress,
  Grid,
  TextField,
  MenuItem,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import BookIcon from "@mui/icons-material/Book";

const fields = ["id", "subjectName", "subjectCode", "year", "department"];

// Dummy data
const dummycourses = [
  {
    id: 1,
    subjectName: "Math-1",
    subjectCode: "MA101",
    year: 1,
    department: "EE",
  },
  {
    id: 2,
    subjectName: "Math-2",
    subjectCode: "MA102",
    year: 2,
    department: "CSE",
  },
];

const Courses = () => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [searchCriteria1, setSearchCriteria1] = useState("department");
  const [searchDetails1, setSearchDetails1] = useState("");
  const [searchCriteria2, setSearchCriteria2] = useState("year");
  const [searchDetails2, setSearchDetails2] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchcourses = async () => {
      setLoading(true);

      // Simulate an asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setCourses(dummycourses);
      setFilteredCourses(dummycourses);
      setLoading(false);
    };

    fetchcourses();
  }, []);

  const handleCriteriaChange1 = (event) => {
    setSearchCriteria1(event.target.value);
  };

  const handleDetailsChange1 = (event) => {
    setSearchDetails1(event.target.value);
  };

  const handleCriteriaChange2 = (event) => {
    setSearchCriteria2(event.target.value);
  };

  const handleDetailsChange2 = (event) => {
    setSearchDetails2(event.target.value);
  };

  useEffect(() => {
    setFilteredCourses(
      courses.filter(
        (course) =>
          String(course[searchCriteria1]).includes(searchDetails1) &&
          String(course[searchCriteria2]).includes(searchDetails2)
      )
    );
  }, [
    searchDetails1,
    searchCriteria1,
    searchDetails2,
    searchCriteria2,
    courses,
  ]);

  const handleCheckboxChange = (event, id) => {
    if (event.target.checked) {
      setSelectedCourses([...selectedCourses, id]);
    } else {
      setSelectedCourses(selectedCourses.filter((courseId) => courseId !== id));
    }
  };

  const removeSelectedCourses = () => {
    // Remove selected courses from your data
    setFilteredCourses(
      filteredCourses.filter((course) => !selectedCourses.includes(course.id))
    );
    setCourses(
      courses.filter((course) => !selectedCourses.includes(course.id))
    );
    setSelectedCourses([]);
    handleCloseDialog();
    handleOpenSnackbar();
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const StyledBox = styled(Box)(({ theme }) => ({
    height: "100%",
    width: "100%",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }));

  return (
    <AdminCard>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Remove Selected Courses"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to remove the selected courses?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={removeSelectedCourses} color="primary" autoFocus>
            Remove
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Courses removed successfully
        </Alert>
      </Snackbar>
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        alignItems={"center"}
        mb={5}
      >
        <BookIcon sx={{ fontSize: "30px", color: "blue" }} />
        <Typography
          variant="h4"
          color="white"
          sx={{ fontSize: "25px", fontWeight: "bolder", color: "blue" }}
        >
          Course
        </Typography>
      </Box>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                select
                label="Search Criteria 1"
                value={searchCriteria1}
                onChange={handleCriteriaChange1}
                variant="outlined"
                fullWidth
                sx={{ mb: 1 }}
              >
                <MenuItem value="department">Department</MenuItem>
                <MenuItem value="subjectName">Subject Name</MenuItem>
                <MenuItem value="year">Year</MenuItem>
                {/* Add more MenuItem components for other search criteria */}
              </TextField>
              <TextField
                label={`Enter ${searchCriteria1} here`}
                value={searchDetails1}
                onChange={handleDetailsChange1}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                select
                label="Search Criteria 2"
                value={searchCriteria2}
                onChange={handleCriteriaChange2}
                variant="outlined"
                fullWidth
                sx={{ mb: 1 }}
              >
                <MenuItem value="department">Department</MenuItem>
                <MenuItem value="subjectName">Subject Name</MenuItem>
                <MenuItem value="year">Year</MenuItem>
                {/* Add more MenuItem components for other search criteria */}
              </TextField>
              <TextField
                label={`Enter ${searchCriteria2} here`}
                value={searchDetails2}
                onChange={handleDetailsChange2}
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <StyledBox>
            <TableContainer
              sx={{
                margin: "15px 0px",
                border: "1px solid white",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Remove</TableCell>
                    {fields?.map((field) => (
                      <TableCell>
                        {field?.charAt(0)?.toUpperCase() + field?.slice(1)}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredCourses.map((course) => (
                    <TableRow key={course.id} style={{ cursor: "pointer" }}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedCourses.includes(course.id)}
                          onChange={(event) =>
                            handleCheckboxChange(event, course.id)
                          }
                        />
                      </TableCell>
                      {fields.map((field) => (
                        <TableCell>{course[field]}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              variant="contained"
              color="error"
              onClick={handleOpenDialog}
              disabled={selectedCourses.length === 0}
            >
              Remove
            </Button>
          </StyledBox>
        </Box>
      )}
    </AdminCard>
  );
};

export default Courses;
