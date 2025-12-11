import { Camera, Wifi, Video, Share2, PenTool, FileText, MessageSquare } from "lucide-react";

export const ROLES = [
  { id: 'Fotografia', label: 'Fotografia', icon: Camera, color: 'bg-blue-100 text-blue-700' },
  { id: 'Transmissão', label: 'Transmissão', icon: Wifi, color: 'bg-red-100 text-red-700' },
  { id: 'Vídeo', label: 'Vídeo', icon: Video, color: 'bg-indigo-100 text-indigo-700' },
  { id: 'Social Media', label: 'Social Media', icon: Share2, color: 'bg-purple-100 text-purple-700' },
  { id: 'Design Gráfico', label: 'Design Gráfico', icon: PenTool, color: 'bg-pink-100 text-pink-700' },
  { id: 'Redação', label: 'Redação', icon: FileText, color: 'bg-yellow-100 text-yellow-700' },
  { id: 'Articulação', label: 'Articulação', icon: MessageSquare, color: 'bg-green-100 text-green-700' },
];
