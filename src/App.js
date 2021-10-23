import ContactList from "components/ContactList/ContactList";
import { AppContextProvider } from "store/context/context";

function App() {
  return (
    <AppContextProvider>
      <ContactList />
    </AppContextProvider>
  );
}

export default App;
