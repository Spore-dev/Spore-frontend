import React from 'react';
import { HashRouter as ReactRouter, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MyParticles from './components/Particles';
import ComingSoon from './components/ComingSoon';
import Information from './components/Information';
import BSCBridge from './components/BSCBridge';
import NFT from "./components/NFT";

const Router = () => {
  return (
    <ReactRouter>
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <>
              <MyParticles />
              <Information />
            </>
          )}
        />
        <Route exact path='/nft' render={() => <NFT />} />
        <Route exact path='/bsc-bridge' render={() => <BSCBridge />} />
      </Switch>
      <Footer />
    </ReactRouter>
  );
};

export default Router;
