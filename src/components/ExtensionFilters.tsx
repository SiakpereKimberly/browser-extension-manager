interface ExtensionFiltersProps {
  activeFilter: string;
  setActiveFilter: (value: string) => void;
}

const ExtensionFilters = ({
  activeFilter,
  setActiveFilter,
}: ExtensionFiltersProps) => {
  return (
    <section className='mt-4 flex items-center justify-between'>
      <h2>Extensions List</h2>
      <div className='flex items-center gap-2'>
        <button
          onClick={() => setActiveFilter('all')}
          className={`rounded-2xl px-3 py-2 text-white ${
            activeFilter === 'all'
              ? 'bg-[hsl(3,71%,56%)]'
              : 'bg-[hsl(226,11%,37%)] hover:bg-[hsl(225,23%,24%)]'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveFilter('active')}
          className={`rounded-2xl px-3 py-2 text-white ${
            activeFilter === 'active'
              ? 'bg-[hsl(3,71%,56%)]'
              : 'bg-[hsl(226,11%,37%)] hover:bg-[hsl(225,23%,24%)]'
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setActiveFilter('inactive')}
          className={`rounded-2xl px-3 py-2 text-white ${
            activeFilter === 'inactive'
              ? 'bg-[hsl(3,71%,56%)]'
              : 'bg-[hsl(226,11%,37%)] hover:bg-[hsl(225,23%,24%)]'
          }`}
        >
          Inactive
        </button>
      </div>
    </section>
  );
};
export default ExtensionFilters;
