import Link from "next/link";

export function Header() {
  const NAV_ITEMS = [
    { href: "/", label: "Index" },
    { href: "/posts", label: "Posts" },
    { href: "/users", label: "Users" },
    { href: "/comments", label: "Comments" },
  ];
  return (
    <div className="flex justify-center items-center border-b w-full h-24">
      {NAV_ITEMS.map((item) => {
        return (
          <Link href={item.href} key={item.label}>
            <a className="inline-block py-2 px-6 text-xl hover:text-blue-500 focus:text-blue-500 active:text-blue-500">
              {item.label}
            </a>
          </Link>
        );
      })}
    </div>
  );
}
