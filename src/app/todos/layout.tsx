export default function TodosLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {children}
      </div>
    </section>
  )
}
