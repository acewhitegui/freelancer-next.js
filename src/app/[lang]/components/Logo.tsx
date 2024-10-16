import Link from "next/link";
import Image from "next/legacy/image";

export default function Logo({
                               src,
                               children,
                             }: {
  src: string | null | undefined;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href="/"
      aria-label="Back to homepage"
      className="flex items-center p-2"
    >
      {src && <Image src={src} alt="logo" width={45} height={45}/>}
      <div className="ml-2">{children}</div>
    </Link>
  );
}
