import React from "react";
import Introduction from "./Intorduction/Introduction";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Services from "./Services/Services";

const Main = () => {
  return (
    <main>
      <Services />
      <Introduction />
      <MakeAppointment />
    </main>
  );
};

export default Main;
