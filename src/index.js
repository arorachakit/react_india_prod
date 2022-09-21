import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {storyblokInit, apiPlugin} from '@storyblok/react'

import Feature from "./components/Feature";
import Grid from "./components/Grid";
import Page from "./components/Page";
import Teaser from "./components/Teaser";
import Hero from "./components/Hero";
import AllArticles from "./components/AllArticles";
import Article from "./components/Article";
import PopularArticles from "./components/PopularArticles";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  hero: Hero,
  "all-articles": AllArticles,
  article: Article,
  "popular-articles": PopularArticles,
};

storyblokInit({
  accessToken: 'WXPGqyuzpZLrYWFMR2gm3Att',
  use: [apiPlugin],
  components
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


