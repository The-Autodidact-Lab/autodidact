"use client";

export function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
    >
      Back to top
    </button>
  );
}

