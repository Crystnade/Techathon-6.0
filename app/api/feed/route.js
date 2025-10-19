const posts = [
  { id: 1, img: '/card-placeholder-2.svg', user: 'Ava', time: '2m', text: 'Loving the new vibes ✨' },
  { id: 2, img: '/card-placeholder-3.svg', user: 'Jay', time: '7m', text: 'Just shipped a new feature!' },
  { id: 3, img: '/card-placeholder-1.svg', user: 'Mila', time: '12m', text: 'Coffee and code ☕' }
];

export async function GET() {
  return Response.json({ posts });
}
