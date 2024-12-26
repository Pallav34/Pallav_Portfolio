import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Nilambar Giri",
    position: "CEO @ Unblue Consultation",
    text: "Pallav played a key role in shaping our web development strategy. His expertise in full-stack development helped us create a cutting-edge platform that perfectly aligns with our vision. We are thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Dr. Sunanda Jana",
    position: "Professor @ Haldia Institute of Technology",
    text: "Pallav’s work on the multithreaded proxy web server was exceptional. His ability to integrate complex systems with seamless user experience has been crucial in advancing our research. We highly recommend his expertise.",
    avatar: memojiAvatar2,
  },
  {
    name: "Dr. Arindam Chakraborty",
    position: "Associate Professor @ HIT Haldia",
    text: "Pallav demonstrated great proficiency in full-stack development while working on the multithreaded proxy web server project. His attention to detail and technical knowledge made the project a success. We look forward to collaborating again.",
    avatar: memojiAvatar3,
  },
  {
    name: "Naman Garg",
    position: "Tech Head @ Tally Solutions",
    text: "Pallav's expertise in full-stack web development was invaluable in building our learning management dashboard. His ability to design scalable and user-friendly systems helped us improve both functionality and user engagement.",
    avatar: memojiAvatar1,
  },
  {
    name: "Dr. Mrinmoy Sen",
    position: "Assistant Professor @ BITS Pilani",
    text: "Pallav’s skills in web development were crucial in building the multithreaded proxy web server. His technical abilities, combined with a solid understanding of our needs, helped us achieve the desired results.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about Me"
          description="Don't just take my word for it. See what my client s have to say about my work."
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] 
          hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_,index)=>(
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="max-w-xs md:max-w-md md:p-8 hover:-rotate-3 transition duration-300">
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="max-h-full"
                    />
                  </div>
                </div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-white/40">
                  {testimonial.position}
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
              </Card>
            ))}
              </Fragment>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};
