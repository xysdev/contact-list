import ContactList from "components/ContactList/ContactList";
import { AppContextProvider } from "store/context/context";
import { ConfigureStore } from "store/context/store";
import { rootReducer } from "store/reducers/root";

function App() {
  const store = ConfigureStore(rootReducer);
  return (
    <AppContextProvider store={store}>
      <ContactList />
    </AppContextProvider>
  );
}

export default App;
