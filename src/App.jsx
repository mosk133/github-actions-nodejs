import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import DestinationsSection from "./components/DestinationsSection";
import Footer from "./components/Footer";
import QuoteRequestForm from "./components/QuoteRequestForm";
import AuthSection from "./components/AuthSection";

function App() {
    return (
        <div className="min-h-screen w-full flex flex-col overflow-hidden bg-gradient-to-b from-indigo-900/10 to-indigo-900/30">
            <Header />
            <main className="flex-grow">
                <div className="flex flex-col space-y-0">
                    <HeroSection />
                    <div className="bg-gradient-to-b from-indigo-900/20 to-indigo-900/40">
                        <FeaturesSection />
                    </div>
                    <div className="bg-gradient-to-b from-transparent to-indigo-900/20">
                        <DestinationsSection />
                    </div>
                    <div className="bg-gradient-to-b from-indigo-900/40 to-indigo-900/60">
                        <QuoteRequestForm />
                    </div>
                    <div className="bg-gradient-to-b from-indigo-900/60 to-indigo-900/80">
                        <AuthSection />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
