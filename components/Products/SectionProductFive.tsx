import Image from "next/image";
import SectionThree from "@/assests/section3.png";

const SectionProductFive = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center px-10">
        <Image src={SectionThree} alt="Section1" className="w-full" />

        <div className="flex flex-col gap-10 md:px-20 lg:px-0">
          <h1 className="text-4xl tracking-tight sm:text-6xl">Leasing</h1>
          <p className="font-light">
            Want to provide your organisation with mobility in a unique and
            creative way? Our Electric and City bikes are the perfect solution
            for healthier employees. So whether it is customised employee
            bicycles or standout promotional rides, both small and big
            organisations share the love of our Veloretti designs. Depending on
            the number of bikes, we will give you a customised quote. Learn more
          </p>

          <div>Learn More </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProductFive;
