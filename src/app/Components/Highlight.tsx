export default function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-midground-500 from-50% to-foreground text-transparent bg-clip-text">
      {children}
    </span>
  );
}