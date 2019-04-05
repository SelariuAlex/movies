import React from 'react';
import './Footer.css';

export default () => {
  return (
    <footer className="footer">
      Copyright &copy; {new Date().getFullYear()} Șelariu Alexandru
    </footer>
  );
};
