export interface Props {
  children: number;
  variants?: string;
}

const ViewsCount: React.FC<Props> = ({ children, variants }) => {
  if (variants === "featured") {
    return (
      <span className="mr-2 rounded-md bg-black bg-opacity-40 p-1 text-sm text-primary">
        {children} views
      </span>
    );
  }
  return <span className="text-gray-300">{children} views</span>;
};

export default ViewsCount;
