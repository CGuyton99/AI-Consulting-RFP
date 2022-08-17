import React from "react";
import "./index.css";
import Faq from "react-faq-component";
const data = {
  title: "FAQ",
  rows: [
    {
      title: "Where do I need to reside?",
      content: `Classified positions, or those protected by Civil Service, require applicants to live in the state of Wisconsin at the time of application submission, unless otherwise specified on the job posting. You do NOT need to reside within Milwaukee County.`,
    },
    {
      title: "How do I know that you received my application?",
      content:
        "Upon submission, you will see a pop-up confirmation message and then receive an e-mail confirmation within five minutes. Please check your SPAM folder if you did not receive this message. If you don’t already have a profile saved to an account, the information from the application is saved for future applications automatically. If you do already have a saved profile, the confirmation screen asks whether you would like to replace the information to your account profile with the information submitted in the job application.",
    },
    {
      title: "What is the selection and interview process?",
      content: `A list of qualified candidates is established through metrics obtained during the examination/application process and referrals are then made to the hiring departments. Factors such as location, shift, and special skills may be reviewed by a department and used in determining top candidates. If a department is interested in interviewing an applicant, they will contact the candidate directly. Please regularly check both your email inbox AND your SPAM/JUNK folders as some departmental level emails are rejected by internal settings. Also ensure your phone has voicemail set up if you don’t answer unknown numbers. `,
    },
    {
      title: "How can I view the status of my application?",
      content: (
        <p>
          Once you complete the final submission of your application, you will
          NOT be able to view/check your application status. You will receive a
          confirmation email once you submit. If your status changes, you will
          receive an email indicating this change. The Department of Human
          Resources does not have further updates on who the departments are
          pursuing or their hiring timelines. If the department is interested in
          pursuing your application, they will reach out to via email and/or
          phone. Please regularly check both your email inbox AND your SPAM/JUNK
          folders as some departmental level emails are rejected by internal
          settings. Also ensure your phone has voicemail set up if you don’t
          answer unknown numbers.
        </p>
      ),
    },
  ],
};

const styles = {
  bgColor: 'transparent',
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: 'black',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  tabFocus: true
};

function Careers() {
  return (
    <body className="careerback">
      <main>
        <div className="sectiongridscareers">
        <div className="careersection">
          <div className="center">
            <h1>Current Listings</h1>
          </div>
          <ul>
            <li>Behavioral Health Emergency Services Clinicians - CART - FT</li>
            <li>Children, Youth & Family Services Administrator</li>
            <li>Park Patrol Lead (Seasonal)</li>
            <li>Golf Maintenance - Park Worker (Seasonal)</li>
            <li>Golf Pro Shop - Park Worker (Seasonal)</li>
            <li>Airport Maintenance Worker</li>
            <li>Emergency Medical Technician - EMT (PT Hourly)</li>
          </ul>
          <div className="right">
            <a href="https://aicmke.gtsb.io/blog/careers">See More</a>
          </div>
        </div>
        <div className="careersection">
          <div>
            <Faq data={data} styles={styles} config={config} />
          </div>
        </div>
        </div>
      </main>
    </body>
  );
}
export default Careers;
