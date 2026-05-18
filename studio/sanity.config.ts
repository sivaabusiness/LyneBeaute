import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { presentationTool } from 'sanity/presentation';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'lynebeauty',
  title: '✏️ Institut Lyne Beauty — Studio',
  projectId: 'vppilhcu',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list().title('Modifier le site').items([
          S.listItem().title('⚙️ Paramètres globaux (liens, tel, adresse)').child(S.document().schemaType('global').documentId('global')),
          S.listItem().title('🔗 Menu de navigation').child(S.document().schemaType('navigation').documentId('navigation')),
          S.listItem().title('🦶 Footer').child(S.document().schemaType('footer_').documentId('footer_')),
          S.divider(),
          S.listItem().title('🎯 Bannière Hero').child(S.document().schemaType('hero').documentId('hero')),
          S.listItem().title('💆 Section Rituels (3 cartes)').child(S.document().schemaType('sectionUniverses').documentId('sectionUniverses')),
          S.listItem().title('💅 Section Onglerie — Textes').child(S.document().schemaType('sectionPrestation').documentId('sectionPrestation-onglerie')),
          S.listItem().title('🦶 Section Pédicure — Textes').child(S.document().schemaType('sectionPrestation').documentId('sectionPrestation-pedicure')),
          S.listItem().title('💇 Section Coiffure — Textes').child(S.document().schemaType('sectionPrestation').documentId('sectionPrestation-coiffure')),
          S.listItem().title('👩 Section À propos (Jocelyne)').child(S.document().schemaType('sectionAbout').documentId('sectionAbout')),
          S.listItem().title('🏡 Section Le Salon').child(S.document().schemaType('sectionSalon').documentId('sectionSalon')),
          S.listItem().title('⭐ Section Avis — Titres').child(S.document().schemaType('sectionReviews').documentId('sectionReviews')),
          S.listItem().title('📸 Section Instagram — Titres').child(S.document().schemaType('sectionGallery').documentId('sectionGallery')),
          S.listItem().title('❓ Section FAQ — Titres').child(S.document().schemaType('sectionFaq').documentId('sectionFaq')),
          S.listItem().title('🎁 Section Réservation').child(S.document().schemaType('sectionReservation').documentId('sectionReservation')),
          S.listItem().title('📍 Section Contact').child(S.document().schemaType('sectionContact').documentId('sectionContact')),
          S.divider(),
          S.listItem().title('💅 Tarifs Onglerie').child(S.documentList().title('Tarifs Onglerie').filter('_type=="prestation" && categorie=="onglerie"')),
          S.listItem().title('🦶 Tarifs Pédicure').child(S.documentList().title('Tarifs Pédicure').filter('_type=="prestation" && categorie=="pedicure"')),
          S.listItem().title('💇 Tarifs Coiffure').child(S.documentList().title('Tarifs Coiffure').filter('_type=="prestation" && categorie=="coiffure"')),
          S.divider(),
          S.documentTypeListItem('avis').title('⭐ Avis clients'),
          S.documentTypeListItem('faq').title('❓ Questions FAQ'),
          S.listItem().title('🕐 Horaires').child(S.document().schemaType('horaires').documentId('horaires')),
        ]),
    }),
    presentationTool({
      previewUrl: {
        origin: 'https://www.lynebeauty.ch',
        preview: '/',
      },
      allowOrigins: ['https://lynebeauty.ch', 'https://www.lynebeauty.ch'],
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
