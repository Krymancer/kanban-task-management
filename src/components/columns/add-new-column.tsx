export function AddNewColumn() {
  return (
    <div className='flex flex-1 h-full py-12 rounded-lg'>
      <div
        className='cursor-pointer rounded-lg w-64 bg-gradient-to-b from-[#E9EFFA] to-[#E9EFFA]/50 dark:from-dark-gray dark:to-dark-gray/50 dark:opacity-25 flex items-center justify-center'
      >
        <p className='text-medium-gray font-bold text-xl'>+ New Column</p>
      </div>
    </div>
  );
}