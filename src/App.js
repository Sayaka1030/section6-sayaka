import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "じゃけぇ",
  Image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "12345@example.com",
  phone: "090-1111-22222",
  company: {
    name: "株式会社",
  },
  website: "https://google.com",
};

export default function App() {
  return <Router />;
}
