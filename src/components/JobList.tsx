import JobCard from "./JobCard";
import { jobs } from "../data/jobs";

function JobList() {
  return (
    <div className="job-container">
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))
      ) : (
        <p style={{ textAlign: "center" }}>
          No jobs available at the moment.
        </p>
      )}
    </div>
  );
}

export default JobList;