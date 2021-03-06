import React, { useState, useEffect } from "react";

const notify = () => alert("Servers usually restarts every 18 hours");

export default function Uptime ({time}) {
    const timeObj = { h: 0, m: 0 }

    time.split(" ").forEach(t => {
        if(t.endsWith("m")){
            timeObj.m = parseInt(t.replace("m",""));
        }else if(t.endsWith("h")){
            timeObj.h = parseInt(t.replace("h",""));
        }
    });

    const color =   timeObj.h === 17 && timeObj.m < 45 ? "yellow" : 
                    timeObj.h >= 17 ? "red" : null;

    return (<span className="dxpcursor" onClick={notify} style={color ? {color} : {}}>{time}</span>)
}