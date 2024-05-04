import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useBoardStore } from "@/store/useBoardStore";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeleteBoardDialog({ open, onOpenChange }: Props) {
  const { selected, setBoards, boards, setSelected } = useBoardStore();

  function handleDeleteClick() {
    const newBoards = boards.filter(board => board.id !== selected.id);
    setBoards(newBoards);
    setSelected(newBoards[0]);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>

      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-red font-bold text-2xl">
          Delete this board?
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to delete the '{selected.name}' board? This action will remove all columns and tasks and cannot be reversed.
        </DialogDescription>
        <DialogFooter className="w-full">
          <Button variant="destructive" className="w-full" onClick={handleDeleteClick} >Delete</Button>
          <Button variant="secondary" className="w-full" onClick={() => onOpenChange(false)}>Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}