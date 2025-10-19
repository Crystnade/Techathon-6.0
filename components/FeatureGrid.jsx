export default function FeatureGrid(){
  const items = [
    { title: 'Create & share', text: 'Post photos and thoughts with polished cards and simple privacy controls.', icon: '/icon-create.svg' },
    { title: 'Follow friends', text: 'Build your circle. Follow, like, and comment to keep the convo going.', icon: '/icon-follow.svg' },
    { title: 'Stay in the loop', text: 'Realtime notifications keep you updated (coming soon).', icon: '/icon-bell.svg' }
  ];
  return (
    <section id="features" className="features" aria-label="Features">
      {items.map((it)=> (
        <article className="card" key={it.title}>
          <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'8px'}}>
            <img src={it.icon} width="22" height="22" alt="" aria-hidden="true" />
            <h3 className="card-title">{it.title}</h3>
          </div>
          <p className="card-text">{it.text}</p>
        </article>
      ))}
    </section>
  );
}
