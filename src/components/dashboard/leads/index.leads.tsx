import { LeadNavigation } from "./header.leads"
import LeadInsightsIndex from "./insight/insight-index"
import { LeadsTable } from "./table/table.index"

export const LeadsIndex = () => {
    return (
        <>
        <LeadNavigation />
        <LeadInsightsIndex />
        <LeadsTable />
        </>
    )
}