import { defineType, defineField } from 'sanity';

const titreFields = [
  defineField({ name: 'eyebrow', title: 'Petit texte au-dessus du titre', type: 'string' }),
  defineField({ name: 'h2', title: 'Titre principal (HTML ok pour <em>)', type: 'string' }),
];

export const globalSchema = defineType({
  name: 'global', title: '⚙️ Paramètres globaux', type: 'document',
  fields: [
    defineField({ name: 'nom', title: 'Nom du site', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'annonce', title: '📢 Barre annonce (HTML ok)', type: 'string' }),
    defineField({ name: 'telephone', title: 'Téléphone', type: 'string' }),
    defineField({ name: 'whatsapp', title: 'Lien WhatsApp', type: 'url' }),
    defineField({ name: 'instagram', title: 'Lien Instagram', type: 'url' }),
    defineField({ name: 'lien_reservation', title: 'Lien réservation Brevo', type: 'url' }),
    defineField({ name: 'adresse', title: 'Adresse ligne 1', type: 'string' }),
    defineField({ name: 'ville', title: 'Ville & NPA', type: 'string' }),
    defineField({ name: 'meta_title', title: 'Titre SEO', type: 'string' }),
    defineField({ name: 'meta_desc', title: 'Description SEO', type: 'text', rows: 3 }),
  ],
  preview: { prepare: () => ({ title: '⚙️ Paramètres globaux' }) },
});

export const navigationSchema = defineType({
  name: 'navigation', title: '🔗 Navigation', type: 'document',
  fields: [
    defineField({ name: 'liens', title: 'Liens du menu', type: 'array', of: [{ type: 'object', fields: [{ name: 'label', title: 'Texte', type: 'string' }, { name: 'ancre', title: 'Ancre (#onglerie)', type: 'string' }], preview: { select: { title: 'label' } } }] }),
    defineField({ name: 'cta', title: 'Bouton de réservation', type: 'string' }),
  ],
  preview: { prepare: () => ({ title: '🔗 Navigation' }) },
});

export const footerSchema = defineType({
  name: 'footer_', title: '🦶 Footer', type: 'document',
  fields: [
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
    defineField({ name: 'col1_titre', title: 'Colonne 1 Titre', type: 'string' }),
    defineField({ name: 'col1_liens', title: 'Colonne 1 Liens', type: 'array', of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'href', type: 'string' }], preview: { select: { title: 'label' } } }] }),
    defineField({ name: 'col2_titre', title: 'Colonne 2 Titre', type: 'string' }),
    defineField({ name: 'col2_liens', title: 'Colonne 2 Liens', type: 'array', of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'href', type: 'string' }], preview: { select: { title: 'label' } } }] }),
    defineField({ name: 'col3_titre', title: 'Colonne 3 Titre', type: 'string' }),
    defineField({ name: 'copyright', title: 'Texte copyright', type: 'string' }),
    defineField({ name: 'mentions', title: 'Texte mentions légales', type: 'string' }),
    defineField({ name: 'location', title: 'Localisation (footer)', type: 'string' }),
  ],
  preview: { prepare: () => ({ title: '🦶 Footer' }) },
});

export const heroSchema = defineType({
  name: 'hero', title: '🎯 Hero — Bannière', type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Petit texte (eyebrow)', type: 'string' }),
    defineField({ name: 'h1_normal', title: 'H1 — texte normal', type: 'string' }),
    defineField({ name: 'h1_italic', title: 'H1 — texte en italique rose', type: 'string' }),
    defineField({ name: 'h2', title: 'Sous-titre', type: 'text', rows: 3 }),
    defineField({ name: 'cta1', title: 'Bouton principal', type: 'string' }),
    defineField({ name: 'cta2', title: 'Bouton secondaire', type: 'string' }),
    defineField({ name: 'badge', title: 'Badge (badge vert)', type: 'string' }),
    defineField({ name: 'marquee', title: 'Bandeau défilant', type: 'string' }),
  ],
  preview: { prepare: () => ({ title: '🎯 Bannière Hero' }) },
});

const carteType = { type: 'object' as const, fields: [
  { name: 'tagline', title: 'Tagline (Rituel I…)', type: 'string' },
  { name: 'h3', title: 'Titre', type: 'string' },
  { name: 'desc', title: 'Description', type: 'text' },
  { name: 'lien', title: 'Ancre (#onglerie)', type: 'string' },
  { name: 'image', title: 'Image (chemin img/xxx.webp)', type: 'string' },
], preview: { select: { title: 'h3' } } };

export const sectionUniversesSchema = defineType({
  name: 'sectionUniverses', title: '💆 Section Rituels', type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'titre', title: 'Titre (HTML ok)', type: 'string' }),
    defineField({ name: 'intro', title: 'Texte intro', type: 'text', rows: 3 }),
    defineField({ name: 'cartes', title: '3 cartes rituels', type: 'array', of: [carteType] }),
  ],
  preview: { prepare: () => ({ title: '💆 Section Rituels' }) },
});

const stepType = { type: 'object' as const, fields: [{ name: 'label', title: 'Label (1. Le Diagnostic :)', type: 'string' }, { name: 'texte', title: 'Texte', type: 'text' }], preview: { select: { title: 'label' } } };

export const sectionPrestationSchema = defineType({
  name: 'sectionPrestation', title: '📋 Section Prestation', type: 'document',
  fields: [
    defineField({ name: 'categorie', title: 'Catégorie', type: 'string', options: { list: [{ title: 'Onglerie', value: 'onglerie' }, { title: 'Pédicure', value: 'pedicure' }, { title: 'Coiffure', value: 'coiffure' }], layout: 'radio' } }),
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'h2_normal', title: 'Titre — ligne 1', type: 'string' }),
    defineField({ name: 'h2_italic', title: 'Titre — ligne 2 (HTML ok pour <em>)', type: 'string' }),
    defineField({ name: 'lead', title: 'Texte lead (accroche)', type: 'text', rows: 3 }),
    defineField({ name: 'corps', title: 'Texte principal', type: 'text', rows: 4 }),
    defineField({ name: 'steps', title: 'Les 3 étapes', type: 'array', of: [stepType] }),
    defineField({ name: 'titre_tarifs', title: 'Titre du tableau tarifs', type: 'string' }),
    defineField({ name: 'note_tarifs', title: 'Note sous le titre', type: 'string' }),
    defineField({ name: 'cta1', title: 'Bouton principal', type: 'string' }),
    defineField({ name: 'cta2', title: 'Bouton secondaire (modal)', type: 'string' }),
    defineField({ name: 'insta_cta', title: 'Lien Instagram (onglerie/coiffure)', type: 'string' }),
    defineField({ name: 'images', title: 'Images (chemins img/xxx.webp)', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: { select: { cat: 'categorie' }, prepare: ({ cat }) => ({ title: `📋 Section ${cat}` }) },
});

export const sectionAboutSchema = defineType({
  name: 'sectionAbout', title: '👩 Section À propos', type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'h2', title: 'Titre (HTML ok)', type: 'string' }),
    defineField({ name: 'lead', title: 'Texte lead', type: 'text', rows: 2 }),
    defineField({ name: 'corps1', title: 'Paragraphe 1 (HTML ok)', type: 'text', rows: 4 }),
    defineField({ name: 'corps2', title: 'Paragraphe 2', type: 'text', rows: 4 }),
    defineField({ name: 'signature', title: 'Signature', type: 'string' }),
    defineField({ name: 'stats', title: 'Statistiques (3)', type: 'array', of: [{ type: 'object', fields: [{ name: 'num', type: 'string', title: 'Chiffre' }, { name: 'suffix', type: 'string', title: 'Suffixe (+, %)' }, { name: 'label', type: 'string', title: 'Label' }], preview: { select: { title: 'num', subtitle: 'label' } } }] }),
    defineField({ name: 'badge_num', title: 'Badge numéro', type: 'string' }),
    defineField({ name: 'badge_lbl', title: 'Badge texte', type: 'string' }),
    defineField({ name: 'images', title: 'Photos (chemins img/xxx.webp)', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: { prepare: () => ({ title: '👩 Section À propos' }) },
});

export const sectionSalonSchema = defineType({
  name: 'sectionSalon', title: '🏡 Section Le Salon', type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'h2', title: 'Titre (HTML ok)', type: 'string' }),
    defineField({ name: 'lead', title: 'Texte lead', type: 'text', rows: 3 }),
    defineField({ name: 'corps', title: 'Texte principal', type: 'text', rows: 4 }),
    defineField({ name: 'tag', title: 'Tag image (L\'Écrin)', type: 'string' }),
    defineField({ name: 'images', title: 'Photos (chemins img/xxx.webp)', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: { prepare: () => ({ title: '🏡 Section Le Salon' }) },
});

export const sectionReviewsSchema = defineType({
  name: 'sectionReviews', title: '⭐ Section Avis', type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'h2', title: 'Titre (HTML ok)', type: 'string' }),
    defineField({ name: 'rating_text', title: 'Texte rating', type: 'string' }),
    defineField({ name: 'lien_avis_url', title: 'URL bouton Google Avis', type: 'url' }),
    defineField({ name: 'lien_avis_label', title: 'Texte bouton', type: 'string' }),
  ],
  preview: { prepare: () => ({ title: '⭐ Section Avis' }) },
});

export const sectionGallerySchema = defineType({
  name: 'sectionGallery', title: '📸 Section Instagram', type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow (@lynebeauty18)', type: 'string' }),
    defineField({ name: 'h2', title: 'Titre (HTML ok)', type: 'string' }),
    defineField({ name: 'lien_label', title: 'Texte lien Instagram', type: 'string' }),
    defineField({ name: 'images', title: 'Images galerie (chemins img/xxx.webp)', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: { prepare: () => ({ title: '📸 Section Instagram' }) },
});

export const sectionFaqSchema = defineType({
  name: 'sectionFaq', title: '❓ Section FAQ', type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'h2', title: 'Titre (HTML ok)', type: 'string' }),
    defineField({ name: 'intro', title: 'Texte intro', type: 'text', rows: 3 }),
    defineField({ name: 'cta', title: 'Texte bouton WhatsApp', type: 'string' }),
  ],
  preview: { prepare: () => ({ title: '❓ Section FAQ' }) },
});

export const sectionReservationSchema = defineType({
  name: 'sectionReservation', title: '🎁 Section Réservation', type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'h2', title: 'Titre (HTML ok)', type: 'string' }),
    defineField({ name: 'texte', title: 'Texte', type: 'text', rows: 2 }),
    defineField({ name: 'cta', title: 'Texte bouton', type: 'string' }),
    defineField({ name: 'note', title: 'Note sous le bouton', type: 'string' }),
  ],
  preview: { prepare: () => ({ title: '🎁 Section Réservation' }) },
});

export const sectionContactSchema = defineType({
  name: 'sectionContact', title: '📍 Section Contact', type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'h2', title: 'Titre (HTML ok)', type: 'string' }),
    defineField({ name: 'lead', title: 'Texte lead', type: 'text', rows: 3 }),
    defineField({ name: 'h3_horaires', title: 'Titre horaires', type: 'string' }),
  ],
  preview: { prepare: () => ({ title: '📍 Section Contact' }) },
});

export const prestationSchema = defineType({
  name: 'prestation', title: '💅 Prestation / Tarif', type: 'document',
  fields: [
    defineField({ name: 'nom', title: 'Nom', type: 'string', validation: R => R.required() }),
    defineField({ name: 'categorie', title: 'Catégorie', type: 'string', options: { list: [{ title: 'Onglerie', value: 'onglerie' }, { title: 'Pédicure', value: 'pedicure' }, { title: 'Coiffure', value: 'coiffure' }], layout: 'radio' }, validation: R => R.required() }),
    defineField({ name: 'detail', title: 'Détail / durée', type: 'string' }),
    defineField({ name: 'prix', title: 'Prix', type: 'string', validation: R => R.required() }),
    defineField({ name: 'cat', title: 'Filtre (gel/acrylique/classique/avec-ext/sans-ext/soins/all)', type: 'string' }),
    defineField({ name: 'id', title: 'ID Brevo (pour réservation)', type: 'string' }),
    defineField({ name: 'ordre', title: 'Ordre d\'affichage', type: 'number', initialValue: 99 }),
  ],
  preview: { select: { title: 'nom', subtitle: 'prix' } },
});

export const avisSchema = defineType({
  name: 'avis', title: '⭐ Avis client', type: 'document',
  fields: [
    defineField({ name: 'auteur', title: 'Prénom & Nom', type: 'string', validation: R => R.required() }),
    defineField({ name: 'service', title: 'Service', type: 'string' }),
    defineField({ name: 'texte', title: 'Texte', type: 'text', rows: 3, validation: R => R.required() }),
    defineField({ name: 'ordre', title: 'Ordre', type: 'number', initialValue: 99 }),
    defineField({ name: 'visible', title: 'Visible ?', type: 'boolean', initialValue: true }),
  ],
  preview: { select: { title: 'auteur', subtitle: 'service' } },
});

export const faqSchema = defineType({
  name: 'faq', title: '❓ Question FAQ', type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question', type: 'string', validation: R => R.required() }),
    defineField({ name: 'reponse', title: 'Réponse (HTML ok)', type: 'text', rows: 4, validation: R => R.required() }),
    defineField({ name: 'ordre', title: 'Ordre', type: 'number', initialValue: 99 }),
  ],
  preview: { select: { title: 'question' } },
});

export const horairesSchema = defineType({
  name: 'horaires', title: '🕐 Horaires', type: 'document',
  fields: [
    defineField({ name: 'titre', title: 'Titre', type: 'string', initialValue: 'Horaires d\'ouverture' }),
    defineField({ name: 'jours', title: 'Jours', type: 'array', of: [{ type: 'object', fields: [{ name: 'jour', title: 'Jour(s)', type: 'string' }, { name: 'heure', title: 'Horaire', type: 'string' }, { name: 'ferme', title: 'Fermé ?', type: 'boolean', initialValue: false }], preview: { select: { title: 'jour', subtitle: 'heure' } } }] }),
  ],
  preview: { prepare: () => ({ title: '🕐 Horaires' }) },
});

export const schemaTypes = [
  globalSchema, navigationSchema, footerSchema, heroSchema,
  sectionUniversesSchema, sectionPrestationSchema, sectionAboutSchema,
  sectionSalonSchema, sectionReviewsSchema, sectionGallerySchema,
  sectionFaqSchema, sectionReservationSchema, sectionContactSchema,
  prestationSchema, avisSchema, faqSchema, horairesSchema,
];
