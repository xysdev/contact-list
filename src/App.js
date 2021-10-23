import ContactList from "components/ContactList/ContactList";
import { AppContextProvider } from "context/context";
import { ConfigureStore } from "context/store";
import { rootReducer } from "reducers/root";

function App() {
  const store = ConfigureStore(rootReducer);
  return (
    <AppContextProvider store={store}>
      <ContactList />
    </AppContextProvider>
  );
}

export default App;
