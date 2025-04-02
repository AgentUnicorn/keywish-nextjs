import { Update } from 'next/dist/build/swc/types';
import type React from 'react';
export interface ImageData {
  id: number;
  url: string;
  name?: string;
}

export type UpdateSectionProps = (params: { id: number; value: string }) => void;

export interface ImageCardProps {
  image: ImageData;
  onRemove: (id: number) => void;
}

export interface Section {
  id: number;
  title: string;
  type: 'array' | 'text';
  data?: ImageData[] | [];
  content?: string;
}
