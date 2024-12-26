import learning from "@/assets/images/learning.png";
import unblue from "@/assets/images/unblue.png";
import multithreaded from "@/assets/images/multithreaded.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg'
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Full-Stack + AWS",
    year: "2024",
    title: "Full-stack Learning Management Application",
    results: [
      { title: "Beautiful looking real time learning management application, USER FRIENDLY interfaces."},
      { title: "Built with React.js (frontend) and TypeScript (backend), using DynamoDB for fast, scalable data management." },
      { title: "Integrated Clerk for seamless user authentication and deployed on AWS Lambda for cost-effective scalability." },
    ],
    link: "https://learning-management-tau.vercel.app/",
    image: learning,
  },
  {
    company: "React.js",
    year: "2023",
    title: "Agency Landing Page",
    results: [
      { title: "Developed a fast, responsive website with React.js, reducing load time by 30% and increasing user engagement by 25%." },
      { title: "The modern design led to a 40% increase in traffic and a 15% boost in conversions within the first three months." },
      { title: "Built with React’s modular architecture, supporting up to 3x traffic growth and easy future updates." },
    ],
    link: "https://www.unblue.in/",
    image: unblue,
  },
  {
    company: "Core Computer Science",
    year: "2024",
    title: "Multithreaded Proxy Web Server",
    results: [
      { title: "Designed a Proxy server to handle multiple client requests, storing the response as Cache" },
      { title: "Handled the requests using semaphores, locks, and an HTTP parser. Used LRU cache, Linked Lists, and different structs to achieve Multithreaded behavior and to avoid RACE condition" },
      { title: "Achieved Parallel and Concurrent behavior of different client requests on Multiprocessor systems" },
    ],
    link: "https://github.com/Pallav34/Multithereded-Proxy-Server",
    image: multithreaded,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="project_section">
      <div className="container">
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences."/>
       
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project,projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 20}px)`
              }}
              
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widset text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
                </div>
              
              <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>

              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result,idx) => (
                  <li className="flex gap-2 text-sm md:text-base text-white/50" key={idx}>
                    <CheckCircleIcon className="size-5 md:size-6"/>
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span>Visit Live Site</span>
                  <ArrowUpRightIcon className="size-4"/>
                </button>
              </a>
              </div>
              <div className="relative">
              <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
              </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
