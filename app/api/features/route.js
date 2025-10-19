const features = [
  { id: 1, title: 'Create & share', description: 'Post photos and thoughts with polished cards and simple privacy controls.' },
  { id: 2, title: 'Follow friends', description: 'Build your circle. Follow, like, and comment to keep the convo going.' },
  { id: 3, title: 'Stay in the loop', description: 'Realtime notifications keep you updated (coming soon).' }
];

export async function GET() {
  return Response.json({ features });
}
