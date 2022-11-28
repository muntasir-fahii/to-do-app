import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-100 flex flex-col py-10">
      <Header />
      <AddTask />
      <TaskList />
      <Footer />
    </div>
  );
};

export default App;
