"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"
import { CalendarDays } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div>
                <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                />
                <HoverCard>
                <HoverCardTrigger asChild>
                <Button variant="link">Cywork Event</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar>
                    <AvatarImage src="https://github.com/vercel.png" />
                    <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Cywork Event</h4>
                    <p className="text-sm">
                        Cywork Event For Students and Developers
                    </p>
                    <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                        Participation April 2024
                        </span>
                    </div>
                    </div>
                </div>
                </HoverCardContent>
            </HoverCard>
  </div>
  )
}
