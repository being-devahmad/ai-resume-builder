import { SearchIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { DashBoardSearch } from "./DashboardSearch";
import { Button } from "@nextui-org/button";

const SearchModal = () => {
  return (
    <AlertDialog>
      {/* <AlertDialogTrigger> */}
      <Button
        as={AlertDialogTrigger}
        isIconOnly
        className="bg-slate-100 flex items-center justify-center hover:bg-slate-200 rounded-full size-10"
      >
        <SearchIcon color="black" />
      </Button>
      {/* </AlertDialogTrigger> */}
      <AlertDialogContent className="p-2">
        <AlertDialogTitle>Search</AlertDialogTitle>
        <AlertDialogHeader>
          <DashBoardSearch />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SearchModal;
