// This file contains all user data for the Smart Campus Assistant

// Teacher data
export const teachers = [
  {
    id: "T002",
    name: "AVIJIT MITRA",
    shortName: "AM",
    email: "avijit.mitra@svist.org",
    phone: "9876543210",
    password: "teacher123",
    department: "Computer Science",
    designation: "Associate Professor",
    subjects: ["Programming", "Graphics Lab", "C Language"],
    officeLocation: "Room 305, CS Building",
    officeHours: "2:00 PM - 4:00 PM",
    role: "Teacher",
  },
  {
    id: "T003",
    name: "Kausik Bhattacharya",
    shortName: "KBH",
    email: "kausik.bhattacharya@svist.org",
    phone: "9876543211",
    password: "teacher123",
    department: "Computer Science",
    designation: "Professor",
    subjects: ["Computer Science", "Lab-3"],
    officeLocation: "Room 310, CS Building",
    officeHours: "11:00 AM - 1:00 PM",
    role: "Teacher",
  },
  {
    id: "T004",
    name: "Pallavi Das",
    shortName: "PDS",
    email: "pallavi.das@svist.org",
    phone: "9876543212",
    password: "teacher123",
    department: "Computer Science",
    designation: "Assistant Professor",
    subjects: ["Computer Science"],
    officeLocation: "Room 302, CS Building",
    officeHours: "3:00 PM - 5:00 PM",
    role: "Teacher",
  },
  {
    id: "T005",
    name: "MANSHI MUKHOPADHYAY",
    shortName: "MM",
    email: "manshi.mukhopadhyay@svist.org",
    phone: "9876543213",
    password: "teacher123",
    department: "Chemistry",
    designation: "Associate Professor",
    subjects: ["Chemistry", "BSCH 201"],
    officeLocation: "Room 201, Chemistry Building",
    officeHours: "9:00 AM - 11:00 AM",
    role: "Teacher",
  },
  {
    id: "T007",
    name: "Souvik Chakraborty",
    shortName: "SC",
    email: "souvik.chakraborty@svist.org",
    phone: "9876543214",
    password: "teacher123",
    department: "Mathematics",
    designation: "Professor",
    subjects: ["Mathematics"],
    officeLocation: "Room 401, Math Building",
    officeHours: "10:00 AM - 12:00 PM",
    role: "Teacher",
  },
  {
    id: "T008",
    name: "Debashis Mukherjee",
    shortName: "DBM",
    email: "debashis.mukherjee@svist.org",
    phone: "9876543215",
    password: "teacher123",
    department: "Chemistry",
    designation: "Professor",
    subjects: ["Chemistry"],
    officeLocation: "Room 202, Chemistry Building",
    officeHours: "2:00 PM - 4:00 PM",
    role: "Teacher",
  },
  {
    id: "T009",
    name: "Shreya Mondal",
    shortName: "SM",
    email: "shreya.mondal@svist.org",
    phone: "9876543216",
    password: "teacher123",
    department: "Computer Science",
    designation: "Assistant Professor",
    subjects: ["Computer Science", "Graphics Lab"],
    officeLocation: "Room 412, CS Building",
    officeHours: "11:00 AM - 1:00 PM",
    role: "Teacher",
  },
  {
    id: "T010",
    name: "Meghna Ghatak",
    shortName: "MGT",
    email: "meghna.ghatak@svist.org",
    phone: "9876543217",
    password: "teacher123",
    department: "Humanities",
    designation: "Associate Professor",
    subjects: ["Language Lab"],
    officeLocation: "Room 501, Humanities Building",
    officeHours: "9:00 AM - 11:00 AM",
    role: "Teacher",
  },
]

// Student data
export const students = [
  {
    id: "S001",
    name: "Rohit Sharma",
    roll: "CSC001",
    email: "rohitrnps@gmail.com",
    phone: "7004329163",
    password: "student123",
    department: "Computer Science",
    semester: 2,
    section: "CSE-C",
    attendance: {
      "Database Systems": 85,
      "Web Technologies": 92,
      "Artificial Intelligence": 78,
      "Operating Systems": 88,
      "Computer Networks": 95,
    },
    role: "Student",
  },
  {
    id: "S002",
    name: "Shreya Ranjan",
    roll: "CSC002",
    email: "shreyaranjan9431@gmail.com",
    phone: "8294813136",
    password: "student123",
    department: "Computer Science",
    semester: 2,
    section: "CSE-C",
    attendance: {
      "Database Systems": 92,
      "Web Technologies": 88,
      "Artificial Intelligence": 95,
      "Operating Systems": 90,
      "Computer Networks": 87,
    },
    role: "Student",
  },
  {
    id: "S003",
    name: "Soukarsh Dutta",
    roll: "CSC003",
    email: "dsoukarsha@gmail.com",
    phone: "9876543218",
    password: "student123",
    department: "Computer Science",
    semester: 2,
    section: "CSE-B",
    attendance: {
      "Database Systems": 75,
      "Web Technologies": 82,
      "Artificial Intelligence": 68,
      "Operating Systems": 79,
      "Computer Networks": 85,
    },
    role: "Student",
  },
  {
    id: "S004",
    name: "Sania Akatrai",
    roll: "ECE004",
    email: "saniatoa2005@gmail.com",
    phone: "9876543219",
    password: "student123",
    department: "Electronics and Communication",
    semester: 2,
    section: "ECE-A",
    attendance: {
      "Circuit Theory": 98,
      "Digital Electronics": 95,
      "Signals and Systems": 92,
      "Electromagnetic Theory": 97,
      "Communication Systems": 99,
    },
    role: "Student",
  },
  {
    id: "S005",
    name: "Vikram Singh",
    roll: "CSC005",
    email: "vikram.s@student.svist.org",
    password: "student123",
    department: "Computer Science",
    semester: 2,
    section: "CSE-C",
    attendance: {
      "Database Systems": 65,
      "Web Technologies": 72,
      "Artificial Intelligence": 68,
      "Operating Systems": 70,
      "Computer Networks": 75,
    },
    role: "Student",
  },
  {
    id: "S006",
    name: "Neha Verma",
    roll: "CSC006",
    email: "neha.v@student.svist.org",
    password: "student123",
    department: "Computer Science",
    semester: 2,
    section: "CSE-C",
    attendance: {
      "Database Systems": 88,
      "Web Technologies": 85,
      "Artificial Intelligence": 82,
      "Operating Systems": 80,
      "Computer Networks": 90,
    },
    role: "Student",
  },
  {
    id: "S007",
    name: "Raj Malhotra",
    roll: "CSC007",
    email: "raj.m@student.svist.org",
    password: "student123",
    department: "Computer Science",
    semester: 2,
    section: "CSE-A",
    attendance: {
      "Database Systems": 78,
      "Web Technologies": 80,
      "Artificial Intelligence": 75,
      "Operating Systems": 82,
      "Computer Networks": 79,
    },
    role: "Student",
  },
  {
    id: "S008",
    name: "Ananya Desai",
    roll: "CSC008",
    email: "ananya.d@student.svist.org",
    password: "student123",
    department: "Computer Science",
    semester: 2,
    section: "CSE-B",
    attendance: {
      "Database Systems": 90,
      "Web Technologies": 92,
      "Artificial Intelligence": 88,
      "Operating Systems": 85,
      "Computer Networks": 91,
    },
    role: "Student",
  },
  {
    id: "S009",
    name: "Karan Mehta",
    roll: "CSC009",
    email: "karan.m@student.svist.org",
    password: "student123",
    department: "Computer Science",
    semester: 2,
    section: "CSE-C",
    attendance: {
      "Database Systems": 72,
      "Web Technologies": 75,
      "Artificial Intelligence": 70,
      "Operating Systems": 68,
      "Computer Networks": 73,
    },
    role: "Student",
  },
  {
    id: "S010",
    name: "Divya Sharma",
    roll: "CSC010",
    email: "divya.s@student.svist.org",
    password: "student123",
    department: "Computer Science",
    semester: 2,
    section: "CSE-A",
    attendance: {
      "Database Systems": 95,
      "Web Technologies": 93,
      "Artificial Intelligence": 90,
      "Operating Systems": 92,
      "Computer Networks": 94,
    },
    role: "Student",
  },
  {
    id: "S011",
    name: "Sania Gayen",
    roll: "ECE011",
    email: "saniagayen86@gmail.com",
    phone: "9876543220",
    password: "student123",
    department: "Electronics and Communication",
    semester: 2,
    section: "ECE-A",
    attendance: {
      "Circuit Theory": 88,
      "Digital Electronics": 92,
      "Signals and Systems": 85,
      "Electromagnetic Theory": 90,
      "Communication Systems": 94,
    },
    role: "Student",
  },
]

// Timetable data for all sections
export const timetableData = {
  "cse-a": {
    monday: [
      { time: "10:30-11:20", subject: "HMHU 201", teacher: "RPM" },
      { time: "11:20-12:10", subject: "BSCH 201", teacher: "BJB" },
      { time: "12:10-01:00", subject: "BSM 201", teacher: "SC" },
      { time: "01:00-01:40", subject: "Break", teacher: "" },
      { time: "01:40-02:30", subject: "ESCS 201", teacher: "AR" },
      { time: "02:30-03:20", subject: "BSCH 291 (1-30) Chemistry LAB", teacher: "BS, AD" },
      { time: "02:30-03:20", subject: "ESME 291 (31-Rest) Drawing LAB", teacher: "DP, SGB" },
      { time: "03:20-04:10", subject: "BSCH 291 (1-30) Chemistry LAB", teacher: "BS, AD" },
      { time: "03:20-04:10", subject: "ESME 291 (31-Rest) Drawing LAB", teacher: "DP, SGB" },
      { time: "04:10-05:00", subject: "BSCH 291 (1-30) Chemistry LAB", teacher: "BS, AD" },
      { time: "04:10-05:00", subject: "ESME 291 (31-Rest) Drawing LAB", teacher: "DP, SGB" },
      { time: "08:00-09:00", subject: "BSCH 201 (Evening Class)", teacher: "KK" },
      { time: "09:00-10:00", subject: "HMHU 201 (Evening Class)", teacher: "SMD" },
    ],
    tuesday: [
      { time: "10:30-11:20", subject: "ESCS 291 (1-30) LAB-3", teacher: "KBH, SM" },
      { time: "10:30-11:20", subject: "HMHU 291 (31-Rest) Language LAB", teacher: "AUM" },
      { time: "11:20-12:10", subject: "ESCS 291 (1-30) LAB-3", teacher: "KBH, SM" },
      { time: "11:20-12:10", subject: "HMHU 291 (31-Rest) Language LAB", teacher: "AUM" },
      { time: "12:10-01:00", subject: "BSCH 201", teacher: "KK" },
      { time: "01:00-01:40", subject: "Break", teacher: "" },
      { time: "01:40-02:30", subject: "BSM 201", teacher: "SPL" },
      { time: "02:30-03:20", subject: "ESCS 201", teacher: "KBH" },
      { time: "03:20-04:10", subject: "ESCS 201", teacher: "KBH" },
      { time: "04:10-05:00", subject: "ESCS 201", teacher: "KBH" },
      { time: "08:00-09:00", subject: "ESCS 201 (Evening Class)", teacher: "SPV" },
    ],
    wednesday: [
      { time: "10:30-11:20", subject: "BSM 201", teacher: "SC" },
      { time: "11:20-12:10", subject: "BSCH 201", teacher: "AD" },
      { time: "12:10-01:00", subject: "ESCS 201", teacher: "SM" },
      { time: "01:00-01:40", subject: "Break", teacher: "" },
      { time: "01:40-02:30", subject: "BSM 201", teacher: "DBH" },
      { time: "02:30-03:20", subject: "ESME 291 (1-30) Drawing LAB", teacher: "DP, SGB" },
      { time: "02:30-03:20", subject: "BSCH 291 (31-Rest) Chemistry LAB", teacher: "BS, MM" },
      { time: "03:20-04:10", subject: "ESME 291 (1-30) Drawing LAB", teacher: "DP, SGB" },
      { time: "03:20-04:10", subject: "BSCH 291 (31-Rest) Chemistry LAB", teacher: "BS, MM" },
      { time: "04:10-05:00", subject: "ESME 291 (1-30) Drawing LAB", teacher: "DP, SGB" },
      { time: "04:10-05:00", subject: "BSCH 291 (31-Rest) Chemistry LAB", teacher: "BS, MM" },
      { time: "08:00-09:00", subject: "BSCH 201 (Evening Class)", teacher: "DBM" },
      { time: "09:00-10:00", subject: "HMHU 201 (Evening Class)", teacher: "ASC" },
    ],
    thursday: [
      { time: "10:30-11:20", subject: "HMHU 291 (1-30) Language LAB", teacher: "ASC" },
      { time: "10:30-11:20", subject: "ESCS 291 (31-Rest) LAB-3", teacher: "KBH, SM" },
      { time: "11:20-12:10", subject: "HMHU 291 (1-30) Language LAB", teacher: "ASC" },
      { time: "11:20-12:10", subject: "ESCS 291 (31-Rest) LAB-3", teacher: "KBH, SM" },
      { time: "12:10-01:00", subject: "BSCH 201", teacher: "MM" },
      { time: "01:00-01:40", subject: "Break", teacher: "" },
      { time: "01:40-02:30", subject: "BSM 201", teacher: "SP" },
      { time: "02:30-03:20", subject: "HMHU 201", teacher: "ASC" },
      { time: "03:20-04:10", subject: "BSM 201", teacher: "DBH" },
      { time: "04:10-05:00", subject: "ESCS 201", teacher: "AR" },
    ],
    friday: [
      { time: "10:30-11:20", subject: "HMHU 201", teacher: "AUM" },
      { time: "11:20-12:10", subject: "BSCH 201", teacher: "DBM" },
      { time: "12:10-01:00", subject: "BSM 201", teacher: "DBH" },
      { time: "01:00-01:40", subject: "Break", teacher: "" },
      { time: "01:40-02:30", subject: "ESCS 201", teacher: "SM" },
      { time: "02:30-03:20", subject: "ESME291", teacher: "DP" },
      { time: "03:20-04:10", subject: "ESCS 201", teacher: "KBH" },
      { time: "04:10-05:00", subject: "ESCS 201", teacher: "KBH" },
      { time: "08:00-09:00", subject: "BSM 201 Q & A Solving (Evening Class)", teacher: "PK" },
    ],
    saturday: [{ time: "08:00-09:00", subject: "BSM 201 Q & A Solving (Evening Class)", teacher: "CM" }],
  },
  "cse-b": {
    monday: [
      { time: "10:30-11:20", subject: "BSM 201", teacher: "SC" },
      { time: "11:20-12:10", subject: "HMHU 201", teacher: "ASC" },
      { time: "12:10-01:00", subject: "ESCS 201", teacher: "SM" },
      { time: "01:00-01:40", subject: "Break", teacher: "" },
      { time: "01:40-02:30", subject: "BSCH 201", teacher: "MM" },
      { time: "02:30-03:20", subject: "ESCS 291 (1-30) LAB-3", teacher: "SM" },
      { time: "02:30-03:20", subject: "HMHU 291 (31-Rest) Language Lab", teacher: "ASC" },
      { time: "03:20-04:10", subject: "ESCS 291 (1-30) LAB-3", teacher: "SM" },
      { time: "03:20-04:10", subject: "HMHU 291 (31-Rest) Language Lab", teacher: "ASC" },
      { time: "04:10-05:00", subject: "ESCS 291 (1-30) LAB-3", teacher: "SM" },
      { time: "04:10-05:00", subject: "HMHU 291 (31-Rest) Language Lab", teacher: "ASC" },
      { time: "08:00-09:00", subject: "BSCH 201 (Evening Class)", teacher: "KK" },
      { time: "09:00-10:00", subject: "HMHU 201 (Evening Class)", teacher: "SMD" },
    ],
    tuesday: [
      { time: "10:30-11:20", subject: "BSCH 291 (1-30) Chemistry LAB", teacher: "BS, BJB" },
      { time: "10:30-11:20", subject: "ESME 291 (31-Rest) Drawing Lab", teacher: "SK, NTA" },
      { time: "11:20-12:10", subject: "BSCH 291 (1-30) Chemistry LAB", teacher: "BS, BJB" },
      { time: "11:20-12:10", subject: "ESME 291 (31-Rest) Drawing Lab", teacher: "SK, NTA" },
      { time: "12:10-01:00", subject: "BSM 201", teacher: "SP" },
      { time: "01:00-01:40", subject: "Break", teacher: "" },
      { time: "01:40-02:30", subject: "BSCH 201", teacher: "BJB" },
      { time: "02:30-03:20", subject: "ESCS 201", teacher: "KBH" },
      { time: "03:20-04:10", subject: "ESCS 201", teacher: "KBH" },
      { time: "04:10-05:00", subject: "ESCS 201", teacher: "KBH" },
      { time: "08:00-09:00", subject: "ESCS 201 (Evening Class)", teacher: "SPV" },
    ],
    wednesday: [
      { time: "10:30-11:20", subject: "HMHU 201", teacher: "MGT" },
      { time: "11:20-12:10", subject: "ESCS 201", teacher: "SM" },
      { time: "12:10-01:00", subject: "BSM 201", teacher: "SP" },
      { time: "01:00-01:40", subject: "Break", teacher: "" },
      { time: "01:40-02:30", subject: "BSCH 201", teacher: "AD" },
      { time: "02:30-03:20", subject: "HMHU 291 (1-30) Language Lab", teacher: "SMD" },
      { time: "02:30-03:20", subject: "ESCS 291 (31-Rest) LAB-3", teacher: "SM" },
      { time: "03:20-04:10", subject: "HMHU 291 (1-30) Language Lab", teacher: "SMD" },
      { time: "03:20-04:10", subject: "ESCS 291 (31-Rest) LAB-3", teacher: "SM" },
      { time: "04:10-05:00", subject: "HMHU 291 (1-30) Language Lab", teacher: "SMD" },
      { time: "04:10-05:00", subject: "ESCS 291 (31-Rest) LAB-3", teacher: "SM" },
      { time: "08:00-09:00", subject: "BSCH 201 (Evening Class)", teacher: "DBM" },
      { time: "09:00-10:00", subject: "HMHU 201 (Evening Class)", teacher: "ASC" },
    ],
    thursday: [
      { time: "10:30-11:20", subject: "ESME 291 (1-30) Drawing Lab", teacher: "SK, NTA" },
      { time: "10:30-11:20", subject: "BSCH 291 (31-Rest) Chemistry LAB", teacher: "BS, KK" },
      { time: "11:20-12:10", subject: "ESME 291 (1-30) Drawing Lab", teacher: "SK, NTA" },
      { time: "11:20-12:10", subject: "BSCH 291 (31-Rest) Chemistry LAB", teacher: "BS, KK" },
      { time: "12:10-01:00", subject: "BSCH 201", teacher: "KK" },
      { time: "01:00-01:40", subject: "Break", teacher: "" },
      { time: "01:40-02:30", subject: "BSM 201", teacher: "SC" },
      { time: "02:30-03:20", subject: "BSM 201", teacher: "PK" },
      { time: "03:20-04:10", subject: "ESME291", teacher: "SK" },
      { time: "04:10-05:00", subject: "BSM 201", teacher: "DBH" },
      { time: "08:00-09:00", subject: "ESCS 201 (Evening Class)", teacher: "AR" },
    ],
    friday: [
      { time: "10:30-11:20", subject: "BSCH 201", teacher: "KK" },
      { time: "11:20-12:10", subject: "BSM 201", teacher: "SC" },
      { time: "12:10-01:00", subject: "HMHU 201", teacher: "PLG" },
      { time: "01:00-01:40", subject: "Break", teacher: "" },
      { time: "01:40-02:30", subject: "BSCH 201", teacher: "DBM" },
      { time: "02:30-03:20", subject: "ESCS 201", teacher: "SM" },
      { time: "03:20-04:10", subject: "ESCS 201", teacher: "KBH" },
      { time: "04:10-05:00", subject: "ESCS 201", teacher: "KBH" },
      { time: "08:00-09:00", subject: "BSM 201 Q & A Solving (Evening Class)", teacher: "PK" },
    ],
    saturday: [{ time: "08:00-09:00", subject: "BSM 201 Q & A Solving (Evening Class)", teacher: "CM" }],
  },
  "cse-c": {
    monday: [
      { time: "10:30-11:20", subject: "ESCS 291 (1-30) LAB-3", teacher: "AM" },
      { time: "10:30-11:20", subject: "HMHU 291 (31-Rest) Language Lab", teacher: "MGT" },
      { time: "11:20-12:10", subject: "ESCS 291 (1-30) LAB-3", teacher: "AM" },
      { time: "11:20-12:10", subject: "HMHU 291 (31-Rest) Language Lab", teacher: "MGT" },
      { time: "12:10-01:00", subject: "ESCS 291 (1-30) LAB-3", teacher: "AM" },
      { time: "12:10-01:00", subject: "HMHU 291 (31-Rest) Language Lab", teacher: "MGT" },
      { time: "01:00-01:40", subject: "Break", teacher: "" },
      { time: "01:40-02:30", subject: "BSCH 201", teacher: "AD" },
      { time: "02:30-03:20", subject: "BSM 201", teacher: "SC" },
      { time: "03:20-04:10", subject: "ESCS 201", teacher: "AM" },
      { time: "04:10-05:00", subject: "Tutorial ESCS 201", teacher: "KBH" },
      { time: "08:00-09:00", subject: "HMHU 201 (Evening Class)", teacher: "MGT" },
      { time: "09:00-10:00", subject: "BSCH 201 (Evening Class)", teacher: "DBM" },
    ],
    tuesday: [
      { time: "10:30-11:20", subject: "ESCS 201", teacher: "PDS" },
      { time: "11:20-12:10", subject: "BSM 201", teacher: "SP" },
      { time: "12:10-01:00", subject: "BSCH 201", teacher: "DBM" },
      { time: "01:00-01:40", subject: "Break", teacher: "" },
      { time: "01:40-02:30", subject: "HMHU 201", teacher: "MGT" },
      { time: "02:30-03:20", subject: "ESME 291 (31-Rest) Drawing Lab", teacher: "SK, NTA" },
      { time: "03:20-04:10", subject: "ESME 291 (31-Rest) Drawing Lab", teacher: "SK, NTA" },
      { time: "04:10-05:00", subject: "ESME 291 (31-Rest) Drawing Lab", teacher: "SK, NTA" },
      { time: "07:00-08:00", subject: "HMHU 201 (Evening Class)", teacher: "AUM" },
      { time: "08:00-09:00", subject: "BSM 201 Q & A Solving (Evening Class)", teacher: "CM" },
    ],
    wednesday: [
      { time: "10:30-11:20", subject: "BSCH 201", teacher: "BJB" },
      { time: "11:20-12:10", subject: "BSCH 201", teacher: "MM" },
      { time: "12:10-01:00", subject: "BSM 201", teacher: "SC" },
      { time: "01:00-01:40", subject: "Break", teacher: "" },
      { time: "01:40-02:30", subject: "ESME291", teacher: "AC" },
      { time: "02:30-03:20", subject: "HMHU 201", teacher: "ASC" },
      { time: "03:20-04:10", subject: "ESCS 201", teacher: "KBH" },
      { time: "04:10-05:00", subject: "ESCS 201", teacher: "KBH" },
      { time: "08:00-09:00", subject: "BSCH 201 (Evening Class)", teacher: "KK" },
      { time: "09:00-10:00", subject: "ESCS 201 (Evening Class)", teacher: "SM" },
    ],
    thursday: [
      { time: "10:30-11:20", subject: "BSM 201", teacher: "PK" },
      { time: "11:20-12:10", subject: "ESCS 201", teacher: "AM" },
      { time: "12:10-01:00", subject: "BSCH 201", teacher: "KK" },
      { time: "01:00-01:40", subject: "Break", teacher: "" },
      { time: "01:40-02:30", subject: "BSCH 201", teacher: "AD" },
      { time: "02:30-03:20", subject: "HMHU 291 (1-30) Language Lab", teacher: "SMD" },
      { time: "02:30-03:20", subject: "ESCS 291 (31-Rest) LAB-3", teacher: "AM" },
      { time: "03:20-04:10", subject: "HMHU 291 (1-30) Language Lab", teacher: "SMD" },
      { time: "03:20-04:10", subject: "ESCS 291 (31-Rest) LAB-3", teacher: "AM" },
      { time: "04:10-05:00", subject: "HMHU 291 (1-30) Language Lab", teacher: "SMD" },
      { time: "04:10-05:00", subject: "ESCS 291 (31-Rest) LAB-3", teacher: "AM" },
      { time: "08:00-09:00", subject: "ESCS 201 (Evening Class)", teacher: "AM" },
      { time: "09:00-10:00", subject: "BSM 201 Q & A Solving (Evening Class)", teacher: "PK" },
    ],
    friday: [
      { time: "10:30-11:20", subject: "ESME 291 (1-30) Drawing Lab", teacher: "AC, SGB" },
      { time: "10:30-11:20", subject: "BSCH 291 (31-Rest) Chemistry LAB", teacher: "BS, KK" },
      { time: "11:20-12:10", subject: "ESME 291 (1-30) Drawing Lab", teacher: "AC, SGB" },
      { time: "11:20-12:10", subject: "BSCH 291 (31-Rest) Chemistry LAB", teacher: "BS, KK" },
      { time: "12:10-01:00", subject: "HMHU 201", teacher: "SMD" },
      { time: "01:00-01:40", subject: "Break", teacher: "" },
      { time: "01:40-02:30", subject: "BSM 201", teacher: "CM" },
      { time: "02:30-03:20", subject: "BSM 201", teacher: "SPL" },
      { time: "03:20-05:00", subject: "Sports / Library", teacher: "" },
    ],
  },
}

// Function to get user by ID and type
export function getUserById(id, type) {
  if (type === "teacher") {
    return teachers.find((teacher) => teacher.id === id)
  } else if (type === "student") {
    return students.find((student) => student.id === id)
  }
  return null
}

// Function to authenticate user
export function authenticateUser(idOrEmail, password, type) {
  let user = null

  if (type === "teacher") {
    user = teachers.find((t) => (t.id === idOrEmail || t.email === idOrEmail) && t.password === password)
  } else if (type === "student") {
    user = students.find(
      (s) => (s.id === idOrEmail || s.email === idOrEmail || s.roll === idOrEmail) && s.password === password,
    )
  }

  return user
}

// Function to get average attendance for a student
export function getAverageAttendance(studentId) {
  const student = students.find((s) => s.id === studentId)
  if (!student) return 0

  const attendanceValues = Object.values(student.attendance)
  return attendanceValues.reduce((sum, val) => sum + val, 0) / attendanceValues.length
}

// Function to get current class based on day and time
export function getCurrentClass(section, userType, teacherShortName) {
  // Get current day and time
  const now = new Date()
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  const currentDay = days[now.getDay()]

  // Format current time as HH:MM
  const hours = now.getHours().toString().padStart(2, "0")
  const minutes = now.getMinutes().toString().padStart(2, "0")
  const currentTime = `${hours}:${minutes}`

  // If it's Sunday or no classes for the day, return null
  if (currentDay === "sunday" || !timetableData[section] || !timetableData[section][currentDay]) {
    return null
  }

  // For students, find the current class based on time
  if (userType === "student") {
    return timetableData[section][currentDay].find((slot) => {
      const [startTime, endTime] = slot.time.split("-")
      const formattedStartTime = startTime.replace(":", "").padStart(4, "0")
      const formattedEndTime = endTime.replace(":", "").padStart(4, "0")
      const formattedCurrentTime = currentTime.replace(":", "")

      return formattedCurrentTime >= formattedStartTime && formattedCurrentTime <= formattedEndTime
    })
  }

  // For teachers, find if they're teaching any class right now
  if (userType === "teacher") {
    // Check all sections
    for (const sectionKey of Object.keys(timetableData)) {
      if (timetableData[sectionKey][currentDay]) {
        const teachingNow = timetableData[sectionKey][currentDay].find((slot) => {
          const [startTime, endTime] = slot.time.split("-")
          const formattedStartTime = startTime.replace(":", "").padStart(4, "0")
          const formattedEndTime = endTime.replace(":", "").padStart(4, "0")
          const formattedCurrentTime = currentTime.replace(":", "")

          return (
            formattedCurrentTime >= formattedStartTime &&
            formattedCurrentTime <= formattedEndTime &&
            slot.teacher.includes(teacherShortName)
          )
        })

        if (teachingNow) {
          return {
            ...teachingNow,
            section: sectionKey,
          }
        }
      }
    }
  }

  return null
}
