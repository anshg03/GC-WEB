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
  Pagination,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";

const Student = () => {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const studentsPerPage = 4; // Change this to the number of students you want per page

  const router = useRouter();

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      // Dummy data
      const dummyStudents = [
        { id: 1, name: "John Doe", rollNo: "001", contactNo: "1234567890" },
        { id: 2, name: "Jane Doe", rollNo: "002", contactNo: "0987654321" },
        { id: 1, name: "John Doe", rollNo: "001", contactNo: "1234567890" },
        { id: 2, name: "Jane Doe", rollNo: "002", contactNo: "0987654321" },
        { id: 1, name: "John Doe", rollNo: "001", contactNo: "1234567890" },
        { id: 2, name: "Jane Doe", rollNo: "002", contactNo: "0987654321" },
        { id: 1, name: "John Doe", rollNo: "001", contactNo: "1234567890" },
        { id: 2, name: "Lala Doe", rollNo: "002", contactNo: "0987654321" },
        { id: 1, name: "John Doe", rollNo: "001", contactNo: "1234567890" },
        { id: 2, name: "Jane Doe", rollNo: "002", contactNo: "0987654321" },
        { id: 1, name: "John Doe", rollNo: "001", contactNo: "1234567890" },
        // Add more students as needed
      ];

      // Simulate an asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStudents(dummyStudents);
      setLoading(false);
    };

    fetchStudents();
  }, []);

  const handleStudentClick = (student) => {
    router.push(`/admin/student/${student.id}`);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
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
      {loading ? (
        <CircularProgress />
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6">All Students</Typography>
          <StyledBox>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Roll No</TableCell>
                    <TableCell>Contact No</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {students
                    .slice((page - 1) * studentsPerPage, page * studentsPerPage)
                    .map((student) => (
                      <TableRow
                        onClick={() => handleStudentClick(student)}
                        key={student.id}
                        style={{ cursor: "pointer" }}
                      >
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.rollNo}</TableCell>
                        <TableCell>{student.contactNo}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </StyledBox>

          <Pagination
            count={Math.ceil(students.length / studentsPerPage)}
            page={page}
            onChange={handlePageChange}
          />
        </Box>
      )}
    </AdminCard>
  );
};

export default Student;
