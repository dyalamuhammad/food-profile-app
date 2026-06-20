interface Props {
  title: string;
}

export default function Footer({title}:Props) {
  return (
   <footer className="bg-amber-900 py-10 text-center text-sm text-amber-100">
    © 2026 {title}. All rights reserved.
    </footer>
  );
}