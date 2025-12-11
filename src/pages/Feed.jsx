import { useFirestore } from "../context/FirestoreContext";
import PostItem from "../components/PostItem";

export default function Feed() {
  const { posts } = useFirestore();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold text-slate-700 mb-2">Feed</h1>

      {posts.length === 0 && (
        <div className="text-slate-500">No posts yet.</div>
      )}

      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
