
var eventlist =[
    "event 1",
    "event 2",
    "event 3",
    "event 4",
    "event 5",
    "event 6"
];

var eventOptions = ()=>{
    evOp =""
    eventlist.forEach(eventName => {
        evOp +=  ` <option> ${eventName} </option>  `
    });
    return evOp;
}

var addEvents = (events) =>{
    var eventHtml ="";
    // console.log(events);

    for(i=0; i<events; i++){
        


        //elements create with ids    event1 ,event2 , event
        eventHtml += 

        `     <div class="form-group mb-4" > <select id="event${i + 1}" name=\"account\" class=\"form-control border-0 shadow form-control-lg\">` +
        `     <option> Select event ${i+1}</option>  ` +
               eventOptions() +
        "     </select> </div>  " ;

    }

    // console.log(eventHtml);
    var elementContainer = document.getElementById("eventContainer");
    elementContainer.innerHTML= eventHtml;
};

