import {
  LayoutDashboard,
  ClipboardList,
  ListChecks,
  User2,
  ClipboardCheck,
  MessagesSquare,
  Newspaper,
  Trophy,
  Calendar1,
} from 'lucide-react';

export const sidebarMenus = [
  { name: 'Dashboard', slug: 'dashboard', icon: <LayoutDashboard size={24} /> },
  { name: 'Penugasan', slug: 'penugasan', icon: <ClipboardList size={24} /> },
  { name: 'Absensi', slug: 'absensi', icon: <ListChecks size={24} /> },
  { name: 'Mahasiswa Baru', slug: 'mahasiswa-baru', icon: <User2 size={24} /> },
  { name: 'Perizinan', slug: 'perizinan', icon: <ClipboardCheck size={24} /> },
  { name: 'RAJA Hub', slug: 'raja-hub', icon: <MessagesSquare size={24} /> },
  { name: 'Berita', slug: 'berita', icon: <Newspaper size={24} /> },
  { name: 'UKM', slug: 'ukm', icon: <Trophy size={24} /> },
  { name: 'Agenda', slug: 'agenda', icon: <Calendar1 size={24} /> },
];
