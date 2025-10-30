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

export const listJobs: Post[] = [
    {
        title: "Senior Blockchain Security Researcher",
        link: "https://verichains.substack.com/p/senior-blockchain-security-researcher",
        pubDate: "2025-10-15T00:00:00.000Z",
        contentSnippet:
            "We're looking for an experienced security researcher to join our team. Deep knowledge of blockchain protocols, smart contracts, and cryptographic primitives required.",
        imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop",
    },
    {
        title: "Full Stack Developer — Web3 Security Tools",
        link: "https://verichains.substack.com/p/full-stack-developer",
        pubDate: "2025-10-14T00:00:00.000Z",
        contentSnippet:
            "Join our engineering team to build cutting-edge security tools for the Web3 ecosystem. React, TypeScript, and Solidity experience preferred.",
        imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop",
    },
    {
        title: "Security Audit Lead",
        link: "https://verichains.substack.com/p/security-audit-lead",
        pubDate: "2025-10-06T00:00:00.000Z",
        contentSnippet:
            "Lead our security audit team and work with top DeFi protocols. Strong background in smart contract security and team leadership required.",
        imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop",
    },
    {
        title: "Smart Contract Auditor",
        link: "https://verichains.substack.com/p/smart-contract-auditor",
        pubDate: "2025-09-29T00:00:00.000Z",
        contentSnippet:
            "Conduct comprehensive security audits of smart contracts and DeFi protocols. Experience with Solidity, Vyper, and security testing tools required.",
        imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop",
    },
    {
        title: "Blockchain Security Engineer",
        link: "https://verichains.substack.com/p/blockchain-security-engineer",
        pubDate: "2025-09-25T00:00:00.000Z",
        contentSnippet:
            "Design and implement security solutions for blockchain infrastructure. Strong background in cryptography, consensus mechanisms, and security protocols.",
        imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop",
    },
    {
        title: "DeFi Security Specialist",
        link: "https://verichains.substack.com/p/defi-security-specialist",
        pubDate: "2025-09-09T00:00:00.000Z",
        contentSnippet:
            "Specialize in DeFi protocol security analysis and risk assessment. Deep understanding of DeFi mechanics, yield farming, and liquidity protocols.",
        imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop",
    },
];

