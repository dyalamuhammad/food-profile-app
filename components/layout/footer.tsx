interface Props {
  title: string;
}

export default function Footer({title}:Props) {
  return (
   <footer className="bg-coffee-900 py-10 text-center text-sm text-coffee-100">
    © 2026 {title}. All rights reserved.
    </footer>
  );
}