import { Post } from "./rss"

export interface Feature {
    title: string;
    description: string;
}

export const features: Feature[] = [
    {
        title: "Security First",
        description:
            "Work on critical security challenges that impact the entire Web3 ecosystem",
    },
    {
        title: "Cutting Edge",
        description:
            "Research and develop state-of-the-art security tools and methodologies",
    },
    {
        title: "Global Impact",
        description:
            "Your work protects billions in digital assets across the globe",
    },
];

const COMMON_REQUIREMENTS =
    "Requirements\n" +
    " • Minimum 3 years of relevant experience (preferably IT/Cybersecurity/BFSI).\n" +
    " • Strong communication, presentation, and negotiation skills in Vietnamese and English.\n" +
    " • Proactive, customer-oriented mindset with flexible problem-solving.\n" +
    " • Team player with high ownership and accountability.";

const COMMON_BENEFITS =
    "Benefits\n" +
    " • Work with Vietnam's top security engineers and experts.\n" +
    " • Opportunity to build 'Make in Vietnam – Go Global' products.\n" +
    " • Competitive salary and performance-based bonuses.\n" +
    " • Dynamic, professional, globally-oriented environment.";

export const listJobs: Post[] = [
    {
        title: "Marketing Executive (Ho Chi Minh City)",
        link: "mailto:phuong@verichains.io",
        pubDate: "2025-10-30T00:00:00.000Z",
        contentSnippet:
            "Own multi-channel marketing campaigns, content production, and employer branding.",
        content:
            "Job Description\n" +
            " • Plan and execute multi-channel marketing campaigns (social, email, website).\n" +
            " • Produce content (articles, press, landing pages, case studies) aligned to goals.\n" +
            " • Build employer branding and support recruitment initiatives.\n" +
            " • Track, measure, and optimize campaign performance against KPIs.\n\n" +
            COMMON_REQUIREMENTS +
            "\n\n" +
            COMMON_BENEFITS,
        imageUrl: undefined,
    },
    {
        title: "Business Development Executive (Ho Chi Minh City)",
        link: "mailto:phuong@verichains.io",
        pubDate: "2025-10-30T00:00:00.000Z",
        contentSnippet:
            "Acquire and grow enterprise customers for cybersecurity and the BShield mobile solution.",
        content:
            "Job Description\n" +
            " • Prospect and develop new enterprise customers.\n" +
            " • Consult and propose cybersecurity and BShield Mobile solutions.\n" +
            " • Coordinate with engineering/product/marketing throughout the sales process.\n" +
            " • Manage pipeline, forecast revenue, and report regularly.\n\n" +
            COMMON_REQUIREMENTS +
            "\n\n" +
            COMMON_BENEFITS,
        imageUrl: undefined,
    },
    {
        title: "BFSI Account Manager (Hanoi & Ho Chi Minh City)",
        link: "mailto:phuong@verichains.io",
        pubDate: "2025-10-30T00:00:00.000Z",
        contentSnippet:
            "Own relationships and revenue with banking, fintech, and digital service clients.",
        content:
            "Job Description\n" +
            " • Manage and grow relationships with banking, fintech, and digital service clients.\n" +
            " • Understand needs, consult, and propose the right BShield mobile security solutions.\n" +
            " • Coordinate with engineering, product, and marketing to ensure delivery and service quality.\n" +
            " • Expand revenue from existing accounts (upsell/cross-sell) and track account health.\n\n" +
            COMMON_REQUIREMENTS +
            "\n\n" +
            COMMON_BENEFITS,
        imageUrl: undefined,
    },
    {
        title: "Head of BD & Sales (Hanoi)",
        link: "mailto:phuong@verichains.io",
        pubDate: "2025-10-30T00:00:00.000Z",
        contentSnippet:
            "Lead the GTM strategy and sales organization to drive growth.",
        content:
            "Job Description\n" +
            " • Define business strategy and GTM plans for target segments.\n" +
            " • Lead, coach, and scale the BD/Sales team; set KPIs and processes.\n" +
            " • Partner with marketing/product to optimize funnel and sales efficiency.\n" +
            " • Allocate resources, forecast revenue, and own commercial outcomes.\n\n" +
            COMMON_REQUIREMENTS +
            "\n\n" +
            COMMON_BENEFITS,
        imageUrl: undefined,
    },
    {
        title: "Mobile Solution Engineer (Hanoi & Ho Chi Minh City)",
        link: "mailto:phuong@verichains.io",
        pubDate: "2025-10-30T00:00:00.000Z",
        contentSnippet:
            "Implement the BShield mobile security solution and support customers with integrations.",
        content:
            "Job Description\n" +
            " • Implement, integrate, and configure BShield for Android/iOS applications.\n" +
            " • Analyze and troubleshoot technical issues with internal teams and customers.\n" +
            " • Write technical docs, prepare demos/POCs, and deliver training.\n" +
            " • Provide product feedback and improvement suggestions from real-world deployments.\n\n" +
            COMMON_REQUIREMENTS +
            "\n\n" +
            COMMON_BENEFITS,
        imageUrl: undefined,
    },
];

