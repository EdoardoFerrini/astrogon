import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

/*
export async function GET(context) {
  const blogPosts = await getCollection('blog');
  
  // Filtra esplicitamente per escludere la pagina index e post senza data
  const publishedPosts = blogPosts
    .filter(post => {
      // Escludi la pagina index
      if (post.id === '-index' || post.slug === '-index') return false;
      
      // Escludi post senza data
      if (!post.data.date) return false;
      
      // Escludi post con draft
      if (post.data.draft) return true;
      
      return true;
    })
    .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

  return rss({
    // Personalizza con i tuoi dati
    title: 'Buzz\'s Blog',
    description: 'A humble Astronaut\'s guide to the stars',
    site: context.site,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description || post.data.title,
      link: `/blog/${post.id}/`,
      categories: post.data.tags || post.data.categories || [],
    })),
    customData: `
      <language>en-us</language>
      <copyright>${new Date().getFullYear()} - Buzz's Blog. All rights reserved.</copyright>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    `,
  });
}
*/

export async function GET(context) {
  const blogPosts = await getCollection('blog');
  
  // Filtra esplicitamente per escludere la pagina index e i post non pubblicati
  const publishedPosts = blogPosts
    .filter(post => {
      // Escludi la pagina index
      if (post.id === '-index' || post.slug === '-index') return false;
      
      // Escludi post senza data
      if (!post.data.date) return false;
      
      // Escludi post con draft = true
      if (post.data.draft === true) return false;

      return true;
    })
    .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

  return rss({
    // 🔧 Metadati principali
    title: "Buzz's Blog",
    description: "A humble Astronaut's guide to the stars",
    site: context.site,

    // 🔧 Articoli
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description || post.data.title,
      link: `/blog/${post.id}/`,
      categories: post.data.tags || post.data.categories || [],
    })),

    // 🔧 Dati RSS extra
    customData: `
      <language>en-us</language>
      <copyright>${new Date().getFullYear()} - Buzz's Blog. All rights reserved.</copyright>
      <managingEditor>buzz@janedoe.com (Buzz)</managingEditor>
      <ttl>60</ttl>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml" />
    `,
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
    },
  });
}
