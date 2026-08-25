export async function fetchAPI(query: string, { variables }: { variables?: any } = {}) {
  const headers = { 'Content-Type': 'application/json' };

  const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

  if (!endpoint) {
    throw new Error('De omgevingsvariabele NEXT_PUBLIC_WORDPRESS_API_URL is niet ingesteld in .env.local');
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    // 'no-store' zorgt ervoor dat Next.js de data niet hardnekkig binnenshuis cacht. 
    // Hierdoor zie je wijzigingen die je in WordPress maakt direct terug na een refresh!
    cache: 'no-store', 
  });

  const json = await res.json();

  if (json.errors) {    
    throw new Error('Er is een fout opgetreden bij het ophalen van de GraphQL API');
  }

  return json.data;
}