import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ConsultationDialog({ open, onOpenChange }: ConsultationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-transparent border-0 shadow-none p-0 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">Book Consultation</DialogTitle>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full bg-[#c71018] p-6 md:p-8 lg:p-12 text-center rounded-t-3xl relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-3 md:mb-4">
              Book your free internship <br /> placement session.
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
              No commitment. We'll understand your goals, review your CV,
              and suggest the best internship options for you.
            </p>
          </div>

          <div className="w-full bg-white p-6 md:p-8 lg:p-12 rounded-b-3xl -mt-4 relative z-20 shadow-2xl max-w-3xl mx-auto">
            <form
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="fullName"
                  className="text-gray-700 font-medium"
                >
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-gray-700 font-medium"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="country"
                  className="text-gray-700 font-medium"
                >
                  Country
                </Label>
                <Input
                  id="country"
                  placeholder="Current Country"
                  className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="city"
                  className="text-gray-700 font-medium"
                >
                  City
                </Label>
                <Input
                  id="city"
                  placeholder="Current City"
                  className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="degree"
                  className="text-gray-700 font-medium"
                >
                  Degree / Major
                </Label>
                <Input
                  id="degree"
                  placeholder="e.g. Master of IT"
                  className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="gradYear"
                  className="text-gray-700 font-medium"
                >
                  Graduation Year
                </Label>
                <Input
                  id="gradYear"
                  placeholder="e.g. 2025"
                  className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="startMonth"
                className="text-gray-700 font-medium"
              >
                Preferred Internship Start Month
              </Label>
              <Select>
                <SelectTrigger className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-primary/20">
                  <SelectValue placeholder="Select Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jan">January</SelectItem>
                  <SelectItem value="feb">February</SelectItem>
                  <SelectItem value="mar">March</SelectItem>
                  <SelectItem value="apr">April</SelectItem>
                  <SelectItem value="may">May</SelectItem>
                  <SelectItem value="jun">June</SelectItem>
                  <SelectItem value="jul">July</SelectItem>
                  <SelectItem value="aug">August</SelectItem>
                  <SelectItem value="sep">September</SelectItem>
                  <SelectItem value="oct">October</SelectItem>
                  <SelectItem value="nov">November</SelectItem>
                  <SelectItem value="dec">December</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-[#bf360c] hover:bg-[#a02e0a] text-white h-14 text-lg font-bold rounded-full shadow-lg shadow-orange-900/20 mt-4">
              Book My Session
            </Button>

            <div className="flex items-center justify-center gap-2 text-gray-400 text-xs mt-4">
              <Lock className="w-3 h-3" />
              <span>
                Your details are kept private and only used to contact
                you about internship options.
              </span>
            </div>
          </form>
        </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
