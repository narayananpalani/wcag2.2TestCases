import { useState, createContext } from "react";
import ToDoListWithToolbar from "./components/todo/ToDoListWithToolbar";
import { TodosDataProvider } from "./contexts/ToDosDataContext";
import ToDoManager from "./components/todo/ToDoManager";
import Layout from "./components/layout/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";

export const ThemeContext=  createContext({});

const App = () => {
  const [displayStatus, setDisplayStatus] = useState("all"); // all, pending, completed
  const [important, setImportant] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme(!darkTheme);
  const value= {
    darkTheme: darkTheme,
    toggleTheme: toggleTheme
  }
  return (
    <TodosDataProvider>
      <ThemeProvider>
      <Layout>
        <ToDoListWithToolbar
          displayStatus={displayStatus} setDisplayStatus={setDisplayStatus}
          import={important} setImportant={setImportant}
          searchText={searchText} setSearchText={setSearchText}
        >
          <ToDoManager
            displayStatus={displayStatus} important={important}
          />
        </ToDoListWithToolbar>
      </Layout>
      </ThemeProvider>
    </TodosDataProvider>
  );
};
export default App;
