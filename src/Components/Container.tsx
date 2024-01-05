"use client";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1920px] mx-auto xl:px-20 md:px-10 sm:2px px-4   ">
      {children}
    </div>
  );
}
