import React from 'react';

export function StackedLayout({ navbar, sidebar, children }) {
  return (
    <div className="flex h-screen">
      {sidebar}
      <div className="flex-1 flex flex-col">
        {navbar}
        <main className="flex-1 overflow-y-auto p-4 bg-white">{children}</main>
      </div>
    </div>
  );
}
