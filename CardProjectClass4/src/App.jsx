import React from 'react'
import Card from './Components/card'
const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: 50,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "3 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 55,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 58,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "8 days ago",
    post: "Full Stack Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: 52,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 65,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    datePosted: "2 days ago",
    post: "React Native Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 48,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "12 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 62,
    location: "Mumbai, India"
  }
];



  return (
    
      <div className="parent">
      {jobOpenings.map(function(elem,idx) { /*idx will work as index it can be anything */
          
          return <div key={idx}>

            <Card company={elem.companyName} post={elem.post} datePosted={elem.datePosted} brandLogo={elem.brandLogo} tag1={elem.tag1} pay={elem.pay} tag2={elem.tag2}/>

          </div>
  })}
      </div>
    
  )
}

export default App
