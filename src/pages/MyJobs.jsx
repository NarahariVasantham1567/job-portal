import JobCard from '../components/JobCard/JobCard';
import './MyJobs.css';

const data = [
  {
    id: 1,
    role: 'UI/UX Designer',
    status: 'Active',
    type: 'Full Time',
    noticePeriod: '27 days remaining',
    applications: 798,
  },
  {
    id: 2,
    role: 'Senior UX Designer',
    status: 'Active',
    type: 'Internship',
    noticePeriod: '8 days remaining',
    applications: 185,
  },
  {
    id: 3,
    role: 'Junior Graphic Designer',
    status: 'Active',
    type: 'Full Time',
    noticePeriod: '24 days remaining',
    applications: 583,
  },
  {
    id: 4,
    role: 'Front End Developer',
    status: 'Expire',
    type: 'Full Time',
    noticePeriod: 'Dec 7, 2019',
    applications: 740,
  },
  {
    id: 5,
    role: 'Technical Support Specialist',
    status: 'Active',
    type: 'Part Time',
    noticePeriod: '4 days remaining',
    applications: 558,
  },
  {
    id: 6,
    role: 'Interaction Designer',
    status: 'Expire',
    type: 'Contract Base',
    noticePeriod: 'Feb 2, 2019',
    applications: 426,
  },
  {
    id: 7,
    role: 'Software Engineer',
    status: 'Active',
    type: 'Temperary',
    noticePeriod: '9 days remaining',
    applications: 922,
  },
  {
    id: 8,
    role: 'Product Designer',
    status: 'Active',
    type: 'Full Time',
    noticePeriod: '7 days remaining',
    applications: 994,
  },
  {
    id: 9,
    role: 'Product Manager',
    status: 'Expire',
    type: 'Full Time',
    noticePeriod: 'Dec 4, 2019',
    applications: 196,
  },
  {
    id: 10,
    role: 'Marketing Manager',
    status: 'Active',
    type: 'Full Time',
    noticePeriod: '4 days remaining',
    applications: 492,
  },
];

export default function MyJobs() {
  return (
    <div className='myjobs-container'>
      <div className='container'>
        <h3 className='jobs-heading'>
          My Jobs <span>(589)</span>
        </h3>
        <div className='status-container'>
          <p className='job-status'>Job status</p>
          <select className='select-option'>
            <option value='all jobs'>All Jobs</option>
          </select>
        </div>
      </div>
      <div className='jobs-container'>
        <span className='jobs-heaiding'>JOBS</span>
        <div>
          <span>STATUS</span>
          <span>APPLICATIONS</span>
        </div>
        <span className='last-child'>ACTIONS</span>
      </div>
      {data.map((item) => (
        <JobCard key={item.id} {...item} />
      ))}
    </div>
  );
}
