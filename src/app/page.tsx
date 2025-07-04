import BestCollection from "@/components/BestCollection";
import ChooseUs from "@/components/ChooseUs";
import Customer from "@/components/Customer";
import Discount from "@/components/Discount";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <BestCollection />
      <ChooseUs />
      <Customer />
      <Discount />
      <Footer />
    </div>
  );
}
