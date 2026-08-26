import React from 'react';
import { NewsCard } from './NewsCard';

import Image from "../../assets/image.svg";

export default {
  title: 'Atomic/Card/News Card',
  component: NewsCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Judul berita atau artikel' },
    date: { control: 'text', description: 'Tanggal publikasi' },
    image: { control: 'text', description: 'URL gambar thumbnail' },
    variant: { 
      control: 'select', 
      options: ['default', 'profile'],
      description: 'Pilihan varian desain kartu' 
    }
  },
};

export const Default = {
  args: {
    // Menggunakan placeholder image untuk simulasi
    image: Image, 
    title: 'Title',
    date: 'DD/MM/YYYY',
  },
};

export const LongTitle = {
  args: {
    image: Image,
    title: 'Pertandingan Bola Voli HMIK Berlangsung Sangat Sengit di Final',
    date: '12/08/2026',
  },
};

export const ProfileVariant = {
  args: {
    image: Image, 
    title: 'Yunjin Chaniago',
    subtitle: 'Jabatan',
    variant: 'profile',
  },
};