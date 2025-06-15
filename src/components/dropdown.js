import React from 'react';

export function Dropdown({ children }) {
  return <div className="relative inline-block">{children}</div>;
}

export function DropdownButton({ as: Component = 'button', children, ...props }) {
  return <Component {...props}>{children}</Component>;
}

export function DropdownMenu({ children, className = '', anchor }) {
  return (
    <div className={`absolute z-10 bg-white border shadow-lg mt-2 rounded ${className}`}>
      {children}
    </div>
  );
}

export function DropdownItem({ href, children }) {
  return (
    <a href={href} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
      {children}
    </a>
  );
}

export function DropdownDivider() {
  return <div className="border-t my-1" />;
}

export function DropdownLabel({ children }) {
  return <span className="text-sm">{children}</span>;
}
