import React from 'react';
import {Navigation} from "./Navigation";
import {MobileNavigation} from "./MobileNavigation";

export const Header = () => {
  return (
      <header >
        <Navigation />
        <MobileNavigation />
      </header>
  );
};

