import { MAIN_ID } from '@/constants/storage';
import { Section } from '@/types';
import { getData, saveData } from '@/utils/indexedDB';

export async function getSections() {
  const sections = await getData('sections', MAIN_ID);
  if (!sections) return [];
  return sections.data;
}

export async function createDefaultSections() {
  const defaultSections: Section[] = [
    {
      id: 1,
      title: 'Section 1',
      type: 'array',
      data: [],
      content: '',
    },
    {
      id: 2,
      title: 'Section 2',
      type: 'array',
      data: [],
      content: '',
    },
    {
      id: 3,
      title: 'Section 3',
      type: 'text',
      content: '',
      data: [],
    },
  ];

  await saveData('sections', MAIN_ID, defaultSections);
  return defaultSections;
}

export async function saveSections(sections: Section[]) {
  return await saveData('sections', MAIN_ID, sections);
}
