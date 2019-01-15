import React from 'react';

export default function UXPinWrapper({ children }) {
  let icons = document.createElement('link');
  icons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
  icons.setAttribute('rel', 'stylesheet');
  document.head.appendChild(icons);

  let roboto = document.createElement('link');
  roboto.setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto:300,400,500');
  roboto.setAttribute('rel', 'stylesheet');
  document.head.appendChild(roboto);

  return children;
}
