import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional Internship</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2025 - August 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT Assistant Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">YOOTEK HOLDINGS JOINT STOCK COMPANY</h4>
            <p>
              <p>- Used technical stacks: Windows, Microsoft 365, Excel (advanced), SQL, Python, IT ticketing tools</p>
              <p>- Provided end-user IT support: hardware and software setup, troubleshooting, and incident logging.</p>
              <p>- Assisted with data reporting and process documentation, improving visibility for internal operations.</p>
              <p>- Supported basic system and network checks to maintain daily service stability.</p>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 - August 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Interior Information Technology Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">HA LONG DTK PLASTICS TRADING AND PRODUCTION JSC</h4>
            <p>
              <p>- Used technical stacks: Windows, Linux, internal systems, Excel</p>

              <p>- Supported internal IT operations for production and office teams: troubleshooting, system setup, and user support.</p>

              <p>- Assisted with maintaining internal data systems (inventory, operations records), ensuring data consistency and accessibility.</p>

              <p>- Helped improve workflow efficiency by standardizing documentation and basic process tracking.</p>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;