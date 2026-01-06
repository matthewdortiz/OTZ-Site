import { CaseStudyTemplate } from './case-study/CaseStudyTemplate';

export function CaseStudyInventoryOptimization() {
  const data = {
    industry: 'AI SYSTEMS',
    title: 'Forecasted Inventory Optimization Engine',
    subtitle: 'If/Then reduces holding costs by 40% with AI-driven forecasting and automated reorder logic for $2M+ footwear inventory.',
    problem_p1: 'If/Then managed more than $2M in footwear inventory using spreadsheets and an 8-person team. Manual forecasting created frequent overstocking, missed opportunities, and delays in ordering due to 120-day supplier lead times.',
    problem_p2: 'Without intelligent demand forecasting, the company struggled to balance stock availability against holding costs. The manual process couldn\'t scale with business growth or respond quickly to changing consumer preferences.',
    approach_intro: 'We built an AI-driven forecasting engine that analyzes Shopify sales velocity, seasonal patterns, customer behavior, and supplier timelines. The system automates reorder suggestions and provides a live dashboard for operational planning.',
    phases: [
      {
        phase: 'Data Integration',
        duration: '1.5 weeks',
        description: 'Connected Shopify API, imported 18 months of historical order data, standardized SKU catalog.'
      },
      {
        phase: 'ML Modeling & Forecasting Logic',
        duration: '2 weeks',
        description: 'Built predictive models using sales velocity, seasonality, and supplier lead times.'
      },
      {
        phase: 'Inventory Threshold Automation',
        duration: '1.5 weeks',
        description: 'Configured reorder triggers, automated alerts, implemented anomaly detection.'
      },
      {
        phase: 'Dashboard Deployment & Training',
        duration: '1 week',
        description: 'Launched live dashboard, trained operations team, refined forecasting parameters.'
      }
    ],
    arch_input: 'Live Shopify data, historical sales, supplier lead times',
    arch_processing: 'Python ML models, forecasting, anomaly detection',
    arch_output: 'Optimized inventory recommendations, dashboards',
    outcomes: [
      {
        value: '60%',
        title: 'Time Savings',
        caption: 'Reduction in manual forecasting and ordering hours'
      },
      {
        value: '40%',
        title: 'Lower Holding Costs',
        caption: 'Decrease in excess inventory and storage expenses'
      },
      {
        value: 'Zero',
        title: 'Stockouts',
        caption: 'No out-of-stock incidents in Q3–Q4 2024'
      }
    ],
    quote_text: 'The forecasting engine transformed how we operate. We\'re making smarter inventory decisions with a fraction of the effort.',
    quote_name: 'Operations Manager',
    quote_org: 'If/Then',
    spec_duration: '6 weeks',
    spec_team: '4 engineers, PM',
    spec_stack: 'Shopify API, Python ML models, PostgreSQL, real-time dashboard',
    spec_industry: 'E-commerce'
  };

  return <CaseStudyTemplate data={data} />;
}