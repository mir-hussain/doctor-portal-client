import React from "react";
import "./MakeAppointment.css";
import doctor from "../../../../images/doctor.png";

const MakeAppointment = () => {
  return (
    <section className='make-appointment-section'>
      <div className='make-appointment-content'>
        <img src={doctor} alt='doctor' />
        <div className='make-appointment-text'>
          <h4 className='text-cyan'>Appointment</h4>
          <h1>Make an appointment Today</h1>
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laboriosam qui repellat molestiae eligendi maxime a quas sit enim incidunt.</p>
          <button className='primary-btn'>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
