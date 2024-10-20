import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Create Static <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white">
            <h3 className="text-2xl font-bold">Link To Another Page</h3>
            <div className="text-lg">
              <p>This is how you access other pages of your static site.</p>
              <p className="text-blue-500">
                <Link href="/nested">Click here →</Link>
              </p>
            </div>
          </div>
          <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white">
            <h3 className="text-2xl font-bold">Local Image</h3>
            <div className="text-lg">
              This is how you show static images in your app.
            </div>
            <Image
              src="/images/porsche.jpeg"
              alt="Static Image"
              width={200}
              height={200}
            />
          </div>
          <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white">
            <h3 className="text-2xl font-bold">Custom Font</h3>
            <div className="text-lg">
              This is how you use custom font files.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
