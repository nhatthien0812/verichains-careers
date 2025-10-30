import Parser from "rss-parser"

export interface Post {
    title: string
    link: string
    pubDate: string
    contentSnippet: string
    imageUrl?: string
}

const parser = new Parser()

export async function getSubstackPosts(limit = 6): Promise<Post[]> {
    try {
        const feed = await parser.parseURL("https://verichains.substack.com/feed")
        return (feed.items ?? []).slice(0, limit).map((item) => ({
            title: item.title ?? "",
            link: item.link ?? "",
            pubDate: item.pubDate ?? "",
            contentSnippet: item.contentSnippet ?? "",
            imageUrl: (item as any).enclosure?.url || (item as any).content?.match(/<img[^>]+src="([^">]+)"/)?.[1] || undefined,
        }))
    } catch (error) {
        console.error("Failed to fetch Substack posts:", error)
        return []
    }
}

