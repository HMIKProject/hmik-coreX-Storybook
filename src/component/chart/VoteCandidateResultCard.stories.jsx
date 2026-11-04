import VoteCandidateResultCard from './VoteCandidateResultCard';

export default {
  title: 'Components/Chart/VoteCandidateResultCard',
  component: VoteCandidateResultCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  args: {
    title: 'Hasil Perolehan Suara per Kandidat',
    totalVotes: 327,
    candidates: [
      {
        id: '1',
        nomorUrut: 1,
        name: 'Nanami Kento & Loid Forger',
        percentage: 67.8,
        color: '#4059AD',
      },
      {
        id: '2',
        nomorUrut: 2,
        name: 'Kambe Daisuke & Hiromi Higuruma',
        percentage: 33.2,
        color: '#4059AD',
      },
    ],
  },
};
