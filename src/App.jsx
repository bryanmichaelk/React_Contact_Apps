import "./App.css";
import ContactInput from "./components/containers/ContactInput";
import ContactList from "./components/containers/ContactList";
import Input from "./components/form/Input";

function App() {
  return (
    <main className="main__container">
      <ContactInput />
      <ContactList />
    </main>
  );
}

export default App;
