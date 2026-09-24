export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tools: string[];
  businessProblem: string;
  objective: string;
  datasetInfo: string;
  dataPreparation: string[];
  analyticalApproach: string[];
  kpis: { label: string; value: string; trend?: string; description: string }[];
  keyInsights: string[];
  businessRecommendations: string[];
  chartData: {
    trendData: { name: string; value: number; benchmark?: number }[];
    categoryData: { name: string; value: number; color?: string }[];
    segmentData?: { name: string; metricA: number; metricB: number }[];
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  impactTags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  details: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string; isPrimary?: boolean }[];
}

export interface PortfolioData {
  personal: {
    name: string;
    roleTitle: string;
    headline: string;
    subheadline: string;
    location: string;
    emailPlaceholder: string;
    linkedInPlaceholder: string;
    gitHubPlaceholder: string;
    resumePath: string;
    bioParagraphs: string[];
    whatIBring: { title: string; description: string; icon: string }[];
  };
  approach: {
    step: string;
    number: string;
    title: string;
    description: string;
    details: string[];
  }[];
  experiences: ExperienceItem[];
  skills: SkillCategory[];
  education: EducationItem[];
  projects: CaseStudy[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Hiren Patel",
    roleTitle: "Data Analyst | Business Analyst",
    headline: "Turning Data Into Clear Business Decisions.",
    subheadline:
      "Data Analyst and Business Analytics professional with a strong technical foundation in SQL, Python, Excel, Power BI, and relational databases. I transform raw structured data into clear insights, interactive dashboards, and actionable business recommendations.",
    location: "Gujarat, India",
    emailPlaceholder: "h.p.patel.tech@gmail.com",
    linkedInPlaceholder: "https://www.linkedin.com/in/hirenpatel555/",
    gitHubPlaceholder: "https://github.com/HirenPatel555",
    resumePath: "/resume/Hiren Patoliya DA (cv).pdf", // EDIT YOUR RESUME PATH HERE

    bioParagraphs: [
      "I am an analytics professional pursuing an MBA in Business Analytics with a Bachelor's degree in Information Technology. My background combines technical systems understanding—such as relational database schemas, backend APIs, and SQL query structure—with business-focused analytical thinking.",
      "Rather than treating data analysis purely as a technical coding task, I bridge the gap between technical datasets and executive strategy. I clean, explore, and model structured data to uncover hidden patterns, evaluate KPIs, and deliver recommendations that directly impact business growth and operational efficiency.",
      "Whether optimizing inventory cycles, evaluating customer churn drivers, or analyzing multi-region e-commerce sales performance, my focus remains constant: translating complex raw data into clear, reliable, and actionable decision metrics."
    ],
    whatIBring: [
      {
        title: "Data Preparation & Validation",
        description: "Cleaning messy datasets, identifying anomalies, normalizing attributes, and establishing standardized quality controls.",
        icon: "FileSpreadsheet"
      },
      {
        title: "SQL & Relational Databases",
        description: "Writing complex queries, joins, CTEs, window functions, and understanding backend data architectures.",
        icon: "Database"
      },
      {
        title: "Exploratory Data Analysis",
        description: "Uncovering correlations, evaluating metric distributions, detecting outliers, and discovering core business drivers.",
        icon: "Search"
      },
      {
        title: "Business Requirement Analysis",
        description: "Translating ambiguous stakeholder requests into quantitative questions, KPI metrics, and analytical workflows.",
        icon: "Target"
      },
      {
        title: "BI Dashboards & Visualization",
        description: "Designing clean, executive-ready Power BI and Excel dashboards focused on readability and intuitive decision-making.",
        icon: "BarChart3"
      },
      {
        title: "Data-Driven Recommendations",
        description: "Synthesizing analytical findings into concise, actionable strategies that guide business leaders toward better outcomes.",
        icon: "Lightbulb"
      }
    ]
  },

  approach: [
    {
      step: "01",
      number: "01",
      title: "Understand",
      description: "Deconstruct business objectives and stakeholder requirements.",
      details: [
        "Identify key business metrics and underlying objectives",
        "Formulate precise analytical questions",
        "Define scope, target outcomes, and success criteria"
      ]
    },
    {
      step: "02",
      number: "02",
      title: "Analyze",
      description: "Collect, clean, model, and explore structured data.",
      details: [
        "Audit data quality, remove duplicates, & handle missing values",
        "Execute SQL queries, aggregations, and CTE transformations",
        "Perform statistical exploratory data analysis in Python / Excel"
      ]
    },
    {
      step: "03",
      number: "03",
      title: "Communicate",
      description: "Transform complex analytical outputs into visual insights.",
      details: [
        "Build intuitive, interactive Power BI & Excel dashboards",
        "Design visual KPI scorecards for immediate executive clarity",
        "Present data stories highlighting trends and anomalies"
      ]
    },
    {
      step: "04",
      number: "04",
      title: "Recommend",
      description: "Translate quantitative findings into practical business decisions.",
      details: [
        "Develop risk-mitigated action steps based on findings",
        "Quantify potential ROI and business impact",
        "Establish ongoing tracking metrics to measure strategy success"
      ]
    }
  ],

  experiences: [
    {
      id: "dolphin-web",
      role: "Product Data & Content Associate",
      company: "Dolphin Web Solution",
      location: "Ahmedabad, Gujarat",
      period: "Feb 2026 – Present",
      isCurrent: true,
      type: "Full-Time",
      description: "Manage, audit, and optimize large-scale structured product datasets through enterprise administrative panels while enforcing strict data consistency guidelines.",
      responsibilities: [
        "Manage and publish structured product data through administrative content panels for enterprise client applications.",
        "Maintain data integrity, accuracy, and completeness across thousands of active product inventory records.",
        "Upload and optimize product metadata, attributes, categorization tags, and technical specifications for end-user clarity.",
        "Identify and resolve structured data inconsistencies, duplicate entries, and missing attribute values.",
        "Establish standardized verification workflows to streamline multi-channel product updates and maintain data quality."
      ],
      technologies: ["Structured Data", "Data Cleaning", "Data Validation", "Data Quality Audit", "Admin Panels", "Excel"],
      impactTags: ["Structured Dataset Management", "Data Accuracy Control", "Data Hygiene"]
    },
    {
      id: "memento-tech",
      role: "Laravel Developer Intern",
      company: "Memento Technologies",
      location: "Junagadh, Gujarat",
      period: "Jun 2025 – Dec 2025",
      isCurrent: false,
      type: "Internship",
      description: "Gained hands-on experience with relational databases, backend schema design, SQL query creation, and API data flows in a web development environment.",
      responsibilities: [
        "Developed and maintained backend application features using PHP, Laravel framework, and MySQL relational databases.",
        "Designed database tables, schemas, relationships (1:N, N:M), migrations, and backend CRUD functionality.",
        "Wrote and optimized SQL queries for application data fetching, filtering, and reporting requirements.",
        "Created and consumed RESTful APIs processing structured JSON payloads for frontend-backend integration.",
        "Debugged application logic and database performance issues, strengthening core understanding of relational data structures."
      ],
      technologies: ["MySQL", "SQL Queries", "PHP", "Laravel", "Relational Databases", "REST APIs", "Git"],
      impactTags: ["Relational Database Architecture", "SQL Query Optimization", "Backend Systems Understanding"]
    }
  ],

  skills: [
    {
      title: "DATA ANALYTICS",
      description: "Core analytical methods, data wrangling tools, and quantitative query languages.",
      skills: [
        { name: "SQL", level: "Advanced", isPrimary: true },
        { name: "Python", level: "Proficient", isPrimary: true },
        { name: "Pandas", level: "Proficient", isPrimary: true },
        { name: "NumPy", level: "Proficient" },
        { name: "Exploratory Data Analysis (EDA)", level: "Advanced", isPrimary: true },
        { name: "Data Cleaning & Preparation", level: "Advanced", isPrimary: true },
        { name: "Data Validation", level: "Proficient" }
      ]
    },
    {
      title: "BUSINESS ANALYTICS",
      description: "Frameworks for translating business objectives into measurable indicators.",
      skills: [
        { name: "Business Analysis", level: "Advanced", isPrimary: true },
        { name: "Requirement Gathering", level: "Advanced", isPrimary: true },
        { name: "KPI Definition & Analysis", level: "Advanced", isPrimary: true },
        { name: "Trend Analysis", level: "Proficient" },
        { name: "Problem Solving", level: "Advanced" },
        { name: "Data-Driven Decision Making", level: "Advanced", isPrimary: true }
      ]
    },
    {
      title: "DATA VISUALIZATION",
      description: "Business intelligence tools for creating executive dashboards and reports.",
      skills: [
        { name: "Power BI", level: "Advanced", isPrimary: true },
        { name: "Microsoft Excel", level: "Advanced", isPrimary: true },
        { name: "Advanced Formulas & Pivot Tables", level: "Advanced" },
        { name: "Interactive Dashboards", level: "Advanced", isPrimary: true },
        { name: "Executive Storytelling", level: "Proficient" }
      ]
    },
    {
      title: "DATABASES & MANAGEMENT",
      description: "Database engines, relational modeling, and dataset management.",
      skills: [
        { name: "MySQL", level: "Advanced", isPrimary: true },
        { name: "Relational Database Design", level: "Advanced" },
        { name: "Complex SQL Joins & CTEs", level: "Advanced", isPrimary: true },
        { name: "Window Functions", level: "Proficient" },
        { name: "Data Management & Hygiene", level: "Advanced" }
      ]
    },
    {
      title: "TECHNICAL BACKGROUND",
      description: "Software engineering concepts that differentiate database analytical work.",
      skills: [
        { name: "PHP", level: "Intermediate" },
        { name: "Laravel", level: "Intermediate" },
        { name: "RESTful APIs & JSON", level: "Proficient" },
        { name: "Git & GitHub", level: "Proficient" },
        { name: "HTML / CSS Basics", level: "Proficient" }
      ]
    }
  ],

  education: [
    {
      id: "mba-analytics",
      degree: "Master of Business Administration (MBA)",
      institution: "Parul University",
      location: "Vadodara, Gujarat",
      period: "2026 – 2028",
      details: "Specialization in Business Analytics. Focus on advanced business metrics, decision science, predictive modeling frameworks, and strategic management.",
      highlights: [
        "Specialized coursework in Business Intelligence & Decision Support Systems",
        "Applied quantitative methods to organizational problem solving",
        "Statistical modeling for marketing and financial dataset evaluation"
      ]
    },
    {
      id: "bachelor-it",
      degree: "Bachelor's Degree in Information Technology",
      institution: "Noble University",
      location: "Junagadh, Gujarat",
      period: "2023 – 2026",
      details: "Comprehensive foundation in computer science, database management systems (DBMS), data structures, software engineering, and web applications.",
      highlights: [
        "Core focus on Relational Database Management Systems (RDBMS) & SQL",
        "Object-Oriented Programming (OOP) and Software Architecture",
        "Data structures, algorithms, and web application development"
      ]
    }
  ],

  projects: [
    {
      id: "ecommerce-sales-analysis",
      title: "E-Commerce Sales Performance Analysis",
      subtitle: "Identifying revenue growth drivers, category opportunities, and regional bottlenecks through transactional dataset analysis.",
      category: "Sales & Marketing Analytics",
      tools: ["Excel", "SQL", "Power BI"],
      businessProblem:
        "A multi-region e-commerce company noticed plateaued quarterly revenue despite steady website traffic growth. Leadership lacked clear visibility into which product categories drove margins, where return rates eroded profits, and how regional fulfillment performance impacted overall customer lifetime value.",
      objective:
        "Clean and analyze 45,000+ sales transaction records to isolate top-performing product categories, evaluate monthly revenue trends, pinpoint high-return SKUs, and present executive recommendations.",
      datasetInfo: "Sample multi-region e-commerce transactional dataset (45,000+ rows spanning 12 months with fields: Order ID, Timestamp, Customer ID, Region, Product Category, Unit Price, Quantity, Discount, Freight Cost, Return Status).",
      dataPreparation: [
        "Extracted raw transactional records into SQL staging environment and audited attribute data types.",
        "Handled missing values and standardized regional naming conventions across legacy store tables.",
        "Calculated net revenue per order after applying discount rates and accounting for freight overhead.",
        "Engineered flags for order returns, multi-item baskets, and repeat customer transactions."
      ],
      analyticalApproach: [
        "SQL Querying: Executed CTEs and Window Functions (SUM OVER, LAG) to measure month-over-month revenue growth.",
        "Category Breakdown: Grouped sales by Product Category and computed margin contribution versus return volume.",
        "Regional Comparison: Evaluated revenue density across 4 geographical sales zones.",
        "Power BI Dashboards: Modeled a star schema connecting Order, Customer, Product, and Territory dimension tables."
      ],
      kpis: [
        { label: "Total Analyzed Sales", value: "$2.42M", trend: "+14.2% YoY", description: "Aggregated annual transaction volume" },
        { label: "Avg Order Value (AOV)", value: "$84.50", trend: "+4.8%", description: "Net basket size per transaction" },
        { label: "Top Revenue Category", value: "Electronics", trend: "42% share", description: "$1.01M total category sales" },
        { label: "Average Return Rate", value: "3.1%", trend: "-0.4% QoQ", description: "Product return volume ratio" }
      ],
      keyInsights: [
        "Electronics accounted for 42% ($1.01M) of total revenue but suffered the highest return rate at 5.8% (primarily driven by sub-category audio accessories).",
        "Q4 seasonal campaigns generated 38% of annual revenue, with peak sales velocity occurring during November promotional events.",
        "Western Region led total sales volume ($890K), but Southern Region demonstrated the highest average order value ($96.20 vs $81.40 national average).",
        "Repeat customers generated 64% of total net revenue while representing only 38% of unique buyers, demonstrating high customer lifetime value."
      ],
      businessRecommendations: [
        "Perform a supplier quality audit on high-return audio accessory SKUs to lower the 5.8% return rate and save an estimated $34K annually.",
        "Bundle low-velocity Home & Kitchen items with high-demand Electronics during Q4 promotional events to clear excess inventory.",
        "Reallocate regional digital advertising spend toward the Southern Region to capitalize on its superior $96.20 Average Order Value."
      ],
      chartData: {
        trendData: [
          { name: "Jan", value: 145000, benchmark: 140000 },
          { name: "Feb", value: 162000, benchmark: 145000 },
          { name: "Mar", value: 178000, benchmark: 150000 },
          { name: "Apr", value: 155000, benchmark: 155000 },
          { name: "May", value: 189000, benchmark: 160000 },
          { name: "Jun", value: 210000, benchmark: 165000 },
          { name: "Jul", value: 195000, benchmark: 170000 },
          { name: "Aug", value: 205000, benchmark: 175000 },
          { name: "Sep", value: 220000, benchmark: 180000 },
          { name: "Oct", value: 265000, benchmark: 190000 },
          { name: "Nov", value: 310000, benchmark: 210000 },
          { name: "Dec", value: 286000, benchmark: 200000 }
        ],
        categoryData: [
          { name: "Electronics", value: 1016400, color: "#026fc7" },
          { name: "Apparel", value: 605000, color: "#36a9f7" },
          { name: "Home & Kitchen", value: 435600, color: "#7cc8fc" },
          { name: "Books & Media", value: 242000, color: "#bae0fd" },
          { name: "Beauty & Health", value: 121000, color: "#e0effe" }
        ],
        segmentData: [
          { name: "West Zone", metricA: 890000, metricB: 84.0 },
          { name: "South Zone", metricA: 640000, metricB: 96.2 },
          { name: "North Zone", metricA: 520000, metricB: 79.5 },
          { name: "East Zone", metricA: 370000, metricB: 76.8 }
        ]
      }
    },
    {
      id: "customer-churn-analysis",
      title: "Customer Churn & Retention Analysis",
      subtitle: "Evaluating subscription renewal drivers, high-risk churn indicators, and customer tenure patterns to boost customer retention.",
      category: "Customer Analytics & SaaS",
      tools: ["Python", "Pandas", "SQL", "Power BI"],
      businessProblem:
        "A subscription-based service observed an unexpected increase in customer churn from 7.2% to 11.2% over two consecutive quarters. Executive management needed to identify which subscriber cohorts were cancelling, understand root cause triggers, and implement proactive retention strategies.",
      objective:
        "Perform exploratory data analysis on subscriber activity logs and customer support records using Python (Pandas/NumPy) and SQL to identify key churn indicators and quantify financial impact.",
      datasetInfo: "Sample subscription analytics dataset containing 12,500 active and cancelled user accounts with attributes: Customer ID, Tenure Months, Contract Type, Monthly Charges, Support Tickets Logged, Payment Method, Churn Status.",
      dataPreparation: [
        "Imported customer activity data into Python environment using Pandas for data wrangling.",
        "Identified and imputed missing support ticket log timestamps.",
        "Engineered feature variables: 'Tenure Bracket', 'High Ticket Ratio', and 'Contract Risk Tier'.",
        "Cross-validated subscription churn labels against payment gateway transaction logs via SQL."
      ],
      analyticalApproach: [
        "Exploratory Data Analysis: Analyzed churn rates across billing cycles, payment types, and tenure cohorts.",
        "Correlation Analysis: Calculated correlation coefficients between customer service ticket frequency and cancellation rates.",
        "Cohort Segmentation: Segmented users by contract type (Month-to-Month vs 1-Year vs 2-Year contracts).",
        "Impact Modeling: Estimated Annual Recurring Revenue (ARR) saved per 1% reduction in churn rate."
      ],
      kpis: [
        { label: "Overall Churn Rate", value: "11.2%", trend: "+4.0% YoY", description: "Percentage of non-renewed accounts" },
        { label: "Avg Customer Tenure", value: "14.8 mo", trend: "Median 11 mo", description: "Average duration before cancellation" },
        { label: "High-Risk Segment Size", value: "1,420", trend: "11.3% of base", description: "Month-to-Month users with >2 tickets" },
        { label: "Potential Saved ARR", value: "$185K", trend: "Targeted impact", description: "Projected annual revenue saved" }
      ],
      keyInsights: [
        "Month-to-Month contract holders exhibited a 34.6% churn rate, compared to just 4.2% for 1-Year contracts and 1.8% for 2-Year contracts.",
        "Customers logging 3 or more technical support tickets within their first 90 days were 4.2x more likely to churn before month 6.",
        "Tenure drop-off peaked sharply between months 2 and 4, indicating onboarding friction and delayed time-to-value for new subscribers.",
        "Electronic check payment users had a 24.1% churn rate versus 8.3% for automated credit card auto-pay subscribers."
      ],
      businessRecommendations: [
        "Deploy a dedicated Customer Success onboarding workflow during months 1-3 to guide new subscribers past early adoption hurdles.",
        "Automate high-priority SLA triggers in support desk software when a Month-to-Month customer submits a second ticket in their first 60 days.",
        "Incentivize month-to-month subscribers with a 15% discount when upgrading to an annual subscription or setting up credit card auto-pay."
      ],
      chartData: {
        trendData: [
          { name: "0-3 Months", value: 32.4, benchmark: 10.0 },
          { name: "4-6 Months", value: 24.8, benchmark: 8.0 },
          { name: "7-12 Months", value: 14.2, benchmark: 6.0 },
          { name: "13-18 Months", value: 7.5, benchmark: 4.0 },
          { name: "19-24 Months", value: 4.1, benchmark: 3.0 },
          { name: "24+ Months", value: 2.1, benchmark: 2.0 }
        ],
        categoryData: [
          { name: "Month-to-Month", value: 34.6, color: "#ef4444" },
          { name: "1-Year Contract", value: 4.2, color: "#3b82f6" },
          { name: "2-Year Contract", value: 1.8, color: "#10b981" }
        ],
        segmentData: [
          { name: "0 Support Tickets", metricA: 4.5, metricB: 6500 },
          { name: "1 Support Ticket", metricA: 9.2, metricB: 3200 },
          { name: "2 Support Tickets", metricA: 18.6, metricB: 1800 },
          { name: "3+ Support Tickets", metricA: 38.4, metricB: 1000 }
        ]
      }
    },
    {
      id: "retail-inventory-analysis",
      title: "Retail Inventory & Operations Analysis",
      subtitle: "Optimizing inventory turnover, identifying stock-out risks, and balancing supply chain replenishment for 12 retail branch locations.",
      category: "Operations & Supply Chain",
      tools: ["SQL", "Excel", "Power BI"],
      businessProblem:
        "A regional retail chain faced operating margin pressure due to working capital tied up in slow-moving inventory alongside frequent stock-outs on top-selling items across 12 branch stores.",
      objective:
        "Analyze Point-of-Sale (POS) transactions and warehouse stock feeds using SQL queries and Excel modeling to calculate optimal reorder points, classify inventory velocity (ABC Analysis), and mitigate stock-out risks.",
      datasetInfo: "Sample retail operations dataset encompassing 8,200 unique SKUs across 12 store locations over 6 months (POS sales logs, warehouse stock ledgers, supplier lead times, carrying cost metrics).",
      dataPreparation: [
        "Joined daily POS sales logs with inventory balance snapshot files in SQL.",
        "Calculated daily burn rate per product SKU at individual store level.",
        "Segmented product portfolio into ABC inventory tiers based on annual dollar velocity.",
        "Identified stock-out occurrences by comparing zero-balance days against historical sales demand."
      ],
      analyticalApproach: [
        "ABC Inventory Classification: Ranked SKUs by revenue contribution (Class A: top 80% revenue, Class B: next 15%, Class C: bottom 5%).",
        "Reorder Point Modeling: Formulated Safety Stock = (Max Daily Sales x Max Lead Time) - (Avg Daily Sales x Avg Lead Time).",
        "Turnover Calculation: Computed Inventory Turnover Ratio = Cost of Goods Sold / Average Inventory Value.",
        "Store Branch Comparison: Benchmarked replenishment efficiency and out-of-stock frequency across store locations."
      ],
      kpis: [
        { label: "Stock-Out Reduction", value: "28%", trend: "Projected impact", description: "Eliminated out-of-stock occurrences" },
        { label: "Excess Capital Saved", value: "$64.5K", trend: "Holding cost savings", description: "Freed capital from Class C overstock" },
        { label: "Inventory Turnover Ratio", value: "6.4x", trend: "Benchmark 5.0x", description: "Annual stock rotation frequency" },
        { label: "Reorder Formula Accuracy", value: "96.5%", trend: "+12% precision", description: "Automated replenishment precision" }
      ],
      keyInsights: [
        "Top 18% of SKUs (Class A items) generated 76% of total retail sales, but experienced stock-out conditions on 14 out of 180 analyzed operating days.",
        "Class C items (slow movers) occupied 38% of total warehouse shelf capacity while contributing less than 6% of total gross profit.",
        "Warehouse replenishment cycles suffered a 5-day delivery lag for regional branch stores, leading to weekend inventory depletion on high-demand items.",
        "Store Location #4 and Location #9 held 2.4x more safety stock than required by historical sales variance."
      ],
      businessRecommendations: [
        "Implement automated SQL trigger alerts when Class A SKU balances approach calculated Reorder Points to eliminate stock-outs on high-margin products.",
        "Discount and liquidate persistent Class C slow-moving SKUs to unlock $64.5K in tied-up working capital and free up warehouse shelf space.",
        "Rebalance safety stock allocations between Store Location #4 and lagging branches to reduce regional holding costs without impacting customer fulfillment rates."
      ],
      chartData: {
        trendData: [
          { name: "Week 1", value: 94.2, benchmark: 98.0 },
          { name: "Week 2", value: 92.5, benchmark: 98.0 },
          { name: "Week 3", value: 89.1, benchmark: 98.0 },
          { name: "Week 4", value: 91.8, benchmark: 98.0 },
          { name: "Week 5", value: 95.0, benchmark: 98.0 },
          { name: "Week 6", value: 96.8, benchmark: 98.0 },
          { name: "Week 7", value: 97.4, benchmark: 98.0 },
          { name: "Week 8", value: 98.2, benchmark: 98.0 }
        ],
        categoryData: [
          { name: "Class A (Top 80% Revenue)", value: 76, color: "#026fc7" },
          { name: "Class B (Next 15% Revenue)", value: 18, color: "#36a9f7" },
          { name: "Class C (Bottom 5% Revenue)", value: 6, color: "#cbd5e1" }
        ],
        segmentData: [
          { name: "Branch #1", metricA: 7.2, metricB: 2.1 },
          { name: "Branch #4", metricA: 4.1, metricB: 8.5 },
          { name: "Branch #7", metricA: 6.8, metricB: 3.4 },
          { name: "Branch #9", metricA: 3.8, metricB: 9.1 }
        ]
      }
    }
  ]
};
