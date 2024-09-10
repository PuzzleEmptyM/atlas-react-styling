export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-center absolute bottom-0 w-full text-gray-500 p-4">
      &copy; {year} Atlas School
    </div>
  );
}
