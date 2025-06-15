import React from 'react';

export function Sidebar({ children }) {
  return <aside className="w-64 bg-gray-50 border-r min-h-screen">{children}</aside>;
}

export function SidebarHeader({ children }) {
  return <div className="p-4 border-b">{children}</div>;
}

export function SidebarBody({ children }) {
  return <div className="p-4">{children}</div>;
}

export function SidebarSection({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function SidebarItem({ href, children }) {
  return (
    <a href={href} className="block px-4 py-2 hover:bg-gray-100 rounded">
      {children}
    </a>
  );
}

export function SidebarLabel({ children }) {
  return <span className="ml-2 text-sm font-medium">{children}</span>;
}
