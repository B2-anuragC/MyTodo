import './App.css';
import Header from './components/header';
import Task from './components/task';

function App() {
  // const [count, setCount] = useState(0)
  // const changeColorOnClick = async () => {
  //   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  //   chrome.scripting.executeScript({
  //     target: { tabId: tab.id! },
  //     func: () => {
  //       document.body.style.backgroundColor = 'green';
  //     },
  //   });
  // };
  return (
    <>
      <Header></Header>
      <Task></Task>
    </>
  );
}
export default App;
