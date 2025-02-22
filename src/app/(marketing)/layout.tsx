export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{
          padding: '1rem',
          backgroundColor: 'lightblue'
        }}>
          Header
        </header>
        {children}
        <footer style={{
          padding: '1rem',
          backgroundColor: 'ghostwhite'
        }}>
          Footer
        </footer>
      </body>
    </html>
  )
}
