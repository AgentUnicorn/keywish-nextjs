import { Section, ImageData } from '@/types';
import { guid } from '@/utils/helpers';
import { saveSections } from './storage.service';

interface ImageDataParameters {
  name: string;
  url: string;
}

export const createKeycap = ({
  sections,
  sectionId,
  imageData,
}: {
  sections: Section[];
  sectionId: number;
  imageData: ImageDataParameters;
}) => {
  const keycap: ImageData = {
    id: guid(),
    name: imageData.name,
    img_url: imageData.url,
  };

  const updatedSection = sections.map((section) => {
    if (section.id === sectionId && section.type === 'array') {
      return { ...section, data: [...(section.data || []), keycap] };
    }
    return section;
  });
  saveSections(updatedSection);
  return updatedSection;
};

export const removeKeycap = ({
  sections,
  sectionId,
  keycapId,
}: {
  sections: Section[];
  sectionId: number;
  keycapId: string;
}) => {
  const updatedSections = sections.map((section) => {
    if (section.id === sectionId && section.type === 'array' && section.data) {
      return { ...section, data: section.data.filter((kc) => kc.id !== keycapId) };
    }
    return section;
  });
  saveSections(updatedSections);
  return updatedSections;
};

export const updateTextInput = ({
  sections,
  sectionId,
  value,
}: {
  sections: Section[];
  sectionId: number;
  value: string;
}) => {
  const updatedSections = sections.map((section) => {
    if (section.id === sectionId && section.type === 'text') {
      console.log('content', value);
      return { ...section, content: value };
    }
    return section;
  });
  saveSections(updatedSections);
  return updatedSections;
};
