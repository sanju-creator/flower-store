// src/components/avatar.js
import React from 'react';

export function Avatar({ src, initials = '', className = '', square = false }) {
  return src ? (
    <img
      src={src}
      alt="Avatar"
      className={`w-8 h-8 rounded-${square ? 'md' : 'full'} ${className}`}
    />
  ) : (
    <div
      className={`w-8 h-8 flex items-center justify-center text-sm bg-gray-400 text-white rounded-${square ? 'md' : 'full'} ${className}`}
    >
      {initials}
    </div>
  );
}
