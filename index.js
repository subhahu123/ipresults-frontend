var table = ``;
var content





function search() {

    var overlay = document.querySelector('.rightbar-overlay') ;
    overlay.style.display = 'block' ;
    console.log(overlay.style.display) ;

    var collegecode = `{
  "101": {
      "college": "AMBEDKAR INSTITUTE OF ADVANCED COMMUNICATION TECHNOLOGIES & RESEARCH (FORMERLY AIT)"
  },
  "104": {
      "college": "AMITY SCHOOL OF ENGINEERING & TECHNOLOGY"
  },
  "104": {
      "college": "AMITY SCHOOL OF ENGINEERING & TECHNOLOGY"
  },
  "115": {
      "college": "BHARATI VIDYAPEETH COLLEGE OF ENGINEERING"
  },
  "132": {
      "college": "GURU TEGH BAHADUR INSTITUTE OF TECHNOLOGY"
  },
  "132": {
      "college": "GURU TEGH BAHADUR INSTITUTE OF TECHNOLOGY"
  },
  "133": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "133": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "133": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "133": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "148": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "150": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "150": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "156": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "156": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "180": {
      "college": "DELHI TECHNICAL CAMPUS, GREATER NOIDA"
  },
  "180": {
      "college": "DELHI TECHNICAL CAMPUS, GREATER NOIDA"
  },
  "208": {
      "college": "BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY"
  },
  "208": {
      "college": "BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY"
  },
  "209": {
      "college": "G B PANT GOVT. ENGINEERING COLLEGE"
  },
  "209": {
      "college": "G B PANT GOVT. ENGINEERING COLLEGE"
  },
  "255": {
      "college": "JIMS ENGINEERING MANAGEMENT TECHNICAL CAMPUS, GREATER NOIDA"
  },
  "512": {
      "college": "BHARATI VIDYAPEETH COLLEGE OF ENGINEERING"
  },
  "512": {
      "college": "BHARATI VIDYAPEETH COLLEGE OF ENGINEERING"
  },
  "551": {
      "college": "MAHAVIR SWAMI INSTITUTE OF TECHNOLOGY"
  },
  "551": {
      "college": "MAHAVIR SWAMI INSTITUTE OF TECHNOLOGY"
  },
  "551": {
      "college": "MAHAVIR SWAMI INSTITUTE OF TECHNOLOGY"
  },
  "768": {
      "college": "GURU TEGH BAHADUR INSTITUTE OF TECHNOLOGY"
  },
  "768": {
      "college": "GURU TEGH BAHADUR INSTITUTE OF TECHNOLOGY"
  },
  "962": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "962": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "963": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "964": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "964": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "965": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "965": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "965": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "101": {
      "college": "AMBEDKAR INSTITUTE OF ADVANCED COMMUNICATION TECHNOLOGIES & RESEARCH (FORMERLY AIT)"
  },
  "101": {
      "college": "AMBEDKAR INSTITUTE OF ADVANCED COMMUNICATION TECHNOLOGIES & RESEARCH (FORMERLY AIT)"
  },
  "101": {
      "college": "AMBEDKAR INSTITUTE OF ADVANCED COMMUNICATION TECHNOLOGIES & RESEARCH (FORMERLY AIT)"
  },
  "101": {
      "college": "AMBEDKAR INSTITUTE OF ADVANCED COMMUNICATION TECHNOLOGIES & RESEARCH (FORMERLY AIT)"
  },
  "101": {
      "college": "AMBEDKAR INSTITUTE OF ADVANCED COMMUNICATION TECHNOLOGIES & RESEARCH (FORMERLY AIT)"
  },
  "101": {
      "college": "AMBEDKAR INSTITUTE OF ADVANCED COMMUNICATION TECHNOLOGIES & RESEARCH (FORMERLY AIT)"
  },
  "101": {
      "college": "AMBEDKAR INSTITUTE OF ADVANCED COMMUNICATION TECHNOLOGIES & RESEARCH (FORMERLY AIT)"
  },
  "101": {
      "college": "AMBEDKAR INSTITUTE OF ADVANCED COMMUNICATION TECHNOLOGIES & RESEARCH (FORMERLY AIT)"
  },
  "104": {
      "college": "AMITY SCHOOL OF ENGINEERING & TECHNOLOGY"
  },
  "104": {
      "college": "AMITY SCHOOL OF ENGINEERING & TECHNOLOGY"
  },
  "104": {
      "college": "AMITY SCHOOL OF ENGINEERING & TECHNOLOGY"
  },
  "104": {
      "college": "AMITY SCHOOL OF ENGINEERING & TECHNOLOGY"
  },
  "104": {
      "college": "AMITY SCHOOL OF ENGINEERING & TECHNOLOGY"
  },
  "104": {
      "college": "AMITY SCHOOL OF ENGINEERING & TECHNOLOGY"
  },
  "104": {
      "college": "AMITY SCHOOL OF ENGINEERING & TECHNOLOGY"
  },
  "115": {
      "college": "BHARATI VIDYAPEETH COLLEGE OF ENGINEERING"
  },
  "115": {
      "college": "BHARATI VIDYAPEETH COLLEGE OF ENGINEERING"
  },
  "115": {
      "college": "BHARATI VIDYAPEETH COLLEGE OF ENGINEERING"
  },
  "115": {
      "college": "BHARATI VIDYAPEETH COLLEGE OF ENGINEERING"
  },
  "115": {
      "college": "BHARATI VIDYAPEETH COLLEGE OF ENGINEERING"
  },
  "115": {
      "college": "BHARATI VIDYAPEETH COLLEGE OF ENGINEERING"
  },
  "115": {
      "college": "BHARATI VIDYAPEETH COLLEGE OF ENGINEERING"
  },
  "133": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "133": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "133": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "133": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "133": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "133": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "133": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "133": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "133": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "133": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "133": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "133": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "133": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "148": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "148": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "148": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "148": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "148": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "148": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "148": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "148": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "148": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "148": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "148": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "148": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "148": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "148": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "148": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "148": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "148": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "148": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "148": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "150": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "150": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "150": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "150": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "150": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "150": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "150": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "150": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "150": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "150": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "150": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "150": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "150": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "156": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "156": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "156": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "156": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "156": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "156": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "156": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "156": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "156": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "156": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "156": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "156": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "180": {
      "college": "DELHI TECHNICAL CAMPUS, GREATER NOIDA"
  },
  "180": {
      "college": "DELHI TECHNICAL CAMPUS, GREATER NOIDA"
  },
  "180": {
      "college": "DELHI TECHNICAL CAMPUS, GREATER NOIDA"
  },
  "180": {
      "college": "DELHI TECHNICAL CAMPUS, GREATER NOIDA"
  },
  "180": {
      "college": "DELHI TECHNICAL CAMPUS, GREATER NOIDA"
  },
  "180": {
      "college": "DELHI TECHNICAL CAMPUS, GREATER NOIDA"
  },
  "180": {
      "college": "DELHI TECHNICAL CAMPUS, GREATER NOIDA"
  },
  "208": {
      "college": "BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY"
  },
  "208": {
      "college": "BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY"
  },
  "208": {
      "college": "BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY"
  },
  "208": {
      "college": "BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY"
  },
  "208": {
      "college": "BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY"
  },
  "208": {
      "college": "BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY"
  },
  "208": {
      "college": "BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY"
  },
  "208": {
      "college": "BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY"
  },
  "208": {
      "college": "BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY"
  },
  "208": {
      "college": "BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY"
  },
  "208": {
      "college": "BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY"
  },
  "208": {
      "college": "BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY"
  },
  "208": {
      "college": "BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY"
  },
  "208": {
      "college": "BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY"
  },
  "209": {
      "college": "G B PANT GOVT. ENGINEERING COLLEGE"
  },
  "209": {
      "college": "G B PANT GOVT. ENGINEERING COLLEGE"
  },
  "209": {
      "college": "G B PANT GOVT. ENGINEERING COLLEGE"
  },
  "209": {
      "college": "G B PANT GOVT. ENGINEERING COLLEGE"
  },
  "209": {
      "college": "G B PANT GOVT. ENGINEERING COLLEGE"
  },
  "209": {
      "college": "G B PANT GOVT. ENGINEERING COLLEGE"
  },
  "209": {
      "college": "G B PANT GOVT. ENGINEERING COLLEGE"
  },
  "209": {
      "college": "G B PANT GOVT. ENGINEERING COLLEGE"
  },
  "255": {
      "college": "JIMS ENGINEERING MANAGEMENT TECHNICAL CAMPUS, GREATER NOIDA"
  },
  "255": {
      "college": "JIMS ENGINEERING MANAGEMENT TECHNICAL CAMPUS, GREATER NOIDA"
  },
  "255": {
      "college": "JIMS ENGINEERING MANAGEMENT TECHNICAL CAMPUS, GREATER NOIDA"
  },
  "255": {
      "college": "JIMS ENGINEERING MANAGEMENT TECHNICAL CAMPUS, GREATER NOIDA"
  },
  "255": {
      "college": "JIMS ENGINEERING MANAGEMENT TECHNICAL CAMPUS, GREATER NOIDA"
  },
  "255": {
      "college": "JIMS ENGINEERING MANAGEMENT TECHNICAL CAMPUS, GREATER NOIDA"
  },
  "255": {
      "college": "JIMS ENGINEERING MANAGEMENT TECHNICAL CAMPUS, GREATER NOIDA"
  },
  "512": {
      "college": "BHARATI VIDYAPEETH COLLEGE OF ENGINEERING"
  },
  "512": {
      "college": "BHARATI VIDYAPEETH COLLEGE OF ENGINEERING"
  },
  "512": {
      "college": "BHARATI VIDYAPEETH COLLEGE OF ENGINEERING"
  },
  "512": {
      "college": "BHARATI VIDYAPEETH COLLEGE OF ENGINEERING"
  },
  "512": {
      "college": "BHARATI VIDYAPEETH COLLEGE OF ENGINEERING"
  },
  "512": {
      "college": "BHARATI VIDYAPEETH COLLEGE OF ENGINEERING"
  },
  "512": {
      "college": "BHARATI VIDYAPEETH COLLEGE OF ENGINEERING"
  },
  "551": {
      "college": "MAHAVIR SWAMI INSTITUTE OF TECHNOLOGY"
  },
  "551": {
      "college": "MAHAVIR SWAMI INSTITUTE OF TECHNOLOGY"
  },
  "551": {
      "college": "MAHAVIR SWAMI INSTITUTE OF TECHNOLOGY"
  },
  "551": {
      "college": "MAHAVIR SWAMI INSTITUTE OF TECHNOLOGY"
  },
  "551": {
      "college": "MAHAVIR SWAMI INSTITUTE OF TECHNOLOGY"
  },
  "551": {
      "college": "MAHAVIR SWAMI INSTITUTE OF TECHNOLOGY"
  },
  "552": {
      "college": "BHAGWAN MAHAVEER COLLEGE OF ENGINEERING & MANAGEMENT"
  },
  "552": {
      "college": "BHAGWAN MAHAVEER COLLEGE OF ENGINEERING & MANAGEMENT"
  },
  "552": {
      "college": "BHAGWAN MAHAVEER COLLEGE OF ENGINEERING & MANAGEMENT"
  },
  "552": {
      "college": "BHAGWAN MAHAVEER COLLEGE OF ENGINEERING & MANAGEMENT"
  },
  "552": {
      "college": "BHAGWAN MAHAVEER COLLEGE OF ENGINEERING & MANAGEMENT"
  },
  "552": {
      "college": "BHAGWAN MAHAVEER COLLEGE OF ENGINEERING & MANAGEMENT"
  },
  "553": {
      "college": "BM INSTITUTE OF ENGINEERING & TECHNOLOGY"
  },
  "553": {
      "college": "BM INSTITUTE OF ENGINEERING & TECHNOLOGY"
  },
  "553": {
      "college": "BM INSTITUTE OF ENGINEERING & TECHNOLOGY"
  },
  "553": {
      "college": "BM INSTITUTE OF ENGINEERING & TECHNOLOGY"
  },
  "553": {
      "college": "BM INSTITUTE OF ENGINEERING & TECHNOLOGY"
  },
  "553": {
      "college": "BM INSTITUTE OF ENGINEERING & TECHNOLOGY"
  },
  "553": {
      "college": "BM INSTITUTE OF ENGINEERING & TECHNOLOGY"
  },
  "553": {
      "college": "BM INSTITUTE OF ENGINEERING & TECHNOLOGY"
  },
  "553": {
      "college": "BM INSTITUTE OF ENGINEERING & TECHNOLOGY"
  },
  "553": {
      "college": "BM INSTITUTE OF ENGINEERING & TECHNOLOGY"
  },
  "553": {
      "college": "BM INSTITUTE OF ENGINEERING & TECHNOLOGY"
  },
  "553": {
      "college": "BM INSTITUTE OF ENGINEERING & TECHNOLOGY"
  },
  "553": {
      "college": "BM INSTITUTE OF ENGINEERING & TECHNOLOGY"
  },
  "962": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "962": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "962": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "962": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "962": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "962": {
      "college": "NORTHERN INDIA ENGINEERING COLLEGE"
  },
  "963": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "963": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "963": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "963": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "963": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "963": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "963": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "963": {
      "college": "MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY"
  },
  "964": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "964": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "964": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "964": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "964": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "964": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "964": {
      "college": "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY"
  },
  "965": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "965": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "965": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "965": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "965": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "965": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  },
  "965": {
      "college": "HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT"
  }
}`







    console.log(institutecode);







    var subjectscodedata = `{
    "27301":{
      "papercode":"ETCS301",
      "subject":"ALGORITHMS DESIGN AND ANALYSIS"
   },
   "98301":{
      "papercode":"ETHS301",
      "subject":"COMMUNICATION SKILLS FOR PROFESSIONALS"
   },
   "27303":{
      "papercode":"ETCS303",
      "subject":"SOFTWARE ENGINEERING"
   },
   "28303":{
      "papercode":"ETEC303",
      "subject":"DIGITAL COMMUNICATION"
   },
   "27307":{
      "papercode":"ETCS307",
      "subject":"JAVA PROGRAMMING"
   },
   "99311":{
      "papercode":"ETMS311",
      "subject":"INDUSTRIAL MANAGEMENT"
   },
   "27351":{
      "papercode":"ETCS351",
      "subject":"ALGORITHMS DESIGN AND ANALYSIS LAB"
   },
   "98351":{
      "papercode":"ETHS351",
      "subject":"COMMUNICATION SKILLS FOR PROFESSIONALS LAB"
   },
   "27353":{
      "papercode":"ETCS353",
      "subject":"SOFTWARE ENGINEERING LAB"
   },
   "27357":{
      "papercode":"ETCS357",
      "subject":"JAVA PROGRAMMING LAB"
   },
   "28357":{
      "papercode":"ETEC357",
      "subject":"DIGITAL COMMUNICATION LAB"
   },
   "27359":{
      "papercode":"ETCS359",
      "subject":"VIVA INDUSTRIAL TRAINING "
   },
    "99201": {
        "papercode": "ETMA201",
        "subject": "APPLIED MATHEMATICS"
      },
      "28203": {
        "papercode": "ETEC203",
        "subject": "ANALOG ELECTRONICS"
      },
      "28205": {
        "papercode": "ETEC205",
        "subject": "SWITCHING THEORY AND LOGIC DESIGN"
      },
      "28207": {
        "papercode": "ETEC207",
        "subject": "ELECTRONIC INSTRUMENTS AND MEASUREMENTS"
      },
      "27209": {
        "papercode": "ETCS209",
        "subject": "DATA STRUCTURES"
      },
      "28211": {
        "papercode": "ETEC211",
        "subject": "SIGNALS AND SYSTEMS"
      },
      "28251": {
        "papercode": "ETEC251",
        "subject": "ANALOG ELECTRONICS "
      },
      "28253": {
        "papercode": "ETEC253",
        "subject": "SWITCHING THEORY AND LOGIC DESIGN LAB"
      },
      "27255": {
        "papercode": "ETCS255",
        "subject": "DATA STRUCTURES LAB"
      },
      "28257": {
        "papercode": "ETEC257",
        "subject": "ELECTRONIC INSTRUMENTS AND MEASUREMENTS LAB"
      },
      "28259": {
        "papercode": "ETEC259",
        "subject": "SIGNALS AND SYSTEMS LAB"
      },
    "99102": {
      "papercode": "ETMA102",
      "subject": "APPLIED MATHEMATICS"
  },
  "99104": {
      "papercode": "ETPH104",
      "subject": "APPLIED PHYSICS"
  },
  "28106": {
      "papercode": "ETEC106",
      "subject": "ELECTRONIC DEVICES"
  },
  "27108": {
      "papercode": "ETCS108",
      "subject": "INTRODUCTION TO PROGRAMMING"
  },
  "36110": {
      "papercode": "ETME110",
      "subject": "ENGINEERING MECHANICS"
  },
  "98112": {
      "papercode": "ETHS112",
      "subject": "COMMUNICATIONS SKILLS"
  },
  "56114": {
      "papercode": "ETEN114",
      "subject": "ENVIRONMENTAL STUDIES"
  },
  "99152": {
      "papercode": "ETPH152",
      "subject": "APPLIED PHYSICS LAB"
  },
  "27154": {
      "papercode": "ETCS154",
      "subject": "PROGRAMMING LAB"
  },
  "28156": {
      "papercode": "ETEC156",
      "subject": "ELECTRONIC DEVICES LAB"
  },
  "36158": {
      "papercode": "ETME158",
      "subject": "ENGINEERING MECHANICS LAB"
  },
  "56160": {
      "papercode": "ETEN160",
      "subject": "ENVIRONMENTAL STUDIES LAB"
  },
    "99101": {
      "papercode": "ETMA101",
      "subject": "APPLIED MATHEMATICS"
  },
  "99103": {
      "papercode": "ETPH103",
      "subject": "APPLIED PHYSICS"
  },
  "36105": {
      "papercode": "ETME105",
      "subject": "MANUFACTURING PROCESSES"
  },
  "49107": {
      "papercode": "ETEE107",
      "subject": "ELECTRICAL TECHNOLOGY"
  },
  "98109": {
      "papercode": "ETHS109",
      "subject": "HUMAN VALUES AND PROFESSIONAL ETHICS"
  },
  "27111": {
      "papercode": "ETCS111",
      "subject": "FUNDAMENTALS OF COMPUTING"
  },
  "99113": {
      "papercode": "ETCH113",
      "subject": "APPLIED CHEMISTRY"
  },
  "99151": {
      "papercode": "ETPH151",
      "subject": "APPLIED PHYSICS LAB"
  },
  "49153": {
      "papercode": "ETEE153",
      "subject": "ELECTRICAL TECHNOLOGY LAB"
  },
  "36155": {
      "papercode": "ETME155",
      "subject": "WORKSHOP PRACTICE"
  },
  "27157": {
      "papercode": "ETCS157",
      "subject": "FUNDAMENTALS OF COMPUTING LAB"
  },
  "36157": {
      "papercode": "ETME157",
      "subject": "ENGINEERING GRAPHICS LAB"
  },
  "99161": {
      "papercode": "ETCH161",
      "subject": "APPLIED CHEMISTRY LAB"
  },
      "99202": {
        "papercode": "ETMA202",
        "subject": "APPLIED MATHEMATICS "
    },
    "27204": {
        "papercode": "ETCS204",
        "subject": "COMPUTER ORGANIZATION AND ARCHITECTURE"
    },
    "27206": {
        "papercode": "ETCS206",
        "subject": "THEORY OF COMPUTATION"
    },
    "27208": {
        "papercode": "ETCS208",
        "subject": "DATABASE MANAGEMENT SYSTEMS"
    },
    "27210": {
        "papercode": "ETCS210",
        "subject": "OBJECT ORIENTED PROGRAMMING"
    },
    "28212": {
        "papercode": "ETEC212",
        "subject": "COMMUNICATION SYSTEMS"
    },
    "99250": {
        "papercode": "ETEN250",
        "subject": "NCC"
    },
    "99252": {
        "papercode": "ETMA252",
        "subject": "APPLIED MATHEMATICS LAB"
    },
    "27254": {
        "papercode": "ETCS254",
        "subject": "COMPUTER ORGANIZATION AND ARCHITECTURE LAB"
    },
    "27256": {
        "papercode": "ETCS256",
        "subject": "DATABASE MANAGEMENT SYSTEMSLAB"
    },
    "28256": {
        "papercode": "ETEC256",
        "subject": "COMMUNICATION SYSTEMS LAB"
    },
    "27258": {
        "papercode": "ETCS258",
        "subject": "OBJECT ORIENTED PROGRAMMING LAB"
    },
  "99201": {
    "papercode": "ETMA201",
    "subject": "APPLIED MATHEMATICS "
  },
  "27203": {
    "papercode": "ETCS203",
    "subject": "FOUNDATION OF COMPUTER SCIENCE"
  },
  "28205": {
    "papercode": "ETEC205",
    "subject": "SWITCHING THEORY AND LOGIC DESIGN"
  },
  "49207": {
    "papercode": "ETEE207",
    "subject": "CIRCUITS AND SYSTEMS"
  },
  "27209": {
    "papercode": "ETCS209",
    "subject": "DATA STRUCTURE"
  },
  "27211": {
    "papercode": "ETCS211",
    "subject": "COMPUTER GRAPHICS AND MULTIMEDIA"
  },
  "28253": {
    "papercode": "ETEC253",
    "subject": "SWITCHING THEORY AND LOGIC DESIGN LAB"
  },
  "27255": {
    "papercode": "ETCS255",
    "subject": "DATA STRUCTURE LAB"
  },
  "27257": {
    "papercode": "ETCS257",
    "subject": "COMPUTER GRAPHICS AND MULTIMEDIA LAB"
  },
  "49257": {
    "papercode": "ETEE257",
    "subject": "CIRCUITS AND SYSTEMS LAB"
  },
  "34203": {
    "papercode": "ETCE203",
    "subject": "STRENGTH OF MATERIAL"
  },
  "99203": {
    "papercode": "ETMA203",
    "subject": "NUMERICAL ANALYSIS AND STATISTICAL TECHNIQUES"
  },
  "34205": {
    "papercode": "ETCE205",
    "subject": "FLUID MECHANICS"
  },
  "34207": {
    "papercode": "ETCE207",
    "subject": "BUILDING MATERIALS AND CONTRUCTIONS"
  },
  "34209": {
    "papercode": "ETCE209",
    "subject": "SURVEYING"
  },
  "34211": {
    "papercode": "ETCE211",
    "subject": "ENGINEERING GEOLOGY"
  },
  "34253": {
    "papercode": "ETCE253",
    "subject": "FLUID MECHANICS LAB"
  },
  "99253": {
    "papercode": "ETMA253",
    "subject": "NUMERICAL ANALYSIS AND STATISTICAL TECHNIQUES LAB"
  },
  "34255": {
    "papercode": "ETCE255",
    "subject": "CIVIL ENGINEERING DRAWING USING CAD LAB"
  },
  "34257": {
    "papercode": "ETCE257",
    "subject": "SURVEYING LAB"
  },
  "34259": {
    "papercode": "ETCE259",
    "subject": "GEOLOGY AND BUILDING MATERIAL LAB"
  },
  "99201": {
    "papercode": "ETMA201",
    "subject": "APPLIED MATHEMATICS"
  },
  "28203": {
    "papercode": "ETEC203",
    "subject": "ANALOG ELECTRONICS"
  },
  "28205": {
    "papercode": "ETEC205",
    "subject": "SWITCHING THEORY AND LOGIC DESIGN"
  },
  "28207": {
    "papercode": "ETEC207",
    "subject": "ELECTRONIC INSTRUMENTS AND MEASUREMENTS"
  },
  "27209": {
    "papercode": "ETCS209",
    "subject": "DATA STRUCTURES"
  },
  "28211": {
    "papercode": "ETEC211",
    "subject": "SIGNALS AND SYSTEMS"
  },
  "28251": {
    "papercode": "ETEC251",
    "subject": "ANALOG ELECTRONICS "
  },
  "28253": {
    "papercode": "ETEC253",
    "subject": "SWITCHING THEORY AND LOGIC DESIGN LAB"
  },
  "27255": {
    "papercode": "ETCS255",
    "subject": "DATA STRUCTURES LAB"
  },
  "28257": {
    "papercode": "ETEC257",
    "subject": "ELECTRONIC INSTRUMENTS AND MEASUREMENTS LAB"
  },
  "28259": {
    "papercode": "ETEC259",
    "subject": "SIGNALS AND SYSTEMS LAB"
  },
  "99201": {
    "papercode": "ETMA201",
    "subject": "APPLIED MATHEMATICS "
  },
  "110203": {
    "papercode": "ETEL203",
    "subject": "ANALOG ELECTRONICS"
  },
  "49205": {
    "papercode": "ETEE205",
    "subject": "MATERIALS IN ELECTRICAL SYSTEMS"
  },
  "49207": {
    "papercode": "ETEE207",
    "subject": "CIRCUITS "
  },
  "27209": {
    "papercode": "ETCS209",
    "subject": "DATA STRUCTURES"
  },
  "49211": {
    "papercode": "ETEE211",
    "subject": "ELECTRICAL MACHINES "
  },
  "110251": {
    "papercode": "ETEL251",
    "subject": "ANALOG ELECTRONICS LAB"
  },
  "49253": {
    "papercode": "ETEE253",
    "subject": "ELECTICAL MACHINES "
  },
  "27255": {
    "papercode": "ETCS255",
    "subject": "DATA STRUCTURES LAB"
  },
  "49257": {
    "papercode": "ETEE257",
    "subject": "CIRCUITS "
  },
  "49259": {
    "papercode": "ETEE259",
    "subject": "SCIENTIFIC COMPUTING LAB"
  },
  "99201": {
    "papercode": "ETMA201",
    "subject": "APPLIED MATHEMATICS "
  },
  "28203": {
    "papercode": "ETEC203",
    "subject": "ANALOG ELECTRONICS "
  },
  "49205": {
    "papercode": "ETEE205",
    "subject": "MATERIALS IN ELECTRICAL SYSTEMS"
  },
  "49207": {
    "papercode": "ETEE207",
    "subject": "CIRCUITS "
  },
  "27209": {
    "papercode": "ETCS209",
    "subject": "DATA STRUCTURES"
  },
  "49211": {
    "papercode": "ETEE211",
    "subject": "ELECTRICAL MACHINES "
  },
  "28251": {
    "papercode": "ETEC251",
    "subject": "ANALOG ELECTRONICS "
  },
  "49253": {
    "papercode": "ETEE253",
    "subject": "ELECTICAL MACHINES "
  },
  "27255": {
    "papercode": "ETCS255",
    "subject": "DATA STRUCTURES LAB"
  },
  "49257": {
    "papercode": "ETEE257",
    "subject": "CIRCUITS "
  },
  "49259": {
    "papercode": "ETEE259",
    "subject": "SCIENTIFIC COMPUTING LAB"
  },
  "99201": {
    "papercode": "ETMA201",
    "subject": "APPLIED MATHEMATICS "
  },
  "30203": {
    "papercode": "ETIC203",
    "subject": "SENSOR AND TRANSDUCERS"
  },
  "28205": {
    "papercode": "ETEC205",
    "subject": "SWITCHING THEORY AND LOGIC DESIGN"
  },
  "49207": {
    "papercode": "ETEE207",
    "subject": "CIRCUITS "
  },
  "27209": {
    "papercode": "ETCS209",
    "subject": "DATA STRUCTURES"
  },
  "30211": {
    "papercode": "ETIC211",
    "subject": "BASICS OF MEASUREMENTS"
  },
  "30251": {
    "papercode": "ETIC251",
    "subject": "SENSOR AND TRANSDUCERS LAB"
  },
  "28253": {
    "papercode": "ETEC253",
    "subject": "SWITCHING THEORY AND LOGIC DESIGN LAB"
  },
  "27255": {
    "papercode": "ETCS255",
    "subject": "DATA STRUCTURES LAB"
  },
  "49257": {
    "papercode": "ETEE257",
    "subject": "CIRCUITS "
  },
  "99201": {
    "papercode": "ETMA201",
    "subject": "APPLIED MATHEMATICS "
  },
  "27203": {
    "papercode": "ETCS203",
    "subject": "FOUNDATION OF COMPUTER SCIENCE"
  },
  "28205": {
    "papercode": "ETEC205",
    "subject": "SWITCHING THEORY AND LOGIC DESIGN"
  },
  "49207": {
    "papercode": "ETEE207",
    "subject": "CIRCUITS AND SYSTEMS"
  },
  "27209": {
    "papercode": "ETCS209",
    "subject": "DATA STRUCTURE"
  },
  "27211": {
    "papercode": "ETCS211",
    "subject": "COMPUTER GRAPHICS AND MULTIMEDIA"
  },
  "28253": {
    "papercode": "ETEC253",
    "subject": "SWITCHING THEORY AND LOGIC DESIGN LAB"
  },
  "27255": {
    "papercode": "ETCS255",
    "subject": "DATA STRUCTURE LAB"
  },
  "27257": {
    "papercode": "ETCS257",
    "subject": "COMPUTER GRAPHICS AND MULTIMEDIA LAB"
  },
  "49257": {
    "papercode": "ETEE257",
    "subject": "CIRCUITS AND SYSTEMS LAB"
  },
  "36201": {
    "papercode": "ETME201",
    "subject": "FLUID MECHANICS"
  },
  "111203": {
    "papercode": "ETAT203",
    "subject": "STRENGTH OF MATERIAL"
  },
  "36203": {
    "papercode": "ETME203",
    "subject": "THERMAL SCIENCE"
  },
  "36205": {
    "papercode": "ETME205",
    "subject": "PRODUCTION TECHNOLOGY"
  },
  "36207": {
    "papercode": "ETME207",
    "subject": "MATERIAL SCIENCE AND METALLURGY"
  },
  "36209": {
    "papercode": "ETME209",
    "subject": "ELECTRICAL MACHINES"
  },
  "36251": {
    "papercode": "ETME251",
    "subject": "FLUID MECHANICS LAB"
  },
  "36253": {
    "papercode": "ETME253",
    "subject": "ELECTRICAL MACHINES LAB"
  },
  "111257": {
    "papercode": "ETAT257",
    "subject": "STRENGTH OF MATERIAL LAB"
  },
  "86259": {
    "papercode": "ETTE259",
    "subject": "MACHINE DRAWING LAB"
  },
  "36203": {
    "papercode": "ETME203",
    "subject": "THERMAL SCIENCE"
  },
  "99203": {
    "papercode": "ETMA203",
    "subject": "NUMERICAL ANALYSIS AND STATISTICAL TECHNIQUES"
  },
  "36205": {
    "papercode": "ETME205",
    "subject": "PRODUCTION TECHNOLOGY"
  },
  "36207": {
    "papercode": "ETME207",
    "subject": "MATERIAL SCIENCE AND METALLURGY"
  },
  "36209": {
    "papercode": "ETME209",
    "subject": "ELECTRICAL MACHINES"
  },
  "111211": {
    "papercode": "ETME211",
    "subject": "STRENGTH OF MATERIALS"
  },
  "99251": {
    "papercode": "ETMA253",
    "subject": "NUMERICAL ANALYSIS AND STATISTICAL TECHNIQUES LAB"
  },
  "36253": {
    "papercode": "ETME253",
    "subject": "ELECTRICAL MACHINES LAB"
  },
  "36255": {
    "papercode": "ETME255",
    "subject": "PRODUCTION TECHNOLOGY LAB"
  },
  "36257": {
    "papercode": "ETME257",
    "subject": "STRENGTH OF MATERIALS "
  },
  "86259": {
    "papercode": "ETTE259",
    "subject": "MACHINE DRAWING LAB"
  },
  "36201": {
    "papercode": "ETME201",
    "subject": "FLUID MECHANICS"
  },
  "99203": {
    "papercode": "ETMA203",
    "subject": "NUMERIC ANALYSIS AND STATISTICAL TECHNIQUES"
  },
  "112205": {
    "papercode": "ETMT205",
    "subject": "MEASUREMENTS AND INSTRUMENTATION"
  },
  "28205": {
    "papercode": "ETEC205",
    "subject": "SWITCHING THEORY AND LOGIC DESIGN"
  },
  "36207": {
    "papercode": "ETME207",
    "subject": "MATERIAL SCIENCE AND METALLURGY"
  },
  "86211": {
    "papercode": "ETTE211",
    "subject": "MECHANICS OF SOLIDS"
  },
  "28253": {
    "papercode": "ETEC253",
    "subject": "SWITCHING THEORY AND LOGIC DESIGN LAB"
  },
  "99253": {
    "papercode": "ETMA253",
    "subject": "NUMERIC ANALYSIS AND STATISTICAL TECHNIQUES LAB"
  },
  "112255": {
    "papercode": "ETMT255",
    "subject": "MEASUREMENTS AND INSTRUMENTATION LAB"
  },
  "86257": {
    "papercode": "ETTE257",
    "subject": "MECHANICS OF SOLIDS AND FLUID LAB"
  },
  "37201": {
    "papercode": "ETPE201",
    "subject": "ELECTRICAL MACHINES"
  },
  "110203": {
    "papercode": "ETEL203",
    "subject": "ANALOG ELECTRONICS"
  },
  "37205": {
    "papercode": "ETPE205",
    "subject": "THERMODYNAMICS FOR POWER ENGINEERS"
  },
  "36207": {
    "papercode": "ETME207",
    "subject": "MATERIAL SCIENCE AND METALLURGY"
  },
  "37207": {
    "papercode": "ETPE207",
    "subject": "STRENGTH OF MATERIALS AND THEORY OF MACHINES"
  },
  "49207": {
    "papercode": "ETEE207",
    "subject": "CIRCUITS AND SYSTEMS"
  },
  "110251": {
    "papercode": "ETEL251",
    "subject": "ANALOG ELECTRONICS LAB"
  },
  "37251": {
    "papercode": "ETPE251",
    "subject": "THERMODYNAMICS FOR POWER ENGINEERS LAB"
  },
  "37253": {
    "papercode": "ETPE253",
    "subject": "STRENGTH OF MATERIAL AND THEORY OF MACHINES LAB"
  },
  "37255": {
    "papercode": "ETPE255",
    "subject": "ELECTRICAL MACHINES LAB"
  }
} `;


    var subjectdata = JSON.parse(subjectscodedata);
    var institutecode = JSON.parse(collegecode);
    console.log(subjectdata);
    console.log(subjectdata[99201]);
    var query = document.querySelector('#search');
    var resultHeading = document.querySelector('#result-head')
    var semester = document.querySelector('#semester');
    content = document.querySelector('#result');
    buttonresults = document.querySelector('#search-results');
    buttonresults.innerHTML += `<div class="loader" style="margin: auto;"></div>`;

    //  content.innerHTML = `<div class="loader" style="margin: auto;"></div>`;
    console.log(query.value);
    console.log(semester.value);
    var url = `https://vast-escarpment-73783.herokuapp.com/student/${semester.value}/${query.value}`;
    // var url = `http://127.0.0.1:8080/student/${semester.value}/${query.value}` ;
    console.log(url);
    fetch(url)
        .then(data => data.json())
        // .then( log => log[1684] )
        .then(data => {

            return data[0];
        })
        .then(data => {
            console.log(data);
            /**    var html = `<div class="container" id="userid" style="padding: 10px;"><h5>Roll Number : </h5> ${data.rollNo} / 20${data.rollNo % 100}
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                                <h5>Student Name : </h5> ${data.name} <br> <h5>College Name : 
                                </h5> ${institutecode[parseInt(((data.rollNo / 100000)%1000))].college} 
                                &nbsp; &nbsp; &nbsp; &nbsp; 
                                <!--
                                <h5>Batch - </h5> 20${data.rollNo % 100} </div> 
                                -->
                                <br>
                                `;
        */

            var html = `<img src="./avatar.png" style="height:170px;float:left;">
            <div class="container" id="userid" style="padding: 10px;text-align:left;margin-top:40px;padding-left:180px">
            <h5>Roll Number : </h5> ${data.rollNo} / 20${data.rollNo % 100}
            <br>
       <h5>Student Name : </h5> <span> ${data.name} </span>
       <br>
       <h5>College Name : 
       </h5>  <span> ${institutecode[parseInt(((data.rollNo / 100000)%1000))].college}  </span>
     
       <br>
       `;

            resultHeading.innerHTML = `<b>STUDENT DETAILS <span class="badge badge-light" style="background-color:rgb(34, 71, 131);color:white;">${semester.value}</span></b>`




            content.innerHTML = html;
            // var table = ``;

            var sum = 0;
            var total = 0;

            table = `<div class="table-responsive"> <table id="demo" class="table table-striped table-hover table-bordered bordered table-condensed no-margin block-shadow">
                                    <thead>
                                        <tr>
                                            <th style='text-align: center'>Paper Id</th>
                                            <th style='text-align: center'>Paper code</th>
                                            <th style='text-align: center'>Subject</th>
                                            <th style='text-align: center'>Marks</th>
                                            <th style='text-align: center'>Credits</th>
                                        </tr>
                                    </thead>
                                    <tbody>`;

            for (key in data.results) {

                /* table += `<p> ${data.results[key].subject}  
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              ${data.results[key].marks} </p>`; */
                //////////////////////
                var paperid = data.results[key].subject.slice(0, 5);

                console.log(paperid);
                console.log(subjectdata[paperid]);

                var papercode;
                if (typeof (subjectdata[paperid]) != 'undefined') {
                    papercode = subjectdata[paperid].papercode;
                } else {
                    papercode = "NA";
                }

                var subject;
                if (typeof (subjectdata[paperid]) != 'undefined') {
                    subject = subjectdata[paperid].subject;
                } else {
                    subject = "NA";
                }

                // console.log(subjectdata[paperid].papercode) ;

                // var paperid = "99201" ;

                total++;
                sum += parseInt(data.results[key].marks);

                table += `<tr>
                                    <td>${data.results[key].subject}</td>
                                    <td>${papercode}</td>
                                    <td>${subject}</td>
                                    <td>${data.results[key].marks}</td>
                                    <td>${data.results[key].subject[6]}</td>
                                  </tr>`;

            }
            table += `</tbody>
                            </table> </div>`;

            console.log(sum);
            console.log(total);
            var percentage = sum / total;

            table +=
                `<br><div style="float: right;" ><label></label>
                <span class="badge badge-pill badge-success" style="font-size:x-large;">Percentage : ${percentage.toFixed(2)}</span>&nbsp; &nbsp; &nbsp; &nbsp; </div>`;
            table += `<br> 
                      <br>                       
                      <div id="emailbox-position">
        <div class="container collapse" id="email-box">
          <div class="jumbotron text-center" style="background-color:green;color: white;" id="email-head">
            Send Your Report
          </div>
          <div class="container" style="border: 1px solid #e4e4e4;">
          <input id="email" name="email">
            <br>
            <br>
            <button class="btn btn-success" onclick="sendmail()" style="width:100%;"> Send Report </button>
          </div>
        </div>
        <br>
        <div id="download-icon">
            <i class="fa fa-download" aria-hidden="true" style="color:white;font-size:48px;background-color: green;" onclick="generatePDF()"></i>
        </div>
        <div id="email-icon">
          <i class="far fa-envelope" style="color:white;font-size:48px;background-color: green;" data-toggle="collapse" data-target="#email-box"></i>
        </div>
      </div>`;

            content.innerHTML += table;

            content.style.display = "block";
            overlay.style.display = 'none' ;
            document.querySelector('#container1').style.display = "none";
            console.log(data);
        })
        .catch(err => {
            console.log(err);
            content.innerHTML = 'Sorry No Result'
        });
}



function sendmail() {
    var emailid = document.querySelector('#email');
    console.log(emailid.value);
    console.log(content.innerHTML);
    var object = {
        "emailid": `${emailid.value}`,
        "html": `${content.innerHTML.toString()}`
    };
    // object.emailid = emailid.value ;
    object.html = encodeURIComponent(content.innerHTML);
    console.log(object);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", `http://vast-escarpment-73783.herokuapp.com/email/${object.emailid}`, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(object.html);

    //fetch(`https://vast-escarpment-73783.herokuapp.com/email/${object.emailid}/${object.html}`)
    //  .then( data => console.log(data) )
    //  .catch( err => console.log(err) ) ;


    var x = document.getElementById("snackbar");
    x.textContent = "Email Sent";
    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);

}
