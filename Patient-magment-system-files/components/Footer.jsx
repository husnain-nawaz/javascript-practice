export default function Footer() {
  return (
    <footer className="text-center text-xs text-gray-500 py-4 border-t bg-white">
      © {new Date().getFullYear()} Patient Management System. Built with React.
    </footer>
  );
}
