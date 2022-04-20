import Link from "next/link";

function CategoryLabel({ children }) {
  const colorKey = {
    JavaScript: "yellow",
    CSS: "blue",
    Python: "green",
    PHP: "purple",
    Ruby: "red",
  };

  const bgColor = `bg-${colorKey[children]}-600`;

  return (
    <div className={`px-2 py-1 text-gray-100 font-bold rounded ${bgColor}`}>
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}

export default CategoryLabel;
