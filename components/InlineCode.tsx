interface InlineCodeProps {
  children: string;
}

export const InlineCode = ({ children, ...props }: InlineCodeProps) => {
  return (
    <code className="whitespace-nowrap rounded-md border border-zinc-600 bg-white bg-opacity-10 p-0.5 text-xs text-white">
      {children}
    </code>
  );
};

export default InlineCode;
