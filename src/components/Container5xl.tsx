export interface ContainerProps {
  children: React.ReactNode;
}

export default function Container5xl({ children }: ContainerProps) {
  return <div className="flex mx-auto px-5 max-w-5xl">{children}</div>;
}
