import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'vppilhcu',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
export function urlFor(source: any) {
  return builder.image(source);
}

export async function getAllSiteData() {
  const [global_, nav, footer_, hero, sectionUniverses, sectionOnglerie,
    sectionPedicure, sectionCoiffure, sectionAbout, sectionSalon,
    sectionReviews, sectionGallery, sectionFaq, sectionReservation,
    sectionContact, prestations, avis, faqs, horaires] = await Promise.all([
    sanityClient.fetch(`*[_type=="global"][0]`),
    sanityClient.fetch(`*[_type=="navigation"][0]`),
    sanityClient.fetch(`*[_type=="footer_"][0]`),
    sanityClient.fetch(`*[_type=="hero"][0]`),
    sanityClient.fetch(`*[_type=="sectionUniverses"][0]`),
    sanityClient.fetch(`*[_type=="sectionPrestation" && categorie=="onglerie"][0]`),
    sanityClient.fetch(`*[_type=="sectionPrestation" && categorie=="pedicure"][0]`),
    sanityClient.fetch(`*[_type=="sectionPrestation" && categorie=="coiffure"][0]`),
    sanityClient.fetch(`*[_type=="sectionAbout"][0]`),
    sanityClient.fetch(`*[_type=="sectionSalon"][0]`),
    sanityClient.fetch(`*[_type=="sectionReviews"][0]`),
    sanityClient.fetch(`*[_type=="sectionGallery"][0]`),
    sanityClient.fetch(`*[_type=="sectionFaq"][0]`),
    sanityClient.fetch(`*[_type=="sectionReservation"][0]`),
    sanityClient.fetch(`*[_type=="sectionContact"][0]`),
    sanityClient.fetch(`*[_type=="prestation"] | order(categorie asc, ordre asc)`),
    sanityClient.fetch(`*[_type=="avis" && visible!=false] | order(ordre asc)`),
    sanityClient.fetch(`*[_type=="faq"] | order(ordre asc)`),
    sanityClient.fetch(`*[_type=="horaires"][0]`),
  ]);
  return { global_, nav, footer_, hero, sectionUniverses, sectionOnglerie,
    sectionPedicure, sectionCoiffure, sectionAbout, sectionSalon,
    sectionReviews, sectionGallery, sectionFaq, sectionReservation,
    sectionContact, prestations, avis, faqs, horaires };
}
