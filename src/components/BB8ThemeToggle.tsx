"use client";

import React from 'react';
import { useTheme } from './ThemeProvider';

export default function BB8ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="bb8-toggle" title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}>
      <input 
        className="bb8-toggle__checkbox" 
        type="checkbox" 
        checked={theme === 'dark'}
        onChange={toggleTheme}
        aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
      />
      <div className="bb8-toggle__container">
        <div className="bb8-toggle__scenery">
          <div className="bb8-toggle__star"></div>
          <div className="bb8-toggle__star"></div>
          <div className="bb8-toggle__star"></div>
          <div className="bb8-toggle__star"></div>
          <div className="bb8-toggle__star"></div>
          <div className="bb8-toggle__star"></div>
          <div className="bb8-toggle__star"></div>
          <div className="tatto-1"></div>
          <div className="tatto-2"></div>
          <div className="gomrassen"></div>
          <div className="hermes"></div>
          <div className="chenini"></div>
          <div className="bb8-toggle__cloud"></div>
          <div className="bb8-toggle__cloud"></div>
          <div className="bb8-toggle__cloud"></div>
        </div>
        <div className="bb8">
          <div className="bb8__head-container">
            <div className="bb8__antenna"></div>
            <div className="bb8__antenna"></div>
            <div className="bb8__head"></div>
          </div>
          <div className="bb8__body"></div>
        </div>
        <div className="artificial__hidden">
          <div className="bb8__shadow"></div>
        </div>
      </div>
    </label>
  );
}
