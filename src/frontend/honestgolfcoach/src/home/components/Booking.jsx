import React from 'react'
import { useEffect } from 'react'

const Booking = () => {

  //https://book.squareup.com/appointments/lww99gsei0kaiy/location/LWTY0GRAGER8N/services?fbclid=PAZXh0bgNhZW0CMTEAAaZqtEk9p4cW56zvHW5f0YFBG2pd-0VIzLskdmQSmCi0QumF_I0ehWbZpGY_aem_hYmK09GW_QgCWDDu3HHhug

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://square.site/appointments/buyer/widget/lww99gsei0kaiy/LWTY0GRAGER8N.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      <h2>Book a Lesson</h2>
      <div id="square-appointments-embed"></div>
    </div>
  )
}

export default Booking