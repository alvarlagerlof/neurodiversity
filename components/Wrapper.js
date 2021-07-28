import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PlausibleProvider } from "../components/Plausible";

export default function Wrapper({ children }) {
  return (
    <PlausibleProvider>
      <div className="flex flex-col min-h-screen bg-secondary">
        <div className="flex-1 flex flex-col items-center py-8 px-4">
          <Navbar />

          <main className="max-w-3xl w-full space-y-12">{children}</main>

          <Footer />
        </div>
      </div>
    </PlausibleProvider>
  );
}
