import type { RoadmapItem, TeaserFeature, SocialLink } from "@/types"

export const SITE_CONFIG = {
  name: "NEXUS",
  tagline: "Redefining What's Possible",
  description:
    "We're building something extraordinary. A seamless, intelligent platform that transforms the way you work, create, and collaborate.",
  launchDate: new Date("2026-12-01T00:00:00"),
  email: "hello@nexus.io",
}

export const ROADMAP: RoadmapItem[] = [
  {
    phase: "Phase 1",
    title: "Foundation",
    description: "Core architecture, authentication, and data infrastructure",
    status: "completed",
    date: "Q2 2026",
  },
  {
    phase: "Phase 2",
    title: "Intelligence Layer",
    description: "AI-powered recommendations, smart search, and automation engine",
    status: "in-progress",
    date: "Q3 2026",
  },
  {
    phase: "Phase 3",
    title: "Collaboration Hub",
    description: "Real-time collaboration tools, shared workspaces, and integrations",
    status: "upcoming",
    date: "Q4 2026",
  },
  {
    phase: "Phase 4",
    title: "Global Launch",
    description: "Public release with full feature set and enterprise support",
    status: "upcoming",
    date: "Q1 2027",
  },
]

export const TEASER_FEATURES: TeaserFeature[] = [
  {
    icon: "Zap",
    title: "Lightning Fast",
    description: "Built on next-gen infrastructure for sub-millisecond response times.",
  },
  {
    icon: "Shield",
    title: "Enterprise Security",
    description: "End-to-end encryption with zero-trust architecture by default.",
  },
  {
    icon: "Brain",
    title: "AI-Powered",
    description: "Intelligent automation that learns and adapts to your workflow.",
  },
  {
    icon: "Globe",
    title: "Global Scale",
    description: "Deployed across 30+ regions for low-latency access worldwide.",
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
  { name: "GitHub", url: "https://github.com", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
  { name: "Discord", url: "https://discord.com", icon: "MessageCircle" },
]

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Waitlist", href: "#waitlist" },
]
