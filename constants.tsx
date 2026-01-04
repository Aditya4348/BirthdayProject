
import { Memory, SurpriseItem } from './types';

export const USER_NAME = "Bestie"; // Ganti dengan nama teman
export const BIRTHDAY_AGE = "25"; // Ganti sesuai umur

export const MEMORIES: Memory[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600",
    caption: "Hari di mana kita tertawa sampai perut sakit.",
    year: "2022"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1496337589254-7e19d01ced44?auto=format&fit=crop&q=80&w=600",
    caption: "Momen tenang di bawah langit sore.",
    year: "2023"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=600",
    caption: "Perjalanan yang tidak akan pernah kulupakan.",
    year: "2024"
  }
];

export const SURPRISE_ITEMS: SurpriseItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1530103862676-fa392239c56e?auto=format&fit=crop&q=80&w=300",
    text: "Semoga hari-harimu selalu ceria!",
    color: "bg-rose-400"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=300",
    text: "Makin sukses dalam segala hal.",
    color: "bg-amber-400"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1464347601390-25e2842a37f7?auto=format&fit=crop&q=80&w=300",
    text: "Tetap jadi pribadi yang hangat.",
    color: "bg-emerald-400"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=300",
    text: "Banyak rejeki & kebahagiaan.",
    color: "bg-indigo-400"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=300",
    text: "Stay healthy and stay cool!",
    color: "bg-violet-400"
  }
];

export const MAIN_MESSAGE = `
Selamat ulang tahun, ${USER_NAME}!

Di usiamu yang ke-${BIRTHDAY_AGE} ini, aku hanya ingin mendoakan agar setiap langkahmu selalu dipenuhi cahaya. Kamu adalah salah satu orang paling tulus yang pernah aku kenal, dan dunia terasa jauh lebih cerah karena ada kamu di dalamnya.

Terima kasih sudah menjadi teman, pendengar, dan bagian dari ceritaku. Semoga semua mimpi yang kamu bisikkan dalam doa segera menjadi nyata.

Stay amazing, stay you.
`;
