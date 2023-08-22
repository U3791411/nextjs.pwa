import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// [DIRECTORY] Markdown
const markdownDirectory = path.join(process.cwd(), '_markdown');

export function getSortedByDateData() {
    // Get file names from /_markdown
    const fileNames = fs.readdirSync(markdownDirectory);
    const markdownData = fileNames.map(fileName => {
        // Remove .md extension from file name & get slug
        const slug = fileName.replace(/\.md$/, '');
        // Read markdown file as string
        const fullPath = path.join(markdownDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        // Use gray-matter to pass markdown metadata (ie: title, date)
        const matterResult = matter(fileContents);
        // Combine data w/ slug
        return {
            slug,
            ...(matterResult.data as { title: string; date: string })
        }
    });
    // Sort markdown by date
    return markdownData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        }  else {
            return -1
        }
    });
}

// Get all markdown slug
export function getSlug() {
    const fileNames = fs.readdirSync(markdownDirectory);
    return fileNames.map(fileNames => {
        return {
            params: {
                slug: fileNames.replace(/\.md$/, '')
            }
        }
    });
}

// Get markdown data
export async function getMarkdownData(slug: string) {
    const fullPath = path.join(markdownDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // Use gray-matter to pass markdown metadata
    const matterResult = matter(fileContents);
    // Use remark to convert markdown into html string
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();
    // Combine data w/ the slug & contentHtml
    return {
        slug,
        contentHtml,
        ...(matterResult.data as { title: string, date: string })
    }
}