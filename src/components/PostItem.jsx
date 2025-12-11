import { format } from "date-fns";

export default function PostItem({ post }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
      <div className="font-semibold text-slate-700">{post.authorName}</div>

      <div className="text-sm text-slate-600 mb-2">
        {format(new Date(post.timestamp), "dd/MM/yyyy HH:mm")}
      </div>

      <div className="text-slate-800 whitespace-pre-line">
        {post.text}
      </div>
    </div>
  );
}
