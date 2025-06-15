import React from 'react';

export function Navbar({ children }) {
  return <div className="flex items-center bg-white p-4 border-b">{children}</div>;
}

export function NavbarItem({ href, children, ...props }) {
  return (
    <a href={href} {...props} className="mx-2 text-gray-700 hover:text-black">
      {children}
    </a>
  );
}

export function NavbarDivider({ className = '' }) {
  return <div className={`h-6 w-px bg-gray-300 mx-2 ${className}`} />;
}

export function NavbarLabel({ children }) {
  return <span className="text-sm font-medium mx-1">{children}</span>;
}

export function NavbarSection({ children, className = '' }) {
  return <div className={`flex items-center ${className}`}>{children}</div>;
}

export function NavbarSpacer() {
  return <div className="flex-1" />;
}
