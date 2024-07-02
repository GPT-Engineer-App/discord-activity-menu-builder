import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <h1 className="text-4xl font-bold">Clicker Game</h1>
      <Button variant="primary" size="lg" className="w-48">
        Start Game
      </Button>
      <Button variant="secondary" size="lg" className="w-48">
        Settings
      </Button>
      <Button variant="secondary" size="lg" className="w-48">
        Leaderboard
      </Button>
      <Button variant="destructive" size="lg" className="w-48">
        Quit
      </Button>
    </div>
  );
};

export default Index;
