import { Box, TextField, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockdata";
import Header from "../../components/Header";
import React, { useState, useMemo } from "react";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [filterText, setFilterText] = useState("");

  const filteredRows = useMemo(() => {
    if (!filterText) return mockDataInvoices;
    const lowercasedFilter = filterText.toLowerCase();

    return mockDataInvoices.filter(
      (row) =>
        row.name.toLowerCase().startsWith(lowercasedFilter) ||
        row.email.toLowerCase().startsWith(lowercasedFilter) ||
        row.cost.toLowerCase().startsWith(lowercasedFilter) ||
        row.phone.toLowerCase().startsWith(lowercasedFilter) ||
        row.date.toLowerCase().startsWith(lowercasedFilter)
    );
  }, [filterText]);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoices" />

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
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={filteredRows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
