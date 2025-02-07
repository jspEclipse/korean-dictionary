import WordList from "./components/WordList";
import Header from "./components/Header"
export default function Home() {
  return (
    <div className="min-w-full">
      <Header></Header>
      <WordList></WordList>
    </div>
  );
}
