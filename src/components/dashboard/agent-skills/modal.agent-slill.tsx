"use client";

import { useEffect, useState } from "react";
import { BookAIcon, ChevronDown, ChevronUp, ListOrdered, Receipt, Ship, User2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { CopilotIcon } from "../__global/global.right-sidebar";
import { PiInvoiceFill } from "react-icons/pi";
import { useSearchParams } from "next/navigation";

export default function AgentSkillModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(true);
  const [email, setEmail] = useState("purchasing@contoso.com");
  const [emailAccess, setEmailAccess] = useState<string[]>([]);


   const searchParams = useSearchParams()

   const isId = searchParams.has("id")

   useEffect(() => {
    if (isId) {
      setIsOpen(true)
    }
   }, [isId])




  const handleAllowAccess = () => {
    if (email && !emailAccess.includes(email)) {
      setEmailAccess([...emailAccess, email]);
      setEmail("");
    }
  };

  const removeEmail = (emailToRemove: string) => {
    setEmailAccess(emailAccess.filter((e) => e !== emailToRemove));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[700px] bg-white">
        <DialogHeader>
          <div className="">
            <DialogTitle></DialogTitle>

            <div className="flex mt-10 flex-row md:items-center gap-1">
              <img
                src={CopilotIcon}
                alt="Mona"
                className="w-6 h-6 object-cover"
              />
              <h2 className="text-sm sm:text-base 2xl:text-base font-semibold ml-1">
                Agent skill
              </h2>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <Collapsible
            open={isCollapsibleOpen}
            onOpenChange={setIsCollapsibleOpen}
            className=" border border-solid shadow-sm rounded-lg"
          >
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-l p-4 text-base hover:bg-gray-50">
              <span className="font-bold">
                Check if on-hand inventory will allow all sales orders to ship
                without delay
              </span>
              {isCollapsibleOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronUp className="h-4 w-4" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4  bg-gray-50 p-4">
              <p className="text-sm text-gray-600 leading-7">
                When <span className="text-gray-100 bg-primary px-1 py-[2px] rounded-xl"> <User2 className="inline text-[currentColor] h-3 w-3"/> any vendor</span> sends an
                email with changes to{" "}
                <span className="text-gray-100 bg-primary px-1 py-[2px] rounded-xl"> <PiInvoiceFill className="inline text-[currentColor] h-3 w-3"/> confirmed purchase orders</span>
                , check if the resulting{" "}
                <span className="text-gray-100 bg-primary px-1 py-[2px] rounded-xl"> <BookAIcon className="inline text-[currentColor] h-3 w-3"/> on-hand inventory</span> will
                allow <span className="text-gray-100 bg-primary px-1 py-[2px] rounded-xl"> <Receipt className="inline text-[currentColor] h-3 w-3"/> all sales orders</span> to{" "}
                <span className="text-gray-100 bg-primary px-1 py-[2px] rounded-xl"> <Ship className="inline text-[currentColor] h-3 w-3"/> ship without delay</span>. If
                so,{" "}<br />
                <span className="text-gray-100 bg-primary px-1 py-[2px] rounded-xl"> <ListOrdered className="inline text-[currentColor] h-3 w-3"/> update the purchase order</span>{" "}
                to reflect the change.
              </p>
            </CollapsibleContent>
          </Collapsible>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-blue-100 p-1">
                <div className="h-full w-full rounded bg-blue-500" />
              </div>
              <h3 className="font-medium">Enable email access</h3>
            </div>
            <p className="text-sm text-gray-600">
              Allow the agent to access email inboxes to read mail from known
              vendors
            </p>
            <div className="space-y-2">
              {emailAccess.map((e) => (
                <div
                  key={e}
                  className="flex items-center gap-2 rounded-lg border bg-gray-50 px-3 py-2"
                >
                  <span className="h-6 w-6 rounded bg-gray-200 text-center leading-6">
                    {e[0].toUpperCase()}
                  </span>
                  <span className="flex-1">{e}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeEmail(e)}
                    className="h-6 w-6 p-0"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove {e}</span>
                  </Button>
                </div>
              ))}
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleAllowAccess}>Allow access</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-10">
          <Button onClick={() => setIsOpen(false)}>Activate</Button>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
