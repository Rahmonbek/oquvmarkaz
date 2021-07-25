import React from "react";
import Headers from "./Head/Headers";
import Menyu from "./Head/Menyu";
import FootersGroup from "./Head/FootersGroup";
import { Redirect } from 'react-router-dom'


export default function ExampleApp() {
  const [course, setCourse] = React.useState(true);

  return (
    <div>
      {course ? (
        <div>
          <Redirect to="allcourse" />
        </div>
      ) : (
        <div>
          <Headers />
          <Menyu />
          <FootersGroup />
        </div>
      )}
   
    </div>
  );
}
