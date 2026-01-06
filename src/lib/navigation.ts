'use client';

// Navigation helper for Next.js
// This provides a simple navigateTo function that works with Next.js

export const navigateTo = (path: string) => {
  if (typeof window !== 'undefined') {
    window.location.href = path;
  }
};
