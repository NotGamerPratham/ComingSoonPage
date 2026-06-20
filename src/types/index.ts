export interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export interface RoadmapItem {
  phase: string
  title: string
  description: string
  status: "completed" | "in-progress" | "upcoming"
  date: string
}

export interface TeaserFeature {
  icon: string
  title: string
  description: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
