import React from 'react';
import { MainPage } from "../MainPage/MainPage";
import "./App.scss";
import {useCounter} from "../hooks/useCounter";

export const App = () => {
  useCounter();
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}
