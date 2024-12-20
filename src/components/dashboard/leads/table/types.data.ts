export interface TableLead {
    id: string
    name: string
    topic: string
    status: string
    createdAt: string
    dealValue?: number
    decisionMaker?: string
    description?: string
  }
  

export const mockLeads: TableLead[] = [
  {
    id: "1",
    name: "Winford Asher",
    topic: "Cafe A100 for commercial use",
    status: "New",
    createdAt: "2024-04-02T12:00:00",
    dealValue: 15000,
    decisionMaker: "Final Approver",
    description: "Interested in bulk purchase of commercial coffee machines"
  },
  {
    id: "2",
    name: "Josie Love",
    topic: "Upgrading service plan",
    status: "New",
    createdAt: "2024-03-30T07:45:00",
    dealValue: 5000,
    decisionMaker: "Evaluating",
    description: "Current silver plan user looking to upgrade to platinum"
  },
  {
    id: "3",
    name: "Harrison Curtis",
    topic: "Issue with throughput on ExpressoMaster",
    status: "New",
    createdAt: "2024-03-28T15:30:00",
    dealValue: 0,
    decisionMaker: "Technical Contact",
    description: "Experiencing slower than expected throughput on new machine"
  },
  {
    id: "4",
    name: "Jermaine Barrett",
    topic: "New roaster in distribution facility",
    status: "New",
    createdAt: "2024-03-25T11:05:00",
    dealValue: 75000,
    decisionMaker: "Department Head",
    description: "Looking to establish new roasting facility"
  },
  {
    id: "5",
    name: "Gerald Stephens",
    topic: "Concerns on current machines",
    status: "New",
    createdAt: "2024-03-23T16:50:00",
    dealValue: 0,
    decisionMaker: "Maintenance Lead",
    description: "Regular maintenance review and concerns"
  }
,
{
    id: "6",
    name: "Alice Johnson",
    topic: "Request for demo",
    status: "New",
    createdAt: "2024-03-20T10:00:00",
    dealValue: 0,
    decisionMaker: "Manager",
    description: "Interested in a product demo"
},
{
    id: "7",
    name: "Bob Smith",
    topic: "Bulk order inquiry",
    status: "New",
    createdAt: "2024-03-18T14:30:00",
    dealValue: 20000,
    decisionMaker: "Procurement",
    description: "Looking to place a bulk order"
},
{
    id: "8",
    name: "Charlie Brown",
    topic: "Service contract renewal",
    status: "New",
    createdAt: "2024-03-15T09:45:00",
    dealValue: 10000,
    decisionMaker: "Operations",
    description: "Interested in renewing service contract"
},
{
    id: "9",
    name: "Diana Prince",
    topic: "New product inquiry",
    status: "New",
    createdAt: "2024-03-12T11:20:00",
    dealValue: 5000,
    decisionMaker: "CEO",
    description: "Inquiring about new product features"
},
{
    id: "10",
    name: "Evan Wright",
    topic: "Technical support needed",
    status: "New",
    createdAt: "2024-03-10T16:00:00",
    dealValue: 0,
    decisionMaker: "IT Specialist",
    description: "Needs technical support for existing product"
},
{
    id: "11",
    name: "Fiona Green",
    topic: "Partnership proposal",
    status: "New",
    createdAt: "2024-03-08T13:30:00",
    dealValue: 30000,
    decisionMaker: "Business Development",
    description: "Proposing a new partnership"
},
{
    id: "12",
    name: "George Hill",
    topic: "Feedback on product",
    status: "New",
    createdAt: "2024-03-05T10:15:00",
    dealValue: 0,
    decisionMaker: "Customer",
    description: "Providing feedback on product usage"
},
{
    id: "13",
    name: "Hannah Lee",
    topic: "Request for quotation",
    status: "New",
    createdAt: "2024-03-02T15:45:00",
    dealValue: 25000,
    decisionMaker: "Finance",
    description: "Requesting a quotation for new purchase"
},
{
    id: "14",
    name: "Ian Miller",
    topic: "Complaint about service",
    status: "New",
    createdAt: "2024-02-28T12:00:00",
    dealValue: 0,
    decisionMaker: "Customer Service",
    description: "Complaining about recent service experience"
},
{
    id: "15",
    name: "Jane Doe",
    topic: "Inquiry about warranty",
    status: "New",
    createdAt: "2024-02-25T09:30:00",
    dealValue: 0,
    decisionMaker: "Warranty Specialist",
    description: "Inquiring about product warranty details"
},
{
    id: "16",
    name: "Kevin White",
    topic: "New feature request",
    status: "New",
    createdAt: "2024-02-22T14:00:00",
    dealValue: 0,
    decisionMaker: "Product Manager",
    description: "Requesting a new feature for the product"
},
{
    id: "17",
    name: "Laura Black",
    topic: "Follow-up on previous inquiry",
    status: "New",
    createdAt: "2024-02-20T11:45:00",
    dealValue: 0,
    decisionMaker: "Sales",
    description: "Following up on a previous inquiry"
},
{
    id: "18",
    name: "Michael Brown",
    topic: "Request for product samples",
    status: "New",
    createdAt: "2024-02-18T16:30:00",
    dealValue: 0,
    decisionMaker: "Marketing",
    description: "Requesting product samples for evaluation"
},
{
    id: "19",
    name: "Nina Davis",
    topic: "Inquiry about delivery",
    status: "New",
    createdAt: "2024-02-15T10:00:00",
    dealValue: 0,
    decisionMaker: "Logistics",
    description: "Inquiring about delivery status"
},
{
    id: "20",
    name: "Oscar Evans",
    topic: "Request for training",
    status: "New",
    createdAt: "2024-02-12T14:45:00",
    dealValue: 0,
    decisionMaker: "HR",
    description: "Requesting training for new employees"
},
{
    id: "21",
    name: "Paul Harris",
    topic: "Issue with billing",
    status: "New",
    createdAt: "2024-02-10T11:30:00",
    dealValue: 0,
    decisionMaker: "Finance",
    description: "Experiencing issues with billing"
},
{
    id: "22",
    name: "Quincy Jones",
    topic: "Inquiry about discounts",
    status: "New",
    createdAt: "2024-02-08T09:15:00",
    dealValue: 0,
    decisionMaker: "Sales",
    description: "Inquiring about available discounts"
},
{
    id: "23",
    name: "Rachel King",
    topic: "Request for product catalog",
    status: "New",
    createdAt: "2024-02-05T13:00:00",
    dealValue: 0,
    decisionMaker: "Procurement",
    description: "Requesting the latest product catalog"
},
{
    id: "24",
    name: "Steve Lewis",
    topic: "Feedback on customer service",
    status: "New",
    createdAt: "2024-02-02T16:45:00",
    dealValue: 0,
    decisionMaker: "Customer",
    description: "Providing feedback on customer service experience"
},
{
    id: "25",
    name: "Tina Martin",
    topic: "Inquiry about product availability",
    status: "New",
    createdAt: "2024-01-30T10:30:00",
    dealValue: 0,
    decisionMaker: "Inventory",
    description: "Inquiring about product availability"
}
]

export function getLeads(
  search: string = "",
  sortBy: keyof TableLead = "createdAt",
  sortDesc: boolean = true,
  page: number = 1,
  pageSize: number = 10
): { leads: TableLead[]; total: number } {
  let filtered = [...mockLeads]

  // Search
  if (search) {
    const searchLower = search.toLowerCase()
    filtered = filtered.filter(
      lead =>
        lead.name.toLowerCase().includes(searchLower) ||
        lead.topic.toLowerCase().includes(searchLower) ||
        lead.status.toLowerCase().includes(searchLower)
    )
  }

  // Sort
  filtered.sort((a, b) => {
    const aVal = a[sortBy]
    const bVal = b[sortBy]
    const modifier = sortDesc ? -1 : 1

    if (typeof aVal === "string" && typeof bVal === "string") {
      return aVal.localeCompare(bVal) * modifier
    }
    return 0
  })

  // Paginate
  const start = (page - 1) * pageSize
  const paginatedLeads = filtered.slice(start, start + pageSize)

  return {
    leads: paginatedLeads,
    total: filtered.length
  }
}

