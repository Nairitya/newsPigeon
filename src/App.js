import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  pageSize = 12;
  country = "in";
  headlineType = "top-headlines";
  apiKey = process.env.REACT_APP_API_KEY;

  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      progress: 0,
    }
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  darkModeHandler = () => {
    if (this.state.darkMode) {
      this.setState({ darkMode: false })
      document.body.style.backgroundColor = "#f6f7fb";
      document.body.style.color = "#121212";

    }
    else {
      this.setState({ darkMode: true })
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "rgba(255,255,255,.8)";

    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar darkModeHandler={this.darkModeHandler} mode={this.state.darkMode} />
          <LoadingBar
            color='#4687ff'
            progress={this.state.progress}
            height={4}
            shadow={false}

          />
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.darkMode} key="home" pageSize={this.pageSize} country={this.country} headlineType={this.headlineType} category="general" />} />
            <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.darkMode} key="business" pageSize={this.pageSize} country={this.country} headlineType={this.headlineType} category="business" />} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.darkMode} key="entertainment" pageSize={this.pageSize} country={this.country} headlineType={this.headlineType} category="entertainment" />} />
            <Route exact path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.darkMode} key="general" pageSize={this.pageSize} country={this.country} headlineType={this.headlineType} category="general" />} />
            <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.darkMode} key="health" pageSize={this.pageSize} country={this.country} headlineType={this.headlineType} category="health" />} />
            <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.darkMode} key="science" pageSize={this.pageSize} country={this.country} headlineType={this.headlineType} category="science" />} />
            <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.darkMode} key="sports" pageSize={this.pageSize} country={this.country} headlineType={this.headlineType} category="sports" />} />
            <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.darkMode} key="technology" pageSize={this.pageSize} country={this.country} headlineType={this.headlineType} category="technology" />} />
          </Routes>


        </div>
      </BrowserRouter>);
  }
}
