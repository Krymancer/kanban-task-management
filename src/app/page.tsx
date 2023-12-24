import Button from "@/components/Button";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const handleClick = () => {console.log('click')};
  return (
    <main className="flex min-h-screen flex-col items-center justify-center dark:bg-dark-gray bg-white gap-10">
      <ThemeToggle />
      <Button onClick={handleClick}>Primary</Button>
      <Button secondary onClick={handleClick}>Secondary</Button>
      <Button danger onClick={handleClick}>Danger</Button>
    </main>
  )
}
