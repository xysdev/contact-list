import ContactList from "components/ContactList/ContactList";
import { Provider } from "store/context/Provider";

function App() {
  return (
    <Provider>
      <ContactList />
    </Provider>
  );
}

export default App;
