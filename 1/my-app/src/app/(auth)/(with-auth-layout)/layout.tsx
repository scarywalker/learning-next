export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>inner layout</h2>
      {children}
    </>
  );
}
