import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { type Lead } from "./types.data";
import { VscSparkleFilled } from "react-icons/vsc";
import { cn } from "@/lib/utils";
import { TypeLead } from "./lead-modal";

interface LeadCardProps {
  lead: TypeLead;
  onClick: (id: string) => void;
  onMouseEnter: any
  onMouseLeave: any
  className: string
}

export function LeadCard({ lead, onClick, onMouseEnter, onMouseLeave, className }: LeadCardProps) {
  return (
    <Card
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
      className={cn("group cursor-pointer hover:shadow-md transition-shadow", className)}
      onClick={() => onClick(lead.id)}
    >
      <CardContent className="p-4 rounded-[15px]">
        <div className="flex items-start gap-4">
          <img
            src={lead.imageUrl}
            alt=""
            className="rounded-full w-10 object-cover h-10"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-sm truncate">{lead.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground truncate line-clamp-1">
                  {lead.position} • {lead.company}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* action title and description */}

        <div className="my-2 relative from-gray-100 to-purple-50 bg-gradient-to-r rounded-[15px] p-2 lg:p-4">
          <h3 className="font-bold lg:text-lg">
            {lead.actionTitle} {lead.name}
          </h3>
          <p className="text-sm lg:text-base text-muted-foreground">
            Check {lead.name} to {lead.actionDescription}
          </p>

          <span className="bg-white  p-2 absolute top-0 right-0 rounded-bl-[15px] rounded-tr-[15px]">
            <VscSparkleFilled className="text-primary" />
          </span>
        </div>

        <div className="mt-2 flex items-center flex-wrap gap-2">
          <p className="text-sm font-light">{lead.tags[0]}</p>
          <span className="text-2xl">&#xb7;</span>
          <p className="text-sm font-light">{lead.tags[1]}</p>
        </div>
      </CardContent>
    </Card>
  );
}
