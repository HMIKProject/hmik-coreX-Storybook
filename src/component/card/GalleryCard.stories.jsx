import React from 'react';
import { GalleryCard } from './GalleryCard';

import Image from "../../assets/image.svg";
import ImageProf from "../../assets/profil.svg";

export default {
  title: 'Atomic/Card/Gallery Card',
  component: GalleryCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Judul dari gambar galeri' },
    image: { control: 'text', description: 'URL gambar galeri' },
    variant: { 
      control: 'select', 
      options: ['default', 'avatar', 'overlay'],
      description: 'Pilihan varian desain kartu' 
    }
  },
};

export const Default = {
  args: {
    image: Image, 
    title: 'Title',
  },
};

export const LongTitle = {
  args: {
    image: Image,
    title: 'Dokumentasi Kegiatan Mahasiswa Baru',
  },
};

export const AvatarVariant = {
  args: {
    image: ImageProf, 
    title: 'Nama',
    subtitle: 'Jabatan',
    variant: 'avatar',
  },
};

export const OverlayVariant = {
  args: {
    image: Image, 
    title: 'Title Example',
    variant: 'overlay',
  },
};