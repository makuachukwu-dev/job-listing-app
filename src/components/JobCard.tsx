import { useState } from "react";
import type { Job } from "../data/jobs";

type Props = {
  job: Job;
};

function JobCard({ job }: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p><strong>{job.company}</strong></p>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Details" : "Show Details"}
      </button>

      {show && (
        <div>
          <p>Location: {job.location}</p>
          <p>Salary: {job.salary}</p>
          <p>{job.description}</p>
        </div>
      )}
    </div>
  );
}

export default JobCard;