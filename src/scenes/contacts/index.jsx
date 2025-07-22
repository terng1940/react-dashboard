import { Box, TextField } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockdata";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import React, { useState, useMemo } from "react";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [filterText, setFilterText] = useState("");

  const filteredRows = useMemo(() => {
    if (!filterText) return mockDataContacts;
    const lowercasedFilter = filterText.toLowerCase();

    return mockDataContacts.filter(
      (row) =>
        row.name.toLowerCase().startsWith(lowercasedFilter) ||
        row.email.toLowerCase().startsWith(lowercasedFilter) ||
        row.phone.toLowerCase().startsWith(lowercasedFilter) ||
        row.address.toLowerCase().startsWith(lowercasedFilter) ||
        row.city.toLowerCase().startsWith(lowercasedFilter) ||
        row.zipCode.toString().startsWith(lowercasedFilter)
    );
  }, [filterText]);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />

      <Box m="10px 0">
        <TextField
          label="Search anything (ID, Name, Email, etc.)"
          variant="outlined"
          size="small"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          sx={{
            width: "300px",
            backgroundColor: colors.primary[400], // หรือ #1e1e1e
            input: { color: colors.grey[100] },
            "& label": {
              color: colors.grey[300],
            },
            "& label.Mui-focused": {
              color: colors.greenAccent[400], // สี label ตอน active
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: colors.grey[300],
              },
              "&:hover fieldset": {
                borderColor: colors.greenAccent[400],
              },
              "&.Mui-focused fieldset": {
                borderColor: colors.greenAccent[300],
              },
            },
          }}
        />
      </Box>

      <Box
        m="40px 0 0 0"
        height="70vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={filteredRows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
