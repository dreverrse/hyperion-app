export function FaceIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93c-2.48.47-4.7-1.12-5.11-3.49-.43-2.52 1.25-4.8 3.77-5.22.45-.08.9-.08 1.34-.02v8.73zm1.5-3.43V6.3c1.78.68 3 2.45 3 4.5 0 .97-.3 1.87-.8 2.62-.64-.47-1.4-.8-2.2-.92z" />
    </svg>
  );
}

export function SearchIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7" />
      <line strokeLinecap="round" x1="16.5" x2="21" y1="16.5" y2="21" />
    </svg>
  );
}

export function BellIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  );
}

export function UserIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}

export function ArrowUpRight({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PaypalIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.82.85 4.832-.01.047-.022.093-.035.138-.89 4.02-3.645 6.07-7.822 6.07H9.288l-1.328 7.64c-.066.425-.433.746-.884.746v.1z" />
    </svg>
  );
}

export function SpotifyIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10A10 10 0 0012 2zm4.586 14.424a.623.623 0 01-.858.207c-2.35-1.435-5.308-1.758-8.794-.963a.625.625 0 01-.277-1.22c3.813-.872 7.08-.507 9.722 1.118a.625.625 0 01.207.858z" />
    </svg>
  );
}

export function ChevronLeft({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

export function Sliders({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewBox="0 0 24 24">
      <line x1="4" x2="20" y1="7" y2="7" />
      <line x1="4" x2="20" y1="17" y2="17" />
      <circle cx="10" cy="7" fill="#1e1e22" r="2.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="14" cy="17" fill="#1e1e22" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function Share({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24">
      <line x1="7" x2="17" y1="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export function Plus({ className = 'w-4 h-4', strokeWidth = 2 }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
      <line strokeLinecap="round" x1="12" x2="12" y1="5" y2="19" />
      <line strokeLinecap="round" x1="5" x2="19" y1="12" y2="12" />
    </svg>
  );
}

export function Dots({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="6" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="18" r="2" />
    </svg>
  );
}

export function ChartIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect height="14" rx="3" strokeLinecap="round" strokeLinejoin="round" width="18" x="3" y="5" />
      <path d="M7 15l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChartPlusIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect height="14" rx="3" strokeLinecap="round" strokeLinejoin="round" width="18" x="3" y="5" />
      <path d="M12 9v6m-3-3h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChartAxisIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewBox="0 0 24 24">
      <line x1="4" x2="4" y1="21" y2="14" />
      <line x1="4" x2="4" y1="10" y2="3" />
      <line x1="12" x2="12" y1="21" y2="12" />
      <line x1="12" x2="12" y1="8" y2="3" />
      <line x1="20" x2="20" y1="21" y2="16" />
      <line x1="20" x2="20" y1="12" y2="3" />
      <line x1="1" x2="7" y1="14" y2="14" />
      <line x1="9" x2="15" y1="8" y2="8" />
      <line x1="17" x2="23" y1="16" y2="16" />
    </svg>
  );
}

export function NavHome({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
      <rect height="7" rx="1.5" width="7" x="3" y="3" />
      <rect height="7" rx="1.5" width="7" x="14" y="3" />
      <rect height="7" rx="1.5" width="7" x="14" y="14" />
      <rect height="7" rx="1.5" width="7" x="3" y="14" />
    </svg>
  );
}

export function NavWallet({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
      <rect height="14" rx="3" width="20" x="2" y="5" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

export function NavChart({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}