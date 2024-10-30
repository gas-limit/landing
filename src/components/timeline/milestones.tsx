export interface Milestone {
    title: string;
    date: string;
    description: string;
  }
  
  export const milestones: Milestone[] = [
    {
      title: "Audit Fundraising",
      date: "January 1, 2024",
      description: "Aquire funds for security audits."
    },
    {
      title: "Coven Lite Launch",
      date: "March 15, 2024",
      description: "Deploy Coven Lite which includes the core features of the platform."
    },
    {
      title: "Coven DAO",
      date: "June 1, 2024",
      description: "Establish the Coven DAO"
    },
    {
      title: "Full Product Launch",
      date: "September 1, 2024",
      description: "Launch the full Coven platform, including all features."
    }
  ];