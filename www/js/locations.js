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
      desc: "Student Learning and Research Commons is located above the Children's Room.",
      image: "images/photos/Mezzanine-small.jpg",
      linktext: "Learn more about the Mezz on the King website.",
      linktarget: "http://library.sjsu.edu/mezz/sjsu-student-learning-and-research-commons"
    }, 
      
  //Student Computing Services
    {
      type: TYPES.SERVICE,
      name: "Student Computing Services - Laptops and iPads",
      floor: 0,
      floorname: "Mezzanine",
      x: 37.335646, y: -121.885103,
      desc: "Free checkout of PC laptops, MacBook Pros and iPads using your SJSU Tower Card.",
      image: "images/photos/LaptopsandiPads-small.jpg"
    }, 

    {
      type: TYPES.SERVICE,
      name: "Student Computing Services - Laptops and iPads",
      floor: 4,
      floorname: "4th Floor",
      x: 37.335646, y: -121.885103,
      desc: "Free checkout of PC laptops, MacBook Pros and iPads using your SJSU Tower Card.",
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

    {
      type: TYPES.PLACE,
      name: "Reference Desk",
      floor: 3,
      floorname: "3rd Floor",
      x: 37.335538, y: -121.885172,
      desc: "Get help with your research needs.",
      image: "images/photos/RefDesk-small.jpg"
    },


 //Group, Study, Meeting, and Classrooms
   //Lower Level
    {
      type: TYPES.ROOM,
      name: "Study Room L02",
      floor: -1,
      floorname: "Lower Level",
      x: 37.335776, y: -121.885040,
      desc: "The library has several rooms available for group study.",
      image: "images/photos/StudyRooms-small.jpg",
      linktext: "Reserve Rooms Online",
      linktarget: "http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room"
    },  
  
    {
      type: TYPES.ROOM,
      name: "Study Room L04",
      floor: -1,
      floorname: "Lower Level",
      x: 37.335801, y: -121.885079,
      desc: "The library has several rooms available for group study projects.",
      image: "images/photos/StudyRooms-small.jpg",
      linktext: "Reserve Rooms Online",
      linktarget: "http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room"
    },
  
    {
      type: TYPES.ROOM,
      name: "Study Room L67",
      floor: -1,
      floorname: "Lower Level",
      x: 37.335431, y: -121.884799,
      desc: "The library has several rooms available for group study projects.",
      image: "images/photos/StudyRooms-small.jpg",
      linktext: "Reserve Rooms Online",
      linktarget: "http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room"
    },

  //1st Floor
    {
      type: TYPES.ROOM,
      name: "Classroom 125",
      floor: 1,
      floorname: "1st Floor",
      x: 37.335410, y: -121.884567,
      desc: "The library has several rooms available for group study projects.",
      image: "images/photos/StudyRooms-small.jpg",
      linktext: "Reserve Rooms Online",
      linktarget: "http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room"
    },
    
  
  //2nd Floor
    {
      type: TYPES.ROOM,
      name: "Classroom 213",
      floor: 2,
      floorname: "2nd Floor",
      x: 37.335410, y: -121.884567,
      desc: "The library has several rooms available for group study projects.",
      image: "images/photos/StudyRooms-small.jpg",
      linktext: "Reserve Rooms Online",
      linktarget: "http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room"
    },

    {
      type: TYPES.ROOM,
      name: "Classroom 217",
      floor: 2,
      floorname: "2nd Floor",
      x: 37.335339, y: -121.884651,
      desc: "The library has several rooms available for group study projects.",
      image: "images/photos/StudyRooms-small.jpg",
      linktext: "Reserve Rooms Online",
      linktarget: "http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room"
    },

    {
      type: TYPES.ROOM,
      name: "Classroom 219",
      floor: 2,
      floorname: "2nd Floor",
      x: 37.335394, y: -121.884731,
      desc: "The library has several rooms available for group study projects.",
      image: "images/photos/StudyRooms-small.jpg",
      linktext: "Reserve Rooms Online",
      linktarget: "http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room"
    },

    {
      type: TYPES.ROOM,
      name: "Classroom 224",
      floor: 2,
      floorname: "2nd Floor",
      x: 37.335684, y: -121.885109,
      desc: "The library has several rooms available for group study projects.",
      image: "images/photos/StudyRooms-small.jpg",
      linktext: "Reserve Rooms Online",
      linktarget: "http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room"
    },

    {
      type: TYPES.ROOM,
      name: "Classroom 226",
      floor: 2,
      floorname: "2nd Floor",
      x: 37.335713, y: -121.885141,
      desc: "The library has several rooms available for group study projects.",
      image: "images/photos/StudyRooms-small.jpg",
      linktext: "Reserve Rooms Online",
      linktarget: "http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room"
    },

  
  //3rd Floor

    {
      type: TYPES.ROOM,
      name: "Study Rooms 322, 324, 326",
      floor: 3,
      floorname: "3rd Floor",
      x: 37.335684, y: -121.885109,
      desc: "The library has several rooms available for group study projects.",
      image: "images/photos/StudyRooms-small.jpg",
      linktext: "Reserve Rooms Online",
      linktarget: "http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room"
    },

    {
      type: TYPES.ROOM,
      name: "Study Room 390, 392",
      floor: 3,
      floorname: "3rd Floor",
      x: 37.335375, y: -121.885291,
      desc: "The library has several rooms available for group study projects.",
      image: "images/photos/StudyRooms-small.jpg",
      linktext: "Reserve Rooms Online",
      linktarget: "http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room"
    },
  
 //6th Floor
 
     {
      type: TYPES.ROOM,
      name: "Study Room 602, 604, 606, 622, 624, 626",
      floor: 6,
      floorname: "6th Floor",
      x: 37.335723, y: -121.885126,
      desc: "The library has several rooms available for group study.",
      image: "images/photos/StudyRooms-small.jpg",
      linktext: "Reserve Rooms Online",
      linktarget: "http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room"
    },
    
    {
      type: TYPES.ROOM,
      name: "Study Room 632, 634, 662, 664",
      floor: 6,
      floorname: "6th Floor",
      x: 37.335429, y: -121.885341,
      desc: "The library has several rooms available for group study.",
      image: "images/photos/StudyRooms-small.jpg",
      linktext: "Reserve Rooms Online",
      linktarget: "http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room"
    },    
  
  //7th Floor
    
    {
      type: TYPES.ROOM,
      name: "Study Room 702, 704, 706, 722, 724, 726",
      floor: 7,
      floorname: "7th Floor",
      x: 37.335720, y: -121.885073,
      desc: "The library has several rooms available for group study.",
      image: "images/photos/StudyRooms-small.jpg",
      linktext: "Reserve Rooms Online",
      linktarget: "http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room"
    },

    {
      type: TYPES.ROOM,
      name: "Study Room 732, 734, 762, 764",
      floor: 7,
      floorname: "7th Floor",
      x: 37.335400, y: -121.885358,
      desc: "The library has several rooms available for group study.",
      image: "images/photos/StudyRooms-small.jpg",
      linktext: "Reserve Rooms Online",
      linktarget: "http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room"
    }, 

  //8th Floor
    {
      type: TYPES.ROOM,
      name: "Study Room 802, 804, 806, 822, 824, 826",
      floor: 8,
      floorname: "8th Floor",
      x: 37.335720, y: -121.885069,
      desc: "The library has several rooms available for group study.",
      image: "images/photos/StudyRooms-small.jpg",
      linktext: "Reserve Rooms Online",
      linktarget: "http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room"
    }, 

    {
      type: TYPES.ROOM,
      name: "Study Room 832, 834, 862, 864",
      floor: 8,
      floorname: "8th Floor",
      x: 37.335397, y: -121.885358,
      desc: "The library has several rooms available for group study.",
      image: "images/photos/StudyRooms-small.jpg",
      linktext: "Reserve Rooms Online",
      linktarget: "http://library.sjsu.edu/reserve-studymeeting-room/reserve-studymeeting-room"
    }

/*/Books By Collection or Call Number Range
  //LL
    {
      type: TYPES.COLLECTION,
      name: "",
      floor: -1,
      floorname: "Lower Level",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: -1,
      floorname: "Lower Level",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: -1,
      floorname: "Lower Level",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

  //1st Floor
    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 1,
      floorname: "1st Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 1,
      floorname: "1st Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

  //2nd Floor
    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 2,
      floorname: "2nd Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    
    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 2,
      floorname: "2nd Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },  

  //3rd Floor

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 3,
      floorname: "3rd Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },  

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 3,
      floorname: "3rd Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },  

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 3,
      floorname: "3rd Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },  

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 3,
      floorname: "3rd Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 3,
      floorname: "3rd Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 3,
      floorname: "3rd Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 3,
      floorname: "3rd Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 3,
      floorname: "3rd Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 3,
      floorname: "3rd Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 3,
      floorname: "3rd Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 3,
      floorname: "3rd Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 3,
      floorname: "3rd Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 3,
      floorname: "3rd Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

  //5th Floor
    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 5,
      floorname: "5th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 5,
      floorname: "5th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 5,
      floorname: "5th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 5,
      floorname: "5th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 5,
      floorname: "5th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 5,
      floorname: "5th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 5,
      floorname: "5th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 5,
      floorname: "5th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 5,
      floorname: "5th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 5,
      floorname: "5th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 5,
      floorname: "5th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 5,
      floorname: "5th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 5,
      floorname: "5th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 5,
      floorname: "5th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 5,
      floorname: "5th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 5,
      floorname: "5th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

  //6th Floor
  
    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 6,
      floorname: "6th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },  

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 6,
      floorname: "6th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 6,
      floorname: "6th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 6,
      floorname: "6th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 6,
      floorname: "6th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 6,
      floorname: "6th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 6,
      floorname: "6th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

//7th Floor

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 7,
      floorname: "7Th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 7,
      floorname: "7th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 7,
      floorname: "7th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 7,
      floorname: "7th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 7,
      floorname: "7th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 7,
      floorname: "7th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 7,
      floorname: "7th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 7,
      floorname: "7th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 7,
      floorname: "7th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

  //8th Floor
    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 8,
      floorname: "8th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 8,
      floorname: "8th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 8,
      floorname: "8th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 8,
      floorname: "8th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 8,
      floorname: "8th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 8,
      floorname: "8th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 8,
      floorname: "8th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 8,
      floorname: "8th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    },

    {
      type: TYPES.COLLECTION,
      name: "",
      floor: 8,
      floorname: "8th Floor",
      x: , y: ,
      desc: "",
      image: "images/photos/******-small.jpg",
      linktext: "",
      linktarget: ""
    }, */

  ]; 

 