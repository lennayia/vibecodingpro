export default function Tooltip({ text }) {
  return (
    <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
      {text}
    </span>
  )
}
