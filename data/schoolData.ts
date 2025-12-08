export interface SchoolData {
  name: string;
  type: "wealthy" | "under-resourced";
  perPupilSpending: number;
  avgTeacherExperience: number;
  apCoursesAvailable: number;
  extracurricularPrograms: number;
  studentTeacherRatio: number;
  graduationRate: number;
}

export const schoolsData: SchoolData[] = [
  // Wealthy Schools
  {
    name: "Lincoln Prep Academy",
    type: "wealthy",
    perPupilSpending: 28500,
    avgTeacherExperience: 14,
    apCoursesAvailable: 24,
    extracurricularPrograms: 35,
    studentTeacherRatio: 12,
    graduationRate: 98,
  },
  {
    name: "Westfield High School",
    type: "wealthy",
    perPupilSpending: 26800,
    avgTeacherExperience: 13,
    apCoursesAvailable: 22,
    extracurricularPrograms: 32,
    studentTeacherRatio: 13,
    graduationRate: 97,
  },
  {
    name: "Riverside Academy",
    type: "wealthy",
    perPupilSpending: 30200,
    avgTeacherExperience: 15,
    apCoursesAvailable: 26,
    extracurricularPrograms: 38,
    studentTeacherRatio: 11,
    graduationRate: 99,
  },
  {
    name: "Oakmont Preparatory",
    type: "wealthy",
    perPupilSpending: 27900,
    avgTeacherExperience: 14,
    apCoursesAvailable: 23,
    extracurricularPrograms: 34,
    studentTeacherRatio: 12,
    graduationRate: 98,
  },
  {
    name: "Summit Ridge School",
    type: "wealthy",
    perPupilSpending: 29100,
    avgTeacherExperience: 15,
    apCoursesAvailable: 25,
    extracurricularPrograms: 36,
    studentTeacherRatio: 11,
    graduationRate: 99,
  },

  // Under-resourced Schools
  {
    name: "Jefferson High School",
    type: "under-resourced",
    perPupilSpending: 11200,
    avgTeacherExperience: 6,
    apCoursesAvailable: 5,
    extracurricularPrograms: 8,
    studentTeacherRatio: 28,
    graduationRate: 72,
  },
  {
    name: "Martin Luther King Jr. High",
    type: "under-resourced",
    perPupilSpending: 10800,
    avgTeacherExperience: 5,
    apCoursesAvailable: 4,
    extracurricularPrograms: 7,
    studentTeacherRatio: 30,
    graduationRate: 68,
  },
  {
    name: "Roosevelt Community School",
    type: "under-resourced",
    perPupilSpending: 12100,
    avgTeacherExperience: 7,
    apCoursesAvailable: 6,
    extracurricularPrograms: 9,
    studentTeacherRatio: 27,
    graduationRate: 75,
  },
  {
    name: "Washington High School",
    type: "under-resourced",
    perPupilSpending: 11500,
    avgTeacherExperience: 6,
    apCoursesAvailable: 5,
    extracurricularPrograms: 8,
    studentTeacherRatio: 29,
    graduationRate: 70,
  },
  {
    name: "Jackson Secondary School",
    type: "under-resourced",
    perPupilSpending: 10500,
    avgTeacherExperience: 5,
    apCoursesAvailable: 4,
    extracurricularPrograms: 6,
    studentTeacherRatio: 31,
    graduationRate: 66,
  },
];

export const aggregateData = {
  wealthy: {
    avgPerPupilSpending: 28500,
    avgTeacherExperience: 14.2,
    avgApCourses: 24,
    avgExtracurricular: 35,
    avgStudentTeacherRatio: 11.8,
    avgGraduationRate: 98.2,
  },
  underResourced: {
    avgPerPupilSpending: 11220,
    avgTeacherExperience: 5.8,
    avgApCourses: 4.8,
    avgExtracurricular: 7.6,
    avgStudentTeacherRatio: 29,
    avgGraduationRate: 70.2,
  },
};
