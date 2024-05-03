import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VerticalEllipses } from "@/components/icons";
import { CreateNewTaskDialogContent } from "./create-new-task-dialog-content";

export function CreateNewTaskDialogTrigger() {
  return (
    <div className='flex gap-4 items-center'>
      <Dialog>
        <DialogTrigger asChild>
          <Button className='' size="lg" onClick={() => { }}>
            + <span className="hidden sm:block">Add New Task</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-bold text-start w-full flex justify-between">
              Add New Task
            </DialogTitle>
          </DialogHeader>
          <CreateNewTaskDialogContent />
        </DialogContent>
      </Dialog>
    </div>
  );
}