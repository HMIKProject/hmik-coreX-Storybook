import { CandidateFormModal } from './CandidateFormModal';

export default {
  title: 'Component/Modal/CandidateFormModal',
  component: CandidateFormModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const AddMode = {
  args: {
    isOpen: true,
    mode: 'add',
    onClose: () => alert('Modal closed'),
    onSubmit: (data) => alert(`Submit Data: ${JSON.stringify(data, null, 2)}`),
  },
};

export const EditMode = {
  args: {
    isOpen: true,
    mode: 'edit',
    initialData: {
      id_paslon: 1,
      nomor_urut: 1,
      nama_ketua: 'Nanami Kento',
      nim_ketua: '10121001',
      nama_wakil: 'Loid Forger',
      nim_wakil: '10121002',
      nama_kabinet: 'Kabinet Maju Bersama',
      foto_paslon: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      visi: 'Mewujudkan HMIK yang solid, inovatif, dan berdampak bagi seluruh mahasiswa Ilmu Komputer.',
      misi: '1. Memperkuat budaya kolaborasi antar angkatan.\n2. Menghadirkan program kerja yang inovatif dan terukur.\n3. Meningkatkan transparansi serta keterbukaan informasi himpunan.',
    },
    onClose: () => alert('Modal closed'),
    onSubmit: (data) => alert(`Update Data: ${JSON.stringify(data, null, 2)}`),
  },
};

export const LoadingState = {
  args: {
    isOpen: true,
    mode: 'add',
    isLoading: true,
  },
};
