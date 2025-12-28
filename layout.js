export const metadata = {
  title: 'Eshan Singh | Data Science & AI Portfolio',
  description: 'Master of Science in Data Science student at UMD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}