import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden p-2 md:my-4">
      <header className="container">
        <Navbar />
      </header>
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
}
