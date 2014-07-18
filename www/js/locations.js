var TYPES = {PLACE: 1, SERVICE: 2, ROOM: 3, COLLECTION: 4};
var locations = [
  
//Restrooms
  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: -1,
    floorname: "Lower Level",
    x: 37.335462, y: -121.885356
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 1,
    floorname: "1st Floor",
    x: 37.335462, y: -121.885350
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 1,
    floorname: "1st Floor",
    x: 37.335775, y: -121.884975
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 1,
    floorname: "1st Floor",
    x: 37.335480, y:-121.884662
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 2,
    floorname: "2nd Floor",
    x: 37.335486, y: -121.884657
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 2,
    floorname: "2nd Floor",
    x: 37.335462, y: -121.885354
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 3,
    floorname: "3rd Floor",
    x: 37.335486, y: -121.884657
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 3,
    floorname: "3rd Floor",
    x: 37.335462, y: -121.885354
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 4,
    floorname: "4th Floor",
    x: 37.335486, y: -121.884657
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 5,
    floorname: "5th Floor",
    x: 37.335486, y: -121.884657
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 6,
    floorname: "6th Floor",
    x: 37.335486, y: -121.884657
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 7,
    floorname: "7th Floor",
    x: 37.335486, y: 121.884657
  },

  {
    type: TYPES.PLACE,
    name: "Restrooms",
    floor: 8,
    floor: "8th Floor",
    x: 37.335486, y: 121.884657
  },


//Elevators
  {
    type: TYPES.PLACE,
    name: "Elevators",
    floor: -1,
    floorname: "Lower Level",
    x: 37.335531, y: -121.884836
  },

  {
    type: TYPES.PLACE,
    name: "Elevators",
    floor: 0,
    floorname: "Mezzanine",
    x: 37.335712, y: -121.885180, 
  },

  {
    type: TYPES.PLACE,
    name: "Elevators",
    floor: 1,
    floorname: "1st Floor",
    x: 37.335531, y: -121.884836
  },

  {
    type: TYPES.PLACE,
    name: "Elevators",
    floor: 2,
    floorname: "2nd Floor",
    x: 37.335531, y: -121.884836
  },

  {
    type: TYPES.PLACE,
    name: "Elevators",
    floor: 3,
    floorname: "3rd Floor",
    x: 37.335531, y: -121.884836
  },  

  {
    type: TYPES.PLACE,
    name: "Elevators",
    floor: 4,
    floorname: "4th Floor",
    x: 37.335531, y: -121.884836
  },

  {
    type: TYPES.PLACE,
    name: "Elevators",
    floor: 5,
    floorname: "5th Floor",
    x: 37.335531, y: -121.884836
  },  

  {
    type: TYPES.PLACE,
    name: "Elevators",
    floor: 6,
    floorname: "6th Floor",
    x: 37.335531, y: -121.884836
  },

  {
    type: TYPES.PLACE,
    name: "Elevators",
    floor: 7,
    floorname: "7th Floor",
    x: 37.335531, y: -121.884836
  },

  {
    type: TYPES.PLACE,
    name: "Elevators",
    floor: 8,
    floorname: "8th Floor",
    x: 37.335531, y: -121.884836
  },

//Library Services, Desks, and Areas

  //Printing
  {
    type: TYPES.SERVICE,
    name: "Printing",
    floor: -1,
    floorname: "Lower Level",
    x: 37.335518, y: -121.885094,
    desc: "You can print from any library computer, USB, or laptop.",
    image: "images/photos/Printing-small.jpg",
    linktext: "Learn more about printing in the King Library.",
    linktarget: "http://library.sjsu.edu/video/printing-king-library"
  },

  {
    type: TYPES.SERVICE,
    name: "Printing",
    floor: 0,
    floorname: "Mezzanine",
    x: 37.335750, y: -121.885224,
    desc: "You can print from any library computer, USB, or laptop.",
    image: "images/photos/Printing-small.jpg",
    linktext: "Learn more about printing in the King Library.",
    linktarget: "http://library.sjsu.edu/video/printing-king-library"
  },
  
  {
    type: TYPES.SERVICE,
    name: "Printing",
    floor: 1,
    floorname: "1st Floor",
    x: 37.335567, y: -121.885102,
    desc: "You can print from any library computer, USB, or laptop.",
    image: "images/photos/Printing-small.jpg",
    linktext: "Learn more about printing in the King Library.",
    linktarget: "http://library.sjsu.edu/video/printing-king-library"
  },  

  {
    type: TYPES.SERVICE,
    name: "Printing",
    floor: 2,
    floorname: "2nd Floor",
    x: 37.335506, y: -121.885252,
    desc: "You can print from any library computer, USB, or laptop.",
    image: "images/photos/Printing-small.jpg",
    linktext: "Learn more about printing in the King Library.",
    linktarget: "http://library.sjsu.edu/video/printing-king-library"
  },

  {
    type: TYPES.SERVICE,
    name: "Printing",
    floor: 5,
    floorname: "5th Floor",
    x: 37.335375, y: -121.884882,
    desc: "You can print from any library computer, USB, or laptop.",
    image: "images/photos/Printing-small.jpg",
    linktext: "Learn more about printing in the King Library.",
    linktarget: "http://library.sjsu.edu/video/printing-king-library"
  },

  //Mezzanine
    {
      type: TYPES.PLACE,
      name: "Mezzanine",
      floor: 0,
      floorname: "Mezzanine",
      x: 37.335648, y: -121.885165,
      desc: "Student Learning Commons",
      image: "images/photos/Mezzanine-small.jpg"
    }, 
      
  //Student Computing Services
    {
      type: TYPES.SERVICE,
      name: "Laptops and iPads",
      floor: 0,
      floorname: "Mezzanine",
      x: 37.335646, y: -121.885103,
      desc: "You may checkout PC laptops, MacBook Pros and iPads from Student Computing Services using your SJSU Tower Card.",
      image: "images/photos/LaptopsandiPads-small.jpg"
    }, 

    {
      type: TYPES.SERVICE,
      name: "Laptops and iPads",
      floor: 4,
      floorname: "4th Floor",
      x: 37.335646, y: -121.885103,
      desc: "Free checkout of PC laptops, MacBook Pros and iPads from Student Computing Services using your SJSU Tower Card.",
      image: "images/photos/LaptopsandiPads-small.jpg"
    },  

  //Student Technology Training
    {
      type: TYPES.SERVICE,
      name: "Student Technology Training",
      floor: 4,
      floorname: "4th Floor",
      x: 37.335354, y: -121.884780,
      desc: "The Student Technology Training Center provides training, workshops and drop-in help with software such as Excel and SPSS.",
      image: "images/photos/TechTraining-small.jpg"  
    },

  //Desks
    {
      type: TYPES.PLACE,
      name: "Circulation Desk",
      floor: 1,
      floorname: "1st Floor",
      x: 37.335360, y: -121.885028,
      desc: "Check out materials or get help with your library account.",
      image: "images/photos/CircDesk-small.jpg"
    },

    {
      type: TYPES.PLACE,
      name: "Reference Desk",
      floor: 2,
      floorname: "2nd Floor",
      x: 37.335538, y: -121.885172,
      desc: "Get help with your research needs.",
      image: "images/photos/RefDesk-small.jpg"
    },

 /* Group, Study, Meeting, and Classrooms
  {x: "37.335431", y: "-121.884799", 
    contentString:'<div id="content">'+
        'SJSU Spartan Collaboration Study Room L67'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a>" +
        '</div>'},
  
   {x: "37.335776", y: "-121.885040", 
    contentString:'<div id="content">'+
        'Study Room L02'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'},
  
  {x: "37.335801", y: "-121.885079", 
    contentString:'<div id="content">'+
        'Study Room L04'+
        "<img src='images/photos/StudyRooms-small.jpg' height='100' width='100' align='left'>" +
        "<p><a href='http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room'>Reserve Rooms Online</a></p>" +
        '</div>'},
*/        


//Books By Collection or Call Number Range
  



  ];

 