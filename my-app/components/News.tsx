import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function News() {


    

  return (
    <Carousel className="w-full">
    <CarouselContent className="">
        {news.map((item, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                    <Card className="aspect-square bg-white shadow-lg rounded-lg">
                        <CardContent className="flex aspect-square items-center justify-center p-5">            
                             <div className="flex flex-col items-center justify-center space-y-4">
                                <img src={item.picture} alt={item.title} className="w-32 h-32 object-cover rounded-full pd-4" />
                                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                                <p className="text-gray-500 text-center">{item.description}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </CarouselItem>
        ))}
    </CarouselContent>
    <CarouselPrevious />

</Carousel>
  )
}
const news = [
    {
        title: "New Research Project",
        description: "The Department of Computer Science at University is starting a new research project on artificial intelligence.",
        picture: "/use1.jpg",
    },
    {
        title: "Guest Lecture Series",
        description: "Join us for a series of guest lectures by industry experts on the latest trends in software development.",
        picture: "/use2.jpg",
    },
    {
        title: "Hackathon Announcement",
        description: "Get ready for the annual hackathon event where students showcase their coding skills and compete for prizes.",
        picture: "/use3.PNG",
    },
    {
        title: "Internship Opportunities",
        description: "We have exciting internship opportunities available for computer science students. Apply now!",
        picture: "/use3.jpeg",
    },
    {
        title: "New Course Offering",
        description: "Introducing a new course on web development that covers the latest frameworks and technologies.",
        picture: "/use4.jpeg",
    },
];

