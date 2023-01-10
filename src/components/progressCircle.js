import React from 'react';

import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./animatedProgressProvider";


const ProgressCircle = ({end, title}) => {
    
    return (
        <AnimatedProgressProvider
        valueStart={0}
        valueEnd={end}
        duration={1.4}
        easingFunction={easeQuadInOut}
        repeat
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <>
                <CircularProgressbar
                value={value}
                text={`${roundedValue}%`}
                styles={buildStyles({ pathTransition: "none", pathColor: '#ffc107', textColor: 'transparent', backgroundColor: 'white' })}
                />
                <p style={{color: 'white', margin: '10px 0px', textAlign:'center'}}>{title}</p>
            </>
          );
        }}
      </AnimatedProgressProvider>
    );
}

export default ProgressCircle;
