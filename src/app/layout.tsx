// src/app/layout.tsx

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio Tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
