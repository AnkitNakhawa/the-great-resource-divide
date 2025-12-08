# The Great Resource Divide

A data visualization campaign highlighting inequitable school funding and resource distribution across America.

## Overview

This project visualizes the stark disparities in educational resources between wealthy and under-resourced schools. Through interactive data visualizations and an interactive map, we demonstrate how funding inequalities affect:

- **Per-pupil spending** - Wealthy schools receive over 2.5x more funding per student
- **Teacher experience** - More experienced educators concentrated in well-funded schools
- **AP course availability** - Advanced learning opportunities limited in under-resourced areas
- **Extracurricular programs** - Significant gaps in enrichment activities
- **Student outcomes** - Direct correlation between funding and graduation rates

### Features

1. **Main Dashboard** - Comparative visualizations showing average disparities between wealthy and under-resourced schools
2. **Interactive Map** - Real data on 20 underfunded school districts across America, with:
   - Detailed funding gap information for each district
   - Per-pupil spending data
   - Student demographics
   - Direct links to authoritative data sources
   - Coverage of districts in TX, CT, NY, AL, MS, TN, LA, FL, AZ, OK, NV, and NM

## The Issue

In the United States, school funding is heavily dependent on local property taxes, creating massive disparities between wealthy and low-income areas. This systemic inequality perpetuates cycles of poverty and limits opportunities for millions of students.

## Call to Action

### Support Weighted Student Funding

Advocate for funding formulas that provide additional resources to schools serving students with greater needs, rather than relying solely on local property taxes.

### Demand Transparency

Push for public reporting of school-level spending data so communities can see exactly how resources are distributed across districts.

### Contact Your Representatives

Let your local, state, and federal representatives know that equitable school funding is a priority.

## Tech Stack

- **Next.js** - React framework for production
- **TypeScript** - Type-safe development
- **Recharts** - Chart and data visualization library
- **Leaflet** - Interactive map library
- **React Leaflet** - React components for Leaflet maps
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AnkitNakhawa/the-great-resource-divide.git
cd the-great-resource-divide
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy automatically

Alternatively, deploy with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AnkitNakhawa/the-great-resource-divide)

## Project Structure

```
the-great-resource-divide/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (main dashboard)
│   ├── map/
│   │   └── page.tsx        # Interactive map page
│   └── globals.css         # Global styles
├── components/
│   ├── SpendingComparison.tsx      # Per-pupil spending chart
│   ├── TeacherExperience.tsx       # Teacher experience chart
│   ├── OpportunitiesComparison.tsx # AP & extracurricular chart
│   ├── OutcomesComparison.tsx      # Graduation & class size chart
│   └── SchoolMap.tsx               # Interactive Leaflet map
├── data/
│   ├── schoolData.ts               # Sample school data
│   └── underfundedSchools.ts       # Real underfunded schools data
└── public/                         # Static assets
```

## Data Sources

### Main Dashboard

The comparative visualizations are based on data patterns from:

- National Center for Education Statistics (NCES)
- EdBuild
- The Education Trust

*Note: The specific numbers shown on the main dashboard are averaged examples created to illustrate systemic disparities.*

### Interactive Map

The interactive map features real data on underfunded school districts from authoritative sources:

- **[The Century Foundation](https://tcf.org/)** - Comprehensive analysis of school funding gaps
- **[Education Law Center](https://edlawcenter.org/)** - "Making the Grade 2024" state-by-state funding reports
- **[The Education Trust](https://stateofeducationfunding.org/)** - State of Funding Equity Data Tool
- **[Rice University Kinder Institute](https://kinder.rice.edu/)** - Texas school district funding research
- **[National Center for Education Statistics](https://nces.ed.gov/)** - Official U.S. Department of Education data
- **[World Population Review](https://worldpopulationreview.com/)** - State-by-state education statistics

All data points on the map are hyperlinked to their original sources for verification and further research.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC

## Contact

For questions or suggestions, please open an issue on GitHub.

---

**Every student deserves access to quality education, regardless of their zip code.**
