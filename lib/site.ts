// Candidate domain supplied in public business listings. Confirm it and set
// NEXT_PUBLIC_SITE_URL to the final canonical domain before deployment.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.vasaviprints.com").replace(/\/+$/, "");
