// import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import MySidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/index";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
// import Invoices from "./scenes/invoices";
// import Form from "./scenes/form";
// import Bar from "./scenes/bar";
// import Pie from "./scenes/pie";
// import Line from "./scenes/line";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";

function App() {
  const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
         <CssBaseline />
        <div className="app">
          <MySidebar />
          <main className="content">
            <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} /> 
                <Route path="/contacts" element={<Contacts />} />
                {/* <Route path="/invoices" element={<Invoices></Invoices>} /> */}
                {/* <Route path="/form" element={<Form></Form>} /> */}
                {/* <Route path="/bar" element={<Bar></Bar>} /> */}
                {/* <Route path="/pie" element={<Pie></Pie>} /> */}
                {/* <Route path="/line" element={<Line></Line>} /> */}
                {/* <Route path="/faq" element={<FAQ></FAQ>} /> */}
                {/* <Route path="/geography" element={<Geography></Geography>} /> */}
                {/* <Route path="/calendar" element={<Calendar></Calendar>} />  */}
              </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
