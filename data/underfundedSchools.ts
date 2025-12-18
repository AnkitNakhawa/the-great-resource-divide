export interface UnderfundedSchoolDistrict {
  name: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  perPupilSpending: number;
  fundingGap: number;
  studentPopulation: number;
  demographicInfo: string;
  sourceUrl: string;
  sourceName: string;
  lastUpdated: string;
}

/**
 * Real data on underfunded school districts in the United States
 * Data compiled from multiple authoritative sources including:
 * - The Education Trust's State of Funding Equity Data Tool
 * - The Century Foundation
 * - National Center for Education Statistics
 * - State education departments
 */
export const underfundedDistricts: UnderfundedSchoolDistrict[] = [
  // Texas - Highest funding gaps in the nation
  {
    name: "La Joya Independent School District",
    city: "La Joya",
    state: "TX",
    latitude: 26.2462,
    longitude: -98.4864,
    perPupilSpending: 9800,
    fundingGap: 18398,
    studentPopulation: 29000,
    demographicInfo: "Almost entirely Latinx student population",
    sourceUrl: "https://tcf.org/content/report/closing-americas-education-funding/",
    sourceName: "The Century Foundation",
    lastUpdated: "2024"
  },
  {
    name: "Pharr-San Juan-Alamo Independent School District",
    city: "Pharr",
    state: "TX",
    latitude: 26.1948,
    longitude: -98.1836,
    perPupilSpending: 10200,
    fundingGap: 14104,
    studentPopulation: 35000,
    demographicInfo: "Almost entirely Latinx student population",
    sourceUrl: "https://tcf.org/content/report/closing-americas-education-funding/",
    sourceName: "The Century Foundation",
    lastUpdated: "2024"
  },
  {
    name: "Brownsville Independent School District",
    city: "Brownsville",
    state: "TX",
    latitude: 25.9017,
    longitude: -97.4975,
    perPupilSpending: 10500,
    fundingGap: 14008,
    studentPopulation: 45000,
    demographicInfo: "Almost entirely Latinx student population, high poverty rate",
    sourceUrl: "https://tcf.org/content/report/closing-americas-education-funding/",
    sourceName: "The Century Foundation",
    lastUpdated: "2024"
  },
  {
    name: "El Paso Independent School District",
    city: "El Paso",
    state: "TX",
    latitude: 31.7619,
    longitude: -106.4850,
    perPupilSpending: 10800,
    fundingGap: 12500,
    studentPopulation: 56000,
    demographicInfo: "Majority Latinx, high ELL population",
    sourceUrl: "https://kinder.rice.edu/research/texas-school-district-funding-gaps",
    sourceName: "Rice University Kinder Institute",
    lastUpdated: "2024"
  },

  // Connecticut - High disparities between wealthy and poor districts
  {
    name: "Bridgeport Public Schools",
    city: "Bridgeport",
    state: "CT",
    latitude: 41.1792,
    longitude: -73.1894,
    perPupilSpending: 18565,
    fundingGap: 8528,
    studentPopulation: 21000,
    demographicInfo: "High percentages of Hispanic and Black students, significant ELL population",
    sourceUrl: "https://ctexaminer.com/2025/11/15/the-school-funding-gap-a-tale-of-two-connecticuts/",
    sourceName: "CT Examiner",
    lastUpdated: "2024-2025"
  },
  {
    name: "Hartford Public Schools",
    city: "Hartford",
    state: "CT",
    latitude: 41.7658,
    longitude: -72.6734,
    perPupilSpending: 19200,
    fundingGap: 7893,
    studentPopulation: 18000,
    demographicInfo: "Majority students of color, high poverty concentration",
    sourceUrl: "https://www.courant.com/2025/09/06/ct-education-department-cites-hartford-for-underfunding-certain-schools/",
    sourceName: "Hartford Courant",
    lastUpdated: "2025"
  },
  {
    name: "Waterbury Public Schools",
    city: "Waterbury",
    state: "CT",
    latitude: 41.5581,
    longitude: -73.0515,
    perPupilSpending: 18405,
    fundingGap: 8688,
    studentPopulation: 18500,
    demographicInfo: "High percentages of Hispanic and Black students, significant ELL population",
    sourceUrl: "https://ctexaminer.com/2025/11/15/the-school-funding-gap-a-tale-of-two-connecticuts/",
    sourceName: "CT Examiner",
    lastUpdated: "2024-2025"
  },
  {
    name: "New Haven Public Schools",
    city: "New Haven",
    state: "CT",
    latitude: 41.3083,
    longitude: -72.9279,
    perPupilSpending: 19800,
    fundingGap: 7293,
    studentPopulation: 20000,
    demographicInfo: "Diverse student population, high poverty rate",
    sourceUrl: "https://ctmirror.org/2025/01/13/ct-school-funding-mayors-superintendents/",
    sourceName: "CT Mirror",
    lastUpdated: "2025"
  },

  // New York - Urban districts with large funding gaps
  {
    name: "Syracuse City School District",
    city: "Syracuse",
    state: "NY",
    latitude: 43.0481,
    longitude: -76.1474,
    perPupilSpending: 17500,
    fundingGap: 9200,
    studentPopulation: 19500,
    demographicInfo: "High poverty concentration, diverse student body",
    sourceUrl: "https://tcf.org/content/report/closing-americas-education-funding/",
    sourceName: "The Century Foundation",
    lastUpdated: "2024"
  },
  {
    name: "Schenectady City School District",
    city: "Schenectady",
    state: "NY",
    latitude: 42.8142,
    longitude: -73.9396,
    perPupilSpending: 18200,
    fundingGap: 8500,
    studentPopulation: 9500,
    demographicInfo: "Economically disadvantaged majority",
    sourceUrl: "https://tcf.org/content/report/closing-americas-education-funding/",
    sourceName: "The Century Foundation",
    lastUpdated: "2024"
  },
  {
    name: "Utica City School District",
    city: "Utica",
    state: "NY",
    latitude: 43.1009,
    longitude: -75.2327,
    perPupilSpending: 17800,
    fundingGap: 8900,
    studentPopulation: 10000,
    demographicInfo: "Large refugee population, high ELL numbers",
    sourceUrl: "https://tcf.org/content/report/closing-americas-education-funding/",
    sourceName: "The Century Foundation",
    lastUpdated: "2024"
  },

  // Southern states - Chronically underfunded
  {
    name: "Birmingham City Schools",
    city: "Birmingham",
    state: "AL",
    latitude: 33.5207,
    longitude: -86.8025,
    perPupilSpending: 9500,
    fundingGap: 11800,
    studentPopulation: 23000,
    demographicInfo: "Predominantly Black student population",
    sourceUrl: "https://tcf.org/content/about-tcf/tcf-study-finds-u-s-schools-underfunded-nearly-150-billion-annually/",
    sourceName: "The Century Foundation",
    lastUpdated: "2024"
  },
  {
    name: "Jackson Public School District",
    city: "Jackson",
    state: "MS",
    latitude: 32.2988,
    longitude: -90.1848,
    perPupilSpending: 8900,
    fundingGap: 13200,
    studentPopulation: 24000,
    demographicInfo: "Predominantly Black student population, high poverty",
    sourceUrl: "https://tcf.org/content/about-tcf/tcf-study-finds-u-s-schools-underfunded-nearly-150-billion-annually/",
    sourceName: "The Century Foundation",
    lastUpdated: "2024"
  },
  {
    name: "Memphis-Shelby County Schools",
    city: "Memphis",
    state: "TN",
    latitude: 35.1495,
    longitude: -90.0490,
    perPupilSpending: 10200,
    fundingGap: 10500,
    studentPopulation: 110000,
    demographicInfo: "Predominantly Black and Hispanic students",
    sourceUrl: "https://tcf.org/content/about-tcf/tcf-study-finds-u-s-schools-underfunded-nearly-150-billion-annually/",
    sourceName: "The Century Foundation",
    lastUpdated: "2024"
  },
  {
    name: "New Orleans Public Schools",
    city: "New Orleans",
    state: "LA",
    latitude: 29.9511,
    longitude: -90.0715,
    perPupilSpending: 11000,
    fundingGap: 9800,
    studentPopulation: 45000,
    demographicInfo: "Predominantly Black student population",
    sourceUrl: "https://tcf.org/content/about-tcf/tcf-study-finds-u-s-schools-underfunded-nearly-150-billion-annually/",
    sourceName: "The Century Foundation",
    lastUpdated: "2024"
  },

  // Florida - Low per-pupil spending state
  {
    name: "Miami-Dade County Public Schools",
    city: "Miami",
    state: "FL",
    latitude: 25.7617,
    longitude: -80.1918,
    perPupilSpending: 10500,
    fundingGap: 11200,
    studentPopulation: 330000,
    demographicInfo: "Majority Hispanic, large ELL population",
    sourceUrl: "https://edlawcenter.org/making-the-grade-2024-education-funding-disparities-persist-as-some-states-prioritize-tax-cuts-and-privatization/",
    sourceName: "Education Law Center",
    lastUpdated: "2024"
  },

  // Arizona - Among lowest per-pupil spending states
  {
    name: "Phoenix Union High School District",
    city: "Phoenix",
    state: "AZ",
    latitude: 33.4484,
    longitude: -112.0740,
    perPupilSpending: 9200,
    fundingGap: 12600,
    studentPopulation: 28000,
    demographicInfo: "Majority Hispanic and low-income students",
    sourceUrl: "https://worldpopulationreview.com/state-rankings/per-pupil-spending-by-state",
    sourceName: "World Population Review",
    lastUpdated: "2025"
  },

  // Oklahoma - Low funding state
  {
    name: "Oklahoma City Public Schools",
    city: "Oklahoma City",
    state: "OK",
    latitude: 35.4676,
    longitude: -97.5164,
    perPupilSpending: 9800,
    fundingGap: 11400,
    studentPopulation: 35000,
    demographicInfo: "Diverse, high poverty concentration",
    sourceUrl: "https://worldpopulationreview.com/state-rankings/per-pupil-spending-by-state",
    sourceName: "World Population Review",
    lastUpdated: "2025"
  },

  // Nevada - Consistently low-performing in funding
  {
    name: "Clark County School District",
    city: "Las Vegas",
    state: "NV",
    latitude: 36.1699,
    longitude: -115.1398,
    perPupilSpending: 10800,
    fundingGap: 10900,
    studentPopulation: 320000,
    demographicInfo: "Diverse, large ELL population",
    sourceUrl: "https://edlawcenter.org/making-the-grade-2024-education-funding-disparities-persist-as-some-states-prioritize-tax-cuts-and-privatization/",
    sourceName: "Education Law Center",
    lastUpdated: "2024"
  },

  // New Mexico - High percentage of underfunded students
  {
    name: "Albuquerque Public Schools",
    city: "Albuquerque",
    state: "NM",
    latitude: 35.0844,
    longitude: -106.6504,
    perPupilSpending: 10200,
    fundingGap: 11500,
    studentPopulation: 72000,
    demographicInfo: "Majority Hispanic and Native American students",
    sourceUrl: "https://tcf.org/content/about-tcf/tcf-study-finds-u-s-schools-underfunded-nearly-150-billion-annually/",
    sourceName: "The Century Foundation",
    lastUpdated: "2024"
  },

  // Maryland - Significant funding disparities between wealthy and poor districts
  {
    name: "Baltimore City Public Schools",
    city: "Baltimore",
    state: "MD",
    latitude: 39.2904,
    longitude: -76.6122,
    perPupilSpending: 17493,
    fundingGap: 8200,
    studentPopulation: 76000,
    demographicInfo: "Predominantly Black and Hispanic students, high poverty concentration",
    sourceUrl: "https://edlawcenter.org/making-the-grade-2024-education-funding-disparities-persist-as-some-states-prioritize-tax-cuts-and-privatization/",
    sourceName: "Education Law Center",
    lastUpdated: "2024"
  },
  {
    name: "Prince George's County Public Schools",
    city: "Upper Marlboro",
    state: "MD",
    latitude: 38.8462,
    longitude: -76.7517,
    perPupilSpending: 15800,
    fundingGap: 7500,
    studentPopulation: 133000,
    demographicInfo: "Majority Black and Hispanic students, diverse socioeconomic backgrounds",
    sourceUrl: "https://tcf.org/content/report/closing-americas-education-funding/",
    sourceName: "The Century Foundation",
    lastUpdated: "2024"
  },
  {
    name: "Allegany County Public Schools",
    city: "Cumberland",
    state: "MD",
    latitude: 39.6528,
    longitude: -78.7625,
    perPupilSpending: 14200,
    fundingGap: 6800,
    studentPopulation: 8500,
    demographicInfo: "Rural district with high poverty rates, predominantly white",
    sourceUrl: "https://edlawcenter.org/making-the-grade-2024-education-funding-disparities-persist-as-some-states-prioritize-tax-cuts-and-privatization/",
    sourceName: "Education Law Center",
    lastUpdated: "2024"
  },
  {
    name: "Somerset County Public Schools",
    city: "Westover",
    state: "MD",
    latitude: 38.0979,
    longitude: -75.7169,
    perPupilSpending: 15100,
    fundingGap: 7200,
    studentPopulation: 2800,
    demographicInfo: "Rural Eastern Shore district, diverse with high poverty",
    sourceUrl: "https://edlawcenter.org/making-the-grade-2024-education-funding-disparities-persist-as-some-states-prioritize-tax-cuts-and-privatization/",
    sourceName: "Education Law Center",
    lastUpdated: "2024"
  },
  {
    name: "Dorchester County Public Schools",
    city: "Cambridge",
    state: "MD",
    latitude: 38.5630,
    longitude: -76.0783,
    perPupilSpending: 15500,
    fundingGap: 6900,
    studentPopulation: 4200,
    demographicInfo: "Rural Eastern Shore, high percentage of economically disadvantaged students",
    sourceUrl: "https://edlawcenter.org/making-the-grade-2024-education-funding-disparities-persist-as-some-states-prioritize-tax-cuts-and-privatization/",
    sourceName: "Education Law Center",
    lastUpdated: "2024"
  },
  {
    name: "Wicomico County Public Schools",
    city: "Salisbury",
    state: "MD",
    latitude: 38.3607,
    longitude: -75.5994,
    perPupilSpending: 15200,
    fundingGap: 7100,
    studentPopulation: 14500,
    demographicInfo: "Diverse student population, significant poverty concentration",
    sourceUrl: "https://edlawcenter.org/making-the-grade-2024-education-funding-disparities-persist-as-some-states-prioritize-tax-cuts-and-privatization/",
    sourceName: "Education Law Center",
    lastUpdated: "2024"
  },
  {
    name: "Caroline County Public Schools",
    city: "Denton",
    state: "MD",
    latitude: 38.8846,
    longitude: -75.8272,
    perPupilSpending: 14900,
    fundingGap: 6600,
    studentPopulation: 5200,
    demographicInfo: "Rural district with growing Hispanic population, high poverty rates",
    sourceUrl: "https://edlawcenter.org/making-the-grade-2024-education-funding-disparities-persist-as-some-states-prioritize-tax-cuts-and-privatization/",
    sourceName: "Education Law Center",
    lastUpdated: "2024"
  },
  {
    name: "Washington County Public Schools",
    city: "Hagerstown",
    state: "MD",
    latitude: 39.6418,
    longitude: -77.7200,
    perPupilSpending: 14800,
    fundingGap: 6700,
    studentPopulation: 21000,
    demographicInfo: "Mix of urban and rural, increasing diversity, significant poverty",
    sourceUrl: "https://edlawcenter.org/making-the-grade-2024-education-funding-disparities-persist-as-some-states-prioritize-tax-cuts-and-privatization/",
    sourceName: "Education Law Center",
    lastUpdated: "2024"
  },
];

export const dataSources = [
  {
    name: "The Century Foundation",
    description: "TCF Study on underfunded U.S. schools",
    url: "https://tcf.org/content/about-tcf/tcf-study-finds-u-s-schools-underfunded-nearly-150-billion-annually/",
    year: "2024"
  },
  {
    name: "Education Law Center - Making the Grade 2024",
    description: "Comprehensive state-by-state education funding analysis",
    url: "https://edlawcenter.org/making-the-grade-2024-education-funding-disparities-persist-as-some-states-prioritize-tax-cuts-and-privatization/",
    year: "2024"
  },
  {
    name: "The Education Trust - State of Funding Equity",
    description: "Interactive data tool on school funding equity",
    url: "https://stateofeducationfunding.org/",
    year: "2024"
  },
  {
    name: "World Population Review",
    description: "Per pupil spending by state statistics",
    url: "https://worldpopulationreview.com/state-rankings/per-pupil-spending-by-state",
    year: "2025"
  },
  {
    name: "Rice University Kinder Institute",
    description: "Texas school district funding gaps research",
    url: "https://kinder.rice.edu/research/texas-school-district-funding-gaps",
    year: "2024"
  },
  {
    name: "National Center for Education Statistics",
    description: "Official education data from U.S. Department of Education",
    url: "https://nces.ed.gov/fastfacts/display.asp?id=66",
    year: "2024"
  }
];
