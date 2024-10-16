import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div>Hello world!</div>
      {/* ❌ Removes the `link` header from the middleware */}
      <Image
        src="/image.png"
        priority
        alt="An image"
        width={500}
        height={500}
      />
    </main>
  );
}
