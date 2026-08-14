export default function Logo() {
  return (
    <div className="pointer-events-none fixed bottom-4 left-1/2 z-50 -translate-x-1/2 sm:bottom-6 md:bottom-8">
      <img
        src="/logo/logo.png"
        alt="Logo"
        className="h-8 w-auto mix-blend-difference sm:h-10 md:h-12 lg:h-14"
      />
    </div>
  );
}