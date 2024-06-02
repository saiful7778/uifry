import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative mb-4 min-h-screen w-full overflow-x-hidden p-2">
      <header className="container">
        <Navbar />
      </header>
      <main className="container mt-16">{children}</main>
      <Footer />
    </div>
  );
}
