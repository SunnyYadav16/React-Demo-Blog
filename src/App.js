import Home from "./Home";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CreateBlog from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <header className="App-header">
            <div className="content">
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/create" element={<CreateBlog/>} />
                <Route path="/blogs/:id" element={<BlogDetails/>} />
                <Route path="*" element={<NotFound/>} />
              </Routes>
              {/*<Routes>*/}
              {/*  <Route exact path="/create" element={<CreateBlog/>} />*/}
              {/*</Routes>*/}
            </div>
          </header>
        </div>
      </Router>
  );
}

export default App;
