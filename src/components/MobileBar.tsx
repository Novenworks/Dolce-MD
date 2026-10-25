import { site } from "@/lib/site";

export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/15 bg-navy text-white lg:hidden">
      <a href={site.phoneHref} className="focus-ring py-4 text-center text-[13px] font-semibold tracking-[0.12em] uppercase">
        Call {site.phoneDisplay}
      </a>
      <a
        href={site.book}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring bg-teal py-4 text-center text-[13px] font-semibold tracking-[0.12em] uppercase"
      >
        Book
      </a>
    </div>
  );
}
