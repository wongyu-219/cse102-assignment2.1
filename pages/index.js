import Link from 'next/link'

export default function index() {
  return <h1 className="title">
  Read{' '}
  <Link href="/posts/first-post">
    <a>this page!</a>
  </Link>
</h1>
}
