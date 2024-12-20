"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type Activity, type Lead } from "./types.data";
import { ActivityCard } from "./activity-card";
import { LeadCard } from "./lead-card";
import { LeadModalBox, TypeLead } from "./lead-modal";
import { CopilotIcon } from "../../__global/global.right-sidebar";
import { InsightProgress } from "./insight-progress";
import { LeadMockData } from "./__leads.data";
import { useIsLaptop, useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";

const mockLeadData: TypeLead[] = LeadMockData.map((lead, idx) => ({
  id: `${idx + 1}`,
  name: lead.name,
  role: lead.title,
  position: lead.title,
  company: lead.company,
  image: `/mona.jpg`,
  imageUrl: `/mona.jpg`,
  tags: [`Expand Business ${idx + 1}`, `High-buying Intent ${idx + 2}`],
  description: lead.actionDescription,
  value: Math.floor(Math.random() * 100000) + 50000,
  actionTitle: lead.actionTitle,
  actionDescription: lead.actionDescription,
  interest:
    "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
  reasonsForLead: [
    'Jane is a key decision-maker and was browsing "espresso machines" on First Coffee\'s website.',
    "Multiple people at her company have reported slowness during service requests.",
    "Northwind Traders currently see $500M in revenue from their in-store coffee shops.",
  ],
  about:
    "Jane Reyes, the Chief Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in optimizing operations and enhancing customer experiences. Under her guidance, Northwind Traders' in-store coffee shops have flourished, becoming a hallmark of quality and innovation.",
  metrics: {
    decisionMaker: true,
    potentialValue: "$1M",
    intent: "High" as const,
  },
}));

export const mockActivities: Activity[] = [
  {
    id: "1",
    title: "Cafe A100 for Woodland Bank",
    description: "Review draft and reply to Chris Naldo",
    icon: "review-icon.svg",
    type: "review",
    dueDate: "3 days to close",
    value: 120000,
  },
  {
    id: "2",
    title: "Partnership opportunity for Fabrikam",
    description: "Prepare me for Fabrikam's key stakeholder meeting",
    icon: "opportunity-icon.svg",
    type: "opportunity",
    dueDate: "12 days to close",
    value: 85000,
  },
];

export default function LeadInsightsIndex() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeActivity, setActiveActivity] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const isMobile = useIsMobile();
  const isLaptop = useIsLaptop();

  const leadId = searchParams.get("leadId");
  // const selectedLead = mockLeadData.find((lead) => lead.id === leadId);

  const handleLeadClick = (id: string) => {
    router.push(`${pathname}?leadId=${id}`);
  };

  const progress = 68;
  const target = 45000000;

  return (
    <Card className="w-full my-4 p-[3px] rounded-xl gap-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <CardContent className="p-6 bg-white rounded-lg">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row md:items-center gap-1">
              <img
                src={CopilotIcon}
                alt="Mona"
                className="w-6 h-6 object-cover"
              />
              <h2 className="text-sm sm:text-base 2xl:text-base font-semibold ml-1">
                Hi Mona, <span className="text-primary">{progress}%</span> of
                goal achieved and rest can be achieved by focusing on 20 top
                leads.
              </h2>
            </div>

            <div className="w-full max-w-[700px] hidden 2xl:block">
              <InsightProgress />
            </div>
            <Button
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="transition-transform duration-200 hover:bg-gray-100"
            >
              {isExpanded ? (
                <ChevronUp className="h-24 w-24" />
              ) : (
                <ChevronDown className="h-24 w-24" />
              )}
            </Button>
          </div>

          <div className="w-full 2xl:hidden ">
            <InsightProgress />
          </div>

          {/* Expanded Content */}
          {isExpanded && (
            <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-6">
              {/* Leads Section */}
              <div className="2xl:col-span-2">
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">
                    Copilot has pinpointed 20 key leads that show strong
                    purchase intent and are actively engaging. These leads need
                    your focus.
                  </p>
                </div>
                <div className="relative">
                  <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
                    {mockLeadData
                      .slice(
                        isMobile
                          ? currentPage * 1
                          : isLaptop
                          ? currentPage * 1
                          : currentPage * 2,
                        isMobile
                          ? currentPage * 1 + 1
                          : isLaptop
                          ? currentPage * 1 + 1
                          : currentPage * 2 + 2
                      )
                      .map((lead) => (
                        <LeadCard
                          key={lead.id}
                          lead={lead}
                          onClick={handleLeadClick}
                          onMouseEnter={() => setHoveredCard(lead.id)}
                          onMouseLeave={() => setHoveredCard(null)}
                          className={`transition-transform duration-200 ${
                            hoveredCard === lead.id ? "scale-102 shadow-lg" : ""
                          }`}
                        />
                      ))}
                  </div>

                  <div className="">
                    {currentPage !== 0 && (
                      <Button
                        className="absolute rounded-full bg-white -left-4 top-[50%] transform -translate-y-1/2 transition-all duration-200 hover:scale-110"
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          setCurrentPage(Math.max(0, currentPage - 1))
                        }
                        disabled={currentPage === 0}
                      >
                        <ChevronLeft className="h-4 w-4 text-purple-500" />
                      </Button>
                    )}
                    <Button
                      className="absolute rounded-full bg-white -right-4 top-[50%] transform -translate-y-1/2 transition-all duration-200 hover:scale-110"
                      variant="outline"
                      size="icon"
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={(currentPage + 1) * 2 >= mockLeadData.length}
                    >
                      <ChevronRight className="h-4 w-4 text-purple-500" />
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center mt-4">
                  {Array.from({
                    length: Math.ceil(mockLeadData.length / (isMobile ? 1 : 2)),
                  }).map((_, index) => (
                    <div
                      title="Click to navigate"
                      key={index}
                      className={`h-2 w-2 cursor-pointer rounded-full mx-1 transition-all duration-200 ${
                        index === currentPage
                          ? "bg-primary w-6"
                          : "bg-muted hover:bg-primary/50"
                      }`}
                      onClick={() => setCurrentPage(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Activities Section */}
              <div className="lg:col-span-1">
                <h3 className="font-medium mb-4">Other key activities</h3>
                <div className="space-y-3">
                  {mockActivities.map((activity) => (
                    <ActivityCard
                      key={activity.id}
                      activity={activity}
                      onMouseEnter={() => setActiveActivity(activity.id)}
                      onMouseLeave={() => setActiveActivity(null)}
                      className={`transition-all duration-200 ${
                        activeActivity === activity.id
                          ? "transform translate-x-2 shadow-md"
                          : ""
                      }`}
                    />
                  ))}
                </div>
                <Link passHref href="/dashboard/activities">
                <Button
                  variant="link"
                  className="mt-4 p-0 font-bold transition-colors duration-200 hover:text-primary"
                >
                  Show all key activities
                </Button>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Lead Modal */}

        <LeadModalBox
          leads={mockLeadData}
          open={!!leadId}
          onOpenChange={(open) => {
            if (!open) router.push(pathname);
          }}
        />
      </CardContent>
    </Card>
  );
}
