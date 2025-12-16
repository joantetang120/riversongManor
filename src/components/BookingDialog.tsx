import { useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface BookingDialogProps {
  trigger?: React.ReactNode;
}

export const BookingDialog = ({ trigger }: BookingDialogProps) => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(2);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/50 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 tracking-luxury uppercase px-8 py-6 text-sm font-medium transition-all duration-300"
          >
            Book Your Stay
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-foreground">
            Book Blyth Manor
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Check-in Date */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Check-in</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !checkIn && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkIn ? format(checkIn, "PPP", { locale: fr }) : "Sélectionner une date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out Date */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Check-out</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !checkOut && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOut ? format(checkOut, "PPP", { locale: fr }) : "Sélectionner une date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  disabled={(date) => date < (checkIn || new Date())}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Nombre d'invités</label>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setGuests(Math.max(1, guests - 1))}
                disabled={guests <= 1}
              >
                -
              </Button>
              <span className="text-lg font-medium w-8 text-center">{guests}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setGuests(Math.min(12, guests + 1))}
                disabled={guests >= 12}
              >
                +
              </Button>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 tracking-luxury uppercase"
            size="lg"
            disabled={!checkIn || !checkOut}
          >
            Demander une réservation
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
