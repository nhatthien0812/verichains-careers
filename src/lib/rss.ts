// Substack RSS fetching disabled

export interface Post {
    title: string
    link: string
    pubDate: string
    contentSnippet: string
    imageUrl?: string
    content?: string
}

export async function getSubstackPosts(_limit = 6): Promise<Post[]> {
    return []
}

