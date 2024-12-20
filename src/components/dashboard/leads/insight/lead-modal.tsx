import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { AtSign, ChevronLeft, ChevronRight, Lock, Pencil, PieChart, SendHorizonal, ThumbsDown, ThumbsUp} from 'lucide-react';
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";
import { VscSparkleFilled } from "react-icons/vsc";

export interface TypeLead {
  id: string;
  name: string;
  position?: string;
  company?: string;
  interest?: string;
  actionTitle?: string;
  actionDescription?: string;
  tags?: string[];
  reasonsForLead?: string[];
  about?: string;
  metrics?: {
    decisionMaker: boolean;
    potentialValue: string;
    intent: "High" | "Medium" | "Low";
  };
  imageUrl?: string;
}

interface LeadModalProps {
  leads: TypeLead[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LeadModalBox({ leads, open, onOpenChange }: LeadModalProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentLeadId = searchParams.get("leadId");

  const currentIndex = leads.findIndex((lead) => lead.id === currentLeadId);
  const currentLead = leads[currentIndex];

  const updateLeadId = useCallback(
    (newId: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("leadId", newId);
      router.push(`?${params.toString()}`);
    },
    [router, searchParams]
  );

  const handlePrevious = () => {
    if (currentIndex > 0) {
      updateLeadId(leads[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < leads.length - 1) {
      updateLeadId(leads[currentIndex + 1].id);
    }
  };

  if (!currentLead) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl bg-white p-[4px] rounded-xl"> 
        <section className="bg-white rounded-lg px-8">
             {/* Navigation Buttons */}
             <div className="sticky w-full top-1/2 left-0 right-0 flex justify-between pointer-events-none">
             
             <Button
               title="Previous Lead"
               className="rounded-full bg-white -ml-12 transform -translate-y-1/2 transition-all duration-200 hover:scale-110 pointer-events-auto"
               variant="outline"
               size="icon"
               onClick={handlePrevious}
               disabled={currentIndex === 0}
             >
               <ChevronLeft className="relative h-8 w-8 text-purple-500" />
             </Button>
           
             <Button
                title="Next Lead"
               className="rounded-full bg-white  -mr-12 transform -translate-y-1/2 transition-all duration-200 hover:scale-110 pointer-events-auto"
               variant="outline"
               size="icon"
               onClick={handleNext}
               disabled={currentIndex === leads.length - 1}
             >
               <ChevronRight className="block h-8 w-8 relative z-[100] text-purple-500" />
             </Button>
           
         </div>


         


            {/* content starts here */}
          <div className="flex items-center gap-2 p-6 ">
            <div className="py-1.5 px-2 bg-purple-100">
              <AtSign className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">
              Engage with {currentLead.name}
            </h2>
          </div>

          <div className="relative px-4 pb-4">
            <div className="flex items-center gap-3 mb-6 border border-solid shadow-lg p-4 rounded-lg">
              <div className="relative h-[54px] w-[54px] rounded-full overflow-hidden">
                <Image
                  src={currentLead.imageUrl!}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{currentLead.name}</h3>

                <div className="flex items-center gap-1">
                  <BsLinkedin className="text-blue-600" />
                  <Separator orientation="vertical" className="h-4" />
                  <p className="text-sm text-muted-foreground">
                    {currentLead.position}, {currentLead.company}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 py-2 px-4 rounded-[15px] mb-6 flex flex-col lg:flex-row items-center justify-between">
              <div className="flex items-center">
                <VscSparkleFilled className="text-primary" />
                <p className="text-blue-700 text-sm ml-2">
                  {currentLead.interest}
                </p>
              </div>
              <div className="flex gap-2 mt-4 lg:mt-0">
                <Button variant="outline" className="ml-auto">
                  <Pencil className="h-6 w-6" /> Edit
                </Button>
                <Button className="ml-auto">
                  <SendHorizonal /> Approve and Send
                </Button>
              </div>
            </div>

            {/* ?tab section */}

            <div className="border border-solid shadow-sm rounded-lg mb-3">
              {["Engage", "Research"].map((item, idx) => {
                return (
                  <button
                    key={idx}
                    className={`${
                      item === "Engage"
                        ? ""
                        : "border-b-2 border-solid border-primary"
                    } text-sm text-gray-600 font-semibold px-4 py-2`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            <div className="bg-white shadow-md p-4 rounded-lg mb-6">
              <div className="my-2 relative from-blue-50 via-purple-50 to-blue-50 bg-gradient-to-r rounded-lg p-2 lg:p-5">
                <h4 className="font-semibold mb-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Why I picked this lead
                </h4>
                <ul className="space-y-1">
                  {currentLead.reasonsForLead!.map((reason, index) => (
                    <li key={index} className="flex items-start gap-1 text-sm">
                      <span className="text-sm">•</span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>

                <span className="bg-white  p-2 absolute top-0 right-0 rounded-bl-[15px] rounded-tr-[15px]">
                  <VscSparkleFilled className="text-primary" />
                </span>

                <div className="flex gap-4 mt-3">
                  <div className="flex items-center gap-2 p-3 bg-white shadow-sm rounded-2xl">
                    <div className="text-5xl rounded-full">🎯</div>
                    <div>
                      <div className="text-sm text-gray-600 font-bold">
                        Decision maker
                      </div>
                      <div className="font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        {currentLead.metrics!.decisionMaker ? "Yes" : "No"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-white shadow-sm rounded-2xl">
                    <div className="text-5xl rounded-full">🏆</div>
                    <div>
                      <div className="text-sm text-gray-600">
                        Potential deal value
                      </div>
                      <div className="font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        {currentLead.metrics!.potentialValue}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 min-w-[200px] bg-white shadow-sm rounded-2xl">
                    <div className="text-5xl rounded-full">📈</div>
                    <div>
                      <div className="text-sm text-gray-600">Intent</div>
                      <div className="font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        {currentLead.metrics!.intent}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between mt-4">
                <div className="flex flex-row gap-2">
                  <div className="bg-gray-200 p-1.5 rounded-lg text-sm border border-solid">
                    <Lock />
                  </div>

                  <div className="bg-gray-200 flex gap-1 flex-row items-center p-1.5 rounded-lg text-xs border border-solid">
                    1
                    <Separator
                      orientation="vertical"
                      className="h-4 text-white"
                    />
                    <PieChart className="text-primary" /> D365 Sales
                  </div>

                  <div className="bg-gray-200 p-1.5 rounded-lg  text-sm border border-solid border-gray-300">
                    +2
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="bg-gray-200 p-1.5 rounded-lg text-sm border border-solid">
                    AI-generated content may be incorrect
                  </div>

                  <Button title="Like this review" size="icon" variant="ghost">
                    <ThumbsDown />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <ThumbsUp />
                  </Button>
                </div>
              </div>
            </div>

            <div className="border border-solid rounded-2xl p-4 shadow-md">
              <h4 className="font-bold mb-1">About {currentLead.name}</h4>
              <p className="text-gray-600">{currentLead.about}</p>
            </div>

           

            <div className="mt-4 flex items-center justify-between">
              <div className="flex flex-row gap-3 items-center">
                <span className="text-sm font-bold text-gray-500">
                  Showing {currentIndex + 1} of {leads.length}
                </span>

                <Separator orientation="vertical" className="h-4" />

                <Button variant="link" className="text-sm font-semibold p-0">
                  show all
                </Button>
              </div>

              <div className="flex gap-1 ml-2">
                {leads.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 w-1.5 rounded-full ${
                      index === currentIndex
                        ? "bg-blue-600 w-4 h-2"
                        : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>

              <div className="">
                <Button title="Like this review" size="icon" variant="ghost">
                  <ThumbsDown />
                </Button>
                <Button size="icon" variant="ghost">
                  <ThumbsUp />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
}

