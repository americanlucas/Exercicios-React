import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./components/ui/accordion";

import { Button } from "./components/ui/button";
import { Calendar } from "./components/ui/calendar";

function App() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  const CustomButton = ({ children }: { children: React.ReactNode }) => {
    return (
      <Button className="bg-white shadow-none text-black hover:bg-white text-xl">
        <h3 className="hover:text-slate-700">{children}</h3>
      </Button>
    );
  };

  const MainHeading = ({ children }: { children: React.ReactNode }) => {
    return (
      <h1 className="flex text-3xl font-semibold items-center justify-center align-center mb-8">
        {children}
      </h1>
    );
  }

  

  return (
    <>
      <header className="flex justify-between shadow-md p-8">
        <div>
          <h1 className="text-3xl font-semibold">Kwen Accordion Page</h1>
        </div>
        <div className="flex gap-4 flex-row text-2xl">
          <CustomButton>Home</CustomButton>
          <CustomButton>About</CustomButton>
          <CustomButton>Contact</CustomButton>
        </div>
      </header>
      <div className="flex flex-col justify-center mt-12">
        <MainHeading>
          Who We Are?
        </MainHeading>
        <Accordion
          type="single"
          collapsible
          className="inline-flex m-auto rounded-lg flex-col items-center align-center bg-pink-300"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-4 text-lg m-auto w-96">
              Some Usual Accordion? 
            </AccordionTrigger>
            <AccordionContent className="p-4 text-base m-auto w-96">
              No. This is a custom Accordion. 
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="p-4 text-lg m-auto w-96">
              Can it be cool?
            </AccordionTrigger>
            <AccordionContent className="p-4 text-base m-auto w-96">
              Yes! You can make it cool. Customize the way you want.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="p-4 text-lg m-auto w-96">
              Can it be colored?
            </AccordionTrigger>
            <AccordionContent className="p-4 text-base m-auto w-96">
              Yes! You can make it 
              <Button className= "text-black font-medium hover:text-pink-500 hover:bg-white p-1.5 bg-white shadow-none">
                pink
              </Button>
              . Customize the way you want.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-col justify-center mt-12">
        <MainHeading>
          More Features
        </MainHeading>
        <Calendar 
          className="inline-flex flex-col m-auto bg-black text-white rounded-lg p-4 mb-8"
          mode="single"
          defaultMonth={date}
          selected={date}
          onSelect={setDate}
        ></Calendar>
      </div>
    </>
  );
}

export default App;
