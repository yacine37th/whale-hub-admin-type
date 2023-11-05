export const LoadingCart: React.FC = () => {
  const array: (string | number)[] = [
    "1",
    "2",
    "3",
    "4",
    "1",
    "2",
    "3",
    "4",
    1,
  ];
  return (
    <>
      {array.map((item) => (
        <div
          role="status"
          className="max-w-sm animate-pulse m-4 border p-7 w-80 rounded-2xl"
        >
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <div className="w-full p-4 button-background-register border-whitetext-white text-base rounded-none hover:border-white bg-blue-900 "></div>
          <span className="sr-only">Loading...</span>
        </div>
      ))}
    </>
  );
};
