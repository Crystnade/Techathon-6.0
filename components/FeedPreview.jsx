export default function FeedPreview(){
  const posts = [
    { id:1, img:'/card-placeholder-2.svg', user:'Ava', time:'2m' },
    { id:2, img:'/card-placeholder-3.svg', user:'Jay', time:'7m' },
    { id:3, img:'/card-placeholder-1.svg', user:'Mila', time:'12m' }
  ];
  return (
    <section id="feed" className="feed" aria-label="Preview feed">
      {posts.map(p => (
        <article className="post" key={p.id}>
          <img src={p.img} alt="Post image" />
          <div className="post-body">
            <div className="post-meta">
              <strong>@{p.user}</strong>
              <span>•</span>
              <span>{p.time}</span>
            </div>
            <p className="card-text">Loving the new vibes ✨</p>
          </div>
        </article>
      ))}
    </section>
  );
}
