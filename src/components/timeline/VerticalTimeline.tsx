import React from 'react';
import styles from './VerticalTimeline.module.css';
import { Milestone } from './milestones';

interface VerticalTimelineProps {
  milestones: Milestone[];
}

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ milestones }) => {
  return (
    <div className={styles.timelineContainer}>
      {milestones.map((milestone, index) => (
        <div key={index} className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <h3>{milestone.title}</h3>
            <p>{milestone.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;