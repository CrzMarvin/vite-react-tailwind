// following is from tailwindcss https://www.tailwindcss.cn/docs/dark-mode#-3
// // On page load or when changing themes, best to add inline in `head` to avoid FOUC
// // need to set tailwindcss config to " darkMode: 'class' "
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   document.querySelector('html').classList.add('dark') // tailwind will use html class
// } else {
//   document.querySelector('html').classList.remove('dark') // tailwind will use html class
// }

// // Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')

/**
 * Based on https://github.com/system-ui/theme-ui/blob/9656dba5f22205427d4c36dd9181b6a24b85dd91/packages/theme-ui/src/color-modes.js
 */
 import React, { useState, useEffect, createContext } from 'react';

 const STORAGE_KEY = 'DI-color-mode';
 
 const storage = {
   get: init => window.localStorage.getItem(STORAGE_KEY) || init,
   set: value => window.localStorage.setItem(STORAGE_KEY, value),
 };
 
 const getMediaQuery = () => {
   const darkQuery = '(prefers-color-scheme: dark)';
   const mql = window.matchMedia ? window.matchMedia(darkQuery) : {};
   const dark = mql.media === darkQuery;
   return dark && mql.matches;
 };
 
 export const useColorMode = () => {
   const [mode, setMode] = useState('light');
 
   /* eslint-disable react-hooks/exhaustive-deps */
   useEffect(() => {
     // initialize
     const stored = storage.get();
     const dark = getMediaQuery();
     if (!stored && dark) return setModeWithSideEffects('dark');
     if (!stored || stored === mode) return;
     setModeWithSideEffects(stored);
   }, []);
   /* eslint-enable react-hooks/exhaustive-deps */
 
   const setModeWithSideEffects = () => {
     setMode(state => {
       const nextMode = state === 'light' ? 'dark' : 'light';
       document.body.classList.remove('varun-ca-' + state);
 
       document.body.classList.add('varun-ca-' + nextMode);
       storage.set(nextMode);
 
       return nextMode;
     });
   };
 
   return [mode, setModeWithSideEffects];
 };
 
 export const InitializeColorMode = () => {
  (function() { try {
    var mode = localStorage.getItem(STORAGE_KEY);
    if (!mode) return
    document.body.classList.add('varun-ca-' + mode);
  } catch (e) {} })();
 }
 
 export const ColorModeContext = createContext({
   mode: 'light',
   setColorMode: () => {},
 });